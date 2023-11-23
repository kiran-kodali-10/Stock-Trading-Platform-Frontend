import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import TradingViewWidget from "views/TradingViewCharts/AdvancedChart";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12" md="12" lg="12">
            <TradingViewWidget />
          </Col>
        </Row>

        <Row>
          <Col md="12" lg="12">
            <Card>
              <CardHeader>
                <h3>Stocks</h3>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Symbol</th>
                      {/* <th>app?</th> */}
                      <th>Price</th>
                      {/* <th>quantity</th> */}
                      <th>current</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Google</td>
                      <td>GOOG</td>
                      {/* <td>AAPL</td> */}
                      <td>$150</td>
                      {/* <td>1</td> */}
                      <td>
                        {/* <i style={{ color: "green", paddingRight: "5px" }} className="fa-solid fa-arrow-up" /> */}
                        <i style={{ color: "red", paddingRight: "5px" }} className="fa-solid fa-arrow-down" />
                        8%
                      </td>
                    </tr>
                    <tr>
                      <td>Amazon</td>
                      <td>AMZN</td>
                      {/* <td>GOOG</td> */}
                      <td>$130</td>
                      {/* <td>1</td> */}
                      <td>
                        <i style={{ color: "green", paddingRight: "5px" }} className="fa-solid fa-arrow-up" />
                        {/* <i style={{ color: "red", paddingRight: "5px" }} className="fa-solid fa-arrow-down" /> */}
                        12.85%
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    </>
  );
}

export default Dashboard;
