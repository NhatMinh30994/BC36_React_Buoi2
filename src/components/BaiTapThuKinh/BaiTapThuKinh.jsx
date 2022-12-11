import React, { Component } from "react";

import Model from "./Model";
import Glasses from "./Glasses";

import data from "../../data/dataGlasses.json";

export default class BaiTapThuKinh extends Component {
  state = {
    glassDetail: data[0],
  }

  renderGlassesList = () => {
    return data.map((element) => {
      return (
        <div className="col-4 mt-5" key={element.id}>
          <Glasses element={element} getGlassDetail={this.getGlassDetail}/>
        </div>
      );
    });
  };

  getGlassDetail = (glass) => {
    this.setState({
      glassDetail: glass,
    })
  }

  render() {
    return (
      <div
        className="wrapper"
        style={{ backgroundImage: "url(./glassesImage/background.jpg)", height: "100vh" }}
      >
        <h1 className="mb-5 p-3 text-center">Bài Tập Thử Kính</h1>
        <div className="container">
          <div className="row">
            <div className="col-8 bg-light">
              <div className="row">
                {this.renderGlassesList()}
              </div>
            </div>
            <div className="col-4">
              <Model glassDetail={this.state.glassDetail}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
