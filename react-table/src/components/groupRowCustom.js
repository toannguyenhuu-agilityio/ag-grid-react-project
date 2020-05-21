import React, { Component } from "react";

export default class GroupRowCustom extends Component {
  constructor(props) {
    super(props);

    this.props = props;

    const node = this.props.node;
    const aggData = node.aggData;

    this.state = {
      category: node.key,
      marketValueSum: aggData.marketValue,
      unrealizedGainsSum: aggData.unrealizedGains,
    };

    this.dataChangedListener = () => {
      this.refreshUi();
    };

    props.api.addEventListener("cellValueChanged", this.dataChangedListener);
  }

  refreshUi() {
    const node = this.props.node;
    const aggData = node.aggData;

    this.setState({
      category: node.key,
      marketValueSum: aggData.marketValue,
      unrealizedGainsSum: aggData.unrealizedGains,
    });
  }

  render() {
    return (
      <div style={{ display: "inline-block" }}>
        <span className="groupTitle">{this.state.category}</span>
        <span className="inline-row market-value">
          Market Value: {this.state.marketValueSum}
        </span>
        <span className="inline-row unrealized-gains">
          UnrealizedGains value: {this.state.unrealizedGainsSum}
        </span>
      </div>
    );
  }

  componentWillMount() {
    this.props.api.removeEventListener(
      "cellValueChanged",
      this.dataChangedListener
    );
  }
}
