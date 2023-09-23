import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TableProducts from '../TableProducts/TableProducts';
import AccordionCategory from '../TableCategories/TableCategories';
import Spinner from '../../Spinner/Spinner';

export default function ProductTabs({products}) {
  return (
    <Tabs
      defaultActiveKey="products"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="products" title="Productos">
        <TableProducts products={products}/>
      </Tab>

      <Tab eventKey="categories" title="Categorias">

        {products.meta ? <AccordionCategory categories={products.meta.countByCategory}/> : <Spinner />}
        
      </Tab>

      <Tab eventKey="brands" title="Marcas">
        
        {products.meta ? <AccordionCategory categories={products.meta.countByBrand}/> : <Spinner />}

      </Tab>
      
      <Tab eventKey="colors" title="Colores">

        {products.meta ? <AccordionCategory categories={products.meta.countByColor}/> : <Spinner />}

      </Tab>
    </Tabs>
  );
}