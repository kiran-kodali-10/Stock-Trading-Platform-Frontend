import React from "react";

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
} from "reactstrap";

export default function SellStock(props) {

    return (
        <>
            <div className="">
                <Row>
                    <Col md="8">
                        <Card>
                            <CardHeader>
                                <h4 className="title">Sell Stocks</h4>
                            </CardHeader>

                            <CardBody>
                                {
                                    ["Apple", "IBM", "Microsoft"].map((company) => {
                                        return (
                                            <FormGroup>
                                                <label>{company}</label>
                                                <Input
                                                    type="text"
                                                    value="0"
                                                    name={"availableStocks"} />
                                            </FormGroup>
                                        )
                                    })
                                }
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </div>
        </>
    );
}

{/* <form onSubmit={handleSubmit}>
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
<Label>
    Number of Stocks
    <Input name="stockValue" value={numberOfStocks} />

</Label>
<Button type="submit">Buy</Button>
</form> */}