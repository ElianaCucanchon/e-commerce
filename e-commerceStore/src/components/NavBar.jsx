//Todo componente se crea con mayuscula la primera, salvo main... para diferenciarlo d euna funcion de JS. en este caso es NavBar

export const NavBar = ({ mensaje }) => {
    return (
        <div>
            <p>{ mensaje }</p>
        </div>
    );
}




//El componente NavBar pide un mensaje en un componente p.. voy a App.jsx e importo el componente NavBar