import { DesktopIcon } from "./DesktopIcon"
import { apps } from "./apps"
import { Window } from "./Window"
import { Contacts } from "./Contacts"
import { MusicPlayer } from "./MusicPlayer"
import { Minesweeper } from "./Minesweeper"
import { AboutMe } from "./AboutMe"

export const Desktop = ({
	openedApps,
	maximizedAppId,
	minimizedAppIds,
	openApp,
	closeApp,
	toggleMaximize,
	toggleMinimize,
	focusApp,
	appZIndices,
	positions,
	updatePosition
}) => {
	
	return (
		<div
			className="w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden relative"
			style={{ backgroundImage: "url('/bg1.jpg')" }}
		>
			<div className="relative z-10 flex flex-col flex-wrap content-start w-full max-h-[calc(100vh-48px)] pl-1 p-4 gap-4">
				{apps.map((app) => (
					<DesktopIcon
						key={app.id}
						app={app}
						onOpen={() => openApp(app.id)}
					/>
				))}
			</div>

			{openedApps.map((id) => {
				const appData = apps.find(a => a.id === id)
				const isMinimized = minimizedAppIds.includes(id)

				if (id === 'minesweeper') {
					return (
						<Minesweeper
							key={id}
							onClose={() => closeApp(id)}
							zIndex={appZIndices[id] || 100}
							onFocus={() => focusApp(id)}
							position={positions[id] || { x: 150, y: 100 }}
							onDragStop={(x, y) => updatePosition(id, x, y)}
						/>
					)
				}

				return (
					<Window
						key={id}
						title={appData.name}
						icon={appData.icon}
						isMinimized={isMinimized}
						isMaximized={maximizedAppId === id}
						onClose={() => closeApp(id)}
						onMaximize={() => toggleMaximize(id)}
						onMinimize={() => toggleMinimize(id)}
						onFocus={() => focusApp(id)}
						zIndex={appZIndices[id] || 100}
						position={positions[id] || { x: 100, y: 50 }}
						onDragStop={(x, y) => updatePosition(id, x, y)}
					>
						{id === '1' && <AboutMe isMaximized={maximizedAppId === id} />}
						{id === '2' && <p>Project list coming soon...</p>}
						{id === '3' && <p>Skills: React, JS, Tailwind</p>}
						{id === '4' && <Contacts isMaximized={maximizedAppId === id} openApp={openApp} />}
						{id === '5' && <MusicPlayer isMaximized={maximizedAppId === id} />}
						{parseInt(id) > 6 && <p>This application is under development...</p>}
					</Window>
				)
			})}
		</div>
	)
}