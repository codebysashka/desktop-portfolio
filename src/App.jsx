import { Desktop } from './components/Desktop'
import { Taskbar } from './components/Taskbar'
import { useState } from 'react'
import { BootScreen } from './components/BootScreen'

function App() {
	const [isBooted, setIsBooted] = useState(false)

	const [openedApps, setOpenedAppIds] = useState([])
	const [minimizedAppIds, setMinimizedAppIds] = useState([])
	const [maximizedAppId, setMaximizedAppId] = useState(null)

	const [appZIndices, setAppZIndices] = useState({})
	const [topZ, setTopZ] = useState(100)
	const [positions, setPositions] = useState({})
	const [activeAppId, setActiveAppId] = useState(null)

	const focusApp = (id) => {
		const newZ = topZ + 1
		setTopZ(newZ)
		setAppZIndices(prev => ({ ...prev, [id]: newZ }))
		setActiveAppId(id)
	}

	const openApp = (id) => {
		if (!openedApps.includes(id)) {
			setOpenedAppIds(prev => [...prev, id])
			if (!positions[id]) {
				const centerX = Math.max(0, (window.innerWidth - 600) / 2)
				const centerY = Math.max(0, (window.innerHeight - 500) / 2)
				setPositions(prev => ({ ...prev, [id]: { x: centerX, y: centerY } }))
			}
		}
		setMinimizedAppIds(prev => prev.filter(appId => appId !== id))
		focusApp(id)
	}

	const handleTaskbarClick = (id) => {
		const isMinimized = minimizedAppIds.includes(id)
		const isFocused = activeAppId === id

		if (isMinimized) {
			openApp(id)
		} else if (isFocused) {
			setMinimizedAppIds(prev => [...prev, id])
			setActiveAppId(null)
		} else {
			focusApp(id)
		}
	}

	const closeApp = (id) => {
		setOpenedAppIds(prev => prev.filter(appId => appId !== id))
		if (maximizedAppId === id) setMaximizedAppId(null)
		if (activeAppId === id) setActiveAppId(null)
	}

	const updatePosition = (id, x, y) => {
		setPositions(prev => ({ ...prev, [id]: { x, y } }))
	}

	return (
		<div className="relative h-screen w-screen overflow-hidden font-sans">
			{!isBooted ? (
				<BootScreen onEnter={() => setIsBooted(true)} />
			) : (
				<>
					<Desktop
						openedApps={openedApps}
						appZIndices={appZIndices}
						maximizedAppId={maximizedAppId}
						minimizedAppIds={minimizedAppIds}
						openApp={openApp}
						closeApp={closeApp}
						toggleMaximize={(id) => setMaximizedAppId(maximizedAppId === id ? null : id)}
						toggleMinimize={(id) => {
							setMinimizedAppIds(prev => [...prev, id])
							setActiveAppId(null)
						}}
						focusApp={focusApp}
						positions={positions}
						updatePosition={updatePosition}
					/>
					<Taskbar
						onShutdown={() => setIsBooted(false)}
						openedApps={openedApps}    
						handleTaskbarClick={handleTaskbarClick} 
						activeAppId={activeAppId}      
					/>
				</>
			)}
		</div>
	)
}

export default App
