import type { Metadata } from 'next'
import '@/styles/globals.css'
import '@/styles/main.min.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Lan from '@/components/Lan'
import { myFont } from '@/components/Fonts'
import { LanguageProvider } from '@/context/language'

export const metadata: Metadata = {
  title: 'Mite Galería',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='es'
      className={myFont.className}
    >
      <LanguageProvider>
        <body>
          <Header />
          <main className='grid pr-4 grid-cols-[4rem_1fr] mt-3 lg:mt-36 lg:grid-cols-[11rem_1fr]'>
            <aside>
              <Lan />
            </aside>
            {children}
          </main>
          <Footer />
        </body>
      </LanguageProvider>
    </html>
  )
}
