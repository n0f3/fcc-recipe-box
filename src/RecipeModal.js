import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import RecipeForm from './RecipeForm';

class RecipeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: '',
      recipeIngredients: ''
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onIngredientsChange = this.onIngredientsChange.bind(this);
  }
  onComponentDidMount() {
    if(this.props.recipe)
    {
      this.setState({
        recipeName: this.props.recipe.recipeName,
        recipeIngredients: this.props.recipe.recipeIngredients
      });
    }
  }
  handleChanges() {
    const newRecipe = {};
    Object.assign(newRecipe, this.state);
    this.setState({
      recipeName: '',
      recipeIngredients: ''
    });
    this.props.onModalSubmit(newRecipe);
  }
  onNameChange(e) {
    let { recipeName, recipeIngredients } = this.state;
    recipeName = e.target.value;
    this.setState({
      recipeName,
      recipeIngredients
    });
  }
  onIngredientsChange(e) {
    let { recipeName, recipeIngredients } = this.state;
    recipeIngredients = e.target.value;
    this.setState({
      recipeName,
      recipeIngredients
    });
  }
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new recipe to the cookbook!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RecipeForm
            name={this.state.recipeName}
            ingredients={this.state.recipeIngredients}
            onNameChange={this.onNameChange}
            onIngredientsChange={this.onIngredientsChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle='primary' onClick={this.handleChanges}>
            {
              this.props.isEditing ? 'Edit Recipe' : 'Add Recipe'
            }
          </Button>
          <Button onClick={this.props.onClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}

export default RecipeModal;
