import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

const RecipeForm = (props) => {
  return (
    <form>
      <FormGroup controlId="formBasicText">
        <ControlLabel>Recipe name</ControlLabel>
        <FormControl
          type="text"
          value={props.name}
          placeholder='Recipe Name'
          onChange={props.onNameChange}
        />
      </FormGroup>
      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>Ingredients</ControlLabel>
        <FormControl
          componentClass="textarea"
          value={props.ingredients}
          placeholder='Enter Ingredients,Separated, By Commas'
          onChange={props.onIngredientsChange}
        />
      </FormGroup>
    </form>
  );
}

RecipeForm.propTypes = {
  onNameChange: PropTypes.func,
  onIngredientsChange: PropTypes.func,
  name: PropTypes.string,
  ingredients: PropTypes.string,
};

export default RecipeForm;
