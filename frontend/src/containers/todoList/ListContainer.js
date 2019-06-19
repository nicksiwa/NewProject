import React from 'react';
import { connect } from 'react-redux';
import { ListComponent } from '../../components/todoList/ListComponent';
import { deleteTodo } from '../../actions/todo';

const ListContainer = props => {
  return (
    <ListComponent {...props} />
  );
}

const mapStateToProps = state => ({
  todo: state.todo
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);