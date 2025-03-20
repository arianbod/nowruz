// /app/fortune/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence, useAnimation, Variants } from 'framer-motion';
import { useLanguage } from '../layout';
import poems from '../data/poems.json';
import Image from 'next/image';

export default function FortunePage() {
	const { t, language } = useLanguage();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	const [fortune, setFortune] = useState<(typeof poems)[0] | null>(null);
	const [selectedLanguage, setSelectedLanguage] = useState(language);
	const [showEnvelope, setShowEnvelope] = useState(true);
	const [animationComplete, setAnimationComplete] = useState(false);
	const [animationProgress, setAnimationProgress] = useState(0);

	// Animation timing
	const ANIMATION_DURATION = 6000; // 6 seconds total

	// Get a random fortune
	const getRandomFortune = () => {
		const randomIndex = Math.floor(Math.random() * poems.length);
		return poems[randomIndex];
	};

	// Effect to simulate fortune telling process with progress
	useEffect(() => {
		if (isLoading) {
			const startTime = Date.now();
			const interval = setInterval(() => {
				const elapsed = Date.now() - startTime;
				const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
				setAnimationProgress(progress);

				if (progress >= 1) {
					clearInterval(interval);
					setTimeout(() => {
						setFortune(getRandomFortune());
						setIsLoading(false);
						setShowEnvelope(false);
						setAnimationProgress(0);
					}, 500); // Short delay after animation completes
				}
			}, 50);

			return () => clearInterval(interval);
		}
	}, [isLoading]);

	// Update selected language when global language changes
	useEffect(() => {
		setSelectedLanguage(language);
	}, [language]);

	const handleGetNewFortune = () => {
		setIsLoading(true);
		setShowEnvelope(true);
		setAnimationComplete(false);
		// Fortune will be set after animation via useEffect
	};

	const handleGoHome = () => {
		router.push('/');
	};

	const isRtl = selectedLanguage === 'fa';

	return (
		<div className='relative min-h-screen'>
			{/* Background decorative elements */}
			<div className='fixed inset-0 -z-10 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden'>
				{/* Dynamic background patterns */}
				<div className='absolute inset-0 opacity-10 bg-[url("/images/pattern-nowruz.png")] bg-repeat bg-center'></div>

				{/* Floating decorative elements */}
				<motion.div
					animate={{
						y: [0, -30, 0],
						x: [0, 15, 0],
					}}
					transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
					className='absolute top-[10%] left-[20%] w-12 h-12 rounded-full bg-gradient-to-r from-emerald-300/20 to-amber-300/20'
				/>
				<motion.div
					animate={{
						y: [0, 40, 0],
						x: [0, -20, 0],
					}}
					transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
					className='absolute top-[60%] right-[15%] w-16 h-16 rounded-full bg-gradient-to-r from-amber-300/20 to-rose-300/20'
				/>
				<motion.div
					animate={{
						y: [0, -20, 0],
						x: [0, -10, 0],
					}}
					transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse' }}
					className='absolute top-[40%] left-[10%] w-10 h-10 rounded-full bg-gradient-to-r from-blue-300/20 to-purple-300/20'
				/>
			</div>

			<div className='max-w-4xl mx-auto px-4 py-6 relative'>
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className={`text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent ${
						isRtl ? 'font-vazirmatn' : ''
					}`}>
					{t('fortune.title')}
				</motion.h1>

				<AnimatePresence mode='wait'>
					{showEnvelope ? (
						<motion.div
							key='envelope-animation'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className='min-h-[60vh] flex flex-col items-center justify-center'>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{
									opacity: [0, 1, 1, 0.7],
									y: [10, 0, 0, -10],
									scale: [0.95, 1, 1, 1.05],
								}}
								transition={{
									duration: 4,
									times: [0, 0.2, 0.8, 1],
									repeat: Infinity,
									repeatType: 'reverse',
								}}
								className={`text-lg md:text-xl mb-8 text-center text-amber-700 font-medium ${
									isRtl ? 'font-vazirmatn' : ''
								}`}>
								{t('fortune.loading')}
							</motion.p>

							{/* Progress Bar */}
							<motion.div
								className='w-64 h-1 bg-amber-100 rounded-full mb-8 overflow-hidden'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.5 }}>
								<motion.div
									className='h-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500'
									style={{ width: `${animationProgress * 100}%` }}
								/>
							</motion.div>

							<EnhancedFortuneAnimation progress={animationProgress} />
						</motion.div>
					) : (
						<motion.div
							key='fortune-display'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}>
							{fortune && (
								<div className='bg-white/95 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-xl mb-8 border border-amber-200 relative overflow-hidden'>
									{/* Decorative background */}
									<div className="absolute inset-0 bg-[url('/images/pattern-nowruz.png')] bg-repeat opacity-5"></div>

									<div className='mb-5 md:mb-6 relative'>
										<label
											className={`text-sm font-medium text-gray-700 block mb-2 ${
												isRtl ? 'font-vazirmatn text-right' : ''
											}`}>
											{t('fortune.languages')}
										</label>
										<div className='flex flex-wrap gap-2'>
											{Object.keys(fortune.title).map((lang) => (
												<motion.button
													key={lang}
													whileHover={{ scale: 1.05 }}
													whileTap={{ scale: 0.95 }}
													className={`px-3 py-1.5 rounded-md text-sm transition-all duration-200 ${
														selectedLanguage === lang
															? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
															: 'bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200'
													} ${isRtl ? 'font-vazirmatn' : ''}`}
													onClick={() => setSelectedLanguage(lang)}>
													{t(`languages.${lang}`)}
												</motion.button>
											))}
										</div>
									</div>

									<EnhancedFortuneCard
										poem={fortune}
										selectedLanguage={selectedLanguage}
									/>
								</div>
							)}

							<div className='flex flex-col sm:flex-row justify-center gap-4 mt-8'>
								<motion.button
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.97 }}
									className='relative py-3.5 px-8 rounded-full shadow-lg flex items-center justify-center gap-2 overflow-hidden group'
									onClick={handleGetNewFortune}>
									<div className='absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 group-hover:from-red-500 group-hover:to-amber-500 transition-all duration-500'></div>
									<div className='absolute inset-0 bg-nowruz-pattern mix-blend-soft-light opacity-30'></div>
									<div className='absolute inset-y-0 left-0 w-1/3 bg-white/20 skew-x-[45deg] group-hover:animate-shimmer'></div>
									<span
										className={`relative text-white font-medium ${
											isRtl ? 'font-vazirmatn' : ''
										}`}>
										{t('fortune.new')}
									</span>
									<motion.span
										animate={{ rotate: [0, 15, 0, -15, 0] }}
										transition={{
											duration: 1.5,
											repeat: Infinity,
											repeatDelay: 1,
										}}
										className='relative text-white text-xl'>
										✨
									</motion.span>
								</motion.button>

								<motion.button
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.97 }}
									className='relative py-3.5 px-8 rounded-full shadow-lg flex items-center justify-center overflow-hidden group'
									onClick={handleGoHome}>
									<div className='absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:from-teal-600 group-hover:to-emerald-600 transition-all duration-500'></div>
									<div className='absolute inset-0 bg-nowruz-pattern mix-blend-soft-light opacity-20'></div>
									<span
										className={`relative text-white font-medium ${
											isRtl ? 'font-vazirmatn' : ''
										}`}>
										{t('fortune.home')}
									</span>
								</motion.button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}

