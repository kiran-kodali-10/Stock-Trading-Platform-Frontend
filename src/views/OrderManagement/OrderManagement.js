import { Button } from "reactstrap";
import BuyStock from "./BuyStock";
import { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@material-ui/core";
import SellStock from "./SellStock";
import Papa from 'papaparse';



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

    const [value, setValue] = useState();
    const [stockPrices, setStockPrices] = useState([
        {
            "companyName": "AAPL",
            "value": 0
        }
    ]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        companies.forEach((companyName) => {
            fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${companyName}&apikey=demo&datatype=csv`, {
                method: "GET",
            })
                .then(response => response.text())
                .then(data => {
                    Papa.parse(data, {
                        header: true,
                        complete: (results) => {
                            console.log(results.data[0]);
                            const value = results.data[0];
                            setStockPrices(prevPrices => {
                                // Check if the company already exists in the array
                                const existingIndex = prevPrices.findIndex(stock => stock.companyName === companyName);

                                if (existingIndex !== -1) {
                                    // If the company exists, update its value
                                    const updatedStockPrices = [...prevPrices];
                                    updatedStockPrices[existingIndex] = { companyName, value };
                                    return updatedStockPrices;
                                } else {
                                    // If the company doesn't exist, add it to the array
                                    return [...prevPrices, { companyName, value }];
                                }
                            });
                        }
                    })
                })
                .catch(error => console.log(error));
        })

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