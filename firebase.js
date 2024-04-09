import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, doc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCuzGMZSDhIzGi1Sp_mOXTZ8wQc-ccS4R0",
    authDomain: "ecommerce-react-81b13.firebaseapp.com",
    projectId: "ecommerce-react-81b13",
    storageBucket: "ecommerce-react-81b13.appspot.com",
    messagingSenderId: "199925206333",
    appId: "1:199925206333:web:a3d8f4e7da02e920690954",
    measurementId: "G-6B3NSGY3C4"
};


const app = initializeApp(firebaseConfig);


//Consultar  a la BDD. Consulto mi base de datos

const bdd = getFirestore()

/* 
Create
Rread
Update
Ddelete

READ - UPDATE - DELITE - CREATE Iguala  CRUDE

*/

//CREAR productos
//cREAR UNA FUNCION.
//Se genero una funcion que consulte un array(prods) con todos los productos

const prods = [
    {

        "name": "Camisa naranja",
        "size": "medium",
        "price": 300.0,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-81b13.appspot.com/o/1.jpg?alt=media&token=cc14cf81-b01e-4387-9fe9-ab5254b12abb",
        "category": "mujer"
    },
    {

        "name": "Camisa verde",
        "size": "medium",
        "price": 400.0,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-81b13.appspot.com/o/2.jpg?alt=media&token=d6f5fbaa-e125-4483-ac59-bf1165543194",
        "category": "mujer"
    },
    {

        "name": "Pantalon Hombre azul",
        "size": "medium",
        "price": 300.0,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-81b13.appspot.com/o/3.jpg?alt=media&token=1668cd7c-17ac-4c76-b2cd-a0383c502842",
        "category": "hombre"
    },
    {

        "name": "Joodie Rojo",
        "size": "medium",
        "price": 100.0,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-81b13.appspot.com/o/4.jpg?alt=media&token=7b55b7d3-71a5-46c4-acf5-72c0cc2f45ac",
        "category": "hombre"
    },
    {

        "name": "Joodie Azul",
        "size": "medium",
        "price": 150.0,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-81b13.appspot.com/o/5.jpg?alt=media&token=81f30cfc-cd60-4cf0-9a8b-c22abfff211a",
        "category": "hombre"
    },
    {

        "name": "Pantalon mujer",
        "size": "medium",
        "price": 200.0,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-81b13.appspot.com/o/6.jpg?alt=media&token=f273b441-3559-45ca-94b6-2cf350c4d3f0",
        "category": "mujer"
    },
    {

        "name": "Camisa Roja",
        "size": "medium",
        "price": 300.0,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-81b13.appspot.com/o/7.jpg?alt=media&token=4abafe4a-0d14-4d75-892b-9096355503c1",
        "category": "mujer"
    },
    {

        "name": "Gorra Boss",
        "size": "medium",
        "price": 400.0,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-81b13.appspot.com/o/8.jpg?alt=media&token=2088c851-b9f9-407c-a31b-ddbbce6248fe",
        "category": "descuentos"
    },
    {

        "name": "Camisa mujer Azul",
        "size": "medium",
        "price": 350.0,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-81b13.appspot.com/o/9.jpg?alt=media&token=babee8c8-586d-4bd6-ba4e-44208cfc403d",
        "category": "mujer"
    },
    {

        "name": "Camisas botones",
        "size": "medium",
        "price": 250.0,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-81b13.appspot.com/o/10.jpg?alt=media&token=1f4977fd-1ffc-40dd-9ca0-b641353d4d1e",
        "category": "mujer"
    },
    {

        "name": "Camisa Rosada",
        "size": "medium",
        "price": 140.0,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-81b13.appspot.com/o/11.jpg?alt=media&token=23474997-bd23-41b5-9ad0-fdaa26d243fb",
        "category": "rebajas"
    },
    {

        "name": "Patalon elegante",
        "size": "medium",
        "price": 130.0,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-81b13.appspot.com/o/12.jpg?alt=media&token=dc7031d2-a448-4ff5-8e3d-2a1cf1d5f274",
        "category": "rebajas"
    },
    {

        "name": "Camisa + Pantalon Pareja",
        "size": "medium",
        "price": 170.0,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-81b13.appspot.com/o/13.jpg?alt=media&token=9844a144-7752-4ca7-9e72-79d393790876",
        "category": "rebajas"
    },
    {

        "name": "Camisas pareja",
        "size": "medium",
        "price": 130.0,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-81b13.appspot.com/o/14.jpg?alt=media&token=5b05f861-ed0a-46f4-910d-8592633a1011",
        "category": "rebajas"
    },
    {

        "name": "Camisas Azul",
        "size": "medium",
        "price": 130.0,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-81b13.appspot.com/o/15.jpg?alt=media&token=5f3a2df1-75d2-4e80-aa3c-f1abe9c5e327",
        "category": "hombre"
    },
    {

        "name": "Camiseta Hombre",
        "size": "medium",
        "price": 130.0,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-81b13.appspot.com/o/16.jpg?alt=media&token=95d0c4b1-5b5a-4b45-a054-27918694e1ca",
        "category": "hombre"
    }
]


export const createProductos = async () => {

    prods.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            name: prod.name,
            size: prod.size,
            price: prod.price,
            stock: prod.stock,
            img: prod.img,
            category: prod.category

        })


    })


    //Recorrido de un array haciendo una consulta sincronica. Ise guardaran en Firestore
}

//Luego se tiene que EJECUTAR esta Funcion! Llamo a createProductos se ejecuta y se escribe un comando para ejecutar
//Se ejecuta en la terminal>   cd src    cd firebase    node firebase.js
/* createProductos() */

//Medoto de Get products. con getDocs. pERMITE CONSULTAR LOS PRODUCTOS EN LA BASE DE DATOS DE fIRESTORE

//Consultar Productos
export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    return items
}

//Consultar Producto

export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const items = { ...producto.data(), id: producto.id }
    return items
}

//Actualizar Prdoucto
//Ejemplo: Actualizar el stock
export const updateProduct = async (id, info) => {
    console.log('ID:', id);
    console.log('Info:', info);
    if (typeof info!== 'object') {
      throw new Error("La informacion debe ser un objeto")
    }
    console.log('Updating product...');
    await updateDoc(doc(bdd, 'productos', id), info);
    console.log('Product updated successfully.');
  };



//Eliminar Producto

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))

}

/* updateProduct("tWtiS8TRbJgxIASrMYLE", {
    "name": "Camisa + Pantalon Pareja",
    "size": "medium",
    "price": 200.0,
    "stock": 10,
    "img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-react-81b13.appspot.com/o/13.jpg?alt=media&token=9844a144-7752-4ca7-9e72-79d393790876",
    "category": "rebajas"

}).then(rta => console.log(rta))

deleteProduct('tWtiS8TRbJgxIASrMYLE') */




//CREATE AND REAC Ordenes de compra

export const createOrderCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
    cliente: cliente,
    items: carrito,
    precioTotal: precioTotal,
    fecha: fecha

    
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return item
}

