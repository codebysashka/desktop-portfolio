import React, { useRef, useEffect } from 'react'
import { motion, useMotionValue, useDragControls } from 'framer-motion'

export const Window = ({
	title,
	onClose,
	onMaximize,
	onMinimize,
	isMaximized,
	isMinimized,
	children,
	icon,
	onFocus,
	zIndex,
	position,
	onDragStop,
}) => {
	const ref = useRef(null)
	const dragControls = useDragControls()

	const x = useMotionValue(position?.x ?? 0)
	const y = useMotionValue(position?.y ?? 0)

	useEffect(() => {
		if (!isMaximized && position) {
			x.set(position.x)
			y.set(position.y)
		}
	}, [position, isMaximized, x, y])

	if (isMinimized) return null

	return (
		<motion.div
			ref={ref}
			className={`bg-[#3d6f9c]/95 backdrop-blur-2xl border border-white/30 shadow-2xl flex flex-col overflow-hidden
      	${isMaximized ? 'fixed inset-0 bottom-10 w-full h-auto !top-0 !left-0' : 'absolute top-0 left-0 w-[680px] h-[580px]'}`}
			style={{
				zIndex,
				x: !isMaximized ? x : 0,
				y: !isMaximized ? y : 0,
				position: isMaximized ? 'fixed' : 'absolute',
			}}

			drag={!isMaximized}
			dragControls={dragControls} 
			dragListener={false} 
			dragMomentum={false}
			dragElastic={0}
			onDragEnd={() => {
				if (onDragStop) onDragStop(x.get(), y.get())
			}}
			onMouseDown={onFocus}
		>
			<div
				className="h-9 bg-white/10 border-b border-white/20 flex items-center justify-between select-none cursor-default"
				onPointerDown={(e) => dragControls.start(e)} 
				onMouseDown={onFocus}
			>
				<div className="flex items-center gap-2 pl-3 pointer-events-none">
					<img src={icon} className="w-4 h-4" alt="" />
					<span className="text-white text-xs font-medium uppercase tracking-wider">{title}</span>
				</div>

				<div className="flex h-full">
					<button onClick={(e) => { e.stopPropagation(); onMinimize(); }} className="h-full px-4 hover:bg-white/10 text-white transition-colors text-s">⎯</button>
					<button onClick={(e) => { e.stopPropagation(); onMaximize(); }} className="h-full px-4 hover:bg-white/10 text-white transition-colors text-s">{isMaximized ? '❐' : '▢'}</button>
					<button onClick={(e) => { e.stopPropagation(); onClose(); }} className="h-full px-4 hover:bg-red-500 text-white transition-colors text-s">✕</button>
				</div>
			</div>

			<div className="flex-1 flex flex-col min-h-0 overflow-y-auto custom-scrollbar text-white">
				{children}
			</div>
		</motion.div>
	)
}