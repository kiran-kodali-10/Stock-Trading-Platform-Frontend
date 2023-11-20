import { useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Row, Table } from "reactstrap";

export default function Wallet(props) {

    const [inputMoney, setInputMoney] = useState(0.0);
    const [addMoney, setAddMoney] = useState(false);
    const [balance, setBalance] = useState(45);

    const handleSubmit = (event) => {

        event.preventDefault();
        if (inputMoney > 0) {

            console.log("inside handle submit")
            setBalance(parseInt(balance) + parseInt(inputMoney))
        }
    }

    return (
        <div className="content">
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <h4 className="title">Your Wallet</h4>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col md="6">
                                    <h5>Total</h5>
                                </Col>
                                <Col md="6">
                                    <h3>{balance} </h3>
                                </Col>
                            </Row>
                            <Button
                                className="btn-fill"
                                onClick={e => setAddMoney(true)}
                            >
                                Add
                            </Button>
                            {
                                addMoney ?
                                    <div style={{ paddingTop: "40px" }}>

                                        <Row>
                                            <Col md="3">
                                                <h5>Enter the Amount</h5>
                                            </Col>
                                            <Col md="3">
                                                <Input type="number"
                                                    value={inputMoney}
                                                    onChange={e => setInputMoney(e.target.value)}
                                                />
                                            </Col>
                                        </Row>
                                        <Button onClick={handleSubmit}>Submit</Button>
                                    </div>
                                    :
                                    null
                            }
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <div className="transactions-container">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <h4>Transactions</h4>
                            </CardHeader>
                            <CardBody>
                                <div className="table-full-width table-responsive">
                                    <Table>
                                        <thead className="text-primary">
                                            <tr>
                                                <th>Transaction Id</th>
                                                <th>type</th>
                                                <th className="text-center">amount</th>
                                                <th className="text-center">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>T134</td>
                                                <td>Debit</td>
                                                <td style={{ color: "red !important" }} className="text-center">-$30</td>
                                                <td className="text-center">
                                                    
                                                    $500
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}