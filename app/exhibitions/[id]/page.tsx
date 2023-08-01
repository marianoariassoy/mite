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
    <section id='exhibition'>
      <div
        className='mb-6'
        id='exhibition-title'
      >
        <h1 className='text-3xl lg:text-4xl uppercase italic'>
          Tres amigos imaginarios
        </h1>
        <h2 className='text-3xl lg:text-4xl mb-4 uppercase font-medium'>
          Clara Angélica Castro, Rob Conlazo y Juliana Laffitte
        </h2>
        <h3 className='text-xl'>
          Curador/x: Marina Alessio y Hoco Huoc. Texto: Pablo Schanton
        </h3>
        <h3 className='text-xl opacity-40'>
          15 de diciembre - 6 de marzo 2023
        </h3>
      </div>

      <div id='exhibition-images'>
        <Images />
      </div>

      <div className='fixed left-3 top-1/4 lan z-50'>
        <Link
          href='/exhibitions'
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
