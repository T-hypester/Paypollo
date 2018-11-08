import * as React from "react";
import {
  Button,
  Card,
  Header,
  Image,
  Modal,
  Rating,
  RatingProps
} from "semantic-ui-react";

import { getImagePath, IPaypolloProduct } from "./products";

export interface IProductProps extends IPaypolloProduct {
  rating: number;
  onBuy: (
    event: React.MouseEvent<HTMLButtonElement>,
    data: IPaypolloProduct
  ) => void;
  onRate?: (
    event: React.SyntheticEvent,
    product: Pick<IProductProps, "code" | "rating">
  ) => void;
}

export default class extends React.Component<IProductProps> {
  public render() {
    return (
      <Card key={this.props.code}>
        {this.props.image ? <Image src={getImagePath(this.props)} /> : null}
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta className="Product--Price">
            {this.props.price} &euro;
            <br />
            <Rating
              icon="star"
              rating={this.props.rating || 0}
              maxRating={5}
              disabled={true}
            />
          </Card.Meta>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra={true}>
          <Modal
            closeIcon={true}
            trigger={<Button content="Visualizza" icon="eye" />}
          >
            <Modal.Header>{this.props.name}</Modal.Header>
            <Modal.Content image={true} scrolling={true}>
              <Image size="large" src={getImagePath(this.props)} />

              <Modal.Description>
                <Header>{this.props.price} €</Header>
                <p>{this.props.description}</p>
                <Rating
                  icon="star"
                  defaultRating={this.props.rating}
                  maxRating={5}
                  onRate={this.onRate}
                />
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
          <br />
          <Button
            icon="cart"
            content="Aggiungi al carrello"
            onClick={this.onAddToCartClick}
          />
        </Card.Content>
      </Card>
    );
  }

  private onRate = (event: React.SyntheticEvent, data: RatingProps) => {
    if (this.props.onRate) {
      this.props.onRate(event, {
        code: this.props.code,
        rating: data.rating
          ? typeof data.rating === "string"
            ? parseInt(data.rating, 10)
            : data.rating
          : 0
      });
    }
  };

  private onAddToCartClick = (event: any) => {
    this.props.onBuy(event, this.props);
  };
}
