import { useEffect, useState } from "react"

export const Clock = ({ mode }) => {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => setTime(new Date()), 1000)
		return () => clearInterval(timer)
	}, [])

	if (mode === "boot") {
		
		return (
			<div className="flex flex-col items-center text-white select-none">
				<span className="text-xl font-medium mb-8 opacity-90">
					{time.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
				</span>
				<span className="text-8xl font-semibold leading-none">
					{time.toLocaleTimeString([], { hour: '2-digit' })}
				</span>
				<div className="flex items-baseline mt-2">
					<span className="text-8xl font-semibold leading-none">
						{time.toLocaleTimeString([], { minute: '2-digit' })}
					</span>
					<span className="text-2xl font-light ml-2 opacity-60">
						{time.toLocaleTimeString([], { second: '2-digit' })}
					</span>
				</div>
			</div>
		)
	}

	return (
		<div className="flex flex-col items-center text-white select-none leading-[1.1]">
			<span className="text-sm font-medium">
				{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
			</span>
			<span className="text-[13px] font-medium opacity-95">
				{time.toLocaleDateString('ru-RU')}
			</span>
		</div>
	)
}