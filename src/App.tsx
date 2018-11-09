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
import Product, { IProductProps } from "./Product";

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

  constructor(props: any) {
    super(props);
    let key;
    for (let i = 0; (key = window.localStorage.key(i)); i++) {
      this.state[key] = JSON.parse(
        window.localStorage.getItem(key) || "undefined"
      );
    }
  }

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
                onRate={this.onProductRate}
                rating={product.rating || 0}
              />
            ))}
        </Card.Group>
      </Container>
    );
  }

  public setState(update: any, cb?: () => void) {
    super.setState(update, () => {
      Object.keys(this.state).forEach(item => {
        window.localStorage.setItem(item, JSON.stringify(this.state[item]));
      });
      if (cb) {
        cb();
      }
    });
  }

  private onProductRate = (
    event: React.SyntheticEvent,
    data: IProductProps
  ) => {
    this.setState({
      products: this.state.products.map(product =>
        product.code === data.code
          ? {
              ...product,
              rating: data.rating
            }
          : product
      )
    });
  };

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
    -2
  );
}

export default App;
