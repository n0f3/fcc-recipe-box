import React from 'react';
import { Modal } from 'react-bootstrap';
import RecipeForm from './RecipeForm';
import uuidv4 from 'uuid/v4';
import ModifierButtons from './ModifierButtons';
import PropTypes from 'prop-types';

class RecipeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id || uuidv4(),
      recipeName: this.props.name || '',
      recipeIngredients: this.props.ingredients || ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      recipeName: e.target.value,
    });
  }

  handleIngredientsChange(e) {
    this.setState({
      recipeIngredients: e.target.value,
    });
  }

  handleSubmit() {
    this.props.onModalSubmit({
      id: this.state.id,
      recipeName: this.state.recipeName,
      recipeIngredients: this.state.recipeIngredients
    });
  }

  render() {
    const submitBtnText = this.props.isEditing ? 'Edit Recipe' : 'Add Recipe';
    return (
      <Modal show={this.props.showModal} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RecipeForm
            name={this.state.recipeName}
            ingredients={this.state.recipeIngredients}
            onNameChange={this.handleNameChange}
            onIngredientsChange={this.handleIngredientsChange}/>
        </Modal.Body>
        <Modal.Footer>
          <ModifierButtons
            buttons={[{
              bsStyle: 'primary',
              onClick: this.handleSubmit,
              text: submitBtnText
            }, {
              bsStyle: 'default',
              onClick: this.props.onClose,
              text: 'Close'
            }]}
          />
        </Modal.Footer>
      </Modal>
    );
  }
}

RecipeModal.propTypes = {
  name: PropTypes.string,
  ingredients: PropTypes.string,
  title: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onModalSubmit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired
};

export default RecipeModal;
