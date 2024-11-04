// import { getQuantityProductPerName } from '../../app/Selector';
import { useEffect } from 'react';
import { getUnavailableProducts } from '../../app/Selector';
import * as ProductList from '../../common/models'
// eslint-disable-next-line no-unused-vars
import { addProductThunk, cartSlice } from '../Cart/cartSlice';
import  ProductCard  from "../ProductCart"
import { useDispatch, useSelector } from "react-redux";
import { getUnavailableThunk } from './menuSlice';

export default function Menu() {

    //const products = [SuperCremeux, PouletCroquant, DoubleCantal];
  const dispatch = useDispatch();

  const unavailableProducts = useSelector(getUnavailableProducts)

  const finalList = Object.values(ProductList).filter(item => !unavailableProducts?.includes(item.title))
  console.log(finalList)
  useEffect(() => {
    dispatch(getUnavailableThunk())
  }, [])
  
  // configuration du middleware pour la réduction du prix du 'poulet croquant' au 3e achété
//   const addProductThunk = (product) => (dispatch, getState) => {
//         dispatch(cartSlice.actions.addProduct(product));
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 const state = getState();
//                 const numberProductPerName = getQuantityProductPerName(state);
//                 const numberForSpecialOffer = numberProductPerName.find((item) => item.title === "Poulet Croquant")?.quantity;
//                 if (numberForSpecialOffer === 2) {
//                     window.confirm("Voulez-vous ajouter une troisième fois ce produit à moitié prix ?")
                    
//                     const specialOffer = ProductList.PouletCroquant
//                     dispatch(cartSlice.actions.addProduct({
//                         ...specialOffer, 
//                         price: Math.round((ProductList.PouletCroquant.price / 2) * 100) / 100,
//                     }));
//                 }
//                 resolve();
//             }, 5000)
//         });
//     }

    //   console.log(Object.values(ProductList));

  return (<div className='Menu'>
    {   
        Object.values(ProductList).map((product, index) => (
            <ProductCard 
                unavailable = {unavailableProducts?.includes(product.title)}
                key={`${product.name}-${index}`} 
                product={product}
                onSelect={() => 
                    dispatch(addProductThunk(product))
                }
            />
        ))
    }
  </div>)
}
