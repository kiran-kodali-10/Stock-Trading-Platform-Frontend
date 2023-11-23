import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Row, Table } from "reactstrap";
import { getBalance } from "redux/userAPI";

export default function Wallet(props) {

    const dispatch = useDispatch();

    const userBalance = useSelector(state => state.user.userDetails[0].balance)
    const userId = useSelector(state => state.user.userDetails[0].id)

    const [inputMoney, setInputMoney] = useState(1.0);
    const [addMoney, setAddMoney] = useState(false);
    const [balance, setBalance] = useState(userBalance);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        getTransactions();
    }, [])
    const handleSubmit = (event) => {

        event.preventDefault();
        if (inputMoney > 0) {
            console.log("inside handle submit")
            setBalance(parseInt(balance) + parseInt(inputMoney))
            // write fetch to send the balance to backend
            fetch("/api/wallet/addMoney", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "userId": userId,
                    "amount": inputMoney,
                    "method": "credit",
                    "taxes": "0",
                    "fees": "0",
                    "status": "LOAD",
                })
            })
                .then((response) => response.json())
                .then((data) => {
                    getTransactions();
                    dispatch(getBalance(userId))
                    alert("Money Added Successfully")
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    const getTransactions = () => {
        fetch(`/api/wallet/walletTransactions?id=${userId}`, {
            method: "GET"
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setTransactions(data);
            })
            .catch(err => {
                console.log(err);
            })
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
                                    <h3>{"USD " + balance} </h3>
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
                                                    onChange={e => { if (e.target.value >= 1) setInputMoney(e.target.value) }}
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
                                                <th>status</th>
                                                <th>method</th>
                                                <th className="text-center">amount (USD)</th>
                                                <th className="text-center">Total (USD)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                transactions.map((transaction, key) => {
                                                    return (
                                                        <tr>
                                                            <td>{key + 1} </td>
                                                            <td>{transaction["status"]} </td>
                                                            <td>{transaction["method"]} </td>
                                                            <td className="text-center">{transaction["amount"]} </td>
                                                            <td className="text-center">{transaction["previousBalance"]} </td>
                                                        </tr>
                                                    )
                                                })
                                            }
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