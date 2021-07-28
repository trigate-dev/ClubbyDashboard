import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faCartArrowDown,
  faChartPie,
  faChevronDown,
  faClipboard,
  faCommentDots,
  faFileAlt,
  faPlus,
  faRocket,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Button, Dropdown } from "@themesberg/react-bootstrap";
import {
  UserInformation,
  ProfileCardWidget,
  CreateNewUserCardWidget,
  LocationCapacity,
} from "../components/Widgets";

import Profile3 from "../assets/img/team/profile-picture-3.jpg";

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
              <LocationCapacity />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
