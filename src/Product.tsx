import * as React from "react";
import { Button, Card, Image, Modal, Header, Rating } from "semantic-ui-react";

import { IPaypolloProduct, getImagePath } from "./products";

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
            src={getImagePath(this.props)}
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
          <Modal closeIcon={true} trigger={<Button content="Visualizza"
            icon="eye"
          />}>
            <Modal.Header>{this.props.name}</Modal.Header>
            <Modal.Content image scrolling>
              <Image size='large' src={getImagePath(this.props)} />

              <Modal.Description>
                <Header>{this.props.price} €</Header>
                <Rating icon="star" defaultRating={0} maxRating={5} />
                <p>{this.props.description}</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button
                icon="cart"
                content="Aggiungi al carrello"
                onClick={this.onAddToCartClick}
              />
            </Modal.Actions>
          </Modal>
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
