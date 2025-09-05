import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";

export default function TermsPage() {
	return (
		<div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
			<div className='container mx-auto px-4 py-8 max-w-4xl'>
				{/* Hero Section */}
				<div className='text-center mb-8'>
					<div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4'>
						<Scale className='w-8 h-8 text-white' />
					</div>
					<h2 className='text-3xl font-bold mb-4'>
						Terms of Service
					</h2>
					<p className='text-gray-600 dark:text-gray-300'>
						Last updated: December 28, 2024
					</p>
				</div>

				<div className='space-y-6'>
					<Card>
						<CardHeader>
							<CardTitle>1. Acceptance of Terms</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								By accessing and using QuizMaster (&quot;the
								Service&quot;), you accept and agree to be bound
								by the terms and provision of this agreement. If
								you do not agree to abide by the above, please
								do not use this service.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>2. Description of Service</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								QuizMaster is an online quiz platform that
								allows users to take quizzes across various
								categories and earn virtual coins based on their
								performance. The service is provided free of
								charge and does not require user registration.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>3. User Conduct</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								You agree to use QuizMaster only for lawful
								purposes and in a way that does not infringe the
								rights of, restrict or inhibit anyone
								else&apos;s use and enjoyment of the service.
								Prohibited behavior includes:
							</p>
							<ul className='list-disc pl-6 mt-4 space-y-2'>
								<li>
									Attempting to cheat or manipulate quiz
									results
								</li>
								<li>
									Using automated tools or bots to take
									quizzes
								</li>
								<li>
									Attempting to reverse engineer or hack the
									platform
								</li>
								<li>Sharing quiz content without permission</li>
								<li>
									Using the service for any illegal or
									unauthorized purpose
								</li>
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>4. Virtual Coins and Rewards</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								Virtual coins earned through QuizMaster have no
								real-world monetary value and cannot be
								exchanged for cash or other valuable
								consideration. Coins are stored locally on your
								device and may be lost if you clear your browser
								data or use a different device.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>5. Intellectual Property</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								All content on QuizMaster, including but not
								limited to quiz questions, answers, graphics,
								logos, and software, is the property of
								QuizMaster or its content suppliers and is
								protected by copyright and other intellectual
								property laws.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>
								6. Privacy and Data Collection
							</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								QuizMaster operates on a privacy-first basis. We
								do not collect personal information or require
								user registration. Quiz progress and coins are
								stored locally on your device. For more
								information, please refer to our Privacy Policy.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>7. Disclaimer of Warranties</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								QuizMaster is provided &quot;as is&quot; without
								any representations or warranties, express or
								implied. We make no representations or
								warranties in relation to this service or the
								information and materials provided on this
								service.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>8. Limitation of Liability</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								QuizMaster will not be liable for any
								consequential, incidental, indirect, or special
								damages arising out of or in connection with
								your use of the service, even if we have been
								advised of the possibility of such damages.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>9. Service Availability</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								We strive to maintain service availability but
								do not guarantee that QuizMaster will be
								available at all times. The service may be
								temporarily unavailable due to maintenance,
								updates, or technical issues.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>10. Modifications to Terms</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								We reserve the right to modify these terms at
								any time. Changes will be effective immediately
								upon posting on this page. Your continued use of
								QuizMaster after any changes constitutes
								acceptance of the new terms.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>11. Termination</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								We may terminate or suspend access to our
								service immediately, without prior notice or
								liability, for any reason whatsoever, including
								without limitation if you breach the Terms.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>12. Contact Information</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								If you have any questions about these Terms of
								Service, please contact us at:
							</p>
							<div className='mt-4'>
								<p>
									<strong>Email:</strong> legal@quizmaster.com
								</p>
								<p>
									<strong>Address:</strong> 123 Knowledge
									Street, Quiz City, QC 12345
								</p>
							</div>
						</CardContent>
					</Card>
				</div>

				<div className='mt-8 text-center'>
					<Link href='/'>
						<Button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white'>
							Back to QuizMaster
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
