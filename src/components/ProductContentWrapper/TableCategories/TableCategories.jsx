import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AnchorProduct from '../TableProducts/AnchorProduct';

function AccordionCategory({categories}) {
  return (
    <div>
        {Object.keys(categories).map( (category, i) => {
            return (
                 <Accordion key={category + i}>
                    <Accordion.Item eventKey={i}>
                        <Accordion.Header className="position-relative">{category}<span className="accordion-count position-absolute">{categories[category].length}</span></Accordion.Header>
                        <Accordion.Body>
                            {categories[category].map((product, j) => <div key={product.name + j}><AnchorProduct url={product.detail} content={product.name}></AnchorProduct></div>)}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
        })}
    </div>
  );
}

export default AccordionCategory;