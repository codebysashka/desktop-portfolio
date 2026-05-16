export const DesktopIcon = ({ app, onOpen }) => {
	return (
		<div
			onClick={onOpen}
			className="group flex p-1 flex-col w-24 items-center hover:bg-white/10 border border-transparent hover:border-white/20 rounded-none transition-all cursor-default select-none">
			<img
				src={app.icon}
				alt={app.name}
				className="w-16 h-16 pointer-events-none" />
			<span className="text-xs mt-1 text-white font-medium text-center wrap-break-word drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">{app.name}</span>
		</div >
	)
}