export const genres = [
    'Acción',
    'Animación',
    'Aventura',
    'Ciencia Ficción',
    'Comedia',
    'Documental',
    'Drama',
    'Fantasia',
    'Infantiles',
    'Musical'
];

export const cards = [
    {
        name: 'Movies in Data Base',
        quantity: 21,
        border: 'primary',
        icon: 'fa-film'
    },
    {
        name: 'Total awards',
        quantity: 79,
        border: 'success',
        icon: 'fa-award'
    },
    {
        name: 'Actors quantity',
        quantity: 49,
        border: 'warning',
        icon: 'fa-user'
    }
];

export const sideLinks = [
    {
        name: 'Dashboard - DH movies',
        liClass: 'nav-item active',
        linkClass: 'nav-link',
        iconClass: 'fas fa-fw fa-tachometer-alt',
        path: '/'
    },
    {
        name: 'last Movie',
        liClass: 'nav-item',
        linkClass: 'nav-link collapsed',
        iconClass: 'fas fa-fw fa-folder',
        path: '/last'
    },
    {
        name: 'genres',
        liClass: 'nav-item',
        linkClass: 'nav-link',
        iconClass: 'fas fa-fw fa-chart-area',
        path: '/genres'
    },
    {
        name: 'movies',
        liClass: 'nav-item',
        linkClass: 'nav-link',
        iconClass: 'fas fa-fw fa-table',
        path: '/movies'
    },
];

export const moviesTable = [
    {
        name: 'Billy Elliot',
        length: 123,
        rate: 5,
        genres: ['Drama', 'Comedia'],
        awards: 2
    },
    {
        name: 'Alicia en el pais de las maravillas',
        length: 142,
        rate: 4.8,
        genres: ['Drama', 'Accion', 'Comedia'],
        awards: 3
    }
]