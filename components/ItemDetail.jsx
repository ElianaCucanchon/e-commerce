

export const ItemDetail = ({item}) => {
    return (
        <div className="bg-white p-8 rounded-lg">
            <img className="w-full h-64 object-cover mb-6" src={`../img/${item.img}`} alt ={`Imagen de ${item.title}`}/>
            <div className="classCenter">
                <h2 className="text-2x1 font-bold mb-2"> {item.title}</h2>
                <p>Size: {item.size}</p>
                <p>Stock:{item.stock}</p>
                <p>Precio:{item.price}</p>
            </div>
        </div>
    );
}

