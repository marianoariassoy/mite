'use client'
import { useContext } from 'react'
import { texts } from '@/data/data'
import { LanguageContext } from '@/context/language'

type lan = 'es' | 'en'
const year = new Date().getFullYear()

const Footer = () => {
  const { lan } = useContext(LanguageContext) as { lan: lan }

  return (
    <footer className='text-sm mt-24 mb-8 pl-16 pr-4 lg:p-0 lg:justify-center lg:flex'>
      <div>&copy; Mite galería {year} | Av. Córdoba 380, Buenos Aires | </div>
      <div>
        {texts[lan].footerTxt} |{' '}
        <a href='mailto:info@mitegaleria.com.ar'>info@mitegaleria.com.ar</a>
      </div>
    </footer>
  )
}

export default Footer
