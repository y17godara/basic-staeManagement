import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";
import PropTypes from 'prop-types';

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes {props.numOfCakes}</h2>
            <button>Buy Cake</button>
        </div>
    );
}

CakeContainer.propTypes = {
    numOfCakes: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);