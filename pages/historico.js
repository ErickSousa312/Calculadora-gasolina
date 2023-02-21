import { useState, useEffect } from 'react';
import styles from '@/styles/Historico.module.css';
import { MdHistory,MdArrowBackIos } from 'react-icons/md';
import Link from 'next/link'


function historico() {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3002/historico/');
        if (response.ok) {
          const data = await response.json();
          setDados(data);
          console.log(data)
          setErro(null);
        } else {
          const error = await response.json();
          setDados(null);
          setErro(error.message);
        }
      } catch (error) {
        setDados(null);
        setErro('Ocorreu um erro ao processar sua solicitação.');
      }
    }
    fetchData();
  }, []);

  return (
        <div className={styles.container}>
          <h1 className={styles.title}>Histórico</h1>
          <Link className={styles.btn}  href="/">
          <MdArrowBackIos className={styles.iconBack} size={25} />
        </Link>
          <div className={styles.grid}>
            {dados?.map((todo) => (
              <div key={todo.id} className={styles.item}>
                <p className={styles.item}>Litro álcool: {todo.numero1} R$</p>
                <p className={styles.item}>Litro gasolina: {todo.numero2} R$</p>
                <p className={styles.item}>{todo.resultado}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default historico;
