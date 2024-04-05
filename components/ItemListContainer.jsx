import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const { cid } = useParams()


    useEffect(() => {
        fetch('../data/productos.json')     
            .then(response => response.json())   
            .then(prods => {
                if (cid) {
                    const productos = prods.filter(prod => prod.category == cid)
                    setProducts(productos)
                } else {
                    setProducts(prods)

                }

            })

            .catch((error) => console.log(error))
    }, [cid])


    return (
        <div>
            <ItemList products={products} />

        </div>
    )
}


