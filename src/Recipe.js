import React from 'react';
import RecipeIngredients from './RecipeIngredients';
import ModifierButtons from './ModifierButtons';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
  }
  onDeleteClick() {
    this.props.onDeleteRecipe(this.props.recipeId);
  }
  onEditClick() {
    this.props.onEditRecipe(this.props.recipeId);
  }
  render() {
    return (
      <div>
        <RecipeIngredients ingredients={this.props.recipeIngredients} />
        <ModifierButtons
          buttons={[
            {
              bsStyle: 'danger',
              onClick: this.onDeleteClick,
              text: 'Delete',
            },
            {
              bsStyle: 'default',
              onClick: this.onEditClick,
              text: 'Edit'
            },
          ]}
        />
      </div>
    );
  }
}

Recipe.propTypes = {
  recipeId: React.PropTypes.string.isRequired,
  recipeIngredients: React.PropTypes.string.isRequired,
  onDeleteRecipe: React.PropTypes.func.isRequired,
  onEditRecipe: React.PropTypes.func.isRequired
};

export default Recipe;
