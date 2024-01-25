import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import EditTicketForm from './EditTicketForm';
import TicketDetail from './TicketDetail';

class TicketControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainTicketList: [],
            selectedTicket: null,
            editing: false
        };
    }

    handleClick = () => {
        if (this.state.selectedTicket != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedTicket: null
            });
        } else {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage
        }))
        };
    }

    handleChangingSelectedTicket = (id) => {
        const selectedTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)[0];
        this.setState({selectedTicket: selectedTicket});
    }

    handleDeletingTicket = (id) => {
        const newMainTicketList = this.state.mainTicketList.filter(ticket => ticket.id !== id);
        this.setState({
            mainTicketList: newMainTicketList,
            selectedTicket: null
        });
    }

    handleEditClick = () => {
            this.setState({editing:true});
    }

    handleEditingTicketInList = (ticketToEdit) => {
        const editedMainTicketList = this.state.mainTicketList
            .filter(ticket => ticket.id !== this.state.selectedTicket.id)
            .concat(ticketToEdit);
        this.setState({
            mainTicketList: editedMainTicketList,
            editing: false,
            selectedTicket: null
        });
    }

    handleAddingNewTicketToList = (newTicket) => {
        const newMainTicketList = this.state.mainTicketList.concat(newTicket);
        this.setState({
            mainTicketList: newMainTicketList,
            formVisibleOnPage: false
        });
    }

    handleUpdateQty = (ticketToUpdate, delta) => {
        const updatedQty = ticketToUpdate.qty + delta;
        if (updatedQty >= 0) {
            const updatedTicket = { ...ticketToUpdate, qty: updatedQty };
            const newMainTicketList = this.state.mainTicketList
                .filter(ticket => ticket.id !== ticketToUpdate.id)
                .concat(updatedTicket);
            this.setState({
                mainTicketList: newMainTicketList,
                selectedTicket: updatedTicket
            });
        }
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;

        if (this.state.editing) {
            currentlyVisibleState = <EditTicketForm 
                            ticket = {this.state.selectedTicket}
                            onEditTicket = {this.handleEditingTicketInList} />;
            buttonText = "Return to Ticket List"
        } else if (this.state.selectedTicket != null) {
            currentlyVisibleState = <TicketDetail
                            ticket = {this.state.selectedTicket}
                            onClickingDelete = {this.handleDeletingTicket}
                            onClickingEdit = {this.handleEditClick}
                            onClickingUpdateQty = {this.handleUpdateQty} />;
            buttonText = "Return to Ticket List";
        } else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewTicketForm 
                            onNewTicketCreation={this.handleAddingNewTicketToList}/>;
            buttonText = "Return to Ticket List";
        } else {
            currentlyVisibleState = <TicketList 
                            ticketList={this.state.mainTicketList}
                            onTicketSelection={this.handleChangingSelectedTicket} />
            buttonText = "Add Ticket";        
        }
        
        return(
            <React.Fragment>
                {currentlyVisibleState}<br/>
                <button onClick={this.handleClick}>{buttonText}</button>            </React.Fragment>
        )

    }
}



export default TicketControl;