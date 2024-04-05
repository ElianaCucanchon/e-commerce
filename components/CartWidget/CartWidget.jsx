import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = () => {
    const [numero, setNumero] = useState(0)
    return (
        <li className="navbar navbar-expand-lg">
            <button className="bg-teal">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                <span>0</span>
            </button>
        </li>
    );
}

export default CartWidget;
