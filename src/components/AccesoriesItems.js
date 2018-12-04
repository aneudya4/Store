import React, { Component } from "react";
import { phonesAccesories } from "../api endpoint/Constants";
import { connect } from "react-redux";
import { fetchItems } from "../actions/index";
import ProductList from "./ProductList";
import Header from "../containers/Header";
import MainBanner from "../containers/MainBanner";
import SectionSelection from "../components/SectionSelection";
class AccesoriesItems extends Component {
  componentDidMount() {
    this.props.fetchItems(phonesAccesories);
  }

  render() {
    const { phonesAccesories: items } = this.props;
    return (
      <React.Fragment>
        <Header />
        <MainBanner />
        <SectionSelection />
        <div className="product-grid">
          {items.map(item => (
            <ProductList key={item.sku} item={item} />
          ))}{" "}
        </div>
      </React.Fragment>
    );
  }
  //ProductList(Products)->ProductItem
}

const mapStateToProps = ({ phonesAccesories }) => {
  return {
    phonesAccesories
  };
};

export default connect(
  mapStateToProps,
  { fetchItems }
)(AccesoriesItems);
