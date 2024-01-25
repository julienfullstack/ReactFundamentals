import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
    return (
        <React.Fragment>
            <div onClick = {() => props.whenCoffeeClicked(props.id)}>
                <h3>{props.name}, {props.origin}: {props.price}</h3>
            <hr/>
            </div>
        </React.Fragment>
    );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string,
  price: PropTypes.number.isRequired,
  roast: PropTypes.string,
  id: PropTypes.string,
  qty: PropTypes.number,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;