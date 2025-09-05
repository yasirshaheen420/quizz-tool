"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Trophy,
	Clock,
	Coins,
	Users,
	Star,
	CheckCircle,
	Target,
	Zap,
	Award,
	BookOpen,
	Brain,
	Globe,
} from "lucide-react";

const quizzes = [
	{
		id: "1",
		title: "General Knowledge",
		description: "Test your knowledge across various topics",
		difficulty: "Easy",
		questions: 10,
		timeLimit: 15,
		reward: 50,
		category: "General",
		icon: BookOpen,
		color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
	},
	{
		id: "2",
		title: "Science & Technology",
		description: "Explore the world of science and tech",
		difficulty: "Medium",
		questions: 12,
		timeLimit: 18,
		reward: 75,
		category: "Science",
		icon: Zap,
		color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
	},
	{
		id: "3",
		title: "World History",
		description: "Journey through historical events",
		difficulty: "Hard",
		questions: 15,
		timeLimit: 20,
		reward: 100,
		category: "History",
		icon: Globe,
		color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
	},
	{
		id: "4",
		title: "Literature & Authors",
		description: "Dive into the world of books",
		difficulty: "Hard",
		questions: 10,
		timeLimit: 22,
		reward: 95,
		category: "Literature",
		icon: BookOpen,
		color: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
	},
	{
		id: "5",
		title: "Food & Cuisine",
		description: "A delicious journey around the world",
		difficulty: "Easy",
		questions: 8,
		timeLimit: 12,
		reward: 45,
		category: "Food",
		icon: Award,
		color: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
	},
	{
		id: "6",
		title: "Art & Artists",
		description: "Discover masterpieces and creators",
		difficulty: "Medium",
		questions: 8,
		timeLimit: 19,
		reward: 80,
		category: "Art",
		icon: Star,
		color: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800",
	},
	{
		id: "7",
		title: "Music & Musicians",
		description: "Feel the rhythm of knowledge",
		difficulty: "Medium",
		questions: 8,
		timeLimit: 16,
		reward: 65,
		category: "Music",
		icon: Star,
		color: "bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800",
	},
	{
		id: "8",
		title: "Animals & Nature",
		description: "Explore the natural world",
		difficulty: "Easy",
		questions: 8,
		timeLimit: 14,
		reward: 55,
		category: "Nature",
		icon: Trophy,
		color: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800",
	},
	{
		id: "9",
		title: "Space & Astronomy",
		description: "Journey through the cosmos",
		difficulty: "Hard",
		questions: 8,
		timeLimit: 21,
		reward: 90,
		category: "Space",
		icon: Zap,
		color: "bg-slate-50 dark:bg-slate-900/20 border-slate-200 dark:border-slate-800",
	},
	{
		id: "10",
		title: "Mythology & Legends",
		description: "Ancient stories and gods",
		difficulty: "Medium",
		questions: 8,
		timeLimit: 18,
		reward: 75,
		category: "Mythology",
		icon: Star,
		color: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800",
	},
	{
		id: "11",
		title: "Mathematics & Logic",
		description: "Exercise your logical thinking",
		difficulty: "Hard",
		questions: 8,
		timeLimit: 25,
		reward: 110,
		category: "Math",
		icon: Target,
		color: "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800",
	},
	{
		id: "12",
		title: "Pop Culture & Trends",
		description: "Stay current with popular culture",
		difficulty: "Easy",
		questions: 8,
		timeLimit: 13,
		reward: 50,
		category: "Pop Culture",
		icon: Star,
		color: "bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800",
	},
	{
		id: "13",
		title: "Languages & Communication",
		description: "Words that connect the world",
		difficulty: "Medium",
		questions: 8,
		timeLimit: 17,
		reward: 70,
		category: "Language",
		icon: BookOpen,
		color: "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800",
	},
	{
		id: "14",
		title: "Inventions & Discoveries",
		description: "Breakthroughs that changed the world",
		difficulty: "Medium",
		questions: 8,
		timeLimit: 19,
		reward: 80,
		category: "Inventions",
		icon: Brain,
		color: "bg-lime-50 dark:bg-lime-900/20 border-lime-200 dark:border-lime-800",
	},
	{
		id: "15",
		title: "Ancient Civilizations",
		description: "Journey to the distant past",
		difficulty: "Hard",
		questions: 8,
		timeLimit: 23,
		reward: 100,
		category: "History",
		icon: Globe,
		color: "bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800",
	},
];

