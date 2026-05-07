import { useState } from "react"
import { Clock } from "./Clock"
import { StartMenu } from "./StartMenu"
import { apps } from "./apps"

export const Taskbar = ({ onShutdown, openedApps, handleTaskbarClick, activeAppId }) => {
	const [isHovered, setIsHovered] = useState(false)
	const [isStartOpen, setIsStartOpen] = useState(false)

	return (
		<>
			{isStartOpen && <div
				className="fixed inset-0 z-40 bg-transparent"
				onClick={() => setIsStartOpen(false)}
			/>
			}

			<div className="absolute bottom-0 w-full h-11 z-50 flex items-center justify-between bg-[#3d6f9c]/80 backdrop-blur-md border-t border-white/10">
				<div className="flex items-center h-full flex-1">
					<button
						className={`hover:bg-white/20 transition-all h-full w-13 flex items-center justify-center z-50 ${isStartOpen ? 'bg-white/20' : 'hover:bg-white/20'}`}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						onClick={() => setIsStartOpen(!isStartOpen)}
					>
						<img src={isHovered ? "/icons/windows-start-hover.png" : "/icons/windows-start.png"} alt="" className="h-7 w-7" />
					</button>

					<div className="flex items-center gap-0 h-full">
						{openedApps.map(id => {
							const app = apps.find(a => a.id === id)
							const isActive = activeAppId === id
							return (
								<button
									key={id}
									onClick={() => handleTaskbarClick(id)}
									className={`relative w-13 h-full flex items-center justify-center hover:bg-white/10 transition-colors bg-transparent group ${isActive ? 'bg-white/15' : 'hover:bg-white/10'}`}
								>
									<img
										src={app.icon}
										className="w-8 h-8 pointer-events-none shadow-white/10" alt="" />
									<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-11 h-0.75 bg-[#5faed0] rounded-t-sm" />
								</button>
							)
						})}
					</div>
				</div>

				{isStartOpen && <StartMenu onShutdown={onShutdown} />}

				<div className="pr-3 z-50">
					<Clock mode="taskbar" />
				</div>
			</div >
		</>
	)
}