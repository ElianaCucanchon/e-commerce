import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState([])
    const { pid } = useParams()

    useEffect(() => {
        fetch('../data/productos.json')
            .then(response => response.json())
            .then(productos => {
                console.log(productos)
                const prod = productos.find(producto => producto.id == pid)
                console.log(prod)
                if (prod)
                    setItem(prod)
            })
    }, [])
   
    return (
        <div className="w-full  h-screen">
           
                <ItemDetail item={item} />
            
        </div>
    
    )
}