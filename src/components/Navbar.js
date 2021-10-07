import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Nav,
  Image,
  Navbar,
  Dropdown,
  Container,
} from "@themesberg/react-bootstrap";
import { Routes } from "../routes";
import Profile3 from "../assets/img/team/OmeJan.jpg";
import { Link } from "react-router-dom";
import { loginAPI } from "../services/login/actions";
import { connect } from "react-redux";

const NavBar = (props) => {
  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
      <Container fluid className="px-0" style={{ justifyContent: "flex-end" }}>
        <div>
          <Nav>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                <div className="media d-flex align-items-center">
                  <div
                    className="media-body ms-2 text-dark align-items-right d-none d-lg-block"
                    style={{ marginRight: 5 }}
                  >
                    <span className="mb-0 font-small fw-bold">
                      {"Hi, " + props.firstName}
                    </span>
                  </div>
                  <Image
                    src={Profile3}
                    className="user-avatar md-avatar rounded-circle"
                  />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                <Dropdown.Item
                  className="fw-bold"
                  as={Link}
                  to={Routes.Settings.path}
                >
                  <FontAwesomeIcon icon={faCog} className="me-2" /> Settings
                </Dropdown.Item>

                <Dropdown.Divider />

                <Dropdown.Item
                  className="fw-bold"
                  onClick={() => handleLogout()}
                >
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    className="text-danger me-2"
                  />
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

function mapStateToProps(state) {
  return {
    token: state.login.login_data.token,
    firstName: state.user.user_info.first_name,
  };
}

export default connect(mapStateToProps, {
  loginAPI,
})(NavBar);
