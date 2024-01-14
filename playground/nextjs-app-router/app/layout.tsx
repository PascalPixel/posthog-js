import { ReactNode, Suspense } from 'react'
import { PostHogPageview, Providers } from './providers'
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <Suspense>
                <PostHogPageview />
            </Suspense>

            <Providers>
                <body>{children}</body>
            </Providers>
        </html>
    )
}
