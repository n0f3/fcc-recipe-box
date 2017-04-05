import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Recipe = () => {
  return (
    <div>
      <h4 className='text-center'>
        Ingredients
      </h4>
      <hr/>
      <ListGroup>
        {
          this.props.ingredients.map((ingredient, index) => {
            return(
              <ListGroupItem key={index}>{ingredient}</ListGroupItem>
            )
          })
        }
      </ListGroup>
    </div>
  );
}

export default Recipe;
