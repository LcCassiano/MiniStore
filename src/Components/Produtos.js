import React from 'react'
import styles from './Produtos.module.css'
import { json } from 'react-router'
import { Link } from 'react-router-dom';
import Head from './Head';

export const Produtos = () => {
    const [produtos, setProdutos] = React.useState(null);

    React.useEffect (() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto').then((r) => r.json()).then((json) => setProdutos(json));
    }, []);
    if(produtos === null ) return null 
    console.log(produtos)
  return (
    <section className={`${styles.produtos} animeLeft`}>{produtos.map((produto) => (<Link to={`produto/${produto.id}`} key={produto.id}>
      <Head title={`NanoTech | home`}
      description="Descrevendo os produtos"
      />
    <h1 className={styles.nome}>{produto.nome}</h1>
    <img src={produto.fotos[0].src } alt={produto.fotos[0].descricao} >{}</img>
    </Link>))}</section>
  )
}

export default Produtos