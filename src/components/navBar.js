import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
	ListGroup,
	ListGroupItem
} from 'reactstrap';
import { info } from './info';

function NavBar(args) {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar {...args}>
				<NavbarBrand href="/">CV Project</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="me-auto" navbar>
						<NavItem>
							<NavLink href="https://umbravenus-streamlit-first-app-f6scjf.streamlitapp.com/">
								NLP(BERT)
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://umbravenus-byzantine-app-3ik5n8.streamlitapp.com/">
								Image Adjuster
							</NavLink>
						</NavItem>
					</Nav>
					<NavbarText>
						{info.name} | {info.email} | {info.address}
					</NavbarText>
				</Collapse>
			</Navbar>
		</div>
	);
}

export default NavBar;
