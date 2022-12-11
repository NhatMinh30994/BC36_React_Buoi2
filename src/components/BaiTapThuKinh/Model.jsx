import React, { Component } from "react";

import styleModule from "../Style/style.module.css";

export default class Model extends Component {
  render() {
    const {url, name, desc, price} = this.props.glassDetail;
    return (
      <div className="card">
        <img className="card-img-top" src="./glassesImage/model.jpg" alt />
        <img className={styleModule["glass-img"]} src={url} alt="" />
        <div className={styleModule["card-body"]}>
          <h5 className="card-title mb-1">{name}</h5>
          <p className="card-text mb-0">{desc}</p>
          <span>{price}$</span>
        </div>
      </div>
    );
  }
}
