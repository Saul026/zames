import React, { Component } from "react";
import Interface from "../components/Interface/Interface";

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.id;
    this.name = this.props.name;
    this.selectedHero = this.props.selectedHero;
    this.enemyHero = this.props.enemyHero;
    this.game = this.props.game;
  }

  render() {
    return (
      <div>
        <h3>
          {this.name}: {this.selectedHero.name}
        </h3>
        <Interface player={this} />
      </div>
    );
  }
}
