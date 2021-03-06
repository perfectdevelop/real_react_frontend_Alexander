import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from "reactstrap";

class OrderStockModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div className="faction-info-modal-container">
        <i className="fas fa-truck" onClick={this.toggle} data data-toggle="tooltip" data-placement="top" title="Order more stocks"></i>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          id="list-faction-modal"
        >
          <ModalBody id="faction-info-modal">
            <i className="fas fa-times times-icon" onClick={this.toggle}></i>
            <p className="faction-info-modal-title">Order new stock of ...</p>
            <div className="modal-inner-input"><p>Stock number to order</p><Input></Input></div>
            <div className="modal-inner-input"><p>Associate company</p><Input></Input></div>
            <div className="modal-inner-input"><p>Total price to pay</p><Input></Input></div>
            <div>
              <Button onClick={this.toggle}>Cancel</Button>
              <Button>Buy</Button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default OrderStockModal;
