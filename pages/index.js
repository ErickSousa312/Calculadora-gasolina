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
    gasolina: '',
    resultado:''
  });

  const calculoRentabilidade = (al,ga) => {
    const resultado = al/ga
    if(resultado<0.7){
      return "álcool é a opção mais vantajosa"
    }else{
      return "gasolina é a opção mais vantajosa"
    }
  }

  const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  const sendNumber = async e => {
    e.preventDefault()
    setDataForm({...dataForm, resultado:calculoRentabilidade(dataForm.etanol,dataForm.gasolina)})
 
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

        <form onSubmit={sendNumber}>
          <div className="fields">
            <div className="field name">
              <label className={styles.fontLabel}>Preço - Litro etanol (R$):</label><br/>
              <input className={styles.inputs} type="number" name="etanol"  onChange={onChangeInput} value={dataForm.etanol} />
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
              <input className={styles.inputs} type="String" name="resultado"  onChange={onChangeInput} value={dataForm.resultado} />
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
