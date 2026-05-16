import React, { useRef, useState } from 'react'
import Draggable from 'react-draggable'

const FloatingElement = ({ children, x, y, rotate = 0 }) => {
	const nodeRef = useRef(null)
	return (
		<Draggable nodeRef={nodeRef} bounds="parent">
			<div
				ref={nodeRef}
				className="absolute cursor-grab active:cursor-grabbing z-20 transition-transform hover:scale-105"
				style={{ left: x, top: y, transform: `rotate(${rotate}deg)` }}
			>
				{children}
			</div>
		</Draggable>
	)
}

const LEFT_SIDE_FIREFLIES = [...Array(15)].map((_, i) => ({
	id: `l-${i}`,
	top: Math.random() * 90 + 5,
	left: Math.random() * 25 + 2,
	size: Math.random() * 5 + 6,
	delay: -(Math.random() * 15), 
	duration: 7 + Math.random() * 5,
}))

const RIGHT_SIDE_FIREFLIES = [...Array(15)].map((_, i) => ({
	id: `r-${i}`,
	top: Math.random() * 90 + 5,
	right: Math.random() * 25 + 2,
	size: Math.random() * 5 + 6, 
	delay: -(Math.random() * 15),
	duration: 7 + Math.random() * 5,
}))

const DUST_POSITIONS = [...Array(30)].map((_, i) => ({
	id: i,
	top: Math.random() * 100,
	left: Math.random() * 100,
}))

const MagicVine = ({ side }) => {
	const [hovered, setHovered] = useState(false)
	const isLeft = side === 'left'

	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className={`absolute top-0 ${isLeft ? 'left-0' : 'right-0'} h-full w-32 z-0 pointer-events-auto hidden xl:flex items-center justify-center transition-all duration-1000 ${hovered ? 'opacity-100' : 'opacity-40'}`}
		>
			<svg className={`h-[90%] w-full ${!isLeft && 'scale-x-[-1]'}`} viewBox="0 0 100 800" fill="none">
				<path
					d="M10 0C10 0 50 150 20 300C-10 450 60 600 30 800"
					stroke="url(#vineGradient)"
					strokeWidth="3"
					strokeLinecap="round"
					className={`transition-all duration-1000 ${hovered ? 'stroke-[4px]' : 'stroke-[2px]'}`}
				/>
				{[100, 250, 450, 650].map((yPos, i) => (
					<path
						key={i}
						d={`M${isLeft ? 20 : 20} ${yPos} Q${isLeft ? 60 : 60} ${yPos - 20} ${isLeft ? 40 : 40} ${yPos - 40}`}
						stroke="currentColor"
						className={`text-emerald-400 transition-all duration-700 ${hovered ? 'opacity-100' : 'opacity-40'}`}
						strokeWidth="2"
					/>
				))}
				<defs>
					<linearGradient id="vineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" stopColor="#064e3b" />
						<stop offset="50%" stopColor="#10b981" />
						<stop offset="100%" stopColor="#064e3b" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}

