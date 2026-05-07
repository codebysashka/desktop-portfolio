import React from 'react'

export const Contacts = () => {
	const contactLinks = [
		{ label: 'Telegram', value: '@', link: 'https://t.me/', icon: '✈️' },
		{ label: 'GitHub', value: 'github.com/codebysashka', link: 'https://github.com/codebysashka', icon: '💻' },
		{ label: 'Email', value: '', link: 'mailto:', icon: '📧' },
		{ label: 'Resume', value: 'View Resume', link: '', icon: '📄' },
	]

	return (
		<div className="min-h-full flex flex-col justify-center px-8 pt-10 pb-10 select-none">
			<div className="mx-auto w-full max-w-2xl">
				<div className="flex items-center gap-10 mb-16">
					<div className="w-48 h-48 border-2 border-white/40 shadow-2xl overflow-hidden bg-white/10 shrink-0">
						<img
							src="/avatar.png"
							alt="Profile"
							className="w-full h-full object-cover"
							onError={(e) => { e.target.src = '/icons/pic.jfif' }}
						/>
					</div>

					<div className="flex flex-col">
						<h2 className="text-4xl font-light tracking-widest uppercase text-white leading-tight">
							Alexandra Yakovleva
						</h2>
						<div className="flex items-center gap-3 mt-4">
							<span className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,1)]"></span>
							<p className="text-sky-300 text-sm font-bold uppercase tracking-[0.2em]">
								Software Developer
							</p>
						</div>
					</div>
				</div>

				<div className="space-y-4">
					<p className="text-white/60 text-xs font-bold uppercase tracking-[0.3em] mb-6 border-l-2 border-sky-400 pl-3">
						Get in touch
					</p>

					<div className="grid grid-cols-1 gap-4">
						{contactLinks.map((item, index) => (
							<a
								key={index}
								href={item.link}
								target="_blank"
								rel="noreferrer"
								className="flex items-center justify-between p-6 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-sky-400/40 transition-all duration-300 group"
							>
								<div className="flex items-center gap-6">
									<span className="text-3xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
									<div className="flex flex-col">
										<span className="text-[11px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
											{item.label}
										</span>
									</div>
								</div>
								<span className="text-base font-medium text-white/90">{item.value}</span>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}