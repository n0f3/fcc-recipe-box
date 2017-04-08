import React from 'react';
import Recipe from './Recipe';
import uuidv4 from 'uuid/v4';
import { Accordion, Panel } from 'react-bootstrap';

class RecipeList extends React.Component {
  render() {
    const recipes = this.props.recipes.map((recipe, index) => {
        return(
          <Panel
            header={recipe.recipeName}
            key={uuidv4()}
            eventKey={index}
          >
            <Recipe
              recipeId={recipe.id} recipeIngredients={recipe.recipeIngredients}
              onDeleteRecipe={this.props.onDeleteRecipe}
              onEditRecipe={this.props.onEditRecipe}
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
}

RecipeList.propTypes = {
  recipes: React.PropTypes.array.isRequired,
  onDeleteRecipe: React.PropTypes.func.isRequired,
  onEditRecipe: React.PropTypes.func.isRequired
};

export default RecipeList;
