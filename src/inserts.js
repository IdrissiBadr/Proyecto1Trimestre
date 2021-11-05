db.libros.deleteMany({})
db.libros.insertMany(
    {
        tituloLibro: "El Padrino", 
        tituloPelicula: "El Padrino", 
        genero: ["Mafia","Drama"],
        fechaPublicacionLibro: new Date("1969-03-10"), 
        fechaPublicacionPelicula: new Date("1972-03-14"),
        EscritorLibro: "Mario Puzo",
        DirectorPelicula: "Francis Ford Coppola",
        PremiosPelicula: {
            Oscars: 3,
            GlobosdeOro: 5,
        },
        PrecioLibro: 6.99,
        PlataformaStreamingPelicula: ["Amazon Prime Video","Orange TV","Vodafone TV"],
      },
      {
        tituloLibro: "El Silencio De Los Corderos", 
        tituloPelicula: "El Silencio De Los Corderos", 
        genero: ["Terror","Thriller","Policíaco"],
        fechaPublicacionLibro: new Date("1988-05-19"), 
        fechaPublicacionPelicula: new Date("1991-02-14"),
        EscritorLibro: "Thomas Harris",
        DirectorPelicula: "Jonathan Demme",
        PremiosPelicula: {
              Oscars: 5,
              GlobosDeOro: 1,
        },
        PrecioLibro: 6.32,
        PlataformaStreamingPelicula: ["Amazon Prime Video","Filmin","Apple TV"], 
      },
)