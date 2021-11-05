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
            Otros: ["BAFTA","WGA","David Donatello"]
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
              Otros: ["BAFTA","Saturn"]
        },
        PrecioLibro: 6.32,
        PlataformaStreamingPelicula: ["Amazon Prime Video","Filmin","Apple TV"], 
    },
    {
        tituloLibro: "Matar a un Ruiseñor", 
        tituloPelicula: "Matar a un Ruiseñor", 
        genero: ["Drama"],
        fechaPublicacionLibro: new Date("1960-07-11"), 
        fechaPublicacionPelicula: new Date("1962-12-25"),
        EscritorLibro: "Harper Lee",
        DirectorPelicula: "Robert Mulligan",
        PremiosPelicula: {
              Oscars: 3,
              GlobosDeOro: 3,
              Otros: ["WGA","David Donatello"]
        },
        PrecioLibro: 4.99,
        PlataformaStreamingPelicula: ["Apple TV"], 
    },
    {
        tituloLibro: "El Cuerpo", 
        tituloPelicula: "Cuenta Conmigo", 
        genero: ["Drama","Aventura"],
        fechaPublicacionLibro: new Date("1982-08-27"), 
        fechaPublicacionPelicula: new Date("1986-08-08"),
        EscritorLibro: "Stephen King",
        DirectorPelicula: "Rob Reiner",
        PremiosPelicula: {
              Oscars: 0,
              GlobosDeOro: 2,
        },
        PrecioLibro: 5.97,
        PlataformaStreamingPelicula: ["Amazon Prime Video","Filmin"],
    }, 
)
