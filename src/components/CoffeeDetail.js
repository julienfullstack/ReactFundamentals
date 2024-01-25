import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
    const { coffee, onClickingDelete, onClickingEdit, onClickingUpdateQty } = props;
    
    function handleQtyIncrease() {
        onClickingUpdateQty(coffee, 1);
    }

    function handleQtyDecrease() {
        onClickingUpdateQty(coffee, -1);
    }

    return (
        <React.Fragment>
        <h1>{coffee.name}, {coffee.origin}: {coffee.price}, remaining: {coffee.qty}</h1>
        <h1>Coffee remaining: {(coffee.qty === 0) ? "Sold out" : coffee.qty}</h1>

        <button onClick={()=> onClickingEdit(coffee.id) }>Update</button> 
        <button onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee</button>
        <button onClick={handleQtyIncrease}>Add more</button>
        <button onClick={handleQtyDecrease}>Sold Out</button>
        <hr/>
        </React.Fragment>
    );
}

CoffeeDetail.propTypes = {
    coffee: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func,
    onClickingUpdateQty: PropTypes.func
}


export default CoffeeDetail;