import React from 'react';
import { Button } from 'react-bootstrap';
import RecipeModal from './RecipeModal';
import RecipeList from './RecipeList';
import dummyRecipes from '../config/dummyData';

class RecipeBox extends React.Component {
  constructor() {
    super();
    console.log(dummyRecipes);
    this.state = {
      showRecipeModal: false,
      isEditModal: false,
      recipes: dummyRecipes,
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

  componentWillMount() {
    if(!localStorage.getItem('recipes')) {
      localStorage.setItem('recipes', JSON.stringify(this.state.recipes))
    } else {
      this.setState(Object.assign({}, this.state, {
        recipes: JSON.parse(localStorage.getItem('recipes'))
      }));
    }
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
    const newRecipes = this.state.recipes.concat(newRecipe);
    localStorage.setItem('recipes', JSON.stringify(newRecipes));
    this.setState({
      showRecipeModal: false,
      isEditModal: false,
      recipes: newRecipes
    });
   
  }

  deleteRecipe(recipeId) {
    const newRecipes = this.state.recipes.filter((recipe) => recipe.id !== recipeId);
    localStorage.setItem('recipes', JSON.stringify(newRecipes));
    this.setState({
      recipes: newRecipes
    });
  }

  editRecipe(newRecipe) {
    const newRecipes =
      this.state.recipes.map((oldRecipe) => {
        if (oldRecipe.id === newRecipe.id) {
          return Object.assign({}, oldRecipe, {
            id: newRecipe.id,
            recipeName: newRecipe.recipeName,
            recipeIngredients: newRecipe.recipeIngredients
          });
        } else {
          return oldRecipe;
        }
    }); 
    localStorage.setItem('recipes', JSON.stringify(newRecipes));
    this.setState({
      isEditModal: false,
      showRecipeModal: false,
      recipes: newRecipes,
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
