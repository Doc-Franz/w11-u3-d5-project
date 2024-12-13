import { Button, Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import { HouseDoorFill, BookFill } from "react-bootstrap-icons";

const Sidebar = () => {
  return (
    <aside className="col col-2">
      <Navbar expand="lg" className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <Container className="d-flex flex-column align-items-start">
          <Navbar.Brand href="#home" className="navbar-brand">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbarNavAltMarkup"
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="navbar-nav">
              <ul>
                <li>
                  <Nav.Link href="#" className="nav-item nav-link d-flex align-items-center">
                    <HouseDoorFill style={{ width: "24px", height: "24px" }} />
                    &nbsp; Home
                  </Nav.Link>
                </li>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <BookFill style={{ width: "24px", height: "24px" }} />
                    &nbsp; Your Library
                  </a>
                </li>
                <li>
                  <InputGroup className="mt-3">
                    <Form.Control placeholder="Search" type="text" aria-label="Search" />

                    <Button variant="outline-secondary" className="btn btn-sm ">
                      GO
                    </Button>
                  </InputGroup>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <div>
            <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
          </div>
        </div>
      </Navbar>
    </aside>
  );
};

export default Sidebar;
