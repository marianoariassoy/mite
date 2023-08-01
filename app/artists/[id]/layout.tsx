'use client'

import { subMenu } from '@/data/data'
import { useContext } from 'react'
import { useState } from 'react'
import { LanguageContext } from '@/context/language'
import Link from 'next/link'

type lan = 'es' | 'en'

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { id: string }
}) {
  const { lan } = useContext(LanguageContext) as { lan: lan }
  const [section, setSection] = useState(1)

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id='artist'>
      <h1 className='text-3xl lg:text-4xl font-medium mb-6'>
        FELIPE ALVAREZ PARISI
      </h1>
      <div className='flex gap-x-4 lg:gap-x-12 gap-y-2 text-sm flex-wrap mb-4'>
        {subMenu.map((item) => (
          <Link
            href={`/artists/${params.id}/${item.url}`}
            className={`uppercase font-medium hover:underline underline-offset-4 ${
              section === item.id && 'underline'
            }`}
            key={item.id}
            onClick={() => setSection(item.id)}
          >
            {lan === 'es' ? item.title : item.title_en}
          </Link>
        ))}
      </div>

      {children}

      <div className='fixed left-3 top-1/4 lan z-50'>
        <Link
          href='/artists'
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
