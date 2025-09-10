import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "QuizMaster - Test Your Knowledge",
	description:
		"QuizMaster - Take quizzes, earn coins, and test your knowledge across various topics. Free online quizzes for learning and entertainment.",
	keywords:
		"quiz, knowledge test, educational quizzes, trivia, learning, test preparation, online quizzes, free quizzes, quiz questions, quiz answers",
	twitter: {
		card: "summary_large_image",
		site: "@quizmaster",
		creator: "@quizmaster",
		title: "QuizMaster - Test Your Knowledge",
		description:
			"QuizMaster - Take quizzes, earn coins, and test your knowledge across various topics. Free online quizzes for learning and entertainment.",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
		},
	},
	alternates: {
		canonical: "https://quizmaster.com",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<meta name="google-site-verification" content="XGl-UHsUrh8Q9inlYbtybxRRP49xOmEklgpIb2auUvQ" />

				{/* Google Analytics */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=YOUR_GOOGLE_ANALYTICS_ID'></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID');
					`,
					}}
				/>

				{/* Google AdSense */}
				<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3790073868995630"
     crossorigin="anonymous"></script>

				{/* SEO Meta Tags */}
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<meta name='application-name' content='QuizMaster' />
				<meta name='author' content='QuizMaster Team' />
				<meta name='rating' content='General' />
				<meta name='revisit-after' content='7 days' />
				<meta
					name='keywords'
					content='quiz, knowledge test, educational quizzes, trivia, learning, test preparation, online quizzes, free quizzes, quiz questions, quiz answers'
				/>
				<meta
					name='description'
					content='QuizMaster - Take quizzes, earn coins, and test your knowledge across various topics. Free online quizzes for learning and entertainment.'
				/>

				{/* Canonical and Language Links */}
				<link rel='canonical' href='https://quizmaster.com' />
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='light'
					enableSystem
					disableTransitionOnChange>
					<div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
						<Header />
						<main>{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
