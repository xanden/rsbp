import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.todo.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...bindActionCreators(
    {
      onClick: () => setVisibilityFilter(ownProps.filter)
    },
    dispatch
  )
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
