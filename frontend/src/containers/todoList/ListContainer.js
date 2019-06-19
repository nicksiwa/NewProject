import React from 'react';
import { connect } from 'react-redux';
import { ListComponent } from '../../components/todoList/ListComponent';

const ListContainer = props => {
  return (
    <ListComponent {...props} />
  );
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps
)(ListContainer);