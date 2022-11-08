import styles from './NewMovie.module.css';
import { Star, Trash } from 'phosphor-react';
import UploadButton from './UploadButton';

export function NewMovie(){
    return (
        (
            <div className={styles.boxDetails}>  
                <div className={styles.overlayImg}>
                    <UploadButton />
                </div>
    
                <div className={styles.desciptionDetails}>
                    <div>
                        <form>
                        <header>
                            <div title='Recomendação' className={styles.rating}>

                            <label>
                                <input type="radio" name="stars" value="1" />
                                <span className={styles.icon}><Star size={24} weight="fill"/></span>
                            </label>

                            <label>
                                <input type="radio" name="stars" value="2" />
                                <span className={styles.icon}><Star size={24} weight="fill"/></span>
                                <span className={styles.icon}><Star size={24} weight="fill"/></span>
                            </label>

                            <label>
                                <input type="radio" name="stars" value="3" />
                                <span className={styles.icon}><Star size={24} weight="fill"/></span>
                                <span className={styles.icon}><Star size={24} weight="fill"/></span>
                                <span className={styles.icon}><Star size={24} weight="fill"/></span>   
                            </label>

                            <label>
                                <input type="radio" name="stars" value="4" />
                                <span className={styles.icon}><Star size={24} weight="fill"/></span>
                                <span className={styles.icon}><Star size={24} weight="fill"/></span>
                                <span className={styles.icon}><Star size={24} weight="fill"/></span>
                                <span className={styles.icon}><Star size={24} weight="fill"/></span>
                            </label>

                            <label>
                                <input type="radio" name="stars" value="5" />
                                <span className={styles.icon}><Star size={24} weight="fill"/></span>
                                <span className={styles.icon}><Star size={24} weight="fill"/></span>
                                <span className={styles.icon}><Star size={24} weight="fill"/></span>
                                <span className={styles.icon}><Star size={24} weight="fill"/></span>
                                <span className={styles.icon}><Star size={24} weight="fill"/></span>
                            </label>

                            </div>
                            
                            <div title='Deletar'>
                                <button title="Deletar Filme">
                                    <Trash size={24}/>
                                </button>
                            </div>
                        </header>
                        
                        <input type='text' placeholder='Ano' name='movieYear' maxLength={4}></input>


                        <input type='text' placeholder='Título do filme' name='movieName'></input>
                        
                        <textarea className='textAreaCst' rows={5} maxLength={360} placeholder='Descrição sobre o filme' name='movieDesc'/>
                        
                        <button type='submit'>ADICIONAR FILME</button>

                        </form>
                    </div>
                </div>    
            </div>
        )
    )
    
}