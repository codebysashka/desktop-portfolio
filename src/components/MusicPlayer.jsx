import React, { useState, useRef, useEffect } from 'react'

export const MusicPlayer = ({ isMaximized }) => {
	const playlist = [
		{ id: 0, title: "first love late spring", author: "mitski", url: "/music/Mitski - First Love Late Spring.mp3", cover: "/icons/cat1.jfif" },
		{ id: 1, title: "francis forever", author: "mitski", url: "/music/Mitski_-_Francis_Forever_(SkySound.cc).mp3", cover: "/icons/cat2.jfif" },
		{ id: 2, title: "i bet on losing dogs", author: "mitski", url: "/music/Mitski_-_I_Bet_On_Losing_Dogs_(SkySound.cc).mp3", cover: "/icons/cat3.jfif" },
		{ id: 3, title: "liquid smooth", author: "mitski", url: "/music/Mitski_-_Liquid_Smooth_(SkySound.cc).mp3", cover: "/icons/cat4.jfif" },
		{ id: 4, title: "class of 2013", author: "mitski", url: "/music/Mitski_-_Class_of_2013_(SkySound.cc).mp3", cover: "/icons/cat5.jfif" },
	]

	const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)
	const [volume, setVolume] = useState(0.7)

	const audioRef = useRef(null)
	const progressBarRef = useRef(null)
	const currentTrack = playlist[currentTrackIndex]

	const formatTime = (time) => {
		if (isNaN(time)) return "0:00"
		const mins = Math.floor(time / 60)
		const secs = Math.floor(time % 60)
		return `${mins}:${secs < 10 ? '0' : ''}${secs}`
	}

	const handleSeek = (e) => {
		if (!progressBarRef.current) return
		const rect = progressBarRef.current.getBoundingClientRect()
		const x = e.clientX - rect.left
		audioRef.current.currentTime = (x / rect.width) * duration
	}

	const handleNextTrack = () => {
		setCurrentTrackIndex((prev) => (prev + 1) % playlist.length)
	}

	const togglePlay = () => {
		isPlaying ? audioRef.current.pause() : audioRef.current.play().catch(() => { })
		setIsPlaying(!isPlaying)
	}

	useEffect(() => {
		if (isPlaying && audioRef.current) {
			audioRef.current.play().catch(() => { })
		}
	}, [currentTrackIndex, isPlaying])

	const progressPercent = (currentTime / duration) * 100 || 0

	return (
		<div className="flex h-full w-full select-none overflow-hidden text-white">
			<audio
				ref={audioRef}
				src={currentTrack.url}
				onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
				onLoadedMetadata={() => setDuration(audioRef.current.duration)}
				onEnded={handleNextTrack}
			/>

			<div className={`flex h-full w-full ${isMaximized ? 'flex-row' : 'flex-col justify-start pt-12'}`}>
				<div className={`flex flex-col items-center shrink-0 ${isMaximized ? 'w-1/2 justify-center border-r border-white/10 p-6' : 'w-full px-4'}`}>
					<div className={`relative shrink-0 flex items-center justify-center mb-4 ${isMaximized ? 'w-72 h-72' : 'w-50 h-50'}`}>
						<div className={`absolute inset-0 border-2 border-dashed border-sky-400/50 rounded-full ${isPlaying ? 'animate-[spin_20s_linear_infinite]' : ''}`}></div>
						<div className={`rounded-full border-4 border-white/20 shadow-2xl overflow-hidden z-10 ${isPlaying ? 'animate-[spin_8s_linear_infinite]' : ''} ${isMaximized ? 'w-68 h-68' : 'w-46 h-46'}`}>
							<img src={currentTrack.cover} alt="" className="w-full h-full object-cover rounded-full" />
						</div>
					</div>

					<div className="text-center mb-4">
						<h3 className={`${isMaximized ? 'text-3xl mb-6' : 'text-2xl mb-2'} font-bold`}>{currentTrack.title}</h3>
						<p className="text-sky-300 text-[12px] font-bold uppercase tracking-widest">{isPlaying ? 'Playing' : 'Paused'}</p>
					</div>

					<div className="flex items-center gap-8 mb-4">
						<button onClick={() => setCurrentTrackIndex((p) => (p - 1 + playlist.length) % playlist.length)} className="text-white/40 hover:text-white transition-all">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
						</button>

						<button onClick={togglePlay} className="text-white hover:text-sky-400 transition-all">
							{isPlaying
								? <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
								: <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
							}
						</button>

						<button onClick={handleNextTrack} className="text-white/40 hover:text-white transition-all">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
						</button>
					</div>

					<div className="flex items-center gap-3 w-full max-w-50 mb-7 px-2 shrink-0">
						<div className="w-5 shrink-0">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
								<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
							</svg>
						</div>
						<input type="range" min="0" max="1" step="0.01" value={volume}
							onChange={(e) => { setVolume(e.target.value); audioRef.current.volume = e.target.value; }}
							className="flex-1 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-sky-400 min-w-0" />
						<div className="w-5 shrink-0">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
								<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
								<path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
							</svg>
						</div>
					</div>

					<div className="w-full max-w-sm px-6 shrink-0 pb-2">
						<div ref={progressBarRef} onClick={handleSeek} className="h-1.5 bg-white/10 rounded-full overflow-hidden cursor-pointer relative">
							<div className="h-full bg-sky-400 shadow-[0_0_10px_#60a5fa]" style={{ width: `${progressPercent}%` }}></div>
						</div>
						<div className="flex justify-between mt-2 text-[11px] font-bold text-white/80">
							<span>{formatTime(currentTime)}</span>
							<span>{formatTime(duration)}</span>
						</div>
					</div>
				</div>

				{isMaximized && (
					<div className="w-1/2 p-10 overflow-y-auto bg-black/10">
						<h2 className="text-xl font-bold mb-6 text-sky-300 uppercase tracking-widest">Playlist</h2>
						<div className="space-y-2">
							{playlist.map((track, index) => (
								<div key={track.id} onClick={() => { setCurrentTrackIndex(index); setIsPlaying(true); }}
									className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all ${currentTrackIndex === index ? 'bg-white/10 border-sky-400' : 'hover:bg-white/5'}`}>
									<img src={track.cover} className="w-10 h-10 rounded object-cover" alt="" />
									<p className={`font-medium ${currentTrackIndex === index ? 'text-sky-300' : 'text-white'}`}>{track.title}</p>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}