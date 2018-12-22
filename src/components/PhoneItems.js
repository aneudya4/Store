import React, { Component } from "react";
import { phonesItems } from "../api endpoint/Constants";
import { connect } from "react-redux";
import { fetchItems } from "../actions/index";
import ProductList from "./ProductList";
import Header from "../containers/Header";
import MainBanner from "../containers/MainBanner";
import SectionSelection from "../components/SectionSelection";
import PropTypes from "prop-types";

class PhoneItems extends Component {
  componentDidMount() {
    this.props.fetchItems(phonesItems);
  }

  render() {
    const { phones: items } = this.props;
    return (
      <React.Fragment>
        <Header />
        <MainBanner />
        <SectionSelection />
        <div className="product-grid bg-color">
          {items.map(item => (
            <ProductList key={item.sku} item={item} />
          ))}{" "}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ phones }) => {
  return {
    phones
  };
};

PhoneItems.propTypes = {
  phones: PropTypes.array.isRequired,
  fetchItems: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { fetchItems }
)(PhoneItems);
