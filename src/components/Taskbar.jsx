import { useEffect, useState } from "react"

const Clock = () => {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date())
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	return (
		<div className="text-white text-sm font-medium">
			{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
		</div>
	)
}

export const Taskbar = () => {
	return (
		<div className="absolute bottom-0 w-full h-10 z-50 flex items-center justify-between px-4 bg-sky-500/20 backdrop-blur-md border-t border-white/10">
			<button className="hover:bg-white/20 transition-all">Start</button>
			<Clock />
		</div>
	)
}