'use client'

import Link from 'next/link'
import { useContext } from 'react'
import { LanguageContext } from '@/context/language'
import Images from '@/components/Images'

type lan = 'es' | 'en'

const backToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const page = () => {
  const { lan } = useContext(LanguageContext) as { lan: lan }

  return (
    <section id='fair'>
      <div
        className='mb-6'
        id='fair-title'
      >
        <h1 className='text-3xl lg:text-4xl mb-4 uppercase font-medium'>
          UNTITLED, Miami
        </h1>
        <h3 className='text-xl'>
          Artistas: Paula Castro, Laura Códega, Valeria Maggi, Marcela Sinclair.
        </h3>
        <h3 className='text-xl opacity-40'>4 - 8 de diciembre 2019</h3>

        <a
          href='#'
          target='_blank'
          rel='noopener noreferrer'
          className='text-xl mt-4 block'
        >
          {lan === 'es' ? 'VER SITIO' : 'VISIT SITE'}
        </a>
      </div>

      <div id='fair-images'>
        <Images />
      </div>

      <div className='fixed left-3 top-1/4 lan z-50'>
        <Link
          href='/fairs'
          className='underline-offset-4 hover:underline'
        >
          {lan === 'es' ? 'VOLVER' : 'BACK'}
        </Link>
      </div>
      <div className='fixed left-3 bottom-16 lan z-50'>
        <button
          className='underline-offset-4 hover:underline'
          onClick={backToTop}
        >
          {lan === 'es' ? 'IR ARRIBA' : 'BACK TO TOP'}
        </button>
      </div>
    </section>
  )
}

export default page
