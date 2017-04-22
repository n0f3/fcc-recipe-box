import React from 'react';
import Recipe from './Recipe';
import uuidv4 from 'uuid/v4';
import { Accordion, Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const RecipeList = (props) => {
  const recipes = props.recipes.map((recipe, index) => {
      return(
        <Panel
          header={recipe.recipeName}
          key={uuidv4()}
          eventKey={index}
        >
          <Recipe
            recipeId={recipe.id} recipeIngredients={recipe.recipeIngredients}
            onDeleteRecipe={props.onDeleteRecipe}
            onEditRecipe={props.onEditRecipe}
          />
        </Panel>
      )
    });
  return (
    <Accordion>
      {recipes}
    </Accordion>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  onDeleteRecipe: PropTypes.func.isRequired,
  onEditRecipe: PropTypes.func.isRequired
};

export default RecipeList;
