import { DesktopIcon } from "./DesktopIcon"
import { apps } from "./apps"
import { Window } from "./Window"

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
			style={{ backgroundImage: "url('/bg.jpg')" }}
		>
			<div className="relative z-10 flex flex-col flex-wrap content-start w-full max-h-[calc(100vh-48px)] p-4 gap-4">
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

				if (isMinimized) return null

				return (
					<Window
						key={id}
						title={appData.name}
						icon={appData.icon}
						isMaximized={maximizedAppId === id}
						onClose={() => closeApp(id)}
						onMaximize={() => toggleMaximize(id)}
						onMinimize={() => toggleMinimize(id)}
						onFocus={() => focusApp(id)}
						zIndex={appZIndices[id] || 100}
						position={positions[id] || { x: 100, y: 50 }}
						onDragStop={(x, y) => updatePosition(id, x, y)}
					>
						{id === '1' && <p>Project list coming soon...</p>}
						{id === '2' && <p>Skills: React, JS, Tailwind</p>}
						{parseInt(id) > 2 && <p>Content for {appData.name}</p>}
					</Window>
				)
			})}
		</div>
	)
}