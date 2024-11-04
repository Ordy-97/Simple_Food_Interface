import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features/Cart/cartSlice";
// import thunk from 'redux-thunk'
import { ownerSlice } from "../features/Owner/ownerSlice";
import { notesSlice } from "../features/Notes/notesSlice";
import { menuSlice } from "../features/Menu/menuSlice";
import { api } from "../services/api.service";

let state = {
    value: null,
    owner: {},
    list: [
    ],
};

// export const addProduct = createAction('ADD_PRODUCT', (product) => {
//     return {
//         payload: product
//     }
// })

// export const removeProduct = createAction('REMOVE_PRODUCT', () => {})

// export const applyVoucher = createAction('APPLY_VOUCHER', (voucher) => {
//     return {
//         payload: voucher
//     }
// })

// export const updateFirstName = createAction('UPDATE_FIRSTNAME', (firstName) => {
//     return {
//         payload: firstName
//     }
// })

// const reducer = createReducer(state, {
    // [addProduct]: (currentState, action) => {
    //     const listWithNewProduct = [...currentState.list, action.payload]
    //         return {...currentState, list: listWithNewProduct}
    // },
    // [removeProduct]: (currentState, action) => {
    //     const list = currentState.list.filter(
    //         (item, index) => index !== action.payload
    //     )
    //     return {...currentState, list: list}
    // },
    // [applyVoucher]: (currentState, action) => {
    //     const withVoucherList = currentState.list.map(
    //         item => item.title === 'Super Crémeux' ? ({...item, price: action.payload.price}) : item
    //     )
    //     return {...currentState, list: withVoucherList}
    // },
    // [updateFirstName]: (currentState, action) => {
    //     const owner = {...currentState.owner, firstName: action.payload}
    //     return {...currentState, owner}
    // }
// })

// const reducer = createReducer(state, function(builder){
//     builder.addCase(addProduct, (currentState, action) => {
//         const listWithNewProduct = [...currentState.list, action.payload]
//             return {...currentState, list: listWithNewProduct}
//     });
//     builder.addCase(removeProduct, (currentState, action) => {
//         const list = currentState.list.filter(
//             (item, index) => index !== action.payload
//         )
//         return {...currentState, list: list}
//     });
//     builder.addCase(applyVoucher, (currentState, action) => {
//         const withVoucherList = currentState.list.map(
//             item => item.title === 'Super Crémeux' ? ({...item, price: action.payload.price}) : item
//         )
//         return {...currentState, list: withVoucherList}
//     });
//     builder.addCase(updateFirstName, (currentState, action) => {
//         const owner = {...currentState.owner, firstName: action.payload}
//         return {...currentState, owner}
//     });
// })


// const reducer = createReducer(state, function(builder){
//     builder.addCase(updateFirstName, (currentState, action) => {
//         const owner = {...currentState.owner, firstName: action.payload}
//         return {...currentState, owner}
//     });
// })

export const store = configureStore({
  preloadedState: state,
  reducer : combineReducers({
    owner: ownerSlice.reducer,
    list : cartSlice.reducer,
    notes: notesSlice.reducer,
    menu: menuSlice.reducer,
    [api.reducerPath]: api.reducer,
  }),
    //   middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().prepend([
    //         // eslint-disable-next-line no-unused-vars
    //         (store) => (next) => (action) => {
    //             console.log('Action',action)
    //             next(action)
    //         }
    //       ])
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});