import React, { Component } from 'react'

export default class Glasses extends Component {
  render() {
    return (
      <div>
        <img onClick={() => this.props.getGlassDetail(this.props.element)} width={180} src={this.props.element.url} alt={this.props.element.name} />
      </div>
    )
  }
}
