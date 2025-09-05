"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Coins, Trophy, Target, Star, Award, TrendingUp, Calendar, CheckCircle } from "lucide-react"

interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  requirement: number
  current: number
  reward: number
  unlocked: boolean
}

export default function WalletPage() {
  const [userCoins, setUserCoins] = useState(0)
  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([])
  const [totalQuizzes] = useState(15)
  const [achievements, setAchievements] = useState<Achievement[]>([])

  useEffect(() => {
    // Load user data from localStorage
    const coins = localStorage.getItem("quizCoins")
    const completed = localStorage.getItem("completedQuizzes")

    if (coins) setUserCoins(Number.parseInt(coins))
    if (completed) setCompletedQuizzes(JSON.parse(completed))

    // Initialize achievements
    const completedCount = completed ? JSON.parse(completed).length : 0
    const achievementsList: Achievement[] = [
      {
        id: "first_quiz",
        title: "First Steps",
        description: "Complete your first quiz",
        icon: Target,
        requirement: 1,
        current: completedCount,
        reward: 10,
        unlocked: completedCount >= 1,
      },
      {
        id: "quiz_master",
        title: "Quiz Master",
        description: "Complete 5 quizzes",
        icon: Trophy,
        requirement: 5,
        current: completedCount,
        reward: 50,
        unlocked: completedCount >= 5,
      },
      {
        id: "knowledge_seeker",
        title: "Knowledge Seeker",
        description: "Complete 10 quizzes",
        icon: Star,
        requirement: 10,
        current: completedCount,
        reward: 100,
        unlocked: completedCount >= 10,
      },
      {
        id: "completionist",
        title: "Completionist",
        description: "Complete all 15 quizzes",
        icon: Award,
        requirement: 15,
        current: completedCount,
        reward: 200,
        unlocked: completedCount >= 15,
      },
      {
        id: "coin_collector",
        title: "Coin Collector",
        description: "Earn 500 coins",
        icon: Coins,
        requirement: 500,
        current: Number.parseInt(coins || "0"),
        reward: 75,
        unlocked: Number.parseInt(coins || "0") >= 500,
      },
      {
        id: "high_achiever",
        title: "High Achiever",
        description: "Earn 1000 coins",
        icon: TrendingUp,
        requirement: 1000,
        current: Number.parseInt(coins || "0"),
        reward: 150,
        unlocked: Number.parseInt(coins || "0") >= 1000,
      },
    ]

    setAchievements(achievementsList)
  }, [])

  const completionPercentage = (completedQuizzes.length / totalQuizzes) * 100

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Your Wallet</h1>
          <p className="text-gray-600 dark:text-gray-300">Track your progress, coins, and achievements</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                  <Coins className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Total Coins</p>
                  <p className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">{userCoins}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Completed</p>
                  <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                    {completedQuizzes.length}/{totalQuizzes}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Achievements</p>
                  <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                    {achievements.filter((a) => a.unlocked).length}/{achievements.length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Progress</p>
                  <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                    {completionPercentage.toFixed(0)}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Progress Section */}
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
                <Calendar className="w-5 h-5" />
                <span>Quiz Progress</span>
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Your journey through all quiz categories
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Completion</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {completedQuizzes.length}/{totalQuizzes}
                  </span>
                </div>
                <Progress value={completionPercentage} className="h-3" />
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 dark:text-white">Recent Activity</h4>
                {completedQuizzes.length > 0 ? (
                  <div className="space-y-2">
                    {completedQuizzes.slice(-3).map((quizId, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Quiz {quizId} completed</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    No quizzes completed yet. Start your first quiz!
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Achievements Section */}
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
                <Award className="w-5 h-5" />
                <span>Achievements</span>
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Unlock rewards by reaching milestones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement) => {
                  const IconComponent = achievement.icon
                  const progress = Math.min((achievement.current / achievement.requirement) * 100, 100)

                  return (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        achievement.unlocked
                          ? "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20"
                          : "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            achievement.unlocked ? "bg-green-100 dark:bg-green-900/30" : "bg-gray-100 dark:bg-gray-600"
                          }`}
                        >
                          <IconComponent
                            className={`w-6 h-6 ${
                              achievement.unlocked
                                ? "text-green-600 dark:text-green-400"
                                : "text-gray-500 dark:text-gray-400"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4
                              className={`font-semibold ${
                                achievement.unlocked
                                  ? "text-green-900 dark:text-green-100"
                                  : "text-gray-900 dark:text-white"
                              }`}
                            >
                              {achievement.title}
                            </h4>
                            {achievement.unlocked && (
                              <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                                +{achievement.reward} coins
                              </Badge>
                            )}
                          </div>
                          <p
                            className={`text-sm mb-2 ${
                              achievement.unlocked
                                ? "text-green-700 dark:text-green-300"
                                : "text-gray-600 dark:text-gray-300"
                            }`}
                          >
                            {achievement.description}
                          </p>
                          {!achievement.unlocked && (
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  {achievement.current}/{achievement.requirement}
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{progress.toFixed(0)}%</span>
                              </div>
                              <Progress value={progress} className="h-2" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
