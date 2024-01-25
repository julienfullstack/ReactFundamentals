import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete } = props; //new code
  
  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.location} - {coffee.names}</h3>
      <p><em>{coffee.issue}</em></p>
      <button onClick={ props.onClickingEdit }>Update Coffee</button> { /* new code */ }
<button onClick={()=> props.onClickingDelete(coffee.id) }>Close Coffee</button>
      <button onClick={()=> onClickingDelete(coffee.id) }>Close Coffee</button> { /* new code */ }
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CoffeeDetail;