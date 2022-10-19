import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NavBar from './components/navBar';
import { Navbar, NavbarBrand, Container } from 'reactstrap';
import { Resume } from './components/resume';

function App() {
	return (
		<div className="App">
			<Container fluid="sm">
				<NavBar color="light" light expand="sm" />
				<Resume />
			</Container>
		</div>
	);
}

export default App;
