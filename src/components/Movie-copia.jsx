import { useState } from 'react';
import styles from './Movie.module.css';
import { Details } from './Details.jsx'

export function Movie(props) {

    const [movies, setMovies] = useState([
        {
          id: 1,
          title: 'Rei Leão',
          year: '1994',
          stars: '4',
          cover: '/src/assets/cover/rei-leao.png',
          desc: '"O Rei Leão" retrata uma jornada pela savana africana, onde nasce o futuro rei da Pedra do Reino, Simba. O pequeno leão é fiel ao seu destino de assumir o reinado. Mas Scar, irmão de Mufasa e ex-herdeiro do trono, tem seus próprios planos. Com a ajuda de dois novos e inusitados amigos, Simba terá que crescer e voltar para recuperar o que é seu por direito.',      
        },
        {
          id: 2,
          title: 'Enrolados',
          year: '1994',
          stars: '4',
          cover: '/src/assets/cover/enrolados.png',
          desc: '"O Rei Leão" retrata uma jornada pela savana africana, onde nasce o futuro rei da Pedra do Reino, Simba. O pequeno leão é fiel ao seu destino de assumir o reinado. Mas Scar, irmão de Mufasa e ex-herdeiro do trono, tem seus próprios planos. Com a ajuda de dois novos e inusitados amigos, Simba terá que crescer e voltar para recuperar o que é seu por direito.',      
        },
        {
          id: 3,
          title: 'Toy Story',
          year: '1994',
          stars: '4',
          cover: '/src/assets/cover/toy-story.png',
          desc: '"O Rei Leão" retrata uma jornada pela savana africana, onde nasce o futuro rei da Pedra do Reino, Simba. O pequeno leão é fiel ao seu destino de assumir o reinado. Mas Scar, irmão de Mufasa e ex-herdeiro do trono, tem seus próprios planos. Com a ajuda de dois novos e inusitados amigos, Simba terá que crescer e voltar para recuperar o que é seu por direito.',      
        },
        {
          id: 4,
          title: 'Pets 2',
          year: '1994',
          stars: '4',
          cover: '/src/assets/cover/pets-2.jpg',
          desc: '"O Rei Leão" retrata uma jornada pela savana africana, onde nasce o futuro rei da Pedra do Reino, Simba. O pequeno leão é fiel ao seu destino de assumir o reinado. Mas Scar, irmão de Mufasa e ex-herdeiro do trono, tem seus próprios planos. Com a ajuda de dois novos e inusitados amigos, Simba terá que crescer e voltar para recuperar o que é seu por direito.',      
        },
        {
          id: 5,
          title: 'Encantada',
          year: '1994',
          stars: '4',
          cover: '/src/assets/cover/encantada.jpg',
          desc: '"O Rei Leão" retrata uma jornada pela savana africana, onde nasce o futuro rei da Pedra do Reino, Simba. O pequeno leão é fiel ao seu destino de assumir o reinado. Mas Scar, irmão de Mufasa e ex-herdeiro do trono, tem seus próprios planos. Com a ajuda de dois novos e inusitados amigos, Simba terá que crescer e voltar para recuperar o que é seu por direito.',      
        },
        {
          id: 6,
          title: 'Divertida Mente',
          year: '1994',
          stars: '4',
          cover: '/src/assets/cover/divertida-mente.jpg',
          desc: '"O Rei Leão" retrata uma jornada pela savana africana, onde nasce o futuro rei da Pedra do Reino, Simba. O pequeno leão é fiel ao seu destino de assumir o reinado. Mas Scar, irmão de Mufasa e ex-herdeiro do trono, tem seus próprios planos. Com a ajuda de dois novos e inusitados amigos, Simba terá que crescer e voltar para recuperar o que é seu por direito.',      
        },
        {
          id: 7,
          title: 'Detona Ralph',
          year: '1994',
          stars: '4',
          cover: '/src/assets/cover/detona-ralph.jpg',
          desc: '"O Rei Leão" retrata uma jornada pela savana africana, onde nasce o futuro rei da Pedra do Reino, Simba. O pequeno leão é fiel ao seu destino de assumir o reinado. Mas Scar, irmão de Mufasa e ex-herdeiro do trono, tem seus próprios planos. Com a ajuda de dois novos e inusitados amigos, Simba terá que crescer e voltar para recuperar o que é seu por direito.',      
        },
      ])

    function handleDetails(props){
        Details(props);
        setMovies();
        console.log(Details(props));
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
