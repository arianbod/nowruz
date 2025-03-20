// /app/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from './layout';

export default function Home() {
	const { t, language } = useLanguage();
	const router = useRouter();
	const [showInfo, setShowInfo] = useState(false);
	const [showHaftSin, setShowHaftSin] = useState(false);

	const handleGetFortune = () => {
		router.push('/fortune');
	};

	const isRtl = language === 'fa';

	// Animation variants for staggered entries
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	// Haft Sin items explanation
	const haftSinItems = [
		{
			name: isRtl ? 'سیب' : 'Sib (Apple)',
			symbol: '🍎',
			meaning: isRtl ? 'نماد زیبایی و سلامتی' : 'Symbol of beauty and health',
		},
		{
			name: isRtl ? 'سبزه' : 'Sabzeh (Sprouts)',
			symbol: '🌱',
			meaning: isRtl
				? 'نماد تجدید حیات و باروری'
				: 'Symbol of rebirth and fertility',
		},
		{
			name: isRtl ? 'سمنو' : 'Samanu (Wheat pudding)',
			symbol: '🍯',
			meaning: isRtl ? 'نماد قدرت و برکت' : 'Symbol of power and abundance',
		},
		{
			name: isRtl ? 'سنجد' : 'Senjed (Oleaster)',
			symbol: '🌰',
			meaning: isRtl ? 'نماد عشق و محبت' : 'Symbol of love and affection',
		},
		{
			name: isRtl ? 'سیر' : 'Sir (Garlic)',
			symbol: '🧄',
			meaning: isRtl
				? 'نماد محافظت و سلامتی'
				: 'Symbol of protection and health',
		},
		{
			name: isRtl ? 'سرکه' : 'Serkeh (Vinegar)',
			symbol: '🧪',
			meaning: isRtl
				? 'نماد صبر و شکیبایی'
				: 'Symbol of patience and tolerance',
		},
		{
			name: isRtl ? 'سماق' : 'Somagh (Sumac)',
			symbol: '🌶️',
			meaning: isRtl
				? 'نماد طلوع خورشید و تازگی'
				: 'Symbol of sunrise and renewal',
		},
	];

	return (
		<div className='max-w-4xl mx-auto px-4 py-2 md:py-6'>
			{/* Decorative floating elements */}
			<div className='fixed -z-10 top-20 left-10 w-24 h-24 rounded-full bg-gradient-to-r from-emerald-300/20 to-amber-300/20 animate-float hidden md:block'></div>
			<div className='fixed -z-10 bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-amber-300/20 to-emerald-300/20 animate-float-delay hidden md:block'></div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className='text-center mb-8 md:mb-10'>
				<h1
					className={`text-3xl md:text-5xl font-bold mb-4 text-gradient ${
						isRtl ? 'font-vazirmatn' : ''
					}`}>
					{t('home.welcome')}
				</h1>
				<p
					className={`text-base md:text-lg mb-4 text-gray-700 ${
						isRtl ? 'font-vazirmatn' : ''
					}`}>
					{t('home.intro')}
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2, duration: 0.6 }}
				className='mb-8 md:mb-12 relative'>
				<div className='bg-white/90 backdrop-blur-sm rounded-xl p-5 md:p-8 shadow-xl overflow-hidden border border-amber-100 nowruz-pattern'>
					{/* Decorative elements */}
					<div className='absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-red-500/30 via-amber-500/30 to-emerald-500/30'></div>
					<div className='absolute bottom-0 right-0 w-full h-3 bg-gradient-to-l from-red-500/30 via-amber-500/30 to-emerald-500/30'></div>

					<div
						className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
							isRtl ? 'md:flex-row-reverse' : ''
						}`}>
						<div className='w-full md:w-1/2'>
							<div className='relative h-56 md:h-64 w-full overflow-hidden rounded-lg shadow-md border-2 border-amber-200'>
								<Image
									src='/images/haft-sin.jpg'
									alt='Haft-Sin Table'
									fill
									style={{ objectFit: 'cover' }}
									className='transition-transform duration-700 hover:scale-105'
									priority
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>
								<div
									className={`absolute bottom-0 left-0 right-0 p-3 text-white font-medium text-sm md:text-base ${
										isRtl ? 'text-right font-vazirmatn' : ''
									}`}>
									{isRtl ? 'سفره هفت‌سین نوروزی' : 'Traditional Haft-Sin Table'}
								</div>
							</div>
						</div>

						<div
							className={`w-full md:w-1/2 ${
								isRtl ? 'text-right font-vazirmatn' : ''
							}`}>
							<h2 className='text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-gradient-amber'>
								{t('home.instructions')}
							</h2>

							<motion.button
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.97 }}
								onClick={handleGetFortune}
								className='fortune-button w-full md:w-auto py-3 px-8 rounded-full shadow-lg text-lg mb-4 flex items-center justify-center gap-2'>
								<span>{t('home.button')}</span>
								<span className='text-lg'>✨</span>
							</motion.button>

							<div className='mt-6 space-y-2'>
								<div className='p-4 bg-amber-50/80 rounded-lg border border-amber-200'>
									<button
										onClick={() => setShowInfo(!showInfo)}
										className='flex items-center justify-between w-full text-left'>
										<span className='font-medium text-amber-800'>
											{language === 'fa' ? 'درباره نوروز' : 'About Nowruz'} 🌞
										</span>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className={`h-4 w-4 text-amber-600 transition-transform ${
												showInfo ? 'rotate-180' : ''
											}`}
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M19 9l-7 7-7-7'
											/>
										</svg>
									</button>

									{showInfo && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: 'auto' }}
											transition={{ duration: 0.3 }}
											className={`mt-3 text-sm text-gray-700 ${
												isRtl ? 'font-vazirmatn' : ''
											}`}>
											<p>{t('home.info')}</p>
										</motion.div>
									)}
								</div>

								<div className='p-4 bg-emerald-50/80 rounded-lg border border-emerald-200'>
									<button
										onClick={() => setShowHaftSin(!showHaftSin)}
										className='flex items-center justify-between w-full text-left'>
										<span className='font-medium text-emerald-800'>
											{language === 'fa'
												? 'سفره هفت‌سین چیست؟'
												: 'What is Haft-Sin?'}{' '}
											🌱
										</span>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className={`h-4 w-4 text-emerald-600 transition-transform ${
												showHaftSin ? 'rotate-180' : ''
											}`}
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M19 9l-7 7-7-7'
											/>
										</svg>
									</button>

									{showHaftSin && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: 'auto' }}
											transition={{ duration: 0.3 }}
											className={`mt-3 text-sm text-gray-700 ${
												isRtl ? 'font-vazirmatn' : ''
											}`}>
											<p className='mb-3'>
												{isRtl
													? 'سفره هفت‌سین بخش مهمی از جشن نوروز است. "هفت" به عدد ۷ اشاره دارد که در فرهنگ ایرانی عددی مقدس است، و "سین" حرف «س» در الفبای فارسی است. هفت‌سین شامل هفت چیز است که همگی با حرف «س» شروع می‌شوند و هر کدام نمادی از باززایی، امید و خوشبختی هستند.'
													: 'Haft-Sin is an essential part of the Nowruz celebration. "Haft" refers to the number 7 which is sacred in Iranian culture, and "Sin" is the letter "س" (S) in the Persian alphabet. Haft-Sin consists of seven items all starting with the letter "س", each symbolizing rebirth, hope, and prosperity.'}
											</p>

											<motion.ul
												variants={container}
												initial='hidden'
												animate='show'
												className='space-y-2 mt-4'>
												{haftSinItems.map((item, index) => (
													<motion.li
														key={index}
														variants={item}
														className={`flex items-center gap-3 ${
															isRtl ? 'flex-row-reverse' : ''
														}`}>
														<span className='text-xl'>{item.symbol}</span>
														<div className={isRtl ? 'font-vazirmatn' : ''}>
															<span className='font-medium'>{item.name}</span>
															<span className='mx-1'>-</span>
															<span className='text-gray-600'>
																{item.meaning}
															</span>
														</div>
													</motion.li>
												))}
											</motion.ul>
										</motion.div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4, duration: 0.5 }}
				className='text-center'>
				<div
					className={`inline-block p-4 md:p-5 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-lg border border-amber-200 shadow-sm ${
						isRtl ? 'font-vazirmatn' : ''
					}`}>
					<p className='text-gradient text-sm md:text-base font-medium'>
						{language === 'fa'
							? '🌷 نوروز باستانی، جشن بهار و نو شدن طبیعت، بر شما مبارک باد 🌱'
							: '🌷 Happy Nowruz! Ancient celebration of spring and renewal of nature 🌱'}
					</p>
				</div>
			</motion.div>
		</div>
	);
}
