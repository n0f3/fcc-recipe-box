import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import uuidv4 from 'uuid/v4';

class ModifierButtons extends React.Component {
  render() {
    const buttons = this.props.buttons.map((buttonObj) => {
      return (
        <Button
          bsStyle={buttonObj.bsStyle}
          onClick={buttonObj.onClick}
          key={uuidv4()}
        >
          {buttonObj.text}
        </Button>)
    });
    return (
      <div>
        <ButtonToolbar>
          {buttons}
        </ButtonToolbar>
      </div>
    );
  }

}

export default ModifierButtons;
