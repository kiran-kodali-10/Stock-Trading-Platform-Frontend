import { Button } from "reactstrap";
import BuyStock from "./BuyStock";
import { useState } from "react";
import { Box, Tab, Tabs } from "@material-ui/core";
import SellStock from "./SellStock";



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

    const [value, setValue] = useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                    <Tab style={{color:"white"}} label="buy" {...a11yProps(0)} />
                    <Tab style={{color:"white"}} label="sell" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0} >
                <BuyStock />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} >
               <SellStock />
            </CustomTabPanel>
        </div>
    )
}