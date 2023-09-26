import React from 'react'
import {Link} from 'react-router-dom'
import CardTop from './CardTop/CardTop.jsx';

function ContentRowTop({users, products, sales}) {

    const cards = [
        {
            name: 'Usuarios',
            quantity: users && users.count,
            border: 'primary',
            icon: 'fa-user',
            link: '/users'
        },
        {
            name: 'Productos',
            quantity: products && products.count,
            border: 'success',
            icon: 'fa-box',
            link: '/products'
        },
        {
            name: 'Ventas',
            quantity: sales.meta.success && sales.count,
            border: 'warning',
            icon: 'fa-money-bill-wave',
            link: '/sales'
        }
    ];

    return (

        <div className="row">

           {cards.map((info, i) => {
            return (
                <Link key={info.name + i} className='col-md-4 mb-4' underline="none" to={info.link} >
                    <CardTop name={info.name} quantity={info.quantity} border={info.border} icon={info.icon} />
                </Link>
            )
           })}
        </div>
    );
};

export default ContentRowTop