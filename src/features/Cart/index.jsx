import { useStore, useSelector } from "react-redux";
// import { useState, useEffect } from "react";
import { SuperCremeux } from "../../common/models";
import { getQuantityProductPerName } from "../../app/Selector";
// import { addProduct } from "../../app/store";
import { cartSlice } from "./cartSlice";


function Cart(){
    const store = useStore(); //récupération d'une instance du store diffusée par le provider


    //   const [list, setList] = useState(getProductList(store.getState()))

    //   useEffect(() => {
    //     store.subscribe(() => setList( getProductList(store.getState()) ) )
    //   })


    const listFinal = useSelector(getQuantityProductPerName);

    // const listFinal = list.reduce((acc, item) => {
    //     // Rechercher un élément avec le même titre dans acc
    //     const existingItem = acc.find(element => element.title === item.title);
    
    //     if (existingItem) {
    //         // Incrémenter la quantité si l'élément existe déjà
    //         existingItem.quantity += 1;
    //     } else {
    //         // Ajouter un nouvel élément avec quantité initiale de 1
    //         acc.push({
    //             title: item.title,
    //             price: item.price,
    //             quantity: 1,
    //         });
    //     }
    //     return acc;
    // }, []);
    
    console.log(listFinal);
    


    return <div className="Selection">
            <h1>Choisir son menu</h1>
            {
                listFinal.map((item, index) => (
                <span key={index} className="SelectedProduct">
                    {item.quantity} x {item.title} : {item.price * item.quantity} €
                </span>
                ))   
            }
            <div className="CartNavBar">
                    <button onClick={() => store.dispatch(cartSlice.actions.addProduct(SuperCremeux))}>Ajouter un super crémeux</button>
            </div>
    </div>
}

export default Cart;