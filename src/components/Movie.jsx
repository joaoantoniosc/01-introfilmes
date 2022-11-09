import { useState, useEffect } from 'react';
import styles from './Movie.module.css';
import { Details } from './Details.jsx'

export function Movie(props) {
    const [isShown, setIsShown] = useState(false);

    const  handleDetails = event =>{

        setIsShown(current => !current);


      }

    return (
        <>
        <div onClick={() => (handleDetails())}>
            <div className={styles['image-cover']}>
                <img src={props.cover} alt={props.title + " Capa"} draggable="false"/>

                <div className={styles.overlap}>
                    <p>{props.title}</p>
                </div>
            </div>
            {isShown &&(
                <div className={styles.selectorBox}>
                    <div className={styles.selector}></div>
                </div>       
            )}
        </div>
            {isShown &&
                    <Details
                        key={props.id}
                        id={props.id}
                        title={props.title}
                        cover={props.cover}
                        year={props.year}
                        stars={props.stars}
                        desc={props.desc}
                    />
            }
        </>
        )
}
