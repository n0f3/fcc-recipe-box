import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class RecipeForm extends React.Component {
  render() {
    return (
      <form>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Recipe name</ControlLabel>
          <FormControl
            type="text"
            value={this.props.name}
            placeholder='Recipe Name'
            onChange={this.props.onNameChange}
          />
        </FormGroup>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Ingredients</ControlLabel>
          <FormControl
            componentClass="textarea"
            value={this.props.ingredients}
            placeholder='Enter Ingredients,Separated, By Commas'
            onChange={this.props.onIngredientsChange}
          />
        </FormGroup>
      </form>
    );
  }
}

RecipeForm.propTypes = {
  onNameChange: React.PropTypes.func,
  onIngredientsChange: React.PropTypes.func,
  name: React.PropTypes.string,
  ingredients: React.PropTypes.string,
};

export default RecipeForm;
