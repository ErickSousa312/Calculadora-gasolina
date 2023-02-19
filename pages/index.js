import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import foto from '../public/img/foto-1.png'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [dataForm, setDataForm] = useState({
    etanol: '',
    gasolina: ''
  });
  const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  const sendNumber = async e => {
    e.preventDefault()
    console.log(dataForm)
  }

  return (
    <>
      <div className={styles.thirteen}>
 
        <Image className={styles['responsive-image']}
          src='/img/combustivel.png'
          alt="13"
          width={4000}
          height={4000}
        />

        <h1 className={styles.font}>
          Você sabe qual combustível compensa mais abastecer seu carro?<br />
          Utilize a calculadora abaixo:<br /><br />
        </h1>

        <form onSubmit={sendNumber}>
          <div className="fields">
            <div className="field name">
              <label className={styles.fontLabel}>Preço - litro etanol (R$):</label><br/>
              <input className={styles.inputs} type="number" name="name"  onChange={onChangeInput} value={dataForm.name} />
            </div>
          </div>

          <div className="fields">
            <div className="field name">
              <label className={styles.fontLabel}>Preço - litro gasolina (R$):</label><br/>
              <input className={styles.inputs} type="number" name="email"  onChange={onChangeInput} value={dataForm.email} />
            </div>
          </div>
          <div >
            <button className={styles.buttonArea} type="submit">Calcular</button>
          </div>
        </form>

      </div>

    </>
  )
}
