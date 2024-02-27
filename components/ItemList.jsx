// Este itemList recibe un array de productos, y los voy a mapear. Los transformo de JS a un jsx, para hacer eso tenemos un componente, el de aqui, q importa una plantilla y la transforma, y por eso es un mapeo
import {Item} from "./Item"

export const ItemList = ({products}) => {
    return (
        <>
        { products.map(prod => <Item product ={prod} />)} 
            
        </>
    )
}

