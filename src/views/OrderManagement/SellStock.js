import React, { useState } from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    Table,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";




export default function SellStock(props) {
    const userStocksData = [
        {
            "uid": "4",
            "symbol": "GOOG",
            "buy_sell": "BUY",
            "status": "paid",
            "mode": "BUY",
            "timestamp": ""
        },
        {
            "uid": "5",
            "symbol": "AMZN",
            "buy_sell": "BUY",
            "status": "paid",
            "mode": "BUY",
            "timestamp": ""
        }
    ]

    const symbols = userStocksData.map(object => object.symbol)
    const [quantity, setQuantity] = useState(1);
    const [company, setCompany] = useState();

    const handleDropdownChange = (event) => 
        
        setCompany(event.target.value);
        // setNumberOfStocks(0)
    

    const handleFormSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <>
            <div className="">
                <Row>
                    <Col >
                        <Card>
                            <CardHeader>
                                <h4 className="title">Sell Stocks</h4>
                            </CardHeader>

                            <CardBody>

                                <form onSubmit={handleFormSubmit}>
                                    <FormGroup >
                                        <UncontrolledDropdown >
                                            <DropdownToggle caret data-toggle="dropdown">
                                                {company ? company : "select"}
                                            </DropdownToggle>
                                            <DropdownMenu onChange={handleDropdownChange}>
                                                {
                                                    symbols.map((company) => {
                                                        return (
                                                            <DropdownItem value={company} onClick={handleDropdownChange}>{company}</DropdownItem>
                                                        )
                                                    })
                                                }
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </FormGroup>
                                    {
                                        userStocksData.map(stock => {
                                            if (company === stock.symbol) return (
                                                <h5> Available: {stock.uid} </h5>
                                            )
                                        })
                                    }
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <label>quantity to sell</label>
                                                <Input value={quantity} type="number"
                                                    onChange={e => { if (e.target.value >= 1) setQuantity(e.target.value) }} required />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <h3>profit/loss</h3>
                                        </Col>
                                    </Row>
                                    <Button type="submit">
                                        Sell
                                    </Button>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </div>
        </>
    );
}
