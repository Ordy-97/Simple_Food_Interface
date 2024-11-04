import { useSelector } from "react-redux"
// import { useState, useEffect } from "react"
import { getProductList, getTotalOrder } from "../../app/Selector"

export default function Total() {
    //const store = useStore()
    
    // const [list, setList] = useState(getProductList(store.getState()))


    // useEffect(() => {
    //     store.subscribe(() => {
    //         setList(getProductList(store.getState()))
    //     })
    // }, [store])
    // const prixTotal = getTotalOrder(store.getState());
    const list = useSelector(getProductList)
    const prixTotal = useSelector(getTotalOrder)


  return (
    <div className="TotalCommand">
        {list.length === 0 ? "Aucun produit sélectionné pour le moment!" : <div> Le montant total de votre commande est de : {prixTotal} € </div> }
    </div>
  )
}
