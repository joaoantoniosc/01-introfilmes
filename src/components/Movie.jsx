import { useState } from 'react';
import styles from './Movie.module.css';
import { Details } from './Details.jsx'

export function Movie(props) {

    function handleDetails(props){
        //Details(props);
        setMoviesList();
      }

    return (
        <div onClick={() => (handleDetails(props))}>
            <div className={styles['image-cover']}>
                <img src={props.cover} alt={props.title + " Capa"} draggable="false"/>

                <div className={styles.overlap}>
                    <p>{props.title}</p>
                </div>
            </div>
        </div>
            
        )
}
