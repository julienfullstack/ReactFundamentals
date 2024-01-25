import React from "react";
import PropTypes from "prop-types";
import Coffee from './Coffee';

function CoffeeList(props) { 
  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((coffee, index) => 
        <Coffee 
          name={coffee.name}
          origin={coffee.origin}
          roast={coffee.roast}
          price={coffee.price}
          qty={coffee.qty}
          whenCoffeeClicked={props.onCoffeeSelection}
          key={index} />
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default CoffeeList;