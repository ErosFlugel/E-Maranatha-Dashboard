import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TableMain from '../TableProducts/TableProducts';
import AccordionCategory from '../TableCategories/TableCategories';

export default function ProductTabs({products}) {
  return (
    <Tabs
      defaultActiveKey="products"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="products" title="Productos">
        <TableMain products={products}/>
      </Tab>
      <Tab eventKey="categories" title="Categorias">

        {products.meta ? <AccordionCategory categories={products.meta.countByCategory}/> : 'hola'}
        
      </Tab>
      <Tab eventKey="brands" title="Marcas">
        
        {products.meta ? <AccordionCategory categories={products.meta.countByBrand}/> : 'hola'}

      </Tab>
      <Tab eventKey="colors" title="Colores">

        {products.meta ? <AccordionCategory categories={products.meta.countByColor}/> : 'hola'}
        
      </Tab>
    </Tabs>
  );
}