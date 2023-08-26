import { Descriptions } from 'antd';

const componentsData = [
  // Your JSON data for components here
];

const transformedData = componentsData.map(component => ({
  key: component.id,
  label: 'Component Name',
  children: (
    <div>
      <img src={component.image} alt={component.name} style={{ maxWidth: '100px' }} />
      <h3>{component.name}</h3>
      <p>Category: {component.category}</p>
      <p>Price: {component.price}</p>
      {/* Add more information as needed */}
    </div>
  ),
}));

const ProductDetails = () => <Descriptions title="Components Info" bordered items={transformedData} />;

export default ProductDetails;