export default function HomePage() {
	const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([]);

	useEffect(() => {
		const completed = localStorage.getItem("completedQuizzes");
		if (completed) {
			setCompletedQuizzes(JSON.parse(completed));
		}
	}, []);

	const getDifficultyColor = (difficulty: string) => {
		switch (difficulty) {
			case "Easy":
				return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
			case "Medium":
				return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
			case "Hard":
				return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
			default:
				return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
		}
	};

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 py-20'>
				<div className='container mx-auto px-4 text-center'>
					<div className='max-w-4xl mx-auto'>
						<h1 className='text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
							Test Your Knowledge,{" "}
							<span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
								Earn Rewards
							</span>
						</h1>
						<p className='text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
							Challenge yourself with our comprehensive quiz
							platform. Answer questions, earn coins, and unlock
							achievements across 15 different categories.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Button
								size='lg'
								className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3'>
								Start Quiz Journey
							</Button>
							<Button
								size='lg'
								variant='outline'
								className='px-8 py-3 bg-transparent'>
								View Leaderboard
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Quiz Grid */}
			<section className='py-16 bg-white dark:bg-gray-900'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
							Choose Your Challenge
						</h2>
						<p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
							Select from 15 different quiz categories, each
							designed to test your knowledge and reward your
							expertise.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{quizzes.map((quiz) => {
							const IconComponent = quiz.icon;
							const isCompleted = completedQuizzes.includes(
								quiz.id
							);

							return (
								<Card
									key={quiz.id}
									className={`${quiz.color} hover:shadow-lg transition-all duration-300 border-2`}>
									<CardHeader className='pb-3'>
										<div className='flex items-center justify-between'>
											<div className='flex items-center space-x-3'>
												<div className='w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-sm'>
													<IconComponent className='w-5 h-5 text-gray-700 dark:text-gray-300' />
												</div>
												<div>
													<CardTitle className='text-lg text-gray-900 dark:text-white'>
														{quiz.title}
													</CardTitle>
													<Badge
														className={getDifficultyColor(
															quiz.difficulty
														)}>
														{quiz.difficulty}
													</Badge>
												</div>
											</div>
											{isCompleted && (
												<CheckCircle className='w-6 h-6 text-green-600 dark:text-green-400' />
											)}
										</div>
									</CardHeader>
									<CardContent className='pt-0'>
										<CardDescription className='text-gray-600 dark:text-gray-300 mb-4'>
											{quiz.description}
										</CardDescription>
										<div className='flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4'>
											<div className='flex items-center space-x-4'>
												<span className='flex items-center space-x-1'>
													<BookOpen className='w-4 h-4' />
													<span>
														{quiz.questions}{" "}
														questions
													</span>
												</span>
												<span className='flex items-center space-x-1'>
													<Clock className='w-4 h-4' />
													<span>
														{quiz.timeLimit} min
													</span>
												</span>
											</div>
											<div className='flex items-center space-x-1 text-yellow-600 dark:text-yellow-400'>
												<Coins className='w-4 h-4' />
												<span className='font-semibold'>
													{quiz.reward}
												</span>
											</div>
										</div>
										<Link href={`/quiz/${quiz.id}`}>
											<Button className='w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'>
												{isCompleted
													? "Retake Quiz"
													: "Start Quiz"}
											</Button>
										</Link>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className='py-16 bg-white dark:bg-gray-900'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
							Why Choose QuizMaster?
						</h2>
						<p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
							Experience the ultimate quiz platform with features
							designed to enhance your learning journey.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='text-center p-6'>
							<div className='w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Trophy className='w-8 h-8 text-blue-600 dark:text-blue-400' />
							</div>
							<h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
								Earn Rewards
							</h3>
							<p className='text-gray-600 dark:text-gray-300'>
								Get coins for every correct answer and unlock
								special achievements.
							</p>
						</div>
						<div className='text-center p-6'>
							<div className='w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Brain className='w-8 h-8 text-green-600 dark:text-green-400' />
							</div>
							<h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
								15 Categories
							</h3>
							<p className='text-gray-600 dark:text-gray-300'>
								Explore diverse topics from science to
								entertainment and beyond.
							</p>
						</div>
						<div className='text-center p-6'>
							<div className='w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Users className='w-8 h-8 text-purple-600 dark:text-purple-400' />
							</div>
							<h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
								No Registration
							</h3>
							<p className='text-gray-600 dark:text-gray-300'>
								Start playing immediately as a guest. No signup
								required!
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className='py-16 bg-gray-50 dark:bg-gray-800'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
						<div>
							<div className='text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2'>
								15
							</div>
							<div className='text-gray-600 dark:text-gray-300'>
								Quiz Categories
							</div>
						</div>
						<div>
							<div className='text-3xl font-bold text-green-600 dark:text-green-400 mb-2'>
								200+
							</div>
							<div className='text-gray-600 dark:text-gray-300'>
								Total Questions
							</div>
						</div>
						<div>
							<div className='text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2'>
								10K+
							</div>
							<div className='text-gray-600 dark:text-gray-300'>
								Quiz Attempts
							</div>
						</div>
						<div>
							<div className='text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2'>
								5K+
							</div>
							<div className='text-gray-600 dark:text-gray-300'>
								Coins Earned
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16 bg-gradient-to-r from-blue-600 to-purple-600'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-3xl font-bold text-white mb-4'>
						Ready to Test Your Knowledge?
					</h2>
					<p className='text-blue-100 mb-8 max-w-2xl mx-auto'>
						Join thousands of quiz enthusiasts and start your
						learning journey today. No registration required!
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Button
							size='lg'
							className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-3'>
							Start First Quiz
						</Button>
						<Button
							size='lg'
							variant='outline'
							className='border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent'>
							View All Categories
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
