import React, { Component } from "react";
import { phonesAccesories } from "../api endpoint/Constants";
import { connect } from "react-redux";
import { fetchItems } from "../actions/index";
import Product from "./Product";
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
        {items.map(item => (
          <Product key={item.sku} item={item} />
        ))}{" "}
      </React.Fragment>
    );
  }
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