export const AboutMe = ({ isMaximized }) => {
	return (
		<div className={`h-full w-full relative overflow-y-auto overflow-x-hidden custom-scrollbar bg-gradient-to-br from-emerald-950/90 via-teal-900/80 to-stone-900/90 text-amber-100 font-serif 
		${isMaximized ? 'overflow-y-hidden' : 'overflow-y-auto'}
		`}>

			<div className="absolute inset-0 pointer-events-none z-0">
				{DUST_POSITIONS.map((pos) => (
					<div key={pos.id} className="absolute w-0.5 h-0.5 bg-amber-200/10 rounded-full" style={{ top: `${pos.top}%`, left: `${pos.left}%` }} />
				))}

				{LEFT_SIDE_FIREFLIES.map((pos) => (
					<div
						key={pos.id}
						className="absolute animate-firefly-magic"
						style={{
							top: `${pos.top}%`,
							left: `${pos.left}%`,
							animationDuration: `${pos.duration}s`,
							animationDelay: `${pos.delay}s`,
						}}
					>
						<div className="rounded-full bg-amber-100 blur-[0.5px]"
							style={{
								width: `${pos.size}px`,
								height: `${pos.size}px`,
								boxShadow: '0 0 15px #fcd34d, 0 0 30px rgba(251, 191, 36, 0.4)'
							}}
						/>
					</div>
				))}

				{RIGHT_SIDE_FIREFLIES.map((pos) => (
					<div
						key={pos.id}
						className="absolute animate-firefly-magic"
						style={{
							top: `${pos.top}%`,
							right: `${pos.right}%`,
							animationDuration: `${pos.duration}s`,
							animationDelay: `${pos.delay}s`,
						}}
					>
						<div className="rounded-full bg-amber-100 blur-[0.5px]"
							style={{
								width: `${pos.size}px`,
								height: `${pos.size}px`,
								boxShadow: '0 0 15px #fcd34d, 0 0 30px rgba(251, 191, 36, 0.4)'
							}}
						/>
					</div>
				))}
			</div>

			{isMaximized && (
				<>
					<MagicVine side="left" />
					<MagicVine side="right" />
				</>
			)}

			<div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl" />
			<div className="absolute -bottom-20 -right-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl" />

			<div className="relative z-10 flex flex-col max-w-2xl mx-auto space-y-8 py-10 px-6 sm:px-12">
				<section className="text-center md:text-left pt-2">
					<div className="inline-block px-4 py-1 mb-3 rounded-full bg-amber-400/10 border border-amber-400/30 backdrop-blur-sm text-amber-300 text-xs tracking-wider font-serif uppercase">
						✦ a wandering creator ✦
					</div>
					<h2 className="text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-emerald-300 mb-2 drop-shadow-sm">
						Hi, I'm Alexandra.
					</h2>
					<p className="text-xl italic font-light text-amber-100/80">I like to build things. Useful things. Weird things. Things that feel right.</p>
				</section>

				<section className="bg-emerald-900/30 backdrop-blur-md p-5 rounded-2xl border border-amber-400/30 shadow-lg shadow-emerald-950/20">
					<p className="leading-relaxed text-amber-50">
						I come from <span className="font-bold text-amber-300">IT support and system admin</span>,
						so I know how things break — <span className="underline decoration-amber-400/50 underline-offset-4">and how to fix them.</span>
					</p>
					<p className="mt-4 font-mono text-amber-400/60 uppercase text-[10px] tracking-[0.3em]">
						✦ Phase: Moving forward ✦
					</p>
				</section>

				<section className="text-lg leading-relaxed text-amber-50/90">
					<p>
						Now I'm creating instead of just repairing.
						I don't know exactly what I want to build yet.
						<span className="bg-amber-400/10 px-3 py-0.5 rounded-full mx-1 border border-amber-400/30 text-sm">Games?</span>
						<span className="bg-amber-400/10 px-3 py-0.5 rounded-full mx-1 border border-amber-400/30 text-sm">Apps?</span>
						<span className="bg-amber-400/10 px-3 py-0.5 rounded-full mx-1 border border-amber-400/30 text-sm">Tools?</span>
					</p>
					<p className="mt-3 opacity-90">
						Maybe something else. But I know I want to build <span className="font-bold text-amber-300">something good.</span>
					</p>
				</section>

				<section className="pt-4">
					<p className="text-xs font-mono uppercase tracking-widest text-amber-400/70 mb-4 flex items-center gap-2">
						<span>✦ right now · currently · this moment ✦</span>
					</p>
					<div className="flex flex-wrap gap-3">
						<div className="bg-emerald-800/40 backdrop-blur-sm px-5 py-2 rounded-full border border-amber-400/40 text-sm font-medium text-amber-100 shadow-sm hover:bg-emerald-700/50 transition-all cursor-default">
							Learning English (B2 → higher)
						</div>
						<div className="bg-emerald-800/40 backdrop-blur-sm px-5 py-2 rounded-full border border-amber-400/40 text-sm font-medium text-amber-100 shadow-sm hover:bg-emerald-700/50 transition-all cursor-default">
							Knitting tiny magical things
						</div>
						<div className="bg-emerald-800/40 backdrop-blur-sm px-5 py-2 rounded-full border border-amber-400/40 text-sm font-medium text-amber-100 shadow-sm hover:bg-emerald-700/50 transition-all cursor-default">
							Gaming & dreaming
						</div>
					</div>
				</section>

				<section className="pb-10 border-t border-amber-400/20 pt-6 text-center md:text-left">
					<p className="text-xl font-light tracking-wide text-amber-100">
						Open to work. Open to interesting people.
						<br />
						<span className="text-amber-300 font-serif italic drop-shadow-sm">Open to things that matter.</span>
					</p>
				</section>
			</div>

			<div className="absolute bottom-4 right-6 text-[10px] font-mono opacity-30 uppercase tracking-widest text-amber-400/50 select-none">
				~ alexandra · fairycore v1 ~
			</div>
		</div>
	)
}