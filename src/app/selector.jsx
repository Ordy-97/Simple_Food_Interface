export const getProductList = (state) => state?.list

export const getTotalOrder = (state) => 
    getProductList(state).reduce(
        (acc, prod) => Math.round((prod.price + acc) * 100) / 100
    ,0)

export const isVoucherAvailable = (state) => getProductList(state).find((product) => product.title === "Super Crémeux")

export const getQuantityProductPerName = (state) => 
    getProductList(state).reduce((acc, item) => {
        const existingItem = acc.find(element => element.title === item.title);

        if(existingItem){
            existingItem.quantity += 1;
        } else {
            acc.push({
                title: item.title,
                price: item.price,
                quantity: 1
            })
        }
        return acc;
    }, []);

export const getUnavailableProducts = (state) => state?.menu?.unavailableProducts
