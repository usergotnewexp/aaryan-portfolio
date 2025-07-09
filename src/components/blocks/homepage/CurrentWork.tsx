import { motion } from 'framer-motion'
import { Code, Brain, Database, ChartBar, Server, Sigma } from 'lucide-react'
import { StackVertical } from '@/components/layout/layout-stack/layout-stack'
import Text from '@/components/ui/text/text'
import TextHeading from '@/components/ui/text-heading/text-heading'
import Link from 'next/link'

interface WorkItemProps {
    icon: React.ReactNode;
    text: string;
    delay: number;
    hyperlink?: string;
    hyperlinkText?: string;
    endText?: string;
}

function WorkItem({ icon, text, delay, hyperlink, hyperlinkText, endText }: WorkItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="flex items-center gap-3"
        >
            <div className="text-blue-500">
                {icon}
            </div>
            <Text variant="muted" size="sm">
                {text}
                {hyperlink && hyperlinkText && (
                    <Link href={hyperlink} className="text-blue-500 hover:underline">
                        {hyperlinkText}
                    </Link>
                )}
                {endText && (
                    <span>{endText}</span>
                )}
            </Text>
        </motion.div>
    )
}

export function CurrentWork() {
    const items = [
        {
            icon: <Brain className="w-4 h-4" />,
            text: "Machine Learning"
        },
        {
            icon: <Sigma className="w-4 h-4" />,
            text: "Mathematics"
        },
        {
            icon: <Database className="w-4 h-4" />,
            text: "NumPy & Pandas"
        },
        {
            icon: <Server className="w-4 h-4" />,
            text: "Django"
        },
        {
            icon: <ChartBar className="w-4 h-4" />,
            text: "Scikit-learn"
        },
        {
            icon: <Code className="w-4 h-4" />,
            text: "Python Development"
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            <StackVertical gap="none">
                <TextHeading as="h2">Skills & Expertise</TextHeading>
                <StackVertical gap="md">
                    {items.map((item, index) => (
                        <WorkItem 
                            key={index}
                            icon={item.icon}
                            text={item.text}
                            delay={1.2 + index * 0.1}
                        />
                    ))}
                </StackVertical>
            </StackVertical>
        </motion.div>
    )
} 