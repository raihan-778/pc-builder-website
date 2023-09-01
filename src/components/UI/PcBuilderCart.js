import { DeleteOutlined, MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Row, Space } from 'antd';
import { useSelector } from 'react-redux';
const { Meta } = Card;

 export default function PcBuilderCart() {

  const {products}=useSelector(state=>state.pcBuilderCart)
  console.log("builderCart",products)


    return (
      <>
      <Row 

gutter={{
xs: 8,
sm: 16,
md: 24,
lg: 32,
}}
>
{products?.map(singleProduct=>(
<>
<Space>

<Col xs={24}  sm={12} md={8} lg={{span:6,offset: 2}} xl={6}  key={singleProduct?.id} className="gutter-row" >
 
<Card


style={{
width: 300,
height:200,
padding:20,
border: "1px solid rgba(0, 0, 0, 0.25)",
borderRadius: "4px",
margin:10
}}


>
<div style={{display:"flex", margin:"10px", justifyContent:"space-around", alignItems:"center"}}>
<Avatar style={{marginRight:"10px"}} shape="square" size={64} src={<img src={singleProduct?.image} alt="avatar" />} />

<Meta
title={singleProduct?.category}

/>


</div>


<div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}><Button type="primary"shape="round" icon={<MinusCircleOutlined size={10}/>} size={10} />
  
  <Button type="primary" disabled>Complete Build </Button>
  <Button type="primary"shape="round" icon={<PlusCircleOutlined size={10}/>} size={10} />
   
  <Button type="primary"shape="round" icon={<DeleteOutlined size={10}/>} size={10} /></div>
 




</Card>

</Col>

</Space>
</>
)
)}

</Row>
</>
    );
};

