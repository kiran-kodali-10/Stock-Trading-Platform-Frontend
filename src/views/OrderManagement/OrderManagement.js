import { Button } from "reactstrap";
import BuyStock from "./BuyStock";
import { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@material-ui/core";
import SellStock from "./SellStock";
import Papa from 'papaparse';
import { useDispatch, useSelector } from "react-redux";
import { getStocks } from "redux/orderAPI";



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}


export default function OrderManagement() {

    const companies = ["AAPL", "MSFT", "GOOG"]
    const params = {
        access_key: "2d66b710ae4d5ab420fa0b337b9a3310"
    }
    const access_key = "5398922545b415aec4f3d76427f5c66b";

    const [value, setValue] = useState([]);
    const [stockPrices, setStockPrices] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const dispatch = useDispatch();
    const userId = useSelector(state=>state.user.userDetails[0].id)

    useEffect(() => {
        fetch("/api/stocks/all", {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data[0]);
                console.log(data[100]);
                console.log(data[200]);
                console.log(data[300]);
                let temp = [];
                temp.push({ "company": "Apple", "symbol": "AAPl", "close": data[0]["close"] });
                temp.push({ "company": "Amazon", "symbol": "AMZN", "close": data[100]["close"] });
                temp.push({ "company": "Google", "symbol": "GOOG", "close": data[200]["close"] });
                // temp.push({ "company": "Microsoft", "symbol": "MSFT", "close": data[300]["close"] });

                setStockPrices(temp)
            })


            dispatch(getStocks(userId))


    }, [])

    return (
        <div className="order-management-container content">
            {/* Buy tab */}
            {/* <BuyStock /> */}
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="wrapped label tabs example"
                >
                    <Tab style={{ color: "white" }} label="buy" {...a11yProps(0)} />
                    <Tab style={{ color: "white" }} label="sell" {...a11yProps(1)} />
                </Tabs>
                {value.length === 0 ? <h4>Select one of the above</h4> : null}
            </Box>
            <CustomTabPanel value={value} index={0} >
                <BuyStock stocksValue={stockPrices} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} >
                <SellStock />
            </CustomTabPanel>
        </div>
    )
}