"use client";

import type React from "react";

import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		category: "",
		message: "",
	});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// In a real app, you would send this data to your backend
		console.log("Form submitted:", formData);
		setIsSubmitted(true);

		// Reset form after 3 seconds
		setTimeout(() => {
			setIsSubmitted(false);
			setFormData({
				name: "",
				email: "",
				subject: "",
				category: "",
				message: "",
			});
		}, 3000);
	};

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	return (
		<div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
			{/* Header */}

			<div className='container mx-auto px-4 py-8'>
				{/* Hero Section */}
				<div className='text-center mb-12'>
					<h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
						Get in Touch
					</h2>
					<p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
						Have questions, suggestions, or need help? We&apos;d
						love to hear from you! Our team is here to assist you
						with anything related to QuizMaster.
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					{/* Contact Information */}
					<div className='space-y-6'>
						<Card>
							<CardHeader>
								<CardTitle className='flex items-center'>
									<Mail className='w-5 h-5 mr-2 text-purple-500' />
									Email Us
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-gray-600 dark:text-gray-400 mb-2'>
									For general inquiries and support
								</p>
								<a
									href='mailto:support@quizmaster.com'
									className='text-purple-600 hover:text-purple-700 font-semibold'>
									support@quizmaster.com
								</a>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className='flex items-center'>
									<MessageSquare className='w-5 h-5 mr-2 text-pink-500' />
									Live Chat
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-gray-600 dark:text-gray-400 mb-2'>
									Available Monday - Friday, 9 AM - 6 PM EST
								</p>
								<Button
									variant='outline'
									className='w-full bg-transparent'>
									Start Live Chat
								</Button>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className='flex items-center'>
									<Phone className='w-5 h-5 mr-2 text-orange-500' />
									Phone Support
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-gray-600 dark:text-gray-400 mb-2'>
									Call us for urgent matters
								</p>
								<a
									href='tel:+1-555-QUIZ-123'
									className='text-orange-600 hover:text-orange-700 font-semibold'>
									+1 (555) QUIZ-123
								</a>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className='flex items-center'>
									<MapPin className='w-5 h-5 mr-2 text-green-500' />
									Office Location
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-gray-600 dark:text-gray-400'>
									123 Knowledge Street
									<br />
									Quiz City, QC 12345
									<br />
									United States
								</p>
							</CardContent>
						</Card>
					</div>

					{/* Contact Form */}
					<div className='lg:col-span-2'>
						<Card>
							<CardHeader>
								<CardTitle>Send us a Message</CardTitle>
								<CardDescription>
									Fill out the form below and we&apos;ll get
									back to you as soon as possible.
								</CardDescription>
							</CardHeader>
							<CardContent>
								{isSubmitted ? (
									<div className='text-center py-8'>
										<div className='w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4'>
											<Send className='w-8 h-8 text-green-600 dark:text-green-400' />
										</div>
										<h3 className='text-xl font-semibold text-green-600 dark:text-green-400 mb-2'>
											Message Sent Successfully!
										</h3>
										<p className='text-gray-600 dark:text-gray-400'>
											Thank you for contacting us.
											We&apos;ll get back to you within 24
											hours.
										</p>
									</div>
								) : (
									<form
										onSubmit={handleSubmit}
										className='space-y-6'>
										<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
											<div className='space-y-2'>
												<Label htmlFor='name'>
													Full Name *
												</Label>
												<Input
													id='name'
													value={formData.name}
													onChange={(e) =>
														handleInputChange(
															"name",
															e.target.value
														)
													}
													placeholder='Your full name'
													required
												/>
											</div>
											<div className='space-y-2'>
												<Label htmlFor='email'>
													Email Address *
												</Label>
												<Input
													id='email'
													type='email'
													value={formData.email}
													onChange={(e) =>
														handleInputChange(
															"email",
															e.target.value
														)
													}
													placeholder='your.email@example.com'
													required
												/>
											</div>
										</div>

										<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
											<div className='space-y-2'>
												<Label htmlFor='category'>
													Category
												</Label>
												<Select
													value={formData.category}
													onValueChange={(value) =>
														handleInputChange(
															"category",
															value
														)
													}>
													<SelectTrigger>
														<SelectValue placeholder='Select a category' />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value='general'>
															General Inquiry
														</SelectItem>
														<SelectItem value='technical'>
															Technical Support
														</SelectItem>
														<SelectItem value='quiz'>
															Quiz Content
														</SelectItem>
														<SelectItem value='account'>
															Account Issues
														</SelectItem>
														<SelectItem value='feedback'>
															Feedback
														</SelectItem>
														<SelectItem value='partnership'>
															Partnership
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
											<div className='space-y-2'>
												<Label htmlFor='subject'>
													Subject *
												</Label>
												<Input
													id='subject'
													value={formData.subject}
													onChange={(e) =>
														handleInputChange(
															"subject",
															e.target.value
														)
													}
													placeholder='Brief description of your inquiry'
													required
												/>
											</div>
										</div>

										<div className='space-y-2'>
											<Label htmlFor='message'>
												Message *
											</Label>
											<Textarea
												id='message'
												value={formData.message}
												onChange={(e) =>
													handleInputChange(
														"message",
														e.target.value
													)
												}
												placeholder='Please provide details about your inquiry...'
												rows={6}
												required
											/>
										</div>

										<Button
											type='submit'
											className='w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white'>
											<Send className='w-4 h-4 mr-2' />
											Send Message
										</Button>
									</form>
								)}
							</CardContent>
						</Card>
					</div>
				</div>

				{/* FAQ Section */}
				<div className='mt-16'>
					<h3 className='text-2xl font-bold text-center mb-8'>
						Frequently Asked Questions
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<Card>
							<CardHeader>
								<CardTitle className='text-lg'>
									How do I earn coins?
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-gray-600 dark:text-gray-400'>
									You earn coins by completing quizzes. The
									number of coins depends on your performance
									- the more questions you answer correctly,
									the more coins you earn!
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className='text-lg'>
									Do I need to create an account?
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-gray-600 dark:text-gray-400'>
									No! QuizMaster works as a guest platform.
									Your progress and coins are saved locally on
									your device, so you can start playing
									immediately.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className='text-lg'>
									Can I retake quizzes?
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-gray-600 dark:text-gray-400'>
									Yes, you can retake any quiz as many times
									as you want. However, you&apos;ll only earn
									coins the first time you complete each quiz.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className='text-lg'>
									What can I do with my coins?
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-gray-600 dark:text-gray-400'>
									Currently, coins serve as a measure of your
									achievement. We&apos;re working on a rewards
									shop where you&apos;ll be able to unlock
									themes, power-ups, and other exciting
									features!
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
