import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import '../styles/IngredientForm.scss';

function IngredientForm() {
    const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        const { value } = event.target;
        setIngredients(value);
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!ingredients) {
            setError('Enter ingredients');
            return;
        }

        try {
            const response = await axios.get(
                `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}`,
                {
                    headers: {
                        'x-api-key': '23c9b9b1353340be9439a0bb154c4f92',
                        'Content-Type': 'application/json',
                    },
                }
            );
            setRecipes(response.data);
        } catch (error) {
            console.error(error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <Form onSubmit={handleSubmit} className="form-inline">
                <Form.Control
                    type="text"
                    value={ingredients}
                    onChange={handleInputChange}
                    placeholder="Enter the ingredients from the fridge"
                    className="mr-2"
                />
                <Button type="submit" variant="success" className="btn-search">
                    Search recipes
                </Button>
            </Form>

            {error && <p className="error-message">{error}</p>}

            <div className="recipe-list">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="recipe-item">
                        <h3>
                            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                        </h3>
                        <p>{recipe.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default IngredientForm;
