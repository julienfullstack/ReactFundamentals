import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';
import EditCoffeeForm from './EditCoffeeForm';
import CoffeeDetail from './CoffeeDetail';

class CoffeeControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainCoffeeList: [],
            selectedCoffee: null,
            editing: false
        };
    }

    handleClick = () => {
        if (this.state.selectedCoffee != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedCoffee: null
            });
        } else {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage
        }))
        };
    }

    handleChangingSelectedCoffee = (id) => {
        const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
        this.setState({selectedCoffee: selectedCoffee});
    }

    handleDeletingCoffee = (id) => {
        const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
        this.setState({
            mainCoffeeList: newMainCoffeeList,
            selectedCoffee: null
        });
    }

    handleEditClick = () => {
            this.setState({editing:true});
    }

    handleEditingCoffeeInList = (coffeeToEdit) => {
        const editedMainCoffeeList = this.state.mainCoffeeList
            .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
            .concat(coffeeToEdit);
        this.setState({
            mainCoffeeList: editedMainCoffeeList,
            editing: false,
            selectedCoffee: null
        });
    }

    handleAddingNewCoffeeToList = (newCoffee) => {
        const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
        this.setState({
            mainCoffeeList: newMainCoffeeList,
            formVisibleOnPage: false
        });
    }

    handleUpdateQty = (coffeeToUpdate, delta) => {
        const updatedQty = coffeeToUpdate.qty + delta;
        if (updatedQty >= 0) {
            const updatedCoffee = { ...coffeeToUpdate, qty: updatedQty };
            const newMainCoffeeList = this.state.mainCoffeeList
                .filter(coffee => coffee.id !== coffeeToUpdate.id)
                .concat(updatedCoffee);
            this.setState({
                mainCoffeeList: newMainCoffeeList,
                selectedCoffee: updatedCoffee
            });
        }
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;

        if (this.state.editing) {
            currentlyVisibleState = <EditCoffeeForm 
                            coffee = {this.state.selectedCoffee}
                            onEditCoffee = {this.handleEditingCoffeeInList} />;
            buttonText = "Return to Coffee List"
        } else if (this.state.selectedCoffee != null) {
            currentlyVisibleState = <CoffeeDetail
                            coffee = {this.state.selectedCoffee}
                            onClickingDelete = {this.handleDeletingCoffee}
                            onClickingEdit = {this.handleEditClick}
                            onClickingUpdateQty = {this.handleUpdateQty} />;
            buttonText = "Return to Coffee List";
        } else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewCoffeeForm 
                            onNewCoffeeCreation={this.handleAddingNewCoffeeToList}/>;
            buttonText = "Return to Coffee List";
        } else {
            currentlyVisibleState = <CoffeeList 
                            coffeeList={this.state.mainCoffeeList}
                            onCoffeeSelection={this.handleChangingSelectedCoffee} />
            buttonText = "Add Coffee";        
        }
        
        return(
            <React.Fragment>
                {currentlyVisibleState}<br/>
                <button onClick={this.handleClick}>{buttonText}</button>            </React.Fragment>
        )

    }
}



export default CoffeeControl;