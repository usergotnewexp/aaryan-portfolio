'use client'

import React from 'react'
import { StackVertical } from "@/components/layout/layout-stack/layout-stack"
import Text from "@/components/ui/text/text"
import TextHeading from "@/components/ui/text-heading/text-heading"
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import { Github } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
    return (
        <StackVertical gap="md">
            <div className="flex items-center justify-between">
                <DynamicBreadcrumb 
                    items={[
                        { href: '/', label: 'Home', emoji: '🚀' },
                        { label: 'Projects' }
                    ]}
                />
                <ThemeToggle />
            </div>

            <div>
                <TextHeading as="h1" weight="bold">
                    Projects
                </TextHeading>
                <Text variant="muted" size="sm">
                    A showcase of my work and projects. Check back soon for updates!
                </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Mini Projects Section */}
                <div className="col-span-full">
                    <TextHeading as="h2" weight="bold" className="text-xl mb-4">
                        Mini Projects
                    </TextHeading>
                </div>

                {/* Regression from Scratch Project */}
                <div className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                        <TextHeading as="h3" weight="bold" className="text-lg">
                            Regression from Scratch
                        </TextHeading>
                        <Link 
                            href="https://github.com/aryangahlot50/Regression-from-Scratch"
                            target="_blank"
                            className="text-blue-500 hover:text-blue-600 transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </Link>
                    </div>
                    <Text variant="muted" size="sm" className="mb-4">
                        Implementation of various regression algorithms from scratch using NumPy. Built to understand the mathematical foundations and implementation details of regression algorithms.
                    </Text>
                    <div className="flex flex-wrap gap-2">
                        {["Python", "NumPy", "Machine Learning", "Mathematics"].map((tag, index) => (
                            <span 
                                key={index}
                                className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* FinGenius Project */}
                <div className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                        <TextHeading as="h3" weight="bold" className="text-lg">
                            FinGenius
                        </TextHeading>
                        <Link 
                            href="https://fingen.netlify.app/"
                            target="_blank"
                            className="text-blue-500 hover:text-blue-600 transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </Link>
                    </div>
                    <Text variant="muted" size="sm" className="mb-4">
                        FinGenius is an AI-powered financial advisory platform that provides access to hedge fund-level investment strategies and personalized portfolio management.
                    </Text>
                    <div className="flex flex-wrap gap-2">
                        {["AI", "Finance", "Web App", "Portfolio Management"].map((tag, index) => (
                            <span 
                                key={index}
                                className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Coming Soon Card */}
                <div className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors">
                    <TextHeading as="h3" weight="bold" className="text-lg mb-2">
                        More Coming Soon
                    </TextHeading>
                    <Text variant="muted" size="sm">
                        More projects will be added here. Stay tuned!
                    </Text>
                </div>
            </div>
        </StackVertical>
    )
} 
