// /app/layout.tsx
'use client';

import { useState, createContext, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Inter, Vazirmatn } from 'next/font/google';
import './globals.css';

// Import translations
import translations from './data/translations.json';

// Fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const vazirmatn = Vazirmatn({
	subsets: ['arabic'],
	variable: '--font-vazirmatn',
});

// Create Language Context
type LanguageContextType = {
	language: string;
	t: (key: string) => string;
	changeLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
	language: 'en',
	t: () => '',
	changeLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// Initialize with English, but try to detect language
	const [language, setLanguage] = useState('en');

	useEffect(() => {
		// Detect browser language or use saved preference
		const detectLanguage = () => {
			const savedLang = localStorage.getItem('nowruzLanguage');
			if (savedLang && ['en', 'fa', 'ru', 'tr'].includes(savedLang)) {
				setLanguage(savedLang);
				return;
			}

			const browserLang = navigator.language.split('-')[0];
			if (['fa', 'ru', 'tr'].includes(browserLang)) {
				setLanguage(browserLang);
			}
			// Default stays "en"
		};

		detectLanguage();
	}, []);

	const changeLanguage = (newLang: string) => {
		setLanguage(newLang);
		try {
			localStorage.setItem('nowruzLanguage', newLang);
		} catch (e) {
			console.error('Could not save language preference');
		}
	};

	// Translation function
	const t = (key: string): string => {
		const keys = key.split('.');
		let value = translations[language as keyof typeof translations];

		for (const k of keys) {
			if (value && typeof value === 'object' && k in value) {
				value = value[k as keyof typeof value];
			} else {
				return key; // Fallback to key if translation not found
			}
		}

		return (value as string) || key;
	};

	const isRtl = language === 'fa';

	return (
		<html
			lang={language}
			dir={isRtl ? 'rtl' : 'ltr'}>
			<head>
				<title>{t('app.title')}</title>
				<meta
					name='description'
					content={t('app.subtitle')}
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/images/logo.svg'
				/>
			</head>
			<body
				className={`${inter.variable} ${vazirmatn.variable} min-h-screen bg-gradient-to-b from-emerald-50 to-amber-50 bg-fixed`}>
				<LanguageContext.Provider value={{ language, t, changeLanguage }}>
					<div className='flex min-h-screen flex-col'>
						<Header />
						<main className='flex-grow'>
							<div className='container mx-auto px-4 py-8'>{children}</div>
						</main>
						<Footer />
					</div>
				</LanguageContext.Provider>
			</body>
		</html>
	);
}

// Header Component
function Header() {
	const { language, t, changeLanguage } = useLanguage();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

	return (
		<header className='bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between h-16'>
					<Link
						href='/'
						className='flex items-center space-x-2 rtl:space-x-reverse'>
						{/* <Image
							src='/images/logo.svg'
							alt='Nowruz Fortune Logo'
							width={40}
							height={40}
						/> */}
						<div>
							<span className='text-sm font-bold text-emerald-700'>
								{t('app.title')}
							</span>
							<p className='text-xs text-gray-600'>{t('app.subtitle')}</p>
						</div>
					</Link>

					<nav className='hidden md:flex items-center space-x-6 rtl:space-x-reverse'>
						<Link
							href='/'
							className='text-gray-700 hover:text-emerald-600 transition-colors'>
							{language === 'fa'
								? 'خانه'
								: language === 'ru'
								? 'Главная'
								: language === 'tr'
								? 'Ana Sayfa'
								: 'Home'}
						</Link>
						<Link
							href='/fortune'
							className='text-gray-700 hover:text-emerald-600 transition-colors'>
							{language === 'fa'
								? 'فال حافظ'
								: language === 'ru'
								? 'Гадание'
								: language === 'tr'
								? 'Fal'
								: 'Fortune'}
						</Link>

						<div className='relative'>
							<button
								className='flex items-center space-x-1 rtl:space-x-reverse text-amber-600 hover:text-amber-700 transition-colors'
								onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}>
								<span>
									{language === 'fa'
										? 'فارسی'
										: language === 'en'
										? 'English'
										: language === 'ru'
										? 'Русский'
										: 'Türkçe'}
								</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className={`h-4 w-4 transition-transform ${
										isLangDropdownOpen ? 'rotate-180' : ''
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

							{isLangDropdownOpen && (
								<div className='absolute mt-2 right-0 rtl:left-0 rtl:right-auto w-36 bg-white rounded-md shadow-lg py-1 z-50'>
									{['en', 'fa', 'ru', 'tr'].map((lang) => (
										<button
											key={lang}
											className={`block w-full text-left rtl:text-right px-4 py-2 text-sm hover:bg-gray-100 ${
												lang === language
													? 'font-semibold text-emerald-600'
													: 'text-gray-700'
											}`}
											onClick={() => {
												changeLanguage(lang);
												setIsLangDropdownOpen(false);
											}}>
											{t(`languages.${lang}`)}
										</button>
									))}
								</div>
							)}
						</div>
					</nav>

					<div className='md:hidden'>
						<button
							className='text-gray-700 hover:text-emerald-600 transition-colors'
							onClick={() => setIsMenuOpen(!isMenuOpen)}>
							{isMenuOpen ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							) : (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							)}
						</button>
					</div>
				</div>

				{isMenuOpen && (
					<div className='md:hidden py-4 border-t border-gray-200'>
						<nav className='flex flex-col space-y-3'>
							<Link
								href='/'
								className='text-gray-700 hover:text-emerald-600 transition-colors'
								onClick={() => setIsMenuOpen(false)}>
								{language === 'fa'
									? 'خانه'
									: language === 'ru'
									? 'Главная'
									: language === 'tr'
									? 'Ana Sayfa'
									: 'Home'}
							</Link>
							<Link
								href='/fortune'
								className='text-gray-700 hover:text-emerald-600 transition-colors'
								onClick={() => setIsMenuOpen(false)}>
								{language === 'fa'
									? 'فال حافظ'
									: language === 'ru'
									? 'Гадание'
									: language === 'tr'
									? 'Fal'
									: 'Fortune'}
							</Link>

							<div className='pt-2 border-t border-gray-100'>
								<p className='text-xs text-gray-500 mb-2'>
									{language === 'fa' ? 'انتخاب زبان:' : 'Select Language:'}
								</p>
								<div className='flex flex-wrap gap-2'>
									{['en', 'fa', 'ru', 'tr'].map((lang) => (
										<button
											key={lang}
											className={`px-3 py-1 text-sm rounded ${
												lang === language
													? 'bg-amber-500 text-white'
													: 'bg-gray-200 text-gray-700'
											}`}
											onClick={() => {
												changeLanguage(lang);
												setIsMenuOpen(false);
											}}>
											{t(`languages.${lang}`)}
										</button>
									))}
								</div>
							</div>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}

// Footer Component
function Footer() {
	const { language, t } = useLanguage();

	return (
		<footer className='bg-white/70 backdrop-blur-sm py-6 border-t border-gray-200'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col items-center justify-center text-center'>
					<p className='text-gray-600'>
						{t('home.year')} • {new Date().getFullYear()}
					</p>
					<p className='text-sm text-gray-500 mt-2'>
						{language === 'fa'
							? 'طراحی شده با عشق برای جشن نوروز'
							: 'Created with love for Nowruz celebration'}
					</p>
				</div>
			</div>
		</footer>
	);
}
