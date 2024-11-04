import { useStore, useSelector } from "react-redux";
//import { useEffect, useState } from "react";
import { isVoucherAvailable } from "../../app/Selector";
// import { applyVoucher } from "../../app/store";
import { cartSlice } from "../Cart/cartSlice";



export const Voucher = () => {
    const store = useStore();
    // const [available, setAvailable] = useState(isVoucherAvailable(store.getState()));

    //const available = isVoucherAvailable(store.getState())

    // useEffect(() => {
    //     store.subscribe(() => setAvailable(isVoucherAvailable(store.getState())));
    // }, [store])

    const available  = useSelector(isVoucherAvailable);

    return <div className="Voucher">
            {available && 
                <button onClick={() => store.dispatch(cartSlice.actions.applyVoucher( { price: 2 } ))}>
                    Appliquer ma promo Super crémeux à 2 euros
                </button>
            }
    </div>
};