import React, { Component } from 'react';
import {
  Form, FormGroup, Label, Input,
} from 'reactstrap';

class CreateFlashCard extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Question</Label>
          <Input type="text" />
          <Label>Answer</Label>
          <Input type="text" />
        </FormGroup>
      </Form>
    );
  }
}

export default CreateFlashCard;
