import React, { useState, useEffect } from 'react'

const TEST_HOUR = null

const getMskDate = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Moscow' }))

const MagicStatus = () => {
	const [status, setStatus] = useState({ text: '', label: '', color: '', glow: '', border: '' })

	useEffect(() => {
		const updateStatus = () => {
			const mskDate = getMskDate()
			const hour = mskDate.getHours()
			const currentHour = TEST_HOUR !== null ? TEST_HOUR : hour

			if (currentHour >= 10 && currentHour < 19) {
				setStatus({ text: 'WORKING', label: 'ONLINE • REPLY FAST', color: 'text-emerald-400', glow: 'drop-shadow-[0_0_25px_rgba(52,211,153,0.6)]' })
			} else if (currentHour >= 19 && currentHour < 23) {
				setStatus({ text: 'RESTING', label: 'AWAY • REPLY LATER', color: 'text-amber-400', glow: 'drop-shadow-[0_0_25px_rgba(251,191,36,0.6)]' })
			} else {
				setStatus({ text: 'SLEEPING', label: 'OFFLINE • WRITE TOMORROW', color: 'text-purple-400', glow: 'drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]' })
			}
		}
		updateStatus()
		const interval = setInterval(updateStatus, 60000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className="flex flex-col items-center">
			<div className="relative w-64 h-64 flex items-center justify-center bg-transparent animate-[float_5s_ease-in-out_infinite]">

				<div className={`absolute w-48 h-48 rounded-full bg-current opacity-20 blur-[60px] ${status.color} animate-pulse`} />

				<svg
					width="180"
					height="180"
					viewBox="0 0 24 24"
					fill="none"
					className={`${status.color} transition-all duration-1000 overflow-visible`}
					style={{ filter: status.glow }}
				>
					<path
						d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C14.1558 21 16.1265 20.2454 17.6616 18.99C15.2281 18.6657 13.3333 16.5985 13.3333 14.0833C13.3333 11.3323 15.6027 9.09117 18.4239 9.00315C17.1593 5.43851 13.8443 3 10 3"
						fill="currentColor"
						fillOpacity="0.3"
					/>
					<path
						d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C14.1558 21 16.1265 20.2454 17.6616 18.99C15.2281 18.6657 13.3333 16.5985 13.3333 14.0833C13.3333 11.3323 15.6027 9.09117 18.4239 9.00315C17.1593 5.43851 13.8443 3 10 3"
						stroke="currentColor"
						strokeWidth="0.5"
						strokeLinecap="round"
					/>

					<g className="animate-pulse">
						<path d="M18 12L18.4 13.6L20 14L18.4 14.4L18 16L17.6 14.4L16 14L17.6 13.6L18 12Z" fill="white" />
						<circle cx="10" cy="8" r="0.4" fill="white" opacity="0.6" />
						<circle cx="14" cy="18" r="0.5" fill="white" opacity="0.7" />
					</g>
				</svg>
			</div>

			<div className="text-center mt-4">
				<h3 className="text-white text-5xl font-black tracking-[0.1em] italic drop-shadow-2xl leading-none uppercase">
					{status.text}
				</h3>
				<p className="text-sky-300/60 text-[12px] font-bold uppercase tracking-[0.4em] mt-6">
					{status.label}
				</p>
			</div>
		</div>
	)
}

const MyLocalClock = () => {
	const getFullMskData = () => {
		const msk = getMskDate()
		const hour = msk.getHours()
		const currentHourForColor = TEST_HOUR !== null ? TEST_HOUR : hour

		let colorClass = 'border-white/20';
		let shadowColor = 'rgba(255,255,255,0.2)';

		if (currentHourForColor >= 10 && currentHourForColor < 19) {
			colorClass = 'border-emerald-400'
			shadowColor = '#10b981'
		} else if (currentHourForColor >= 19 && currentHourForColor < 23) {
			colorClass = 'border-amber-400'
			shadowColor = '#fbbf24'
		} else {
			colorClass = 'border-purple-400'
			shadowColor = '#a855f7'
		}

		return {
			time: msk.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
			seconds: msk.toLocaleTimeString('ru-RU', { second: '2-digit' }),
			date: msk.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
			colorClass,
			shadowColor
		}
	}

	const [data, setData] = useState(getFullMskData())

	useEffect(() => {
		const t = setInterval(() => setData(getFullMskData()), 1000)
		return () => clearInterval(t)
	}, [])

	return (
		<div className="flex flex-col items-center">
			<div className="relative flex flex-col items-center">

				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-super-flash">
					<div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border-4 ${data.colorClass} rounded-full animate-[spin_40s_linear_infinite] transition-all duration-1000`}
						style={{ boxShadow: `0 0 20px ${data.shadowColor}, inset 0 0 20px ${data.shadowColor}`, opacity: 0.6 }} />
					<div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border ${data.colorClass} opacity-20 rounded-full animate-[spin_25s_linear_infinite_reverse] transition-all duration-1000`} />
				</div>

				<div className="absolute top-10 w-96 h-64 bg-sky-500/10 blur-[100px] rounded-full animate-pulse" />

				<p className="relative z-10 text-sky-200/60 text-sm font-bold uppercase tracking-[0.4em] mb-4">
					{data.date}
				</p>

				<div className="relative z-10 flex items-baseline mb-6">
					<span className="text-[120px] font-thin text-white leading-none tracking-tighter drop-shadow-2xl ml-14">
						{data.time}
					</span>
					<span className="text-3xl font-light text-sky-400 ml-3 opacity-80 w-12">
						{data.seconds}
					</span>
				</div>

				<div className="relative z-10 text-center">
					<h3 className="text-white text-3xl font-black tracking-[0.1em] italic drop-shadow-lg leading-none uppercase">
						My Local Time
					</h3>
					<p className="text-sky-300/60 text-[12px] font-bold uppercase tracking-[0.4em] mt-3">
						MSK (UTC +3)
					</p>
				</div>
			</div>
		</div>
	)
}

export const Contacts = ({ isMaximized, openApp }) => {
	const contactLinks = [
		{ label: 'Telegram', value: '@saosulka', link: 'https://t.me/saosulka', icon: '✈️' },
		{ label: 'GitHub', value: 'github.com/codebysashka', link: 'https://github.com/codebysashka', icon: '💻' },
		{ label: 'Email', value: 'aleksajfelix@gmail.com', link: 'mailto:aleksajfelix@gmail.com', icon: '📧' },
		{ label: 'Resume', value: 'View Resume', icon: '📄' },
	]

	return (
		<div className="h-full w-full relative overflow-y-auto overflow-x-hidden select-none custom-scrollbar bg-[#1e293b]/10">
			{isMaximized && (
				<>
					<div className="fixed left-[9%] top-1/2 -translate-y-1/2 hidden 2xl:block z-0">
						<MagicStatus />
					</div>
					<div className="fixed right-[7%] top-1/2 -translate-y-1/2 hidden 2xl:block z-0">
						<MyLocalClock />
					</div>
				</>
			)}

			<div className="flex flex-col items-center justify-start min-h-full py-16 px-8 relative z-10">
				<div className="w-full max-w-2xl">
					<div className="flex items-center gap-10 mb-16 px-4">
						<div className="w-48 h-48 border-2 border-white/40 shadow-2xl overflow-hidden bg-white/10 shrink-0">
							<img src="/avatar.png" alt="Profile" className="w-full h-full object-cover" onError={(e) => { e.target.src = '/icons/pic.jfif' }} />
						</div>
						<div className="flex flex-col">
							<h2 className="text-4xl font-light tracking-widest uppercase text-white leading-tight">Alexandra Yakovleva</h2>
							<div className="flex items-center gap-3 mt-4">
								<span className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"></span>
								<p className="text-sky-300 text-sm font-bold uppercase tracking-[0.2em]">Software Developer</p>
							</div>
						</div>
					</div>

					<div className="space-y-4 px-4">
						<p className="text-white/60 text-xs font-bold uppercase tracking-[0.3em] mb-6 border-l-2 border-sky-400 pl-3">Get in touch</p>
						<div className="grid grid-cols-1 gap-4">
							{contactLinks.map((item, index) => {
								const isResume = item.label === 'Resume'
								const content = (
									<>
										<div className="flex items-center gap-6">
											<span className="text-3xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
											<div className="flex flex-col">
												<span className="text-[11px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
													{item.label}
												</span>
											</div>
										</div>
										<span className="text-base font-medium text-white/90">{item.value}</span>
									</>
								)
							
								const styles = "flex items-center justify-between p-6 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-sky-400/40 transition-all duration-300 group cursor-pointer"
								if (isResume) {
									return (
										<div key={index} onClick={() => openApp('resume')} className={styles}>
											{content}
										</div>
									)
								}

								return (
									<a key={index} href={item.link} target="_blank" rel="noreferrer" className={styles}>
										{content}
									</a>
								)
							})}			
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}