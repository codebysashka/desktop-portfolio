import React from 'react'

export const Resume = () => {
	return (
		<div className="h-full w-full p-8 font-serif text-slate-800 bg-white shadow-inner overflow-y-auto selection:bg-sky-200">
			<div className="max-w-2xl mx-auto border-b-2 border-slate-100 pb-6 mb-8 text-center">
				<h1 className="text-4xl font-bold uppercase tracking-tighter mb-2">Alexandra Yakovleva</h1>
				<p className="text-sky-600 font-bold tracking-widest uppercase text-xs">Software Developer • IT Specialist</p>
			</div>

			<div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
				<div className="col-span-1 space-y-6 border-r border-slate-100 pr-6 text-sm">
					<section>
						<h3 className="font-black uppercase text-[10px] text-slate-400 mb-2 tracking-widest">Details</h3>
						<p>Cheboksary, Russia</p>
						<p>23 years old</p>
					</section>
					<section>
						<h3 className="font-black uppercase text-[10px] text-slate-400 mb-2 tracking-widest">Education</h3>
						<p className="font-bold"></p>
						<p className="text-slate-500 italic text-xs"></p>
					</section>
					<section>
						<h3 className="font-black uppercase text-[10px] text-slate-400 mb-2 tracking-widest">Languages</h3>
						<p>English: B2 (Upper Inter.)</p>
						<p>Russian: Native</p>
					</section>
				</div>

				<div className="col-span-2 space-y-8">
					<section>
						<h3 className="font-black uppercase text-[10px] text-sky-500 mb-4 tracking-[0.3em] border-b border-sky-100 pb-1">Experience</h3>
						<div className="space-y-4">
							<div>
								<p className="font-bold text-lg">System Administrator</p>
								<p className="text-xs text-slate-400 uppercase font-bold">2022</p>
								<ul className="mt-2 list-disc list-inside text-sm text-slate-600 space-y-1">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</div>
					</section>

					<section>
						<h3 className="font-black uppercase text-[10px] text-sky-500 mb-4 tracking-[0.3em] border-b border-sky-100 pb-1">Summary</h3>
						<p className="text-sm leading-relaxed text-slate-600">

						</p>
					</section>
				</div>
			</div>
		</div>
	)
}