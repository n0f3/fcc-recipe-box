import React from 'react';
import { Button, Accordion, Panel } from 'react-bootstrap';
import RecipeModal from './RecipeModal';
import Recipe from './Recipe';

class RecipeBox extends React.Component {
  constructor() {
    super();
    this.state = {
      showRecipeModal: false,
      isEditing: false,
      recipes: [],
      activeKey: -1,
      recipeToEdit: {
        recipeName: '',
        recipeIngredients: ''
      }
    };
    this.onOpenAddRecipe = this.onOpenAddRecipe.bind(this);
    this.onCloseRecipeModal = this.onCloseRecipeModal.bind(this);
    this.onEditRecipe = this.onEditRecipe.bind(this);
    this.onDeleteRecipe = this.onDeleteRecipe.bind(this);
    this.onAddRecipe = this.onAddRecipe.bind(this);
    this.handlePanelSelect = this.handlePanelSelect.bind(this);
    this.handleRecipeEdited = this.handleRecipeEdited.bind(this);
  }
  onAddRecipe(newRecipe) {
    const newRecipes = this.state.recipes.concat([newRecipe]);
    console.log(newRecipes);
    this.setState(
      { showRecipeModal: false,
        isEditing:false,
        recipes: newRecipes
      });
  }
  onOpenAddRecipe() {
    this.setState({ showRecipeModal: true });
  }
  onCloseRecipeModal() {
    this.setState({ showRecipeModal: false});
  }
  onDeleteRecipe() {
    const newArray = Array.from(this.state.recipes);
    newArray.splice(this.state.activeKey, 1);
    this.setState({
      showRecipeModal: false,
      isEditing: false,
      recipes: newArray
    });
  }
  onEditRecipe() {
    const activeRecipe = {};
    Object.assign(activeRecipe, this.state.recipes[this.state.activeKey]);
    this.setState({
      showRecipeModal: true,
      isEditing: true,
      recipeToEdit: {
        recipeName: activeRecipe.recipeName,
        recipeIngredients: activeRecipe.recipeIngredients
      }
    });
  }
  handlePanelSelect(activeKey) {
    this.setState({ activeKey });
  }
  handleRecipeEdited(newRecipe) {
    const recipes = Array.from(this.state.recipes);
    recipes[this.state.activeKey].recipeName = newRecipe.recipeName;
    recipes[this.state.activeKey].recipeIngredients = newRecipe.recipeIngredients;
    this.setState({
      showRecipeModal: false,
      recipes: recipes
    });
  }
  render() {
    return (
      <div>
        <div className='well well-lg'>
          <Accordion onSelect={this.handlePanelSelect}>
            {
              this.state.recipes.map((recipe, index) => {
                return(
                  <Panel header={recipe.recipeName} eventKey={index} key={index}>
                    <Recipe ingredients={recipe.recipeIngredients.split(',')} />
                    <Button bsStyle='danger' onClick={this.onDeleteRecipe}>Delete</Button>
                    <Button bsStyle='default' onClick={this.onEditRecipe}>Edit</Button>
                  </Panel>
                )
              })
            }
          </Accordion>
        </div>
        <Button bsStyle='primary' onClick={this.onOpenAddRecipe}> Add Recipe </Button>
        <RecipeModal
          showModal={this.state.showRecipeModal}
          onClose={this.onCloseRecipeModal}
          isEditing={this.state.isEditing}
          onModalSubmit={this.state.isEditing ? this.handleRecipeEdited : this.onAddRecipe}
          recipe={this.state.isEditing ? this.state.recipeToEdit : null}/>
      </div>
    );
  }

}

export default RecipeBox;
