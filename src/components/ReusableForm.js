import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
    return (
        <React.Fragment>
        <form onSubmit={props.formSubmissionHandler}>
            <input
            type='text'
            name='name'
            placeholder='Name' />
            <input
            type='text'
            name='origin'
            placeholder='Origin' />
            <input
            type='text'
            name='roast'
            placeholder='Light, Medium, Dark' />
            <input
            type='num'
            name='price'
            placeholder='$4.99/lb' />
            <input
            type='num'
            name='qty'
            placeholder='qty' />
            <button type='submit'>{props.buttonText}</button>
        </form>
        </React.Fragment>
    );
}

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;