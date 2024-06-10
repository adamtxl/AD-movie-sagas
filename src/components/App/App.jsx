import { Route, HashRouter as Router, Link } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import MovieItem from '../MovieDisplay/MovieDisplay';
import AddMovie from '../AddMovie/AddMovie';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router> 
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/addmovie">Add Movie</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/addmovie'>Add Movie</Link>
          
        </nav>
        <Route path="/" exact>
          <MovieList />
        </Route>
       <Route path='/:id'>
        <MovieItem/>
        </Route > 
       <Route path='/addmovie'>
        <AddMovie/>
       </Route>

        {/* Add Movie page */}
        
      </Router>
    </div>
  );
}

export default App;
