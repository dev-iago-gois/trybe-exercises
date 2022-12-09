const movies1999 = [
    {
      title: 'Clube da Luta',
      year: 1999,
      imdbRate: 8.8,
      director: 'David Fincher',
    },
    {
      title: 'Matrix',
      year: 1999,
      imdbRate: 8.7,
      director: 'Lana Wachowski and Lilly Wachowski',
    },
    {
      title: 'À Espera de Um Milagre',
      year: 1999,
      imdbRate: 8.6,
      director: 'Frank Darabont',
    },
    {
      title: 'Star Wars',
      year: 1999,
      imdbRate: 10,
      director: 'Océlia Sousa',
    },
  ];
  
  const movies2022 = [
    {
      title: 'Watcher',
      year: 2022,
      imdbRate: 6.3,
      director: 'Chloe Okuno',
    },
    {
      title: 'Arremessando Alto',
      year: 2022,
      imdbRate: 7.3,
      director: 'Jeremiah Zagar',
    },
    {
      title: 'Top Gun: Maverick',
      year: 2022,
      imdbRate: 8.4,
      director: 'Joseph Kosinski',
    },
  ];
  
  const createMovieList = (movieArray, property) => {
    const movieList = document.getElementById('movie-list'); // PASSO 1 - CAPTURA ELEMENTO;
    const h2Title = document.getElementById('movies-title');
    h2Title.innerHTML = `Filmes de ${movieArray[0].year}`
    h2Title.className = 'h2-title';
    
    for(let index = 0; index < movieArray.length; index += 1){
      const addMovie = document.createElement('li'); // PASSO 2 - CRIA O ELEMENTO;
      addMovie.innerHTML = `${movieArray[index].title} - ${movieArray[index][property]}`;// PASSO 3 - CONTEUDO DO ELEMENTO CRIADO;
      addMovie.className = 'movieList'; // PASSO 3 - ADD CLASSE
      movieList.appendChild(addMovie); //PASSO 4 - LOCAL QUE VAI SER APLICADO O ELEMENTO, NESSE CASO, FILHO DO id 'movie-list'(.appendChild);
    };
  };
  
  createMovieList(movies2022, "imdbRate");