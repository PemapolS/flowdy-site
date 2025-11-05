import type { Metadata } from 'next'
import '../index.css'

export const metadata: Metadata = {
  title: 'Flowdy the Husky',
  description: 'Website of the furry persona of Flowdy the Husky.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
        <div id="root">{children}</div>
    </body>
    </html>
  )
}