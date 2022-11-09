import { Star, Trash } from 'phosphor-react';
import styles from './Details.module.css';
import { Movie } from './Movie';
import { useState } from 'react';
  

export function Details(props) {

    
    function handleDeleteMovie(){
        console.log('Deletar')
        //onDeleteMovie(movie)
    }


   // console.log(props)
    
    
    return(
        <div className={styles.boxDetails}>

            <div className={styles.overlayImg}>
                <img src={props.cover} alt="Rei Leão Capa" />
            </div>

            <div className={styles.desciptionDetails}>
                <div>
                    <header>
                        <div title='Recomendação'>
                            <Star size={20} weight="fill"/>
                            <Star size={20} weight="fill"/>
                            <Star size={20} weight="fill"/>
                            <Star size={20} weight="fill"/>
                            <Star size={20} weight="bold"/>                            
                        </div>
                        <div title='Deletar'>
                            <button onClick={handleDeleteMovie} title="Deletar Filme">
                                <Trash size={20}/>
                            </button>
                        </div>
                    </header>
                    
                    <p className={styles.year}>{props.year}</p>
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                    
                    <footer>
                        <button>ASSISTIR AO TRAILER</button>
                    </footer>
                </div>
            </div>

        </div>
    )
}