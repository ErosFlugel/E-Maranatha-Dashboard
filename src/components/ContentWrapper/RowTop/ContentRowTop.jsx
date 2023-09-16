import React from 'react'
import ContentRowMovie from './Movie/ContentRowMovie.jsx';
import { cards } from '../../../constants/index.js'

function ContentRowTop() {

    return (

        <div className="row">

           {cards.map((info, i) => {
            return <ContentRowMovie key={info.name + i} name={info.name} quantity={info.quantity} border={info.border} icon={info.icon} />
            // return <ContentRowMovie key={info.name + i} {...info} /> Tambien se puede haciendo destructuring
           })}
        </div>
    );
};

export default ContentRowTop