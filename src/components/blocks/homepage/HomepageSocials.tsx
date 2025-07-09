'use client'

import TextHeading from '@/components/ui/text-heading/text-heading'
import Text from '@/components/ui/text/text'
import Link from 'next/link'

export function HomepageSocials() {
    return (
        <div>
            <TextHeading as="h2" weight="bold">Let's Connect</TextHeading>
            <Text>
                Feel free to reach out! You can contact me at <Link href="mailto:aryangahlot50@gmail.com" className="text-blue-500 hover:underline">aryangahlot50@gmail.com</Link> or connect with me on <Link href="https://x.com/indeedlemonpie" className="text-blue-500 hover:underline">X (formerly Twitter)</Link>.
            </Text>
        </div>
    )
} 