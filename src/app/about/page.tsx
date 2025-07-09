'use client'

import { StackVertical } from "@/components/layout/layout-stack/layout-stack"
import Text from "@/components/ui/text/text"
import TextHeading from "@/components/ui/text-heading/text-heading"
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import { motion } from "framer-motion"

export default function AboutPage() {
    return (
        <StackVertical gap="md">
            <div className="flex items-center justify-between">
                <DynamicBreadcrumb 
                    items={[
                        { href: '/', label: 'Home', emoji: '👋' },
                        { label: 'About' }
                    ]}
                />
                <ThemeToggle />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <TextHeading as="h1" weight="bold">
                    About Me
                </TextHeading>
                
                <div className="mt-6 space-y-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Text className="leading-relaxed">
                            I'm an ECE undergrad with a strong interest in computer science, especially in areas like machine learning, backend development, and the math behind how things work. Even though my degree isn't CS, I've always been more drawn to the logic, creativity, and problem-solving side of tech. Over time, I started teaching myself—learning new tools, writing code, and building small projects to bring ideas to life.
                        </Text>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Text className="leading-relaxed">
                            I enjoy understanding the "why" behind systems and models, not just using them. Machine learning especially grabbed my attention—how algorithms learn from data, how math translates into smart systems. That curiosity has kept me going, and I try to learn something new every day, whether it's reading up on a new concept, debugging code, or just exploring how things are built.
                        </Text>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Text className="leading-relaxed">
                            For me, learning isn't a phase—it's how I approach everything. My path into tech wasn't traditional, but it's been driven by a real passion for building, exploring, and improving. And that's what I want to keep doing—growing my skills, working on meaningful problems, and enjoying the process.
                        </Text>
                    </motion.div>
                </div>
            </motion.div>
        </StackVertical>
    )
}

