import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Disclaimer</h2>
          <p className="text-gray-600 dark:text-gray-300">Last updated: December 28, 2024</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>General Information</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                The information contained on QuizMaster is for general information purposes only. While we endeavor to
                keep the information up to date and correct, we make no representations or warranties of any kind,
                express or implied, about the completeness, accuracy, reliability, suitability, or availability of the
                quiz content, information, products, services, or related graphics contained on the platform.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Educational Purpose</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                QuizMaster is designed for entertainment and educational purposes. The quiz questions and answers are
                compiled from various sources and are intended to provide general knowledge and learning opportunities.
                The content should not be considered as professional advice in any specific field.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accuracy of Information</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                While we strive to provide accurate and up-to-date information in our quizzes, we cannot guarantee the
                absolute accuracy of all content. Information may become outdated, and there may be occasional errors in
                quiz questions or answers. Users should verify important information from authoritative sources.
              </p>
              <p className="mt-4">
                If you notice any inaccuracies in our quiz content, please contact us so we can review and correct the
                information.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Virtual Rewards</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                The virtual coins and rewards earned through QuizMaster have no monetary value and cannot be exchanged
                for real money, goods, or services. These rewards are purely for gamification purposes and to enhance
                the user experience.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Virtual coins have no cash value</li>
                <li>Rewards cannot be transferred between users</li>
                <li>Coin balances may be reset or lost due to technical issues</li>
                <li>We reserve the right to modify the reward system at any time</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Content</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                Some quiz content may be sourced from or reference third-party materials. We do not endorse or take
                responsibility for the accuracy, completeness, or reliability of third-party information. Any reliance
                you place on such information is strictly at your own risk.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Limitations</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>QuizMaster relies on browser localStorage to save user progress. This means:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Progress may be lost if browser data is cleared</li>
                <li>Progress is not synchronized across different devices or browsers</li>
                <li>Technical issues may result in loss of coins or progress</li>
                <li>Platform availability may be affected by maintenance or technical problems</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Responsibility</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>Users are responsible for:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Using the platform in accordance with our Terms of Service</li>
                <li>Verifying information from authoritative sources when needed</li>
                <li>Understanding that quiz results do not constitute professional certification</li>
                <li>Maintaining their own device and browser for optimal platform performance</li>
                <li>Backing up their progress if desired (through browser export features)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                In no event will QuizMaster, its operators, or contributors be liable for any loss or damage including
                without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising
                from loss of data or profits arising out of, or in connection with, the use of this platform.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Platform Availability</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                We strive to maintain platform availability but cannot guarantee uninterrupted service. QuizMaster may
                be temporarily unavailable due to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Scheduled maintenance and updates</li>
                <li>Technical difficulties or server issues</li>
                <li>Internet connectivity problems</li>
                <li>Force majeure events beyond our control</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Updates</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                Quiz content, features, and platform functionality may be updated, modified, or removed at any time
                without prior notice. We reserve the right to discontinue any aspect of the service or modify the terms
                of use as needed.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>External Links</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                QuizMaster may contain links to external websites or resources. These links are provided for convenience
                only, and we do not endorse or take responsibility for the content, privacy policies, or practices of
                external sites.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                If you have any questions about this disclaimer or need clarification on any aspect of our platform,
                please contact us:
              </p>
              <div className="mt-4">
                <p>
                  <strong>Email:</strong> info@quizmaster.com
                </p>
                <p>
                  <strong>Contact Form:</strong>{" "}
                  <Link href="/contact" className="text-purple-600 hover:text-purple-700">
                    Use our contact form
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Link href="/">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Back to QuizMaster</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
