import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import foto from '../public/img/foto-1.png'
import { useState } from 'react'
import { MdHistory } from 'react-icons/md';
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [dataForm, setDataForm] = useState({
    alcool: '',
    gasolina: '',
    resultado:''
  });

  const calculoRentabilidade = (al,ga) => {
    if (al==0||ga==0) {
      return "Insira um valor válido"
    }
      return (al / ga) < 0.7 ? "Álcool é a opção mais vantajosa" : "Gasolina é a opção mais vantajosa";
  }

  const onChangeInput = (event) => setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result1 = calculoRentabilidade(dataForm.alcool, dataForm.gasolina)
    setDataForm({...dataForm, resultado:result1})
    console.log(dataForm.alcool)
    const a = await fetch('http://52.67.104.142:3002/historico/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        numero1: dataForm.alcool,
        numero2: dataForm.gasolina,
        resultado: result1
      })
    })

    const data  = await a.json()
    console.log(data)
  }


  return (
    <>
      <div className={styles.thirteen}>
 
        <Image className={styles['responsive-image']}
          src='/img/combustivel.png'
          alt="13"
          width={4000}
          height={4000}
          priority
        />

        <h1 className={styles.font}>
          Você sabe qual combustível compensa mais abastecer seu carro?<br />
          Utilize a calculadora abaixo:<br /><br />
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="fields">
            <div className="field name">
              <label className={styles.fontLabel}>Preço - Litro alcool (R$):</label><br/>
              <input className={styles.inputs} type="number" name="alcool"  onChange={onChangeInput} value={dataForm.alcool} />
            </div>
          </div>

          <div className="fields">
            <div className="field name">
              <label className={styles.fontLabel}>Preço - Litro gasolina (R$):</label><br/>
              <input className={styles.inputs} type="number" name="gasolina"  onChange={onChangeInput} value={dataForm.gasolina} />
            </div>
          </div>

          <div className="fields">
            <div className="field name">
              <label className={styles.fontLabel}>Resultado do calculo</label><br/>
              <input className={styles.inputs} style={{textAlign: 'center'}} type="String" name="resultado"  onChange={onChangeInput} value={dataForm.resultado} disabled/>
            </div>
          </div>

          <div >
            <button className={styles.btn2} type="submit">Calcular</button>
          </div>
        </form>
        <Link className={styles.btn}  href="/historico">
          <MdHistory size={25} />
        </Link>
      </div>
    </>
  )
}


