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

export const sideLinks = [
    {
        name: 'Dashboard - EM cosmetics',
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
        name: 'productos',
        liClass: 'nav-item',
        linkClass: 'nav-link',
        iconClass: 'fas fa-fw fa-table',
        path: '/products'
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