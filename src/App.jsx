import { Header } from './components/Header';
import { Movie } from './components/Movie';
import styles from './App.module.css';
import { useState } from 'react';

import './global.css';

import film from './assets/film.svg';
import { NewMovie } from './components/NewMovie';
import { Details } from './components/Details';


//FILMES ATUALIZADOS APENAS TÍTULO E CAPA
{/*}
const movies = [
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
]
*/}


export function App(){

  function handleDetails(props){
    //console.log(props);
    <Details />
    setMovies();
  }

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
      year: '2019',
      stars: '4',
      cover: '/src/assets/cover/pets-2.jpg',
      desc: 'A vida de Max e Duke muda bastante quando sua dona tem um filho. De início eles não gostam nem um pouco deste pequeno ser que divide a atenção, mas aos poucos ele os conquista. Não demora muito para que Max se torne superprotetor em relação à criança, o que lhe causa uma coceira constante.',      
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
  

  return (
    <div>
      
      <Header />

      
      <div className={styles.container}>
        <div className={styles.titleCatalog}>
              <img src={film} alt="Catálogo" />
              <h2>Catálogo</h2>
        </div>
      </div>


      <div className={styles.catalog}>
        {/*<Movie
            id='1'
            title='Rei Leão'
            cover='/src/assets/cover/rei-leao.png'
            year= '1994'
            stars= '4'
            desc= '"O Rei Leão" retrata uma jornada pela savana africana, onde nasce o futuro rei da Pedra do Reino, Simba. O pequeno leão é fiel ao seu destino de assumir o reinado. Mas Scar, irmão de Mufasa e ex-herdeiro do trono, tem seus próprios planos. Com a ajuda de dois novos e inusitados amigos, Simba terá que crescer e voltar para recuperar o que é seu por direito.'       
          /> 
  */}
      {movies.map(movie =>{
        return (
          <Movie
            id={movie.id}
            title={movie.title}
            cover={movie.cover}
            year={movie.year}
            stars={movie.stars}
            desc={movie.desc}
          />
        );
      })}
      
          <Details
            id='1'
            title='Rei Leão'
            cover='/src/assets/cover/rei-leao.png'
            year= '1994'
            stars= '4'
            desc= '"O Rei Leão" retrata uma jornada pela savana africana, onde nasce o futuro rei da Pedra do Reino, Simba. O pequeno leão é fiel ao seu destino de assumir o reinado. Mas Scar, irmão de Mufasa e ex-herdeiro do trono, tem seus próprios planos. Com a ajuda de dois novos e inusitados amigos, Simba terá que crescer e voltar para recuperar o que é seu por direito.'     
  
          /> 

        <button className={styles.btnAdd} title="Adicionar novo filme">+</button>

        <NewMovie />

      </div>

    </div>
  )
}
