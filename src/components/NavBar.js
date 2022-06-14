import { Navbar, Container, Nav} from 'react-bootstrap';

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" sticky="top">
        <Container>
          <Navbar.Brand href="home">Lam Duong</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">About Me</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="videos">Videos</Nav.Link>
            <Nav.Link href="resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
