import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.scss';

function Navigation() {
    const [lastRecipeId, setLastRecipeId] = useState(null);
    const location = useLocation();

    const handleRecipeClick = () => {
        if (lastRecipeId) {
            return `/recipe/${lastRecipeId}`;
        } else {
            return '/recipe/123';
        }
    };

    return (
        <Navbar expand="lg" variant="dark" className="navbar navigation-container">
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to={handleRecipeClick()} onClick={() => setLastRecipeId(123)}>
                        Recipe Details
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
