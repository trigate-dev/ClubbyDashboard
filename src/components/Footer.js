import React from "react";

import { Row, Col, Card } from "@themesberg/react-bootstrap";

export default (props) => {
  return (
    <div>
      <footer className="footer section py-5">
        <Row>
          <Col xs={12} lg={6}>
            <ul className="list-inline list-group-flush list-group-borderless text-center text-xl-right mb-0">
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://trigate.io/about/" target="_blank">
                  About
                </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://trigate.io/" target="_blank">
                  Website
                </Card.Link>
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
    </div>
  );
};
