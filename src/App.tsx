import * as React from "react";
import {
  Card,
  Container,
  Grid,
  Header,
  Input,
  InputOnChangeData,
  Segment
} from "semantic-ui-react";

import products, { IPaypolloProduct } from "./products";

import Cart, { ICart } from "./Cart";
import Product from "./Product";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

interface IPaypolloStoreState {
  cart: ICart;
  productFilter?: string;
  products: IPaypolloProduct[];
}

class App extends React.Component<{}, IPaypolloStoreState> {
  public readonly state: IPaypolloStoreState = {
    cart: { items: [] } as ICart,
    products
  };

  public render() {
    const filter = this.state.productFilter
      ? this.state.productFilter.toLowerCase()
      : undefined;
    return (
      <Container className="App">
        <Header>
          <Header.Content as="h1" className="App-title">
            Welcome to PayPollo Store
          </Header.Content>
        </Header>
        <Grid as={Segment}>
          <Grid.Column width="8" textAlign="left">
            <Input
              fluid={true}
              icon="search"
              placeholder="Cerca..."
              onChange={this.onSearchChange}
            />
          </Grid.Column>
          <Grid.Column width="8" textAlign="right">
            <Cart {...this.state.cart} onUpdate={this.onCartUpdate} />
          </Grid.Column>
        </Grid>
        <Card.Group className="Product" itemsPerRow="4">
          {this.state.products
            .filter(product => (filter ? filterProduct(product, filter) : true))
            .map(product => (
              <Product
                {...product}
                key={product.code}
                onBuy={this.addProductToCart}
              />
            ))}
        </Card.Group>
      </Container>
    );
  }

  private onCartUpdate = (cart: ICart) => {
    this.setState({
      cart
    });
  };

  private onSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    this.setState({
      productFilter: data.value
    });
  };

  private addProductToCart = (event: any, product: IPaypolloProduct) => {
    const updatedCart = this.state.cart.items.reduce(
      (cart, item) => ({
        found: cart.found || item.code === product.code,
        items: [
          ...cart.items,
          item.code === product.code
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        ]
      }),
      { found: false, items: [] }
    );

    if (!updatedCart.found) {
      updatedCart.items = [
        ...updatedCart.items,
        {
          ...product,
          quantity: 1
        }
      ];
    }

    this.setState({
      cart: {
        items: updatedCart.items
      }
    });
  };
}

function filterProduct(product: IPaypolloProduct, filter: string) {
  return (
    product.name.toLowerCase().search(filter) +
      (product.description || "").toLowerCase().search(filter) >
    0
  );
}

export default App;
