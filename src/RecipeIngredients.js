import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import uuidv4 from 'uuid/v4';

const RecipeIngredients = (props) => {
  const ingredients = props.ingredients.split(',').map(
    (ingredient, index) => {
    return <ListGroupItem key={uuidv4()}>{ingredient}</ListGroupItem>
  });
  return (
    <div>
      <h4 className='text-center'>
        Ingredients
      </h4>
      <hr/>
      <ListGroup>
        {ingredients}
      </ListGroup>
    </div>
  );
}

export default RecipeIngredients;
