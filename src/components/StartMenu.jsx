import React from 'react'

export const StartMenu = ({ onShutdown }) => {
	return (
		<div className="absolute bottom-11 left-0 w-105 h-130 bg-[#3d6f9c]/98 backdrop-blur-2xl border border-white/20 rounded-none shadow-2xl z-50 flex flex-col animate-in fade-in slide-in-from-bottom-2 duration-200">
			
			<div className="p-5 flex items-center gap-4 bg-white/10 border-b border-white/10">
				<div className="w-12 h-12 bg-sky-400 flex items-center justify-center text-white text-xl font-bold shadow-lg border border-white/20">
					AY
				</div>
				<div className="flex flex-col">
					<span className="text-white text-base font-medium tracking-tight">Alexandra Yakovleva</span>
					<span className="text-sky-300 text-[10px] font-bold uppercase tracking-widest">Active now</span>
				</div>
			</div>

			<div className="px-5 py-4">
				<div className="w-full bg-white/10 border border-white/10 p-2 text-white/50 text-xs px-3 focus-within:bg-white/20 transition-all">
					Search for apps, settings, and documents
				</div>
			</div>

			<div className="flex-1 px-6 py-4 space-y-8 overflow-y-auto custom-scrollbar">
				<div className="space-y-4">
					<p className="text-sky-200 text-xs font-black uppercase tracking-[0.3em] drop-shadow-md">Recent Activity</p>
					<div className="space-y-3 font-medium text-sm">
						<div className="flex items-start gap-3 text-white group">
							<span className="text-sky-300 animate-pulse">✦</span>
							<p className="leading-tight">Refining my <span className="text-sky-300 font-bold">Digital World</span> (this OS)</p>
						</div>
						<div className="flex items-start gap-3 text-white group">
							<span className="text-emerald-300 animate-pulse">✦</span>
							<p className="leading-tight">Knitting <span className="text-emerald-300 font-bold">magic things</span> with yarn</p>
						</div>
						<div className="flex items-start gap-3 text-white group">
							<span className="text-amber-300 animate-pulse">✦</span>
							<p className="leading-tight">Decrypting <span className="text-amber-300 font-bold">English grammar</span> secrets</p>
						</div>
						<div className="flex items-start gap-3 text-white group">
							<span className="text-purple-300 animate-pulse">✦</span>
							<p className="leading-tight">Training in <span className="text-purple-300 font-bold">Minesweeper</span> tactics</p>
						</div>
					</div>
				</div>

				<div className="space-y-5">
					<p className="text-sky-200 text-xs font-black uppercase tracking-[0.3em] drop-shadow-md">Attributes</p>
					
					<div className="space-y-4">
						<div className="space-y-2">
							<div className="flex justify-between text-xs font-bold uppercase tracking-wider text-emerald-200">
								<span>Logic</span>
								<span className="text-emerald-300">95%</span>
							</div>
							<div className="h-2 w-full bg-emerald-900/40 border border-emerald-500/30 rounded-full overflow-hidden p-0.5">
								<div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-300 shadow-[0_0_15px_#10b981] rounded-full w-[95%]"></div>
							</div>
						</div>

						<div className="space-y-2">
							<div className="flex justify-between text-xs font-bold uppercase tracking-wider text-sky-200">
								<span>Creativity</span>
								<span className="text-sky-300">88%</span>
							</div>
							<div className="h-2 w-full bg-sky-900/40 border border-sky-500/30 rounded-full overflow-hidden p-0.5">
								<div className="h-full bg-gradient-to-r from-sky-600 to-sky-300 shadow-[0_0_15px_#38bdf8] rounded-full w-[88%]"></div>
							</div>
						</div>

						<div className="space-y-2">
							<div className="flex justify-between text-xs font-bold uppercase tracking-wider text-amber-200">
								<span>Persistence</span>
								<span className="text-amber-300">92%</span>
							</div>
							<div className="h-2 w-full bg-amber-900/40 border border-amber-500/30 rounded-full overflow-hidden p-0.5">
								<div className="h-full bg-gradient-to-r from-amber-600 to-amber-300 shadow-[0_0_15px_#fbbf24] rounded-full w-[92%]"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="p-4 bg-white/5 border-t border-white/10 flex justify-between items-center px-6">
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.8)]"></div>
					<span className="text-white/60 text-[10px] font-bold tracking-widest uppercase">System Online</span>
				</div>

				<button
					onClick={(e) => {
						e.stopPropagation();
						if (onShutdown) onShutdown();
					}}
					className="flex items-center gap-3 px-5 py-2 bg-white/10 text-white hover:bg-red-500/60 transition-all border border-white/20 active:scale-95 shadow-lg"
				>
					<span className="text-[11px] font-bold uppercase tracking-widest">Sign Out</span>
				</button>
			</div>
		</div>
	)
}