import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Navigation from './components/Navigation';
import IngredientForm from './components/IngredientForm';
import { Routes, Route } from 'react-router-dom';

import RecipeDetails from './components/RecipeDetails';
import Footer from "./components/Footer";

function App() {
    return (
        <div className="page-container">
            <Header />
            <Navigation />
            <Container>
                <Routes>
                    <Route path="/" element={<IngredientForm />} />
                    <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
                </Routes>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;