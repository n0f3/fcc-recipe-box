import React from 'react';
import { Button } from 'react-bootstrap';
import RecipeModal from './RecipeModal';
import RecipeList from './RecipeList';
import uuidv4 from 'uuid/v4';

class RecipeBox extends React.Component {
  constructor() {
    super();
    this.state = {
      showRecipeModal: false,
      isEditModal: false,
      recipes: [
        {
          id: uuidv4(),
          recipeName: 'Pasta',
          recipeIngredients: 'Flour,Butter,Eggs'
        },
        {
          id: uuidv4(),
          recipeName: 'Pizza',
          recipeIngredients: 'Flour,Tomatoes,Cheese,Pepperoni'
        },
      ],
      recipeToEdit: {}
    };
    this.addRecipe = this.addRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.onCloseRecipeModal = this.onCloseRecipeModal.bind(this);
    this.onAddRecipeClick = this.onAddRecipeClick.bind(this);
    this.onEditRecipeClick = this.onEditRecipeClick.bind(this);
    this.onDeleteRecipeClick = this.onDeleteRecipeClick.bind(this);
    this.handleAddRecipeSubmit = this.handleAddRecipeSubmit.bind(this);
    this.handleEditRecipeSubmit = this.handleEditRecipeSubmit.bind(this);
  }

  onCloseRecipeModal() {
    this.setState({ showRecipeModal: false, recipeToEdit: {} });
  }
  onAddRecipeClick() {
    this.setState({ showRecipeModal: true });
  }
  onDeleteRecipeClick(recipeId) {
    this.deleteRecipe(recipeId);
  }
  onEditRecipeClick(recipeId) {
    this.setState({
      recipeToEdit: Object.assign({}, this.state.recipes.find((recipe) => recipe.id === recipeId)),
      showRecipeModal: true,
      isEditModal: true,
    });
  }
  handleAddRecipeSubmit(newRecipe) {
    this.addRecipe(newRecipe);
  }
  handleEditRecipeSubmit(newRecipe) {
    this.editRecipe(newRecipe);
  }
  addRecipe(newRecipe) {
    this.setState({
        showRecipeModal: false,
        isEditModal: false,
        recipes: this.state.recipes.concat(newRecipe)
      });
  }
  deleteRecipe(recipeId) {
    this.setState({
      recipes: this.state.recipes.filter((recipe) => recipe.id !== recipeId)
    });
  }
  editRecipe(newRecipe) {
    this.setState({
      isEditModal: false,
      showRecipeModal: false,
      recipes: this.state.recipes.map((oldRecipe) => {
        if (oldRecipe.id === newRecipe.id) {
          return Object.assign({}, oldRecipe, {
            id: newRecipe.id,
            recipeName: newRecipe.recipeName,
            recipeIngredients: newRecipe.recipeIngredients
          });
        } else {
          return oldRecipe;
        }
      }),
      recipeToEdit: {}
    });
  }
  render() {
    const modalTitle = this.state.isEditModal ?
      'Edit Recipe' :
      'Add a new recipe to the cookbook!';
    const modalSubmit = this.state.isEditModal ?
      this.handleEditRecipeSubmit :
      this.handleAddRecipeSubmit;
    return (
      <div>
        <div className='well well-lg'>
          <RecipeList
            recipes={this.state.recipes}
            onDeleteRecipe={this.onDeleteRecipeClick}
            onEditRecipe={this.onEditRecipeClick}
          />
        </div>
        <Button
          bsStyle='primary'
          onClick={this.onAddRecipeClick}
        >
          Add Recipe
        </Button>
        {
          this.state.showRecipeModal &&
            <RecipeModal
              showModal={this.state.showRecipeModal}
              onClose={this.onCloseRecipeModal}
              isEditing={this.state.isEditModal}
              title={modalTitle}
              onModalSubmit={modalSubmit}
              id={this.state.recipeToEdit.id}
              name={this.state.recipeToEdit.recipeName}
              ingredients={this.state.recipeToEdit.recipeIngredients}
            />
        }
      </div>
    );
  }
}

export default RecipeBox;
