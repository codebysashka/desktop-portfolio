import React, { useState, useRef, useEffect } from 'react'
import Draggable from 'react-draggable'
import confetti from 'canvas-confetti'

const LEVELS = {
	EASY: { size: 9, mines: 10 },
	MEDIUM: { size: 12, mines: 20 },
	HARD: { size: 15, mines: 40 }
}

const createBoard = (size, minesCount) => {
	let newBoard = Array(size).fill(null).map(() =>
		Array(size).fill(null).map(() => ({
			isMine: false, revealed: false, flagged: false, neighborCount: 0
		}))
	)

	let minesPlaced = 0
	while (minesPlaced < minesCount) {
		const r = Math.floor(Math.random() * size)
		const c = Math.floor(Math.random() * size)
		if (!newBoard[r][c].isMine) {
			newBoard[r][c].isMine = true
			minesPlaced++
		}
	}

	for (let r = 0; r < size; r++) {
		for (let c = 0; c < size; c++) {
			if (!newBoard[r][c].isMine) {
				let count = 0
				for (let i = -1; i <= 1; i++) {
					for (let j = -1; j <= 1; j++) {
						if (r + i >= 0 && r + i < size && c + j >= 0 && c + j < size) {
							if (newBoard[r + i][c + j].isMine) count++
						}
					}
				}
				newBoard[r][c].neighborCount = count
			}
		}
	}
	return newBoard
}

