import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import '../styles/RecipeDetails.scss';

function RecipeDetails() {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/${recipeId}/information`,
                    {
                        params: {
                            apiKey: '23c9b9b1353340be9439a0bb154c4f92',
                        },
                    }
                );
                setRecipe(response.data);
            } catch (error) {
                console.error('Error while fetching recipe details:', error);
            }
        };

        fetchRecipeDetails();
    }, [recipeId]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    const { title, image, summary } = recipe;

    // Funkcja do usuwania tagów HTML
    const stripTags = (htmlString) => {
        const temporalDivElement = document.createElement('div');
        temporalDivElement.innerHTML = htmlString;
        return temporalDivElement.innerText;
    };

    return (
        <Container className="recipe-container">
            <div className="recipe-details">
                <h2 className="recipe-title">{title}</h2>
                <img className="recipe-image" src={image} alt={title} />
                <p className="recipe-summary">{stripTags(summary)}</p>
                {/* Display other recipe details */}
            </div>
        </Container>
    );
}

export default RecipeDetails;
