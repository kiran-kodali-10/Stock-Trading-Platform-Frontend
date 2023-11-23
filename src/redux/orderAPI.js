import { orderAction } from "./orderSlice";


export const getStocks = (id) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(`/api/stocks/transactions/${id}`, {
                method: 'GET',
            });
            if (!response.ok) {
                // console.log(response.ok)
                throw new Error('Unable to fetch user stocks');
                //send an error notification
            }
            const data = await response.json();
            return data;
        }
        try {
            const userStocks = await fetchData();
            dispatch(orderAction.setStockTransactions({userStocks}))
        } catch (error) {
            console.log(error);
            alert("Unable to fetch stocks")
            // or send the notification here
        }
    };
}

export const buyStock = (stockResponse) => {
    console.log(stockResponse.symbol)
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(`/api/stocks/buy`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "uid": stockResponse.uid,
                    "symbol":stockResponse.symbol,
                    "buySell":"BUY",
                    "status":"PAID",
                    "mode": "LIMIT_ORDER",
                    "timestamp": Date.now(),
                    "quantity": 1
                }),
            });
            if (!response.ok) {
                // console.log(response.ok)
                throw new Error('Unable to fetch user stocks');
                //send an error notification
            }
            const data = await response.json();
            return data;
        }
        try {
            const userStocks = await fetchData();
            console.log(userStocks);
            dispatch(orderAction.addStock({
                company: stockResponse.company,
                quantity: stockResponse.quantity
            }))
            alert("Bought successfully")
            // dispatch(orderAction.setStockTransactions(userStocks))

        } catch (error) {
            console.log(error);
            alert("Unable to buy stock, check again later")
            // or send the notification here
        }
    };
}