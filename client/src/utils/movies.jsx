
export const movies = [
  { name: "Person in Darkness", 
    poster: "/movies/person-in-darkness.webp"
  },
  { name: "Annabelle", 
    poster: "/movies/annabelle.webp" 
  },
  { name: "Ante Sundaraniki ", 
    poster: "/movies/ante_sundaraniki.webp" 
  },
  { name: "Avatar", 
    poster: "/movies/avatar.webp" 
  },
  { name: "Dark Knight", 
    poster: "/movies/dark_knight.webp" 
  },
  { name: "Doctor Strange", 
    poster: "/movies/doctor_strange.webp" 
  },
  { name: "Dune", 
    poster: "/movies/dune.webp" 
  },
  { name: "Hukum", 
    poster: "/movies/hukum.webp" 
  },
  { name: "Interstellar", 
    poster: "/movies/interstellar.webp" 
  },
  { name: "John Wick", 
    poster: "/movies/john_wick.webp" 
  },
  { name: "Joker", 
  poster: "/movies/joker.webp" 
  },
  { 
    name: "Kantara", 
    poster: "/movies/kantara.webp" 
  },
  { name: "K.G.F", 
    poster: "/movies/kgf.webp" 
  },
  { name: "Khatija", 
    poster: "/movies/khatija.webp" 
  },
  { name: "Minions", 
    poster: "/movies/minions.webp" 
  },
  { name: "Oppenheimer", 
    poster: "/movies/oppenheimer.webp" 
  },
  { name: "Ponniyin Selvan", 
    poster: "/movies/ponniyin_selvan.webp" 
  },
  { name: "Shazam", 
    poster: "/movies/shazam.webp" 
  },
  { name: "The Batman", 
    poster: "/movies/the_batman.webp" 
  },
  { name: "Thiruchitrambalam", 
    poster: "/movies/thiruchitrambalam.webp" 
  },
  { name: "Vikram", 
    poster: "/movies/vikram.webp" 
  },


  
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
