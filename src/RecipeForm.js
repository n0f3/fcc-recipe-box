import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
const RecipeForm = (props) => (
  <form>
    <FormGroup controlId="formBasicText">
      <ControlLabel>Recipe name</ControlLabel>
      <FormControl
        type="text"
        value={props.name}
        placeholder="Recipe Name"
        onChange={props.onNameChange}
      />
    </FormGroup>
    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Ingredients</ControlLabel>
      <FormControl componentClass="textarea" placeholder='Enter Ingredients,Separated, By Commas' value={props.ingredients} onChange={props.onIngredientsChange}/>
    </FormGroup>
  </form>
);

RecipeForm.propTypes = {
  name: React.PropTypes.string,
  ingredients: React.PropTypes.string,
  onNameChange: React.PropTypes.func,
  onIngredientsChange: React.PropTypes.func
};

export default RecipeForm;
