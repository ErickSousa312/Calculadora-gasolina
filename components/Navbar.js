import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <ol>
        <Link href="/">Home</Link>
      </ol>
      <ol>
        <Link href="/views">Festas</Link>
      </ol>
      <ol>
        <Link href="/products">Serviços</Link>
      </ol>
      <ol>
        <Link href="/about">Sobre</Link>
      </ol>
      <ol>
        <Link href="/contact">Contato</Link>
      </ol>
    </ul>
  )
}
