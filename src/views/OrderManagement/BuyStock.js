import { useEffect, useState } from "react";
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

export default function BuyStock(props) {

    const [company, setCompany] = useState("AAPL");
    const [numberOfStocks, setNumberOfStocks] = useState(0);

    const symbols = {
        "Apple": "AAPL",
        "IBM": "IBM",
        "Microsoft": "MSFT"
    }
    useEffect(() => {
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbols[company]}&interval=60min&apikey=demo'`, {
            method: "GET"
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch(error => console.log(error));
    }, [company])

    const handleDropdownChange = (event) => {
        console.log(event.target.value);
        setCompany(Object.keys(symbols).find(key => symbols[key] === event.target.value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className="">
                <div className="">
                    <Row>
                        <Col md="8">
                            <Card>
                                <CardHeader>
                                    <h4 className="title">Buy Stocks</h4>
                                </CardHeader>
                                <CardBody>
                                    <Form>
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
                                                    <Input type="text" disabled value="0" />
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
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label>Total Cost</label>
                                                    <Input
                                                        type="text"
                                                        value="0"
                                                        disabled
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                      
                                    </Form>
                                </CardBody>
                                <CardFooter>
                                    <Button className="btn-fill"  type="submit">
                                        Save
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="">
                                <CardHeader>
                                    <h4>Available Balance</h4>
                                </CardHeader>
                                <CardBody>
                                        <h3>{"test balance"}</h3>        
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                </div>
            </div>
        </>
    )
}

