/* Mi madre tras leerse todos los libros de Stephen King quiere ver las adaptaciones que estén en Amazon Prime Video , 
porque es la única plataforma de streaming que tiene , y que sea fiel al libro*/

db.libros.find(
    {
        $and:[
            {EscritorLibro: "Stephen King"},
            {PlataformaStreamingPelicula: "Amazon Prime Video"},
            {PeliculaFielAlLibro: true}
        ]
    }
).pretty()

/* Me gustaría regalarle a mi prima un libro que solo sea de Drama por su cumpleaños pero tampoco tengo mucho dinero que pueda gastar , como mucho 10 euros*/

db.libros.find(
    {
        $and:[
            {genero: 
                {$eq: ["Drama"]},
            },
            {PrecioLibro: 
                {$lte: 10}
            }
        ]
    }
).pretty()

/* Estoy organizando una velada para ver películas pero mis amigos son muy cinéfilos y solo ven películas de los 70 y que sean de Terror o Aventuras */

db.libros.find(
    {
        $and:[
            {"Fechas.fechaPublicacionPelicula":
                { $gte: new Date("1970-12-31")}
            },
            {$or:[
                {genero: "Terror" },
                {genero: "Aventuras" } 
            ]}
        ]
    }
)

/* Hay dos formas de hacerlo , esta es con el $and implícito*/

db.libros.find( {
        $or:[
                {genero: "Terror" },
                {genero: "Aventuras" } 
        ],
        "Fechas.fechaPublicacionPelicula":
                { $gte: new Date("1970-12-31") }
        }
)

/* Sé que vi una pelicula adaptada de un libro pero el nombre del director no lo recuerdo , empezaba por S */

db.libros.find(
    {DirectorPelicula: {$regex: /^S,*/}} 
).pretty()

/* Mi padre no se fía de los Oscars , dice que son todos por contrato y solo se fía de los Globos de Oro */

db.libros.find(
    {
     PremiosPelicula:{$elemMatch: {GlobosdeOro: 5}} 
    }
)

/* Teniendo solo Netflix y siguiendo los premios Saturn este año , me apetece ver alguna pelicula galardonada con un Premio Saturn y que esté en Netflix */

db.libros.find(
    {
        $and:[
            {PlataformaStreamingPelicula:"Netflix"},
            {PremiosPelicula:{$elemMatch:{Otros: "Saturn"}}}
        ]
    }
)


/* Al contrario de mi padre , mi hermano se fia de los Oscars , pero en este caso solo quiere ver peliculas que sean fieles al libro*/

db.libros.find(
     {
      PremiosPelicula: {$elemMatch:{Oscars:{$gt: 0}}},
      PeliculaFielAlLibro: true
     }
)

/* Quiero ver una pelicula que no sea de Aventura , que sea fiel al libro , antes del 2000 y que este en Amazon Prime Video */

db.libros.find(
    {
        genero: {$nin: ["Aventura"]},
        PeliculaFielAlLibro: true,
        "Fechas.fechaPublicacionPelicula": {$lte: new Date("1999-12-31")},
        PlataformaStreamingPelicula: "Amazon Prime Video"
    }
)
/* Solo quiero que salgan las peliculas que tengan una categoria de premio en Otros */

db.libros.find({ PremiosPelicula: {$elemMatch:{Otros:{$size: 1}}}})

/*Mi hermano quiere saber las peliculas que no solo tengan más de un Oscar , si no que tengan 2 premios en la categoría Otros */ 

db.libros.find (
    {
        PremiosPelicula: {$elemMatch: {Oscars:{$gte: 0}}},
        PremiosPelicula: {$elemMatch: {Otros:{$size: 2}}}
    }
)