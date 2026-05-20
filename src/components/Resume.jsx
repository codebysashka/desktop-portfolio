import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

export const Resume = () => {
	const contentRef = useRef(null)
	const handlePrint = useReactToPrint({
		contentRef: contentRef,
		documentTitle: 'Alexandra_Yakovleva_Resume',
	})

	return (
		<div id="resume-to-pdf-container" className="h-full w-full relative bg-white overflow-hidden">
			<button 
				onClick={() => handlePrint()} 
				className="absolute top-4 right-10 z-50 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-[11px] font-bold uppercase tracking-widest rounded shadow-md transition-all active:scale-95 flex items-center gap-2"
			>
				<span>📥</span> Download PDF
			</button>

			<div 
				id="resume-to-pdf"
				ref={contentRef}
				className="h-full w-full p-6 sm:p-12 font-serif text-slate-800 bg-white shadow-inner overflow-y-auto selection:bg-sky-200 custom-scrollbar"
			>
				<div className="max-w-5xl mx-auto border-b-2 border-slate-100 pb-8 mb-10 text-center">
					<h1 className="text-5xl font-bold uppercase tracking-tighter mb-3 text-slate-900">Alexandra Yakovleva</h1>
					<p className="text-sky-600 font-black tracking-[0.2em] uppercase text-base">Software Developer • IT Specialist</p>
					<div className="mt-4 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-500 font-sans">
						<span>📍 Moscow / Cheboksary</span>
						<span>📞 +7 (953) 011-67-47</span>
						<span>📧 aleksajfelix@gmail.com</span>
						<span>✈️ @saosulka</span>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto pb-20">
					<div className="col-span-1 space-y-10 border-r border-slate-100 pr-8">

						<section>
							<h3 className="font-black uppercase text-[10px] text-sky-500 mb-4 tracking-[0.3em]">About Me</h3>
							<p className="text-base leading-relaxed text-slate-600 italic">
								"My path in IT began with support and administration, and then I immersed myself in web development. Such a comprehensive base allows me not just to answer questions according to a script, but to deeply analyze a problem, independently test hypotheses and translate a dialogue with a user into a language understandable to a developer. In my work, I value a systematic approach and results."
							</p>
						</section>

						<section>
							<h3 className="font-black uppercase text-[10px] text-slate-400 mb-4 tracking-[0.2em]">Education</h3>
							<div className="space-y-4 text-base pr-4">
								<div>
									<p className="font-bold text-slate-900 text-lg leading-tight wrap-break-word">
										Interregional Center of Competences - Cheboksary Electromechanical College
									</p>
									<p className="text-slate-500 text-sm mt-2 italic">
										Information Systems and Programming • Programmer, 2023
									</p>
								</div>
							</div>
						</section>

						<section>
							<h3 className="font-black uppercase text-[10px] text-slate-400 mb-4 tracking-[0.2em]">Training & Courses</h3>
							<ul className="space-y-3 text-sm text-slate-600 font-sans">
								<li><span className="font-bold text-slate-800">2025:</span> Introduction to SQL (Stepik)</li>
								<li><span className="font-bold text-slate-800">2025:</span> Python Programming Language (Lectorium)</li>
								<li><span className="font-bold text-slate-800">2025:</span> Introduction to Docker (Stepik)</li>
								<li><span className="font-bold text-slate-800">2025:</span> Interactive SQL Trainer (Stepik)</li>
								<li><span className="font-bold text-slate-800">2024:</span> Introduction to Linux (Stepik)</li>
								<li><span className="font-bold text-slate-800">2024:</span> Linux Terminal. Basics (Stepik)</li>
							</ul>
						</section>

						<section>
							<h3 className="font-black uppercase text-[10px] text-slate-400 mb-4 tracking-[0.2em]">Languages</h3>
							<div className="space-y-4 text-sm">
								<div className="border-l-2 border-sky-100 pl-3">
									<p className="font-bold text-slate-800">English: <span className="text-sky-600">B2 (Upper-Intermediate)</span></p>
								</div>
								<div className="border-l-2 border-slate-100 pl-3">
									<p className="font-bold text-slate-800">Russian: <span className="text-slate-400">Native</span></p>
								</div>
							</div>
						</section>
					</div>

					<div className="col-span-2 space-y-12">
						<section>
							<h3 className="font-black uppercase text-[10px] text-sky-500 mb-6 tracking-[0.3em] border-b border-sky-100 pb-1">Work Experience</h3>
							<div className="space-y-12 text-base text-slate-800">
								<div className="space-y-3 experience-item">
									<div className="flex justify-between items-baseline">
										<h4 className="text-2xl font-bold text-slate-900">Junior Web Developer</h4>
										<span className="text-sm font-bold text-slate-400 whitespace-nowrap">06/2025 — 12/2025 (7 months)</span>
									</div>
									<p className="text-sky-600 font-bold uppercase text-[11px] tracking-widest">WebStroy</p>
									<ul className="list-disc list-outside ml-5 space-y-2 text-slate-600">
										<li>Layout of adaptive pages and individual blocks according to Figma layouts.</li>
										<li>Made minor edits to sites, fixed "broken" layout.</li>
										<li>Created simple interactive elements in JavaScript (dropdown menus, tabs, sliders, forms).</li>
										<li>Filled with content and provided technical support for websites.</li>
										<li>Verified site display correctness in different browsers and on mobile devices.</li>
										<li>Worked with Git version control.</li>
										<li>Used Chrome DevTools to debug interface errors and find layout problems.</li>
										<li>Compiled bug reports in Jira after testing new blocks.</li>
										<li>Worked with forms: validation on JS, input error handling.</li>
									</ul>
									<p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded border-l-4 border-emerald-400 italic">
										<strong>Achievement:</strong> Developed a JS validation module that reduced user input errors and saved the sales funnel by fixing critical legacy bugs.
									</p>
								</div>

								<div className="space-y-3 experience-item">
									<div className="flex justify-between items-baseline">
										<h4 className="text-2xl font-bold text-slate-900">Technical Support Specialist</h4>
										<span className="text-sm font-bold text-slate-400">08/2024 — 05/2025 (10 months)</span>
									</div>
									<p className="text-sky-600 font-bold uppercase text-[11px] tracking-widest">GK Ai-Teco</p>
									<ul className="list-disc list-outside ml-5 space-y-2 text-slate-600">
										<li>Processed requests in BMC Remedy Service Desk, adhering to SLA.</li>
										<li>Conducted primary diagnostics of incidents.</li>
										<li>Analyzed interface errors using Chrome DevTools (console, network requests).</li>
										<li>Analyzed system logs to identify the causes of errors.</li>
										<li>Edited project code base (fixing typos, replacing icons, correcting CSS/HTML).</li>
										<li>Compiled detailed bug reports for the development team.</li>
										<li>Proposed system improvements based on user requests.</li>
										<li>Wrote technical instructions and filled internal Wiki systems.</li>
										<li>Collaborated with 2nd line support and developers for incident resolution.</li>
										<li>Remotely installed and updated software (AnyDesk, RDP).</li>
										<li>Managed Active Directory: passwords, accounts, groups.</li>
										<li>Wrote SQL queries to search for data in Postgres.</li>
									</ul>
									<p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded border-l-4 border-emerald-400 italic">
										<strong>Achievement:</strong> Created 12+ detailed guides, decreasing repeat requests by 30%. Solved 20% of complex issues independently. Achieved 98% SLA compliance.
									</p>
								</div>

								<div className="space-y-3 experience-item">
									<div className="flex justify-between items-baseline">
										<h4 className="text-xl font-bold text-slate-900">Call Center Specialist (Tier 2)</h4>
										<span className="text-sm font-bold text-slate-400 whitespace-nowrap">06/2024 — 07/2024 (2 months)</span>
									</div>
									<p className="text-sky-600 font-bold uppercase text-[11px] tracking-widest">AO Bars Group</p>
									<ul className="list-disc list-outside ml-5 space-y-2 text-slate-600">
										<li>Resolved requests through the support system and phone calls.</li>
										<li>Analyzed user problems and established root causes of technical errors.</li>
										<li>Interacted with analysts and Tier 2 developers to solve complex issues.</li>
										<li>Maintained the project Knowledge Base.</li>
										<li>Managed conflict situations with empathy and stress resistance.</li>
										<li>Processed up to 50 requests daily following quality regulations.</li>
									</ul>
								</div>

								<div className="space-y-3 experience-item">
									<div className="flex justify-between items-baseline">
										<h4 className="text-xl font-bold text-slate-900">System Administrator</h4>
										<span className="text-sm font-bold text-slate-400 whitespace-nowrap">01/2024 — 06/2024 (6 months)</span>
									</div>
									<p className="text-sky-600 font-bold uppercase text-[11px] tracking-widest">OOO Metall Stor</p>
									<ul className="list-disc list-outside ml-5 space-y-2 text-slate-600">
										<li>Technical support for 150+ remote users.</li>
										<li>Monitored Helpdesk ticket deadlines according to SLA.</li>
										<li>Configured VPN and solved corporate resource access issues.</li>
										<li>Administered 1C servers (permissions, user management).</li>
										<li>Worked in 1C:ZUP, Accounting, ERP, and Document Management.</li>
										<li>Conducted hardware inventory and software updates.</li>
										<li>Trained users to work with 1C and Bitrix24.</li>
										<li>Managed Passwork, Google Sheets, amoCRM, and PBX systems.</li>
										<li>Installed and maintained antivirus software.</li>
										<li>Managed 1C/SBIS/ActiveDirectory users.</li>
									</ul>
									<p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded border-l-4 border-emerald-400 italic">
										<strong>Achievement:</strong> Maintained 100% uptime for remote staff with a 10-minute average resolution time. Reduced repeat tickets by 35% via automation.
									</p>
								</div>

								<div className="space-y-3 experience-item">
									<div className="flex justify-between items-baseline">
										<h4 className="text-xl font-bold text-slate-900">Media Planning Specialist</h4>
										<span className="text-sm font-bold text-slate-400 whitespace-nowrap">07/2023 — 01/2024 (7 months)</span>
									</div>
									<p className="text-sky-600 font-bold uppercase text-[11px] tracking-widest">OOO Genesis</p>
									<ul className="list-disc list-outside ml-5 space-y-2 text-slate-600">
										<li>Coordinated with content authors and resolved disputed situations.</li>
										<li>Maintained analytics and reports in Google Sheets.</li>
									</ul>
								</div>

								<div className="space-y-3 experience-item">
									<div className="flex justify-between items-baseline">
										<h4 className="text-xl font-bold text-slate-900">Call Center Operator</h4>
										<span className="text-sm font-bold text-slate-400 whitespace-nowrap">03/2023 — 06/2023 (4 months)</span>
									</div>
									<p className="text-sky-600 font-bold uppercase text-[11px] tracking-widest">Calltraffic</p>
									<ul className="list-disc list-outside ml-5 space-y-2 text-slate-600">
										<li>Consulted clients on delivery issues and handled objections.</li>
										<li>Managed call logs and customer data in CRM.</li>
										<li>Processed up to 40 interactions daily using scripts and regulations.</li>
									</ul>
								</div>

							</div>
						</section>

						<section className="pb-10 skills-group">
							<h3 className="font-black uppercase text-xs text-sky-500 mb-6 tracking-[0.3em] border-b border-sky-100 pb-1">Technical Toolbox & Skills</h3>
							<div className="space-y-6">
								<div>
									<p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Development & Infrastructure</p>
									<div className="flex flex-wrap gap-2 text-slate-700">
										{['JavaScript (ES6+)', 'React', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS', 'SQL', 'PostgreSQL', 'Linux', 'Bash', 'Docker', 'Windows Server', 'DNS Setup', 'VPN', 'Active Directory', 'Remote Administration', 'Site Administration'].map(skill => (
											<span key={skill} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded text-xs font-bold shadow-sm">
												{skill}
											</span>
										))}
									</div>
								</div>

								<div>
									<p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Software & Management</p>
									<div className="flex flex-wrap gap-2">
										{['Atlassian Jira', 'Atlassian Confluence', 'Helpdesk', 'BMC Remedy', 'API', 'Grafana', 'Zabbix', 'CRM', '1C', 'Bitrix24', 'CMS WordPress', 'MS Office', 'Digital Signature (EDS)', 'Technical Task Development'].map(skill => (
											<span key={skill} className="px-3 py-1 bg-sky-50 border border-sky-100 text-sky-700 rounded text-xs font-bold shadow-sm">
												{skill}
											</span>
										))}
									</div>
								</div>

								<div>
									<p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Soft Skills</p>
									<div className="flex flex-wrap gap-2">
										{['Communication', 'Stress Resistance', 'Responsibility', 'Technical Support', 'Learning & Development', 'Precision & Attention to Detail'].map(skill => (
											<span key={skill} className="px-3 py-1 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded text-xs font-bold shadow-sm">
												{skill}
											</span>
										))}
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}