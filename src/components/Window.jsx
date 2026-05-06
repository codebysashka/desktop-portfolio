import React, { useRef } from 'react'
import Draggable from 'react-draggable'

export const Window = ({ title, onClose, onMaximize, onMinimize, isMaximized, children, icon, onFocus, zIndex, onDragStop, position }) => {
	const nodeRef = useRef(null)

	const windowContent = (
		<div
			ref={nodeRef}
			className={`bg-[#3d6f9c]/95 backdrop-blur-2xl border border-white/30 shadow-2xl flex flex-col overflow-hidden 
			${isMaximized
					? 'fixed inset-0 bottom-10 w-full h-auto transform-none! top-0! left-0!'
					: 'absolute top-0 left-0 w-150 h-112.5'
				}`}
			style={{
				zIndex: zIndex,
				transform: isMaximized ? 'none' : undefined
			}}>

			<div
				onMouseDown={onFocus}
				className="h-9 bg-white/10 border-b border-white/20 flex items-center justify-between select-none cursor-default handle"
			>
				<div className="flex items-center gap-2 pl-3 pointer-events-none">
					<img src={icon} className="w-4 h-4" alt="" />
					<span className="text-white text-xs font-medium uppercase tracking-wider">{title}</span>
				</div>

				<div className="flex h-full">
					<button onClick={onMinimize} className="h-full px-4 hover:bg-white/10 text-white transition-colors">⎯</button>
					<button onClick={onMaximize} className="h-full px-4 hover:bg-white/10 text-white transition-colors">{isMaximized ? '❐' : '▢'}</button>
					<button
						onClick={onClose}
						className="h-full px-4 hover:bg-red-500 text-white transition-colors"
					>
						✕
					</button>
				</div>
			</div>

			<div className="flex-1 overflow-auto p-6 text-white" onMouseDown={onFocus}>
				{children}
			</div>
		</div>
	)

	if (isMaximized) {
		return windowContent
	}

	return (
		<Draggable
			nodeRef={nodeRef}
			handle=".handle"
			bounds="parent"
			onStart={onFocus}
			position={position}
			onStop={(e, data) => onDragStop(data.x, data.y)}
		>
			{windowContent}
		</Draggable>
	)
}