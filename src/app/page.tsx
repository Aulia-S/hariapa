'use client'

import { useState } from 'react'
import Calendar from './components/Calendar'
import Setting from './components/Setting'
import Modal from './components/Modal'

export default function Home() {
  const [year, setYear] = useState<number>(new Date().getFullYear())

  return (
    <main className='py-3'>
      <section className='m-3'>
        <Setting year={year} setYear={setYear} />
      </section>
      <section className='m-3'>
        <Calendar year={year} />
      </section>
    </main>
  )
}
