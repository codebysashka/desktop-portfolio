export const DesktopIcon = ({ app, onOpen }) => {
	return (
		<div
			onClick={onOpen}
			className="group flex p-2 flex-col w-24 items-center hover:bg-white/10 border border-transparent hover:border-white/20 rounded-none transition-all cursor-default select-none">
			<img
				src={app.icon}
				alt={app.name}
				className="w-14 h-14 pointer-events-none" />
			<span className="text-xs mt-1 text-white drop-shadow-md text-center wrap-break-word">{app.name}</span>
		</div >
	)
}