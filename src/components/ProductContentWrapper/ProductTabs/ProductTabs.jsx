import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TableMain from '../TableProducts/TableProducts';

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
        Tab content for Profile
      </Tab>
      <Tab eventKey="brands" title="Marcas">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="colors" title="Colores">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}