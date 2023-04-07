import React from 'react'
import styles from './Contato.module.css'
import foto from '../Components/img/contato.jpg'
import Head from './Head'

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
        <Head title='Contato' description = 'Entre em contato' />
        <img src={foto} alt='Maquina de escrever'></img>
        <div>
            <h1>Entre em contato</h1>
            <ul className={styles.dados}>
            <li> Cassiano</li>
                <li> 9999-9999</li>
                <li> Rua ali na quebrada, 999</li>
            </ul>
        </div>
    </section>
  )
}

export default Contato