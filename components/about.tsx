"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf } from "lucide-react"

export default function About() {
  const skills = [
    { name: "GenAI", icon: <span className="text-2xl">🤖</span>, color: "bg-blue-100 dark:bg-blue-900" },
    { name: "C++", icon: <span className="text-2xl">💻</span>, color: "bg-indigo-100 dark:bg-indigo-900" },
    { name: "Python", icon: <span className="text-2xl">🐍</span>, color: "bg-yellow-100 dark:bg-yellow-900" },
    { name: "JavaScript", icon: <span className="text-2xl">✨</span>, color: "bg-yellow-200 dark:bg-yellow-800" },
    { name: "PHP", icon: <span className="text-2xl">🐘</span>, color: "bg-purple-100 dark:bg-purple-900" },
    { name: "SQL", icon: <span className="text-2xl">🗄️</span>, color: "bg-green-100 dark:bg-green-900" },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-jungle-950 relative overflow-hidden">
      {/* Jungle background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 bg-contain"
          style={{
            backgroundImage: `url('/images/django-jungle.png')`,
            backgroundPosition: "center",
            backgroundSize: "80%",
            backgroundRepeat: "no-repeat",
            filter: "blur(2px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 flex items-center justify-center gap-2">
            <Leaf className="h-6 w-6 text-jungle-500 dark:text-jungle-400" />
            About Me
            <Leaf className="h-6 w-6 text-jungle-500 dark:text-jungle-400" />
          </h2>
          <div className="h-1 w-20 bg-jungle-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-b from-jungle-800/50 to-jungle-950/50 rounded-lg overflow-hidden relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <img
                  src="/images/nelayn.png"
                  alt="Nelayn Abbas - Full Stack Developer"
                  className="w-full h-full object-contain p-4"
                />
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-jungle-900/90 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">Nelayn Abbas</h3>
                <p className="text-jungle-200">Full Stack Developer & Teaching Assistant</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-700 dark:text-slate-300">
              I am a Full Stack Developer with experience in freelance projects, handling both frontend and backend development. My expertise lies in building scalable web applications, developing APIs, and integrating databases while collaborating with other developers to deliver high-quality solutions.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              I also have a passion for teaching and sharing my knowledge. As a Teaching Assistant at the National University of Computer and Emerging Sciences, I assist students in grasping key concepts, solving complex problems, and improving their coding skills. My role involves leading lab sessions, providing one-on-one guidance, creating assignments, and supporting students in their academic journey.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              I am currently pursuing a Bachelor of Science in Computer Science from the National University of Computer and Emerging Sciences, where I am learning advanced topics in programming, data structures, and algorithms. My goal is to continue learning and growing as a developer and educator, and to contribute to the advancement of technology and education.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {skills.map((skill, index) => (
                <Card key={index} className={`border-none ${skill.color}`}>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="mb-2">{skill.icon}</div>
                    <span className="font-medium text-slate-800 dark:text-white">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
