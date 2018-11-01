import * as React from "react";
import { Button, Dropdown, Header, Icon, Modal } from "semantic-ui-react";

import { IPaypolloProduct } from "./products";

interface ICartItem extends IPaypolloProduct {
  quantity: number;
}

export interface ICart {
  items: ICartItem[];
}

interface ICartProps extends ICart {
  onUpdate: (cart: ICart) => void;
}

interface ICartState {
  payModalOpen: boolean;
}

export default class extends React.Component<ICartProps, ICartState> {
  public readonly state = {
    payModalOpen: false
  };

  public render() {
    const cart = this.props.items.reduce(
      (cart, item) => ({
        items: [
          ...cart.items,
          <Dropdown.Item
            description={item.quantity}
            image={item.image}
            key={item.code}
            text={item.name}
            style={{ minWidth: "300px" }}
          />
        ],
        total: cart.total + item.price * item.quantity
      }),
      {
        items: [],
        total: 0
      }
    );
    return (
      <Dropdown
        direction="left"
        icon="cart"
        text="carrello"
        floating={true}
        labeled={true}
        button={true}
        className="icon"
      >
        <Dropdown.Menu>
          {cart.items}
          <Dropdown.Item description={`${cart.total} €`} text="Totale" />
          <Dropdown.Item>
            <Button onClick={this.onPayClick}>Paga</Button>
            <Modal open={this.state.payModalOpen} basic={true} size="small">
              <Header
                icon="money"
                content="Sei sicuro di donfermare l'ordine ?"
              />
              <Modal.Content>
                <p>Il tuo ordine e di: {cart.total} €</p>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  basic={true}
                  color="red"
                  inverted={true}
                  onClick={this.onDontPayClick}
                >
                  <Icon name="remove" /> No
                </Button>
                <Button
                  color="green"
                  inverted={true}
                  onClick={this.onDoPayClick}
                >
                  <Icon name="checkmark" /> Sì
                </Button>
              </Modal.Actions>
            </Modal>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  private onPayClick = () => {
    this.setState({
      payModalOpen: true
    });
  };

  private onDontPayClick = () => {
    this.setState({
      payModalOpen: false
    });
  };

  private onDoPayClick = () => {
    this.setState({
      payModalOpen: false
    });
    alert("Grazie per l'acquisto");
    this.props.onUpdate({
      items: []
    } as ICart);
  };
}
