import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import foto from '../public/img/foto-1.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.thirteen}>
        <Image
          src='/img/combustivel.png'
          alt="13"
          width={400}
          height={310}
          priority
        />
        <h1 className={styles.font}>
          Você sabe qual combustível compensa mais abastecer seu carro?
        </h1>
      </div>

    </>
  )
}
