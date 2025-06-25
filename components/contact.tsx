"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, FileText, Code } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset the submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss how I can help your business? Let's talk!
          </p>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-lg"
          >
            <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 h-full mx-auto">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-row items-center gap-3 justify-center">
                      <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                        <p className="text-slate-800 dark:text-white font-medium">nelaynabbas5@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                    <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Connect with me</h4>
                    <div className="flex gap-4 justify-center items-center mt-4">
                      <a
                        href="https://www.linkedin.com/in/nelayn-abbas/"
                        className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                      </a>
                      <a
                        href="https://github.com/NelaynAbbas"
                        className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                      </a>
                      <a
                        href="https://drive.google.com/file/d/1Ao_iuetlGHoEBmSY5BLIq2HTw9zy162X/view?usp=sharing"
                        className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        aria-label="Resume"
                      >
                        <FileText className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
