'use client'

import { motion } from 'framer-motion'
import { monoFont } from '@/styles/fonts/fonts'
import { cn } from '@/lib/utils/utils'
import TextHeading from '@/components/ui/text-heading/text-heading'
import Text from '@/components/ui/text/text'
import { StackVertical } from '@/components/layout/layout-stack/layout-stack'
import Link from 'next/link'
import Image from 'next/image'
import Ruler from '@/components/ui/ruler/ruler'
import { List, ListItem } from '@/components/ui/list/list'

export function HeroSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative pb-8"
        >
            <div className="relative">
                <StackVertical gap="xs">
                    <motion.div
                        animate={{ 
                            y: [0, -10, 0],
                        }}
                        transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className={cn("text-2xl sm:text-3xl md:text-4xl", monoFont.className)}
                    >
                        🚀
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <TextHeading as="h1" className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                            Welcome to My Portfolio
                        </TextHeading>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="relative z-10"
                    >
                        <Text className="text-lg">
                            Hi! I'm Aryan.
                        </Text>

                        <Ruler color='colorless' marginTop='lg' marginBottom='none'/>

                        <Text>
                            I'm a passionate developer who loves creating amazing web experiences. Welcome to my digital space!
                        </Text>

                        <Ruler color='colorless' marginTop='lg' marginBottom='none'/>

                        <Text>
                            Check out my latest work in the{' '}
                            <Link href="/projects" className="text-blue-500 font-bold hover:underline">
                                projects
                            </Link>
                            {' '}section.
                        </Text>

                        <Ruler color='colorless' marginTop='lg' marginBottom='none'/>

                        <Text>
                            I share my thoughts and experiences on my{' '}
                            <Link href="/blog" className="text-blue-500 font-bold hover:underline">
                                blog
                            </Link>
                            .
                        </Text>
                    </motion.div>
                </StackVertical>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 -mb-8"
            >
                <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden">
                    <Image
                        className="object-cover"
                        fill
                        src="/interstellar-.webp"
                        alt="A stunning view of space from Interstellar"
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
            </motion.div>
        </motion.div>
    )
} 
