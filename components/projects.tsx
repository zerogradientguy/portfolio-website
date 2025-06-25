"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Leaf } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Wisdom Wave | LLM based Web App",
      description: "AI platform delivering personalized, textbook-based answers to enhance learning and collaboration.",
      techStack: ["React.js", "Flask", "ChromaDB", "MongoDB", "LangChain", "Ollama"],
      github: "https://github.com/NelaynAbbas/WisdomWave",
      demo: null,
      blog: null,
      image: "/images/wisdomwave.png",
    },
    {
      title: "MediVoice AI | Voice Medical Assistant",
      description: "An AI-driven clinical assistant using RAG over the MIMIC-IV-Ext dataset, delivering accurate, context-aware medical information.",
      techStack: ["FastAPI", "Hugging Face Transformers", "RAG"],
      github: "https://github.com/NelaynAbbas/Clinical-RAG-System",
      demo: null,
      blog: null,
      image: "/images/medivoice.png",
    },
    {
      title: "CareerConnect | AI-powered Job Recommendation Portal",
      description: "Implemented semantic similarity matching using Word2Vec/BERT models to align job descriptions with candidate skills.",
      techStack: ["React.js", "Flask", "MongoDB", "Word2Vec", "BERT"],
      github: "https://github.com/NelaynAbbas/careerconnect",
      demo: null,
      blog: null,
      image: "/images/careerconnect.png",
    },
    {
      title: "TrustSitter | Secure Babysitter & Pet Sitter Platform",
      description: "Developed an AI-powered platform to connect babysitters, pet sitters, and home sitters with clients, ensuring trust and security.",
      techStack: ["Flask", "React.js", "MongoDB", "SQLite", "NLP"],
      github: "https://github.com/NelaynAbbas/TrustSitter",
      demo: null,
      blog: null,
      image: "/images/trustsitter.png",
    },
    {
      title: "Influent | Influencer Marketing Platform",
      description: "Web platform where brands can find verified influencers for their marketing campaigns.",
      techStack: ["JavaScript", "Python", "Web"],
      github: "https://github.com/NelaynAbbas/influent",
      demo: null,
      blog: null,
      image: "/images/influent.png",
    },
    {
      title: "Clinical-RAG-System | Clinical Insights with RAG",
      description: "Retrieval-Augmented Generation (RAG) app for clinical insights and answers based on the MIMIC-IV-Ext dataset.",
      techStack: ["Python", "RAG", "MIMIC-IV-Ext"],
      github: "https://github.com/NelaynAbbas/Clinical-RAG-System",
      demo: null,
      blog: null,
      image: "/images/clinicalrag.png",
    },
    {
      title: "Voice-to-Voice Translation | Healthcare Translation Web App",
      description: "Real-time multilingual communication app for healthcare, using speech-to-text, translation, and speech synthesis.",
      techStack: ["Python", "Streamlit", "Google Translate", "gTTS", "SpeechRecognition"],
      github: "https://github.com/NelaynAbbas/Voice-to-Voice-Translation",
      demo: null,
      blog: null,
      image: "/images/voicetovoice.png",
    },
    {
      title: "Poetica | AI Poetry Generator",
      description: "AI-powered platform for generating creative poetry.",
      techStack: ["AI", "Web"],
      github: "https://github.com/NelaynAbbas/Poetica",
      demo: null,
      blog: null,
      image: "/images/poetica.png",
    },
    {
      title: "Avatar Lip Sync | Realistic Avatar Animation",
      description: "Avatar animation project for realistic lip sync using AI.",
      techStack: ["AI", "Animation", "Web"],
      github: "https://github.com/NelaynAbbas/Avatar-lip-sync",
      demo: null,
      blog: null,
      image: "/images/avatar-lip-sync.png",
    },
    {
      title: "Paypal API Payment Gateway",
      description: "Integration of Paypal API for secure payment gateway solutions.",
      techStack: ["API", "Paypal", "Payments"],
      github: "https://github.com/NelaynAbbas/Paypal-API-PaymentGateway",
      demo: null,
      blog: null,
      image: "/images/paypal-api.png",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-jungle-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 flex items-center justify-center gap-2">
            <Leaf className="h-6 w-6 text-jungle-500 dark:text-jungle-400" />
            Projects
            <Leaf className="h-6 w-6 text-jungle-500 dark:text-jungle-400" />
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of my backend development work, featuring Django REST APIs and related technologies.
          </p>
          <div className="h-1 w-20 bg-jungle-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-slate-200 dark:border-jungle-800 hover:shadow-lg transition-shadow duration-300 dark:bg-jungle-800/30">
                <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-jungle-800 relative group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jungle-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 dark:text-white">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-jungle-100 dark:bg-jungle-700/50 text-jungle-800 dark:text-jungle-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-slate-600 dark:text-slate-300 text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" asChild className="border-jungle-200 dark:border-jungle-700">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" /> GitHub
                    </a>
                  </Button>
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild className="border-jungle-200 dark:border-jungle-700">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" /> Demo
                      </a>
                    </Button>
                  )}
                  {project.blog && (
                    <Button variant="outline" size="sm" asChild className="border-jungle-200 dark:border-jungle-700">
                      <a href={project.blog} target="_blank" rel="noopener noreferrer">
                        Blog
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