export const Minesweeper = ({ onClose, zIndex, onFocus, position, onDragStop }) => {
	const [level, setLevel] = useState('EASY')
	const [board, setBoard] = useState(() => createBoard(LEVELS.EASY.size, LEVELS.EASY.mines))
	const [status, setStatus] = useState('playing')
	const [timer, setTimer] = useState(0)
	const [isTimerActive, setIsTimerActive] = useState(false)
	const nodeRef = useRef(null)

	useEffect(() => {
		let interval = null;
		if (isTimerActive && status === 'playing') {
			interval = setInterval(() => {
				setTimer((prev) => Math.min(prev + 1, 999))
			}, 1000)
		} else {
			clearInterval(interval)
		}
		return () => clearInterval(interval)
	}, [isTimerActive, status])

	useEffect(() => {
		if (status === 'won') {
			const duration = 5 * 1000
			const animationEnd = Date.now() + duration;
			const colors = ['#5faed0', '#ffffff', '#9584e0']

			const interval = setInterval(function () {
				const timeLeft = animationEnd - Date.now()

				if (timeLeft <= 0) {
					return clearInterval(interval)
				}

				const particleCount = 50

				confetti({
					particleCount,
					spread: 70,
					origin: { x: Math.random(), y: Math.random() - 0.2 },
					colors: colors,
					startVelocity: 30,
					gravity: 0.8,
					zIndex: 9999,
				})

				confetti({
					particleCount,
					spread: 90,
					origin: { x: Math.random(), y: Math.random() - 0.2 },
					colors: colors,
					startVelocity: 45,
					zIndex: 9999,
				})
			}, 250)
		}
	}, [status])

	const resetGame = (newLevel = level) => {
		setLevel(newLevel)
		setBoard(createBoard(LEVELS[newLevel].size, LEVELS[newLevel].mines))
		setStatus('playing')
		setTimer(0)
		setIsTimerActive(false)
	}

	const revealCell = (r, c) => {
		if (status !== 'playing' || board[r][c].revealed || board[r][c].flagged) return

		if (!isTimerActive) setIsTimerActive(true)

		let newBoard = [...board.map(row => [...row])]

		if (newBoard[r][c].isMine) {
			setStatus('lost')
			setIsTimerActive(false)
			newBoard.flat().forEach(cell => { if (cell.isMine) cell.revealed = true })
			setBoard(newBoard)
			return
		}

		const floodFill = (row, col) => {
			if (row < 0 || row >= LEVELS[level].size || col < 0 || col >= LEVELS[level].size || newBoard[row][col].revealed || newBoard[row][col].flagged) return
			newBoard[row][col].revealed = true
			if (newBoard[row][col].neighborCount === 0) {
				for (let i = -1; i <= 1; i++) {
					for (let j = -1; j <= 1; j++) floodFill(row + i, col + j)
				}
			}
		}

		floodFill(r, c)
		setBoard(newBoard)

		if (newBoard.flat().filter(cell => !cell.isMine && !cell.revealed).length === 0) {
			setStatus('won')
			setIsTimerActive(false)
		}
	}

	const toggleFlag = (e, r, c) => {
		e.preventDefault()
		if (status !== 'playing' || board[r][c].revealed) return
		let newBoard = [...board.map(row => [...row])]
		newBoard[r][c].flagged = !newBoard[r][c].flagged
		setBoard(newBoard)
	}

	const getNumColor = (n) => {
		const colors = ['', 'text-blue-700', 'text-green-700', 'text-red-600', 'text-blue-900', 'text-red-900', 'text-teal-800', 'text-black']
		return colors[n]
	}

	return (
		<Draggable nodeRef={nodeRef} handle=".retro-handle" position={position} onStart={onFocus} onStop={(e, data) => onDragStop(data.x, data.y)}>
			<div ref={nodeRef} className="absolute top-0 left-0 p-[3px] bg-[#bdbdbd] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-800 shadow-2xl select-none" style={{ zIndex }}>

				<div onMouseDown={onFocus} className="retro-handle h-6 bg-gradient-to-r from-[#000080] to-[#1084d0] flex items-center justify-between px-1 mb-[2px] cursor-default">
					<div className="flex items-center gap-1">
						<span className="text-white font-bold text-[14px] ml-1">Minesweeper</span>
					</div>
					<button onClick={onClose} className="w-5 h-5 bg-[#bdbdbd] border-t border-l border-white border-r border-b border-gray-900 text-black text-[15px] flex items-center justify-center font-bold active:border-none">✕</button>
				</div>

				<div className="flex gap-2 mb-1 px-1 py-0.5 border-b border-gray-400 text-[10px] font-bold uppercase">
					{Object.keys(LEVELS).map(lvl => (
						<button
							key={lvl}
							onClick={() => resetGame(lvl)}
							className={`px-2 hover:bg-gray-400 ${level === lvl ? 'text-blue-800 underline' : 'text-black'}`}
						>
							{lvl}
						</button>
					))}
				</div>

				<div className="p-2 border-t-2 border-l-2 border-gray-800 border-r-2 border-b-2 border-white">
					<div className="mb-2 p-1 flex justify-between items-center border-t-2 border-l-2 border-gray-800 border-r-2 border-b-2 border-white bg-[#bdbdbd]">
						<div className="bg-black text-[#ff0000] font-mono text-3xl px-1 border-t-2 border-l-2 border-gray-700 border-r-2 border-b-2 border-white w-16 text-center">
							{String(Math.max(0, LEVELS[level].mines - board.flat().filter(c => c.flagged).length)).padStart(3, '0')}
						</div>

						<button onClick={() => resetGame()} className={`w-8 h-8 flex items-center justify-center border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-800 active:border-none bg-[#bdbdbd] text-2xl ${status === 'won' ? 'animate-bounce' : ''}`}>
							{status === 'playing' ? '🙂' : status === 'won' ? '😎' : '😵'}
						</button>

						<div className="bg-black text-[#ff0000] font-mono text-3xl px-1 border-t-2 border-l-2 border-gray-700 border-r-2 border-b-2 border-white w-16 text-center">
							{String(timer).padStart(3, '0')}
						</div>
					</div>

					<div className="grid border-t-2 border-l-2 border-gray-800 border-r-2 border-b-2 border-white"
						style={{ gridTemplateColumns: `repeat(${LEVELS[level].size}, 1fr)` }}>
						{board.map((row, r) => row.map((cell, c) => (
							<div key={`${r}-${c}`} onClick={() => revealCell(r, c)} onContextMenu={(e) => toggleFlag(e, r, c)}
								className={`w-9 h-9 flex items-center justify-center font-black text-xl
									${cell.revealed
										? 'bg-[#bdbdbd] border-[0.5px] border-gray-400'
										: 'bg-[#bdbdbd] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-800 active:border-none'
									}`}
							>
								{cell.revealed ? (
									cell.isMine ? '💣' : <span className={getNumColor(cell.neighborCount)}>{cell.neighborCount > 0 ? cell.neighborCount : ''}</span>
								) : (
									cell.flagged ? '🚩' : ''
								)}
							</div>
						)))}
					</div>
				</div>
			</div>
		</Draggable>
	)
}