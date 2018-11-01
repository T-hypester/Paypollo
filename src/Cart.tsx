import * as React from "react";
import { Dropdown } from "semantic-ui-react";

import { IPaypolloProduct } from "./products";

interface ICartItem extends IPaypolloProduct {
  quantity: number;
}

export interface ICartProps {
  items: ICartItem[];
}

export default (props: ICartProps) => {
  const cart = props.items.reduce(
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
      </Dropdown.Menu>
    </Dropdown>
  );
};
