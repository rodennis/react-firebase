import './index.css'
import { Button, Alert, Breadcrumb, Dropdown, Card, Navbar, Container, Nav } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const Header = () => {
    return (
		<>
			<Navbar bg="primary" variant="dark">
				<Container>
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/login">Log In</Nav.Link>
						<Nav.Link href="/signup">Sign Up</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Header
