import React from 'react';

export const StartMenu = ({ onShutdown }) => {
	return (
		<div className="absolute bottom-11 left-0 w-105 h-130 bg-[#3d6f9c]/90 backdrop-blur-2xl border border-white/20 rounded-none shadow-2xl z-50 flex flex-col animate-in fade-in slide-in-from-bottom-2 duration-200">
			
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

			<div className="flex-1 px-5 py-2">
				<p className="text-white/40 text-[10px] uppercase font-bold mb-6 tracking-widest">Pinned Applications</p>
				<div className="grid grid-cols-4 gap-4">
					<a href="https://github.com/codebysashka" target="_blank" rel="noreferrer"
						className="flex flex-col items-center justify-center w-20 h-20 hover:bg-white/10 transition-all group border border-transparent hover:border-white/10">
						<span className="text-3xl mb-1 group-hover:scale-110 transition-transform">📂</span>
						<span className="text-[10px] text-white/80">GitHub</span>
					</a>

					<a href="" target="_blank" rel="noreferrer"
						className="flex flex-col items-center justify-center w-20 h-20 hover:bg-white/10 transition-all group border border-transparent hover:border-white/10">
						<span className="text-3xl mb-1 group-hover:scale-110 transition-transform">📄</span>
						<span className="text-[10px] text-white/80">Resume</span>
					</a>

					<a href="" target="_blank" rel="noreferrer"
						className="flex flex-col items-center justify-center w-20 h-20 hover:bg-white/10 transition-all group border border-transparent hover:border-white/10">
						<span className="text-3xl mb-1 group-hover:scale-110 transition-transform">📩</span>
						<span className="text-[10px] text-white/80">Telegram</span>
					</a>
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