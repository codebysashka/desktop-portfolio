import { Desktop } from './components/Desktop'
import { Taskbar } from './components/Taskbar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
	return (
		<div className="relative h-screen w-screen overflow-hidden">
			<Desktop />
			<Taskbar />
		</div>
	)
}

export default App
