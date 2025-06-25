"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export default function Blog() {
  // Placeholder blog posts - these will be replaced with real ones as you create content
  const blogPosts = [
    {
      title: "AI Math Maestro: Riddles, Memes & Emojis",
      description: "How I built an AI-powered math riddle generator that uses memes and emojis to make learning fun.",
      date: "May 2024",
      image: "/images/ai-math-maestro.png",
      link: "https://medium.com/@nelaynabbas5/ai-math-maestro-riddles-memes-emojis-4b10d760e88a",
    },
    {
      title: "Creating Poetry Generation with RNN using PyTorch and Streamlit",
      description: "A step-by-step guide to building an AI poetry generator using RNNs, PyTorch, and Streamlit.",
      date: "April 2024",
      image: "/images/poetry-rnn.png",
      link: "https://medium.com/@nelaynabbas5/creating-poetry-generation-with-rnn-using-pytorch-and-streamlit-42b2f95594be",
    },
    {
      title: "Creating an AI-powered Speech-to-Video Avatar with Deep Learning Models",
      description: "How I created a speech-to-video avatar using deep learning for realistic AI-driven video generation.",
      date: "March 2024",
      image: "/images/speech-to-avatar.png",
      link: "https://medium.com/@nelaynabbas5/creating-an-ai-powered-speech-to-video-avatar-with-deep-learning-models-bd885454b328",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Blog & Case Studies</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Technical articles and case studies to share knowledge and demonstrate expertise.
          </p>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="text-xl text-slate-800 dark:text-white">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-slate-600 dark:text-slate-300 text-base">
                    {post.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                    asChild
                  >
                    <a href={post.link} className="flex items-center gap-1">
                      Read more <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
