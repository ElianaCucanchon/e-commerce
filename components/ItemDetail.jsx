import Card from 'react-bootstrap/Card';
import CardText from 'react-bootstrap/esm/CardText';
import Button from 'react-bootstrap/Button';

export const ItemDetail = ({item}) => {
    return (
        <Card style={{ width: '18rem', }}>
            <Card.Img  xs= {12} md={8} src={`../img/${item.img}`} alt ={`Imagen de ${item.title}`}/>
            <Card.Body className="classCenter">
                <Card.Title className="text-2x1 font-bold mb-2">{item.name}</Card.Title>
                <CardText>
                <p>Size: {item.size}</p>
                <p>Stock:{item.stock}</p>
                <p>Precio:{item.price}</p>
                </CardText>
                <Button variant="success">Agregar a Carrito</Button>
            </Card.Body>
        </Card>
    );
}

