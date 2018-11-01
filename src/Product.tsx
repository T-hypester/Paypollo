import * as React from "react";
import { Button, Card, Image } from "semantic-ui-react";

import { IPaypolloProduct } from "./products";

interface IProductProps extends IPaypolloProduct {
  onBuy: (
    event: React.MouseEvent<HTMLButtonElement>,
    data: IPaypolloProduct
  ) => void;
}

export default class extends React.Component<IProductProps> {
  public render() {
    return (
      <Card key={this.props.code}>
        {this.props.image ? (
          <Image
            src={`${process.env.PUBLIC_URL}/images/products/${
              this.props.image
            }`}
          />
        ) : null}
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta className="Product--Price">
            {this.props.price} &euro;
          </Card.Meta>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra={true}>
          <Button
            icon="cart"
            content="Aggiungi al carrello"
            onClick={this.onAddToCartClick}
          />
        </Card.Content>
      </Card>
    );
  }

  private onAddToCartClick = (event: any) => {
    this.props.onBuy(event, this.props);
  };
}
