import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getQuantityProductPerName } from "../../../app/Selector";
import * as ProductList from '../../../common/models';

export const resetOrderThunk = createAsyncThunk( 'cart/resetOrderTunk', async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject()
        }, 120000)
    }) 
})

export const addProductThunk = createAsyncThunk( 'cart/addProductThunk' , async (product, thunkApi) => {
    // Ajout du produit au panier via le dispatch du store
    thunkApi.dispatch(cartSlice.actions.addProduct(product));
    thunkApi.dispatch(resetOrderThunk())
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const state = thunkApi.getState();
            const numberProductPerName = getQuantityProductPerName(state);
                const numberForSpecialOffer = numberProductPerName.find((item) => item.title === "Poulet Croquant")?.quantity;
              if (numberForSpecialOffer === 2) {
               if(window.confirm("Voulez-vous ajouter une troisième fois ce produit à moitié prix ?")) {
                        resolve();
                    } else {
                        reject();
                    }
                } else {
                    reject();
                }
        }, 5000)
      });
})


export const cartSlice = createSlice({
  name: 'list',
  initialState: {}, // le state par défaut de notre slice
  reducers: {
    // action ADD_PRODUCT déplacée ici
    addProduct: (currentState, action) => {
      const listWithNewProduct = [...currentState, action.payload]
      return listWithNewProduct
    },
    // action REMOVE_PRODUCT déplacée ici
    removeProduct: (currentState, action) => {
      const list = [...currentState.list].filter(
        (item, index) => index !== action.payload
      )
      return list
    },
    // action APPLY_VOUCHER déplacée ici
    applyVoucher: (currentState, action) => {
      const withVoucherList = currentState.map(
     item => item.title === 'Super Crémeux' ? ({...item, price: action.payload.price}) : item
       )
      return withVoucherList
    },
  },

  extraReducers: function(builder) {
    builder.addCase(addProductThunk.fulfilled, (state) => {
        const specialOffer = ProductList.PouletCroquant
            return [...state, {...specialOffer, price: Math.round((ProductList.PouletCroquant.price / 2) * 100) / 100}]
    })
    builder.addCase(addProductThunk.rejected, (state) => {
        return [...state]
    })  
    builder.addCase(resetOrderThunk.rejected, () => {
        return []
    })
  }

})