function EnhancedFortuneCard({
	poem,
	selectedLanguage,
}: {
	poem: (typeof poems)[0];
	selectedLanguage: string;
}) {
	const { t } = useLanguage();
	const controls = useAnimation();
	const isRtl = selectedLanguage === 'fa';

	// Get the poem title in the selected language
	const title =
		poem.title[selectedLanguage as keyof typeof poem.title] || poem.title.en;

	// Get the interpretation in the selected language
	const interpretation =
		poem.interpretation[selectedLanguage as keyof typeof poem.interpretation] ||
		poem.interpretation.en;

	// Animate each line sequentially on initial load
	useEffect(() => {
		const sequence = async () => {
			await controls.start('visible');
		};

		sequence();
	}, [controls, selectedLanguage]);

	const containerVariants: Variants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const verseVariants: Variants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.4 },
		},
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
			className={`bg-gradient-to-br from-amber-50 to-amber-100/60 p-5 md:p-6 rounded-lg border border-amber-200 ${
				isRtl ? 'text-right' : 'text-left'
			} relative overflow-hidden shadow-inner`}>
			{/* Decorative corner flourishes */}
			<div className='absolute top-0 left-0 w-24 h-24 opacity-20'>
				<svg
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M0 0C50 0 100 50 100 100H0V0Z'
						fill='url(#paint0_radial)'
					/>
					<defs>
						<radialGradient
							id='paint0_radial'
							cx='0'
							cy='0'
							r='1'
							gradientUnits='userSpaceOnUse'
							gradientTransform='translate(0 0) rotate(45) scale(141.421)'>
							<stop stopColor='#F59E0B' />
							<stop
								offset='1'
								stopColor='#F59E0B'
								stopOpacity='0'
							/>
						</radialGradient>
					</defs>
				</svg>
			</div>
			<div className='absolute bottom-0 right-0 w-24 h-24 opacity-20 rotate-180'>
				<svg
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M0 0C50 0 100 50 100 100H0V0Z'
						fill='url(#paint0_radial)'
					/>
					<defs>
						<radialGradient
							id='paint0_radial'
							cx='0'
							cy='0'
							r='1'
							gradientUnits='userSpaceOnUse'
							gradientTransform='translate(0 0) rotate(45) scale(141.421)'>
							<stop stopColor='#F59E0B' />
							<stop
								offset='1'
								stopColor='#F59E0B'
								stopOpacity='0'
							/>
						</radialGradient>
					</defs>
				</svg>
			</div>

			<motion.h2
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				className={`text-xl md:text-2xl font-semibold mb-5 md:mb-6 bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent ${
					isRtl ? 'font-vazirmatn' : ''
				}`}>
				{title}
			</motion.h2>

			<motion.div
				variants={containerVariants}
				initial='hidden'
				animate={controls}
				className='space-y-4 md:space-y-5 mb-6 md:mb-8'>
				{poem.verses.map((verse, index) => {
					// Get the verse in the selected language
					const verseText =
						verse[selectedLanguage as keyof typeof verse] || verse.fa;

					return (
						<motion.div
							key={index}
							variants={verseVariants}
							className='relative'>
							<div className='relative z-10 leading-relaxed border-l-2 border-amber-300 pl-4 py-1'>
								{selectedLanguage !== 'fa' && (
									<p className='text-right font-vazirmatn mb-2 text-amber-700/80'>
										{verse.fa}
									</p>
								)}
								<p
									className={`${
										selectedLanguage === 'fa' ? 'font-vazirmatn' : ''
									} text-gray-800`}>
									{verseText}
								</p>
							</div>
							{/* Subtle highlight on hover */}
							<div className='absolute inset-0 bg-amber-200/0 hover:bg-amber-200/20 transition-colors duration-300 rounded-md -z-0'></div>
						</motion.div>
					);
				})}
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.2, duration: 0.5 }}
				className='mt-6 md:mt-8 border-t border-amber-300/50 pt-4'>
				<h3
					className={`font-semibold text-emerald-700 mb-3 flex items-center gap-2 ${
						isRtl ? 'font-vazirmatn' : ''
					}`}>
					<span className='flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 text-sm'>
						✧
					</span>
					{t('fortune.interpretation')}
				</h3>
				<p
					className={`text-gray-700 leading-relaxed ${
						isRtl ? 'font-vazirmatn' : ''
					}`}>
					{interpretation}
				</p>
			</motion.div>
		</motion.div>
	);
}

