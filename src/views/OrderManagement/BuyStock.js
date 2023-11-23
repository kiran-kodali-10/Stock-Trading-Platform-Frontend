import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Card,
    Button,
    CardBody,
    CardFooter,
    CardHeader,
    CardText,
    Col,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
    UncontrolledDropdown

} from "reactstrap";
import { buyStock } from "redux/orderAPI";

export default function BuyStock(props) {

    const balance = useSelector(state => state.user.userDetails[0].balance)
    const uid = useSelector(state => state.user.userDetails[0].id)

    const dispatch = useDispatch();

    const [company, setCompany] = useState("Apple");
    const [numberOfStocks, setNumberOfStocks] = useState(1);
    const [total, setTotal] = useState();

    useEffect(() => {
        const stockValue = props.stocksValue.find((element) => element["company"] === company)
        setTotal(parseFloat(parseFloat(stockValue["close"]) * parseInt(numberOfStocks)))
    }, [numberOfStocks, company])

    const symbols = {
        "Apple": "AAPL",
        "Amazon": "AMZN",
        // "Microsoft": "MSFT",
        "Google": "GOOG"
    }

    const handleDropdownChange = (event) => {
        console.log(event.target.value);
        setCompany(Object.keys(symbols).find(key => symbols[key] === event.target.value));
        setNumberOfStocks(1)

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(symbols[company])
        const temp = {
            "uid": uid,
            "symbol":symbols[company],
            "buySell":"BUY",
            "status":"PAID",
            "mode": "LIMIT_ORDER",
            "timestamp": Date.now(),
            "quantity": numberOfStocks

        }
        dispatch(buyStock(temp))
        
    }

    return (
        <>
            <div className="">
                <div className="">
                    <Row>
                        <Col>
                            <Form onSubmit={handleSubmit}>
                                <Card>
                                    <CardHeader>
                                        <h4 className="title">Buy Stocks</h4>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label>Company</label>
                                                    <UncontrolledDropdown >
                                                        <DropdownToggle caret data-toggle="dropdown">
                                                            {company ? company : "select"}
                                                        </DropdownToggle>
                                                        <DropdownMenu onChange={handleDropdownChange}>
                                                            {
                                                                Object.keys(symbols).map((company) => {
                                                                    return (
                                                                        <DropdownItem value={symbols[company]} onClick={handleDropdownChange}>{company}</DropdownItem>
                                                                    )
                                                                })
                                                            }
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>

                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label>Price (Single Stock)</label>
                                                    <h4> {props.stocksValue.map((object) => {
                                                        if (object["company"] === company)
                                                            return object["close"]
                                                    })} </h4>
                                                    {/* <Input type="text" disabled value={props.stocksValue[0]["close"]} /> */}
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label>Number of Stocks</label>
                                                    <Input
                                                        type="number"
                                                        value={numberOfStocks}
                                                        onChange={(event) => { if (event.target.value >= 1) setNumberOfStocks(event.target.value) }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label>Total Cost</label>
                                                    <h4>{total} </h4>
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                    </CardBody>
                                    <CardFooter>
                                        <Button className="btn-fill" type="submit">
                                            Buy
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Form>
                        </Col>
                        {/* <Col md="4">
                            <Card className="">
                                <CardHeader>
                                    <h4>Available Balance</h4>
                                </CardHeader>
                                <CardBody>
                                    <h3>USD{" " + balance}</h3>
                                </CardBody>
                            </Card>
                        </Col> */}
                    </Row>


                </div>
            </div>
        </>
    )
}

