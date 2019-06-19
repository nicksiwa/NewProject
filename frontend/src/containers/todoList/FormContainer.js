import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { FormComponent } from '../../components/todoList/FormComponent';
import { createTodo, deleteTodo } from '../../actions/todo';
import { validation } from '../../components/todoList/helper/validation';

const FormComponentWithReduxForm = reduxForm({
  form: 'todo',
  validation,
  enableReinitialize: true
})(FormComponent)

const FormContainer = props => {
  return (
    <FormComponentWithReduxForm {...props} />
  );
}

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(createTodo(data)),
  onDelete: id => dispatch(deleteTodo(id))
});

export default connect(
  null,
  mapDispatchToProps
)(FormContainer);