function EnhancedFortuneAnimation({ progress }: { progress: number }) {
	const bookRef = useRef<HTMLDivElement>(null);

	// Animation states based on progress
	const pagesRotation = progress * 180; // Pages fully open at halfway point
	const bookScale = 1 + progress * 0.1; // Book grows slightly during animation
	const mysticalEffectOpacity =
		progress < 0.3 ? progress / 0.3 : progress > 0.7 ? (1 - progress) / 0.3 : 1; // Fade in and out

	const symbolScale = 0.8 + progress * 0.5; // Symbol grows with progress
	const symbolRotation = progress * 360; // Symbol completes a full rotation

	// Particles become more intense as progress increases
	const particleIntensity = progress;

	// Subtle shaking effect that increases toward the climax
	const shakeIntensity = progress < 0.7 ? progress * 5 : (1 - progress) * 15;

	return (
		<div className='relative w-full flex items-center justify-center h-80'>
			{/* Mystical circle animation */}
			<motion.div
				className='absolute inset-0 flex items-center justify-center pointer-events-none'
				style={{ opacity: mysticalEffectOpacity }}>
				{/* Inner rotating circle */}
				<motion.div
					animate={{
						rotate: [0, 360],
						scale: [0.9, 1.1, 0.9],
					}}
					transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
					className='absolute w-40 h-40 border-2 border-dashed border-amber-300/50 rounded-full'
				/>

				{/* Middle rotating circle */}
				<motion.div
					animate={{
						rotate: [360, 0],
						scale: [1, 1.2, 1],
					}}
					transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
					className='absolute w-52 h-52 border border-orange-300/40 rounded-full'
				/>

				{/* Outer rotating circle */}
				<motion.div
					animate={{ rotate: [0, 360] }}
					transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
					className='absolute w-64 h-64 border border-red-300/30 rounded-full'
				/>
			</motion.div>

			{/* Particles animation */}
			<div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
				{Array.from({ length: 24 }).map((_, i) => (
					<motion.div
						key={i}
						className='absolute w-1.5 h-1.5 rounded-full bg-amber-400'
						animate={{
							x: [0, Math.cos(i * (Math.PI / 12)) * 100 * particleIntensity],
							y: [0, Math.sin(i * (Math.PI / 12)) * 100 * particleIntensity],
							opacity: [0, 1, 0],
							scale: [0, 1, 0],
						}}
						transition={{
							duration: 3,
							repeat: Infinity,
							delay: i * 0.1,
							repeatType: 'loop',
							ease: 'easeInOut',
						}}
					/>
				))}
			</div>

			{/* Glowing star effect */}
			<motion.div
				animate={{
					opacity: [0.4, 0.8, 0.4],
					scale: [0.8, 1.1, 0.8],
				}}
				transition={{ duration: 2, repeat: Infinity }}
				className='absolute w-48 h-48 bg-gradient-to-br from-amber-200/40 via-orange-300/20 to-red-300/40 rounded-full blur-xl'
			/>

			{/* Book effect */}
			<motion.div
				ref={bookRef}
				animate={{
					scale: bookScale,
					x: Math.random() * shakeIntensity - shakeIntensity / 2,
					y: Math.random() * shakeIntensity - shakeIntensity / 2,
				}}
				transition={{ duration: 0.1 }}
				className='relative w-40 h-56 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg shadow-2xl overflow-hidden'>
				{/* Book cover decorative pattern */}
				<div className='absolute inset-0 bg-nowruz-pattern mix-blend-soft-light opacity-30'></div>

				{/* Book spine */}
				<div className='absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-amber-800 to-amber-700'></div>

				{/* Book pages */}
				<motion.div
					style={{
						rotateY: pagesRotation,
						transformOrigin: 'left center',
						perspective: '1000px',
					}}
					className='absolute left-4 top-2 bottom-2 right-2 bg-amber-50 rounded-r shadow-inner overflow-hidden'>
					{/* Text lines simulation */}
					<div className='h-full p-3 flex flex-col justify-center gap-2'>
						{Array.from({ length: 6 }).map((_, i) => (
							<div
								key={i}
								className='h-2 bg-amber-200/60 rounded-full'
								style={{ width: `${60 + Math.random() * 30}%` }}></div>
						))}
					</div>

					{/* Mystical symbol */}
					<motion.div
						style={{
							scale: symbolScale,
							rotate: symbolRotation,
						}}
						className='absolute inset-0 flex items-center justify-center text-6xl text-amber-500/80 font-serif'>
						ح
					</motion.div>
				</motion.div>

				{/* Book cover border design */}
				<div className='absolute inset-2 border-2 border-amber-500/30 rounded pointer-events-none'></div>

				{/* Book title */}
				<div className='absolute bottom-3 left-6 right-2 h-6 flex items-center justify-center'>
					<div className='text-xs text-amber-200/70 font-serif'>دیوان حافظ</div>
				</div>
			</motion.div>

			{/* Light rays radiating out */}
			<motion.div
				animate={{ rotate: [0, 360], scale: [0.5, 1, 0.5] }}
				transition={{ duration: 10, repeat: Infinity }}
				style={{ opacity: mysticalEffectOpacity * 0.7 }}
				className="absolute w-60 h-60 bg-[url('/images/light-rays.png')] bg-contain bg-no-repeat bg-center pointer-events-none"
			/>

			{/* Floating Persian letters */}
			{['ف', 'ا', 'ل', 'ح', 'ظ'].map((letter, i) => (
				<motion.div
					key={i}
					animate={{
						y: [0, -20 - i * 5, 0],
						x: [0, i % 2 === 0 ? 10 : -10, 0],
						opacity: [0, 0.7, 0],
						scale: [0.8, 1.2, 0.8],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						delay: i * 0.5,
						repeatType: 'loop',
						ease: 'easeInOut',
					}}
					className='absolute text-lg text-amber-600/70 font-vazirmatn'
					style={{
						top: `${50 + i * -8}%`,
						left: `${45 + i * 2}%`,
					}}>
					{letter}
				</motion.div>
			))}

			{/* Climactic flash at the end */}
			{progress > 0.9 && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: [(progress - 0.9) * 10, 0] }}
					transition={{ duration: 0.5, repeat: 1 }}
					className='absolute inset-0 bg-white pointer-events-none'
				/>
			)}
		</div>
	);
}
