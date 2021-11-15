db.libros.deleteMany({}),
db.libros.insertMany(
  [
    {
        tituloLibro: "El Padrino", 
        tituloPelicula: "El Padrino", 
        genero: ["Mafia","Drama"],
        Fechas:{
          fechaPublicacionLibro: new Date("1969-03-10"), 
          fechaPublicacionPelicula: new Date("1972-03-14"),
        },
        EscritorLibro: "Mario Puzo",
        DirectorPelicula: "Francis Ford Coppola",
        PremiosPelicula: [ 
        {
          Oscars: 3
        },
        {
          GlobosdeOro: 5
        },
        {
          Otros: ["BAFTA","WGA","David Donatello"]
        } ],
        PrecioLibro: 6.99,
        PlataformaStreamingPelicula: ["Amazon Prime Video","Orange TV","Vodafone TV"],
        PeliculaFielAlLibro : true,
    },
    {
        tituloLibro: "El Silencio De Los Corderos", 
        tituloPelicula: "El Silencio De Los Corderos", 
        genero: ["Terror","Thriller","Policíaco"],
        Fechas:{
          fechaPublicacionLibro: new Date("1988-05-19"), 
          fechaPublicacionPelicula: new Date("1991-02-14"),
        },
        EscritorLibro: "Thomas Harris",
        DirectorPelicula: "Jonathan Demme",
        PremiosPelicula: [ 
        {
          Oscars: 5
        },
        {
          GlobosDeOro: 1
        },
        {
          Otros: ["BAFTA","Saturn"]
        } ],
        PrecioLibro: 6.32,
        PlataformaStreamingPelicula: ["Amazon Prime Video","Filmin","Apple TV"],
        PeliculaFielAlLibro : false,
    },
    {
        tituloLibro: "Matar a un Ruiseñor", 
        tituloPelicula: "Matar a un Ruiseñor", 
        genero: ["Drama"],
        Fechas:{  
          fechaPublicacionLibro: new Date("1960-07-11"), 
          fechaPublicacionPelicula: new Date("1962-12-25"),
        },
        EscritorLibro: "Harper Lee",
        DirectorPelicula: "Robert Mulligan",
        PremiosPelicula: [ 
        {
          Oscars: 3
        },
        {
          GlobosDeOro: 3
        },
        {
          Otros: ["WGA","David Donatello"]
        } ],
        PrecioLibro: 4.99,
        PlataformaStreamingPelicula: ["Apple TV"],
        PeliculaFielAlLibro : false,
    },
    {
        tituloLibro: "El Cuerpo", 
        tituloPelicula: "Cuenta Conmigo", 
        genero: ["Drama","Aventura"],
        Fechas:{
          fechaPublicacionLibro: new Date("1982-08-27"), 
          fechaPublicacionPelicula: new Date("1986-08-08"),
        },
        EscritorLibro: "Stephen King",
        DirectorPelicula: "Rob Reiner",
        PremiosPelicula: [ 
        {
          Oscars: 0
        },
        {
          GlobosDeOro: 2
        },
        {
          Otros: ["DGA","WGA"]
        } ],
        PrecioLibro: 5.97,
        PlataformaStreamingPelicula: ["Amazon Prime Video","Filmin"],
        PeliculaFielAlLibro : true,
    },
    {
      tituloLibro: "Carrie", 
      tituloPelicula: "Carrie", 
      genero: ["Suspense","Terror"],
      Fechas:{
        fechaPublicacionLibro: new Date("1974-04-05"), 
        fechaPublicacionPelicula: new Date("1976-11-03"),
      },
      EscritorLibro: "Stephen King",
      DirectorPelicula: "Brian De Palma",
      PremiosPelicula: [ 
      {
        Oscars: 0
      },
      {
        GlobosDeOro: 0
      },
      {
        Otros: ["NSFC"]
      } ],
      PrecioLibro: 9.45,
      PlataformaStreamingPelicula: ["Filmin"],
      PeliculaFielAlLibro : false,
    },
    {
      tituloLibro: "El Resplandor", 
      tituloPelicula: "El Resplandor", 
      genero: ["Drama","Terror"],
      Fechas:{
        fechaPublicacionLibro: new Date("1977-01-28"), 
        fechaPublicacionPelicula: new Date("1980-12-19"),
      },
      EscritorLibro: "Stephen King",
      DirectorPelicula: "Stanley Kubrick",
      PremiosPelicula: [ 
      {
        Oscars: 0
      },
      {
        GlobosDeOro: 0
      },
      {
        Otros: ["Saturn","David Donatello"]
      } ],
      PrecioLibro: 10.4,
      PlataformaStreamingPelicula: ["Amazon Prime Video","Netflix","HBO"],
      PeliculaFielAlLibro : true,
    },
    {
      tituloLibro: "Harry Potter y La Piedra Filosofal", 
      tituloPelicula: "Harry Potter y La Piedra Filosofal", 
      genero: ["Fantasía","Aventuras","Magia"],
      Fechas:{
        fechaPublicacionLibro: new Date("1997-06-30"), 
        fechaPublicacionPelicula: new Date("2001-11-30"),
      },
      EscritorLibro: "J. K. Rowling",
      DirectorPelicula: "Chris Columbus",
      PremiosPelicula: [ 
      {
        Oscars: 0
      },
      {
        GlobosDeOro: 0
      },
      {
        Otros: ["BAFTA","Saturn"]
      } ],
      PrecioLibro: 12.34,
      PlataformaStreamingPelicula: ["Amazon Prime Video","Netflix"],
      PeliculaFielAlLibro : true,
    },
    {
      tituloLibro: "El Señor De Los Anillos : La Comunidad Del Anillo", 
      tituloPelicula: "El Señor De Los Anillos", 
      genero: ["Fantasía","Aventuras"],
      Fechas:{
        fechaPublicacionLibro: new Date("1954-06-29"), 
        fechaPublicacionPelicula: new Date("2001-12-19"),
      },
      EscritorLibro: "J. R. R. Tolkien",
      DirectorPelicula: "Peter Jackson",
      PremiosPelicula: [ 
      {
        Oscars: 4
      },
      {
        GlobosDeOro: 4
      },
      {
        Otros: ["BAFTA","Saturn"]
      } ],
      PrecioLibro: 18.95,
      PlataformaStreamingPelicula: ["HBO","Apple TV"],
      PeliculaFielAlLibro : true,
    },
  ]
);
