import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
	return (
		<div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
			{/* Hero Section */}
			<div className='container mx-auto px-4 py-8 max-w-4xl'>
				<div className='text-center mb-8'>
					<div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4'>
						<Shield className='w-8 h-8 text-white' />
					</div>
					<h2 className='text-3xl font-bold mb-4'>Privacy Policy</h2>
					<p className='text-gray-600 dark:text-gray-300'>
						Last updated: December 28, 2024
					</p>
				</div>

				<div className='space-y-6'>
					<Card>
						<CardHeader>
							<CardTitle>Our Commitment to Privacy</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								At QuizMaster, we believe in privacy by design.
								This Privacy Policy explains how we collect,
								use, and protect your information when you use
								our quiz platform. We are committed to ensuring
								that your privacy is protected and that you have
								control over your personal information.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Information We Collect</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<h4 className='font-semibold mb-2'>
								Personal Information
							</h4>
							<p>
								QuizMaster operates on a no-registration basis.
								We do not collect, store, or process any
								personal information such as names, email
								addresses, phone numbers, or other identifying
								information unless you voluntarily provide it
								through our contact form.
							</p>

							<h4 className='font-semibold mb-2 mt-4'>
								Quiz Data
							</h4>
							<p>
								Your quiz progress, scores, and earned coins are
								stored locally on your device using
								browser&apos;s localStorage. This data never
								leaves your device and is not transmitted to our
								servers.
							</p>

							<h4 className='font-semibold mb-2 mt-4'>
								Technical Information
							</h4>
							<p>
								We may collect basic technical information such
								as:
							</p>
							<ul className='list-disc pl-6 mt-2 space-y-1'>
								<li>Browser type and version</li>
								<li>Device type and screen resolution</li>
								<li>
									General location (country/region level only)
								</li>
								<li>
									Pages visited and time spent on the platform
								</li>
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>How We Use Information</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								The limited information we collect is used
								solely for:
							</p>
							<ul className='list-disc pl-6 mt-4 space-y-2'>
								<li>
									Providing and maintaining our quiz service
								</li>
								<li>
									Improving user experience and platform
									performance
								</li>
								<li>
									Analyzing usage patterns to enhance our
									content
								</li>
								<li>
									Responding to user inquiries and support
									requests
								</li>
								<li>
									Ensuring platform security and preventing
									abuse
								</li>
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Local Storage</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								QuizMaster uses your browser&apos;s localStorage
								to save your quiz progress and earned coins.
								This information is stored locally on your
								device and includes:
							</p>
							<ul className='list-disc pl-6 mt-4 space-y-2'>
								<li>Total coins earned</li>
								<li>List of completed quizzes</li>
								<li>Achievement progress</li>
								<li>User preferences (if any)</li>
							</ul>
							<p className='mt-4'>
								You can clear this data at any time by clearing
								your browser&apos;s storage or using the
								browser&apos;s developer tools. Note that
								clearing this data will reset your progress and
								coin balance.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Cookies and Tracking</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								QuizMaster uses minimal cookies and tracking
								technologies:
							</p>
							<ul className='list-disc pl-6 mt-4 space-y-2'>
								<li>
									<strong>Essential Cookies:</strong> Required
									for basic platform functionality
								</li>
								<li>
									<strong>Analytics:</strong> Anonymous usage
									statistics to improve our service
								</li>
								<li>
									<strong>No Advertising Cookies:</strong> We
									do not use cookies for advertising purposes
								</li>
							</ul>
							<p className='mt-4'>
								You can control cookie settings through your
								browser preferences. Disabling essential cookies
								may affect platform functionality.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Data Sharing and Disclosure</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								We do not sell, trade, or otherwise transfer
								your information to third parties. We may share
								information only in the following circumstances:
							</p>
							<ul className='list-disc pl-6 mt-4 space-y-2'>
								<li>With your explicit consent</li>
								<li>
									To comply with legal obligations or court
									orders
								</li>
								<li>
									To protect our rights, property, or safety
								</li>
								<li>
									In connection with a business transfer or
									merger
								</li>
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Data Security</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								We implement appropriate security measures to
								protect against unauthorized access, alteration,
								disclosure, or destruction of information. These
								measures include:
							</p>
							<ul className='list-disc pl-6 mt-4 space-y-2'>
								<li>
									Secure HTTPS encryption for all data
									transmission
								</li>
								<li>Regular security audits and updates</li>
								<li>
									Limited data collection and storage
									practices
								</li>
								<li>Access controls and monitoring systems</li>
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Your Rights and Choices</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								You have the following rights regarding your
								information:
							</p>
							<ul className='list-disc pl-6 mt-4 space-y-2'>
								<li>
									<strong>Access:</strong> Request information
									about data we may have about you
								</li>
								<li>
									<strong>Deletion:</strong> Clear your local
									storage data at any time
								</li>
								<li>
									<strong>Opt-out:</strong> Disable analytics
									cookies through browser settings
								</li>
								<li>
									<strong>Portability:</strong> Export your
									locally stored quiz data
								</li>
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Children&apos;s Privacy</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								QuizMaster is designed to be family-friendly and
								suitable for users of all ages. We do not
								knowingly collect personal information from
								children under 13. If you are a parent or
								guardian and believe your child has provided
								personal information, please contact us
								immediately.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>International Users</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								QuizMaster is accessible globally. If you are
								accessing our service from outside the United
								States, please be aware that your information
								may be transferred to, stored, and processed in
								the United States where our servers are located.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Changes to This Policy</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								We may update this Privacy Policy from time to
								time. We will notify you of any changes by
								posting the new Privacy Policy on this page and
								updating the &quot;Last updated&quot; date. We
								encourage you to review this Privacy Policy
								periodically for any changes.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Contact Us</CardTitle>
						</CardHeader>
						<CardContent className='prose dark:prose-invert max-w-none'>
							<p>
								If you have any questions about this Privacy
								Policy or our privacy practices, please contact
								us:
							</p>
							<div className='mt-4'>
								<p>
									<strong>Email:</strong>{" "}
									privacy@quizmaster.com
								</p>
								<p>
									<strong>Address:</strong> 123 Knowledge
									Street, Quiz City, QC 12345
								</p>
								<p>
									<strong>Contact Form:</strong>{" "}
									<Link
										href='/contact'
										className='text-purple-600 hover:text-purple-700'>
										Use our contact form
									</Link>
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
