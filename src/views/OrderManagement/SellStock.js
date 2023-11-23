import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
import { getStocks } from "redux/orderAPI";




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


    const dispatch = useDispatch();
    const userId = useSelector(state=>state.user.userDetails[0].id)
    const userStocks = useSelector(state=>state.order.stockTransactions)
    // const userStocks = useSelector(state=>state.)

    const symbols = userStocks.map(object => object.symbol)
    const [quantity, setQuantity] = useState(1);
    const [company, setCompany] = useState();


    useEffect(()=>{
        dispatch(getStocks(userId))
        console.log(userStocks)
    },[company])

    const handleDropdownChange = (event) => {

        setCompany(event.target.value);
    }

    // setNumberOfStocks(0)


    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert("order placed successfully")
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
                                        userStocks.map(stock => {
                                            if (company === stock.symbol) return (
                                                <h5> Available: {stock.quantity} </h5>
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
                                        {/* <Col md={6}>
                                            <h3>profit/loss</h3>
                                        </Col> */}
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
