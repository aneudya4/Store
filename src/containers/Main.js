import React, { Component } from "react";
import { fetchItems } from "../actions/index";
import Product from "../components/Product";
import MainBanner from "./MainBanner";
import SectionSelection from "../components/SectionSelection";

import { connect } from "react-redux";
class Main extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    return (
      <React.Fragment>
        <MainBanner />
        <SectionSelection />
        <section className="products">
          {this.props.phones.map(phone => (
            <Product key={phone.sku} phone={phone} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ phones, cart }) => {
  return {
    phones,
    cart
  };
};

export default connect(
  mapStateToProps,
  { fetchItems }
)(Main);
