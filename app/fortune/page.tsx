// /app/fortune/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../layout';
import poems from '../data/poems.json';

export default function FortunePage() {
	const { t, language } = useLanguage();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	const [fortune, setFortune] = useState<(typeof poems)[0] | null>(null);
	const [selectedLanguage, setSelectedLanguage] = useState(language);
	const [showEnvelope, setShowEnvelope] = useState(true);

	// Get a random fortune
	const getRandomFortune = () => {
		const randomIndex = Math.floor(Math.random() * poems.length);
		return poems[randomIndex];
	};

	// Effect to simulate fortune telling process
	useEffect(() => {
		if (isLoading) {
			const timer = setTimeout(() => {
				setFortune(getRandomFortune());
				setIsLoading(false);
				setShowEnvelope(false);
			}, 5000); // 5 second animation
			return () => clearTimeout(timer);
		}
	}, [isLoading]);

	// Update selected language when global language changes
	useEffect(() => {
		setSelectedLanguage(language);
	}, [language]);

	const handleGetNewFortune = () => {
		setIsLoading(true);
		setShowEnvelope(true);
		// Fortune will be set after animation via useEffect
	};

	const handleGoHome = () => {
		router.push('/');
	};

	const isRtl = selectedLanguage === 'fa';

	return (
		<div className='max-w-4xl mx-auto px-4 py-2 md:py-6'>
			{/* Decorative floating elements */}
			<div className='fixed -z-10 top-20 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-amber-300/20 to-red-300/20 animate-float hidden md:block'></div>
			<div className='fixed -z-10 bottom-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-emerald-300/20 to-amber-300/20 animate-float-delay hidden md:block'></div>

			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				className={`text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-gradient ${
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
						className='min-h-[50vh] md:min-h-[60vh] flex flex-col items-center justify-center'>
						<p
							className={`text-lg mb-8 text-center text-gray-700 ${
								isRtl ? 'font-vazirmatn' : ''
							}`}>
							{t('fortune.loading')}
						</p>

						<FortuneAnimation />
					</motion.div>
				) : (
					<motion.div
						key='fortune-display'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}>
						{fortune && (
							<div className='bg-white/95 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-xl mb-8 border border-amber-200 nowruz-pattern'>
								<div className='mb-5 md:mb-6'>
									<label
										className={`text-sm font-medium text-gray-700 block mb-2 ${
											isRtl ? 'font-vazirmatn text-right' : ''
										}`}>
										{t('fortune.languages')}
									</label>
									<div className='flex flex-wrap gap-2'>
										{Object.keys(fortune.title).map((lang) => (
											<button
												key={lang}
												className={`px-3 py-1 rounded-md text-sm ${
													selectedLanguage === lang
														? 'bg-amber-500 text-white'
														: 'bg-gray-200 hover:bg-gray-300 text-gray-700'
												} ${isRtl ? 'font-vazirmatn' : ''}`}
												onClick={() => setSelectedLanguage(lang)}>
												{lang === 'fa'
													? 'فارسی'
													: lang === 'en'
													? 'English'
													: lang === 'ru'
													? 'Русский'
													: 'Türkçe'}
											</button>
										))}
									</div>
								</div>

								<FortuneCard
									poem={fortune}
									selectedLanguage={selectedLanguage}
								/>
							</div>
						)}

						<div className='flex flex-col sm:flex-row justify-center gap-4 mt-8'>
							<motion.button
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.97 }}
								className='fortune-button w-full sm:w-auto py-3 px-6 rounded-full shadow-lg flex items-center justify-center gap-2'
								onClick={handleGetNewFortune}>
								<span className={isRtl ? 'font-vazirmatn' : ''}>
									{t('fortune.new')}
								</span>
								<span className='text-lg'>✨</span>
							</motion.button>

							<motion.button
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.97 }}
								className='bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 w-full sm:w-auto'
								onClick={handleGoHome}>
								<span className={isRtl ? 'font-vazirmatn' : ''}>
									{t('fortune.home')}
								</span>
							</motion.button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

function FortuneCard({
	poem,
	selectedLanguage,
}: {
	poem: (typeof poems)[0];
	selectedLanguage: string;
}) {
	const { t } = useLanguage();

	// Determine the text direction
	const isRtl = selectedLanguage === 'fa';

	// Get the poem title in the selected language
	const title =
		poem.title[selectedLanguage as keyof typeof poem.title] || poem.title.en;

	// Get the interpretation in the selected language
	const interpretation =
		poem.interpretation[selectedLanguage as keyof typeof poem.interpretation] ||
		poem.interpretation.en;

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className={`bg-amber-50/70 p-5 md:p-6 rounded-lg border border-amber-200 ${
				isRtl ? 'text-right' : 'text-left'
			} relative overflow-hidden`}>
			{/* Decorative corner flourishes */}
			<div className='absolute top-0 left-0 w-16 h-16 opacity-10'>
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
			<div className='absolute bottom-0 right-0 w-16 h-16 opacity-10 rotate-180'>
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

			<h2
				className={`text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-amber-600 ${
					isRtl ? 'font-vazirmatn' : ''
				}`}>
				{title}
			</h2>

			<div className='space-y-3 md:space-y-4 mb-6 md:mb-8'>
				{poem.verses.map((verse, index) => {
					// Get the verse in the selected language
					const verseText =
						verse[selectedLanguage as keyof typeof verse] || verse.fa;

					// If Persian is selected, just show Persian text
					// For other languages, show both Persian and the selected language
					return (
						<div
							key={index}
							className='leading-relaxed border-l-2 border-amber-200/50 pl-3'>
							{selectedLanguage !== 'fa' && (
								<p className='text-right font-vazirmatn mb-1 text-gray-700'>
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
					);
				})}
			</div>

			<div className='mt-6 md:mt-8 border-t border-amber-200 pt-4'>
				<h3
					className={`font-semibold text-emerald-700 mb-2 ${
						isRtl ? 'font-vazirmatn' : ''
					}`}>
					{t('fortune.interpretation')}
				</h3>
				<p className={`text-gray-700 ${isRtl ? 'font-vazirmatn' : ''}`}>
					{interpretation}
				</p>
			</div>
		</motion.div>
	);
}

function FortuneAnimation() {
	return (
		<div className='relative'>
			{/* Envelope */}
			<motion.div
				className='w-36 h-36 md:w-40 md:h-40 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg shadow-xl border border-amber-300 flex items-center justify-center relative overflow-hidden'
				animate={{
					rotateY: [0, 180, 360],
					scale: [1, 1.1, 1],
				}}
				transition={{
					duration: 5,
					repeat: 0,
					repeatType: 'loop',
				}}>
				{/* Decorative patterns */}
				<motion.div
					className='absolute inset-0 bg-[radial-gradient(circle,rgba(251,191,36,0.1)_1px,transparent_1px)] bg-[length:10px_10px]'
					animate={{
						backgroundPosition: ['0% 0%', '100% 100%'],
					}}
					transition={{
						duration: 3,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
				/>

				{/* Persian calligraphy-like symbol */}
				<motion.div
					className='text-4xl md:text-5xl text-amber-600 font-serif select-none'
					animate={{
						opacity: [0.5, 1, 0.5],
						scale: [0.9, 1.1, 0.9],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						repeatType: 'reverse',
					}}>
					ح
				</motion.div>
			</motion.div>

			{/* Sparkles around the envelope */}
			<div className='absolute top-0 left-0 w-full h-full'>
				{[...Array(8)].map((_, i) => (
					<motion.div
						key={i}
						className='absolute w-2 h-2 md:w-3 md:h-3 bg-amber-400 rounded-full'
						style={{
							top: '50%',
							left: '50%',
						}}
						initial={{
							x: 0,
							y: 0,
							opacity: 0,
						}}
						animate={{
							x: [0, Math.cos(i * (Math.PI / 4)) * 70],
							y: [0, Math.sin(i * (Math.PI / 4)) * 70],
							opacity: [0, 1, 0],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							repeatType: 'loop',
							delay: i * 0.2,
						}}
					/>
				))}
			</div>
		</div>
	);
}
