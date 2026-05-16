import { Clock } from "./Clock"

export const BootScreen = ({ onEnter }) => {
	return (
		<div
			onClick={onEnter}
			className="h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center cursor-pointer"
			style={{ backgroundImage: "url('/bs1.jpg')" }}
		>
			<h2 className="text-white text-base tracking-[0.3em] uppercase font-semibold drop-shadow-lg mb-6">
				Welcome to CodeBySashka OS
			</h2>
			<div className="bg-white/15 backdrop-blur-2xl border border-white/20 rounded-[40px] w-60 py-6 flex flex-col items-center shadow-2xl">
				<Clock mode="boot" />
			</div>
			<span className="text-white text-xs tracking-widest animate-pulse uppercase font-medium mt-6 drop-shadow-md">
				click to enter
			</span>
		</div>
	)
}