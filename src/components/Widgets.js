import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faChartArea,
  faChartBar,
  faChartLine,
  faFlagUsa,
  faFolderOpen,
  faGlobeEurope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAngular,
  faBootstrap,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Card,
  Image,
  Form,
  Button,
  ListGroup,
  ProgressBar,
} from "@themesberg/react-bootstrap";
import {
  CircleChart,
  BarChart,
  SalesValueChart,
  SalesValueChartphone,
} from "./Charts";

import Profile3 from "../assets/img/team/profile-picture-3.jpg";
import ProfileCover from "../assets/img/profile-cover.jpg";
import { createNewUserAPI } from "../services/userInfo/actions";
import teamMembers from "../data/teamMembers";
import { setLocationCapacityAPI } from "../services/location/actions";
import axios from "axios";

export const UserInformation = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.reload();
  };

  return (
    <Card border="light" className=" p-0 mb-4">
      <Card.Body className="pb-5">
        <Card.Title>Your information</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6} className="mb-3">
              <Form.Group id="firstName" style={{ textAlign: "left" }}>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName" style={{ textAlign: "left" }}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6} className="mb-3">
              <Form.Group id="emal" style={{ textAlign: "left" }}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@company.com" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="emal" style={{ textAlign: "left" }}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="****" />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3" style={{ textAlign: "center" }}>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export const ProfileCardWidget = () => {
  return (
    <Card border="light" className="text-center p-0 mb-4">
      <div
        style={{ backgroundImage: `url(${ProfileCover})` }}
        className="profile-cover rounded-top"
      />
      <Card.Body className="pb-5">
        <Card.Img
          src={Profile3}
          alt="Neil Portrait"
          className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"
        />
        <Card.Title>{"<user name>"}</Card.Title>

        <Card.Subtitle className="fw-normal">{"<club name>"} </Card.Subtitle>
        <Card.Text className="text-gray mb-4">{"<club location>"}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export function CreateNewUserCardWidget(props) {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("johnie@sins.com");
  const [password, setPassword] = useState("****");
  const [userType, setUserType] = useState("Bouncer");

  const handleSubmit = (event) => {
    event.preventDefault();
    createNewUserAPI(firstName, lastName, email, password, userType);
  };

  return (
    <Card border="light" className=" p-0 mb-4">
      <Card.Body className="pb-5">
        <Card.Title>Create new user</Card.Title>

        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6} className="mb-3">
              <Form.Group id="firstName" style={{ textAlign: "left" }}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your first name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName" style={{ textAlign: "left" }}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={4} className="mb-3">
              <Form.Group id="email" style={{ textAlign: "left" }}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter your emailaddress"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col sm={4} className="mb-3">
              <Form.Group id="password" style={{ textAlign: "left" }}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col sm={4} className="mb-3">
              <Form.Group id="usertype" style={{ textAlign: "left" }}>
                <Form.Label>User Type</Form.Label>
                <br />
                <Form.Select
                  required
                  id="state"
                  onChange={(e) => setUserType(e.target.value)}
                  defaultValue="Bouncer"
                >
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option selected value="Bouncer">
                    Bouncer
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3" style={{ textAlign: "center" }}>
            <Button variant="primary" type="submit">
              Create User
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export function LocationCapacity(props) {
  const [capacity, setCapacity] = useState(0);

  async function getLocationCapacityAPI() {
    await axios
      .get("/locationCapacity")
      .then((response) => {
        setCapacity(response.data.capacity);
      })
      .catch((err) => {
        console.log(
          "[TodayOverview.js] getLocationCapacityAPI || Could not fetch data. Try again later."
        );
      });
  }
  useEffect(() => {
    getLocationCapacityAPI();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocationCapacityAPI(capacity);
    window.location.reload(false);
  };

  return (
    <Card border="light" className=" p-0 mb-4">
      <Card.Body className="pb-5">
        <Card.Title>Location information</Card.Title>

        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col sm={6} className="mb-3" style={{ textAlign: "center" }}>
              <Form.Group id="capacity" style={{ textAlign: "left" }}>
                <Form.Label>Opening time</Form.Label>
                <Form.Control
                  type="time"
                  // onChange={(e) => setOpeningTime(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col sm={6} className="mb-3" style={{ textAlign: "center" }}>
              <Form.Group id="capacity" style={{ textAlign: "left" }}>
                <Form.Label>Closing time</Form.Label>
                <Form.Control
                  type="time"
                  // onChange={(e) => setClosingTime(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={6} className="mb-3" style={{ textAlign: "center" }}>
              <Form.Group id="capacity" style={{ textAlign: "left" }}>
                <Form.Label>Capacity</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={"Current capacity: " + capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3" style={{ textAlign: "center" }}>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export const CounterWidget = (props) => {
  const { icon, iconColor, category, title, period, percentage, comparison } =
    props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col
            xl={5}
            className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0"
          >
            <div
              className={`icon icon-shape icon-md icon-${iconColor} rounded me-4 me-sm-0`}
            >
              <FontAwesomeIcon icon={icon} />
            </div>
            <div className="d-sm-none">
              <h5>{category}</h5>
              <h3 className="mb-1">{title}</h3>
            </div>
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <div className="d-none d-sm-block">
              <h5>{category}</h5>
              <h3 className="mb-1">{title}</h3>
            </div>
            <div className="small mt-2">
              <FontAwesomeIcon
                icon={percentageIcon}
                className={`${percentageColor} me-1`}
              />
              <span>
                <span className={`${percentageColor} fw-bold`}>
                  {percentage}%{" "}
                </span>
                {comparison}
              </span>
              <br />
              <small>Last change: {period}</small>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const CircleChartWidget = (props) => {
  const { title, data = [] } = props;
  const series = data.map((d) => d.value);

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col
            xs={12}
            xl={5}
            className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0"
          >
            <CircleChart series={series} />
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <h5 className="mb-3">{title}</h5>

            {data.map((d) => (
              <h6
                key={`circle-element-${d.id}`}
                className="fw-normal text-gray"
              >
                <FontAwesomeIcon
                  icon={d.icon}
                  className={`icon icon-xs text-${d.color} w-20 me-1`}
                />
                {` ${d.label} `}
                {`${d.value}%`}
              </h6>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const BarChartWidget = (props) => {
  const { title, value, percentage, data = [] } = props;
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const series = data.map((d) => d.value);
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
        <div className="d-block">
          <h6 className="fw-normal text-gray mb-2">{title}</h6>
          <h3>{value}</h3>
          <small className="mt-2">
            <FontAwesomeIcon
              icon={percentageIcon}
              className={`${percentageColor} me-1`}
            />
            <span className={`${percentageColor} fw-bold`}>{percentage}%</span>
          </small>
        </div>
        <div className="d-block ms-auto">
          {data.map((d) => (
            <div
              key={`bar-element-${d.id}`}
              className="d-flex align-items-center text-end mb-2"
            >
              <span className={`shape-xs rounded-circle bg-${d.color} me-2`} />
              <small className="fw-normal">{d.label}</small>
            </div>
          ))}
        </div>
      </Card.Body>
      <Card.Body className="p-2">
        <BarChart labels={labels} series={series} />
      </Card.Body>
    </Card>
  );
};

export const TeamMembersWidget = () => {
  const TeamMember = (props) => {
    const { name, statusKey, image, icon, btnText } = props;
    const status = {
      online: { color: "success", label: "Online" },
      inMeeting: { color: "warning", label: "In a meeting" },
      offline: { color: "danger", label: "Offline" },
    };

    const statusColor = status[statusKey] ? status[statusKey].color : "danger",
      statusLabel = status[statusKey] ? status[statusKey].label : "Offline";

    return (
      <ListGroup.Item className="px-0">
        <Row className="align-items-center">
          <Col className="col-auto">
            <a href="#top" className="user-avatar">
              <Image src={image} className="rounded-circle" />
            </a>
          </Col>
          <Col className="ms--2">
            <h4 className="h6 mb-0">
              <a href="#!">{name}</a>
            </h4>
            <span className={`text-${statusColor}`}>● </span>
            <small>{statusLabel}</small>
          </Col>
          <Col className="col-auto">
            <Button variant="tertiary" size="sm">
              <FontAwesomeIcon icon={icon} className="me-1" /> {btnText}
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light d-flex justify-content-between">
        <h5 className="mb-0">Team members</h5>
        <Button variant="secondary" size="sm">
          See all
        </Button>
      </Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush list my--3">
          {teamMembers.map((tm) => (
            <TeamMember key={`team-member-${tm.id}`} {...tm} />
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export const ProgressTrackWidget = () => {
  const Progress = (props) => {
    const { title, percentage, icon, color, last = false } = props;
    const extraClassName = last ? "" : "mb-2";

    return (
      <Row className={`align-items-center ${extraClassName}`}>
        <Col xs="auto">
          <span className={`icon icon-md text-${color}`}>
            <FontAwesomeIcon icon={icon} className="me-1" />
          </span>
        </Col>
        <Col>
          <div className="progress-wrapper">
            <div className="progress-info">
              <h6 className="mb-0">{title}</h6>
              <small className="fw-bold text-dark">
                <span>{percentage} %</span>
              </small>
            </div>
            <ProgressBar variant={color} now={percentage} min={0} max={100} />
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Progress track</h5>
      </Card.Header>
      <Card.Body>
        <Progress
          title="Rocket - SaaS Template"
          color="purple"
          icon={faBootstrap}
          percentage={34}
        />
        <Progress
          title="Pixel - Design System"
          color="danger"
          icon={faAngular}
          percentage={60}
        />
        <Progress
          title="Spaces - Listings Template"
          color="tertiary"
          icon={faVuejs}
          percentage={45}
        />
        <Progress
          title="Stellar - Dashboard"
          color="info"
          icon={faReact}
          percentage={35}
        />
        <Progress
          last
          title="Volt - Dashboard"
          color="purple"
          icon={faBootstrap}
          percentage={34}
        />
      </Card.Body>
    </Card>
  );
};

export const RankingWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between border-bottom border-light pb-3">
          <div>
            <h6>
              <FontAwesomeIcon
                icon={faGlobeEurope}
                className="icon icon-xs me-3"
              />{" "}
              Global Rank
            </h6>
          </div>
          <div>
            <Card.Link href="#" className="text-primary fw-bold">
              #755 <FontAwesomeIcon icon={faChartLine} className="ms-2" />
            </Card.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between border-bottom border-light py-3">
          <div>
            <h6 className="mb-0">
              <FontAwesomeIcon icon={faFlagUsa} className="icon icon-xs me-3" />
              Country Rank
            </h6>
            <div className="small card-stats">
              United States{" "}
              <FontAwesomeIcon
                icon={faAngleUp}
                className="icon icon-xs text-success ms-2"
              />
            </div>
          </div>
          <div>
            <Card.Link href="#top" className="text-primary fw-bold">
              #32 <FontAwesomeIcon icon={faChartLine} className="ms-2" />
            </Card.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between pt-3">
          <div>
            <h6 className="mb-0">
              <FontAwesomeIcon
                icon={faFolderOpen}
                className="icon icon-xs me-3"
              />
              Category Rank
            </h6>
            <Card.Link href="#top" className="small card-stats">
              Travel &gt; Accomodation
            </Card.Link>
          </div>
          <div>
            <Card.Link href="#top" className="text-primary fw-bold">
              #16 <FontAwesomeIcon icon={faChartLine} className="ms-2" />
            </Card.Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const SalesValueWidget = (props) => {
  const { title, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card className="bg-secondary-alt shadow-sm">
      <Card.Header className="d-flex flex-row align-items-center flex-0">
        <div className="d-block">
          <h5 className="fw-normal mb-2">{title}</h5>
          <small className="fw-bold mt-2">
            <span className="me-2">Yesterday</span>
            <FontAwesomeIcon
              icon={percentageIcon}
              className={`${percentageColor} me-1`}
            />
            <span className={percentageColor}>{percentage}%</span>
          </small>
        </div>
        <div className="d-flex ms-auto">
          <Button variant="secondary" size="sm" className="me-2">
            Month
          </Button>
          <Button variant="primary" size="sm" className="me-3">
            Week
          </Button>
        </div>
      </Card.Header>
      <Card.Body className="p-2">
        <SalesValueChart data={props.data} />
      </Card.Body>
    </Card>
  );
};

export const SalesValueWidgetPhone = (props) => {
  const { title, value, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card className="bg-secondary-alt shadow-sm">
      <Card.Header className="d-md-flex flex-row align-items-center flex-0">
        <div className="d-block mb-3 mb-md-0">
          <h5 className="fw-normal mb-2">{title}</h5>
          <h3>${value}</h3>
          <small className="fw-bold mt-2">
            <span className="me-2">Yesterday</span>
            <FontAwesomeIcon
              icon={percentageIcon}
              className={`${percentageColor} me-1`}
            />
            <span className={percentageColor}>{percentage}%</span>
          </small>
        </div>
        <div className="d-flex ms-auto">
          <Button variant="secondary" size="sm" className="me-2">
            Month
          </Button>
          <Button variant="primary" size="sm" className="me-3">
            Week
          </Button>
        </div>
      </Card.Header>
      <Card.Body className="p-2">
        <SalesValueChartphone data={props.data} />
      </Card.Body>
    </Card>
  );
};

export const AcquisitionWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <h5>Acquisition</h5>
        <p>
          Tells you where your visitors originated from, such as search engines,
          social networks or website referrals.
        </p>
        <div className="d-block">
          <div className="d-flex align-items-center pt-3 me-5">
            <div className="icon icon-shape icon-sm icon-shape-danger rounded me-3">
              <FontAwesomeIcon icon={faChartBar} />
            </div>
            <div className="d-block">
              <label className="mb-0">Bounce Rate</label>
              <h4 className="mb-0">33.50%</h4>
            </div>
          </div>
          <div className="d-flex align-items-center pt-3">
            <div className="icon icon-shape icon-sm icon-shape-quaternary rounded me-3">
              <FontAwesomeIcon icon={faChartArea} />
            </div>
            <div className="d-block">
              <label className="mb-0">Sessions</label>
              <h4 className="mb-0">9,567</h4>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
