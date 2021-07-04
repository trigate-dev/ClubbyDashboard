import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { Routes } from "../routes";
import BgImage from "../assets/img/illustrations/signin.svg";
import { loginAPI } from "../services/login/actions";
import { userInfoAPI } from "../services/userInfo/actions";

const Login = (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    console.log(username);
    console.log(password);
    props.loginAPI(username, password);
  };

  if (props.token) {
    props.userInfoAPI();
    return <Redirect to={Routes.DashboardOverview.path} />;
  } else {
    return (
      <main>
        <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
          <Container>
            <Row
              className="justify-content-center form-bg-image"
              style={{ backgroundImage: `url(${BgImage})` }}
            >
              <Col
                xs={12}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                  <div className="text-center text-md-center mb-4 mt-md-0">
                    <h3 className="mb-0">Sign in to Clubby!</h3>
                  </div>
                  <Form className="mt-4" style={{ textAlign: "center" }}>
                    <Form.Group
                      id="email"
                      className="mb-4"
                      style={{ textAlign: "left" }}
                    >
                      <Form.Label>Your Email</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </InputGroup.Text>
                        <Form.Control
                          autoFocus
                          required
                          type="email"
                          placeholder="example@company.com"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group>
                      <Form.Group
                        id="password"
                        className="mb-4"
                        style={{ textAlign: "left" }}
                      >
                        <Form.Label>Your Password</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faUnlockAlt} />
                          </InputGroup.Text>
                          <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </InputGroup>
                      </Form.Group>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <Form.Check type="checkbox">
                          <FormCheck.Input
                            id="defaultCheck5"
                            className="me-2"
                          />
                          <FormCheck.Label
                            htmlFor="defaultCheck5"
                            className="mb-0"
                          >
                            Remember me
                          </FormCheck.Label>
                        </Form.Check>
                        <Card.Link className="small text-end">
                          Lost password?
                        </Card.Link>
                      </div>
                    </Form.Group>
                    <Button
                      onClick={() => handleSubmit()}
                      variant="secondary"
                      className="text-dark me-3"
                    >
                      Sign in
                      <FontAwesomeIcon className="d-none d-sm-inline ms-1" />
                    </Button>
                  </Form>

                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <span className="fw-normal">
                      Not registered?
                      <Card.Link
                        as={Link}
                        to={Routes.Signup.path}
                        className="fw-bold"
                      >
                        {` Create account `}
                      </Card.Link>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    );
  }
};

function mapStateToProps(state) {
  return {
    token: state.login.login_data.token,
  };
}

export default connect(mapStateToProps, {
  loginAPI,
  userInfoAPI,
})(Login);
