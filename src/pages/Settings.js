import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";
import {
  UserInformation,
  ProfileCardWidget,
  CreateNewUserCardWidget,
  LocationInformation,
} from "../components/Widgets";

import Profile3 from "../assets/img/team/OmeJan.jpg";

export default () => {
  return (
    <>
      <Row>
        <Col xs={12} xl={8}>
          <UserInformation />
          <CreateNewUserCardWidget />
        </Col>

        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <ProfileCardWidget
                title="Select profile photo"
                photo={Profile3}
              />
              <LocationInformation />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
