import React from "react";
import PropTypes from "prop-types";
import Coffee from './Coffee';

function CoffeeList(props) { 
  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((coffee, index) => 
        <Coffee names={coffee.names}
          location={coffee.location}
          issue={coffee.issue}
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