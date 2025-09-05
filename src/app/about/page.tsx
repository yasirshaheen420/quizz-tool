import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Coins, Star, Target, Zap, Heart } from "lucide-react";

export default function AboutPage() {
	return (
		<div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
			{/* Header */}

			<div className='container mx-auto px-4 py-8'>
				{/* Hero Section */}
				<div className='text-center mb-12'>
					<div className='w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6'>
						<Trophy className='w-10 h-10 text-white' />
					</div>
					<h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
						Welcome to QuizMaster
					</h2>
					<p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
						The ultimate quiz platform where knowledge meets
						rewards. Challenge yourself, learn something new, and
						earn coins while having fun!
					</p>
				</div>

				{/* Mission Section */}
				<Card className='mb-8'>
					<CardHeader>
						<CardTitle className='flex items-center text-2xl'>
							<Target className='w-6 h-6 mr-2 text-purple-500' />
							Our Mission
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
							At QuizMaster, we believe that learning should be
							engaging, accessible, and rewarding. Our mission is
							to create a platform where curiosity is celebrated,
							knowledge is shared, and every correct answer brings
							you closer to exciting rewards. Whether you&apos;re
							a trivia enthusiast or someone looking to test their
							knowledge, QuizMaster is designed for everyone.
						</p>
					</CardContent>
				</Card>

				{/* Features Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
					<Card className='text-center'>
						<CardHeader>
							<div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Users className='w-6 h-6 text-white' />
							</div>
							<CardTitle>No Registration Required</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-gray-600 dark:text-gray-400'>
								Jump right in and start playing! No lengthy
								sign-up process or personal information
								required.
							</p>
						</CardContent>
					</Card>

					<Card className='text-center'>
						<CardHeader>
							<div className='w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Coins className='w-6 h-6 text-white' />
							</div>
							<CardTitle>Earn Rewards</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-gray-600 dark:text-gray-400'>
								Every quiz you complete earns you coins based on
								your performance. The better you do, the more
								you earn!
							</p>
						</CardContent>
					</Card>

					<Card className='text-center'>
						<CardHeader>
							<div className='w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Star className='w-6 h-6 text-white' />
							</div>
							<CardTitle>Diverse Categories</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-gray-600 dark:text-gray-400'>
								From science and history to sports and
								entertainment, we offer quizzes across multiple
								categories.
							</p>
						</CardContent>
					</Card>

					<Card className='text-center'>
						<CardHeader>
							<div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Zap className='w-6 h-6 text-white' />
							</div>
							<CardTitle>Instant Feedback</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-gray-600 dark:text-gray-400'>
								Get immediate results and see how you performed.
								Learn from your mistakes and improve your
								knowledge.
							</p>
						</CardContent>
					</Card>

					<Card className='text-center'>
						<CardHeader>
							<div className='w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Heart className='w-6 h-6 text-white' />
							</div>
							<CardTitle>Mobile Friendly</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-gray-600 dark:text-gray-400'>
								Take quizzes anywhere, anytime. Our platform is
								fully optimized for mobile devices.
							</p>
						</CardContent>
					</Card>

					<Card className='text-center'>
						<CardHeader>
							<div className='w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Trophy className='w-6 h-6 text-white' />
							</div>
							<CardTitle>Achievement System</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-gray-600 dark:text-gray-400'>
								Unlock achievements as you progress and showcase
								your quiz-taking prowess to the world.
							</p>
						</CardContent>
					</Card>
				</div>

				{/* Stats Section */}
				<Card className='mb-8'>
					<CardHeader>
						<CardTitle className='text-2xl text-center'>
							QuizMaster by the Numbers
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
							<div>
								<p className='text-3xl font-bold text-purple-600'>
									50+
								</p>
								<p className='text-gray-600 dark:text-gray-400'>
									Total Quizzes
								</p>
							</div>
							<div>
								<p className='text-3xl font-bold text-pink-600'>
									10K+
								</p>
								<p className='text-gray-600 dark:text-gray-400'>
									Active Players
								</p>
							</div>
							<div>
								<p className='text-3xl font-bold text-orange-600'>
									1M+
								</p>
								<p className='text-gray-600 dark:text-gray-400'>
									Coins Distributed
								</p>
							</div>
							<div>
								<p className='text-3xl font-bold text-green-600'>
									95%
								</p>
								<p className='text-gray-600 dark:text-gray-400'>
									User Satisfaction
								</p>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* How It Works */}
				<Card className='mb-8'>
					<CardHeader>
						<CardTitle className='text-2xl'>How It Works</CardTitle>
						<CardDescription>
							Getting started with QuizMaster is simple and
							straightforward
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='space-y-6'>
							<div className='flex items-start space-x-4'>
								<div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold'>
									1
								</div>
								<div>
									<h3 className='font-semibold mb-1'>
										Choose a Quiz
									</h3>
									<p className='text-gray-600 dark:text-gray-400'>
										Browse our collection of quizzes and
										pick one that interests you. Each quiz
										shows the difficulty level, number of
										questions, and potential coin rewards.
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-4'>
								<div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold'>
									2
								</div>
								<div>
									<h3 className='font-semibold mb-1'>
										Take the Quiz
									</h3>
									<p className='text-gray-600 dark:text-gray-400'>
										Answer questions within the time limit.
										You can navigate between questions and
										change your answers before submitting.
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-4'>
								<div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold'>
									3
								</div>
								<div>
									<h3 className='font-semibold mb-1'>
										Earn Coins
									</h3>
									<p className='text-gray-600 dark:text-gray-400'>
										Get instant results and earn coins based
										on your performance. The more questions
										you answer correctly, the more coins you
										earn!
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-4'>
								<div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold'>
									4
								</div>
								<div>
									<h3 className='font-semibold mb-1'>
										Track Progress
									</h3>
									<p className='text-gray-600 dark:text-gray-400'>
										Visit your wallet to see your total
										coins, completed quizzes, and unlock
										achievements as you progress.
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Call to Action */}
				<div className='text-center'>
					<h3 className='text-2xl font-bold mb-4'>
						Ready to Test Your Knowledge?
					</h3>
					<p className='text-gray-600 dark:text-gray-300 mb-6'>
						Join thousands of quiz enthusiasts and start earning
						coins today!
					</p>
					<Link href='/'>
						<Button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg px-8 py-3'>
							Start Taking Quizzes
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
