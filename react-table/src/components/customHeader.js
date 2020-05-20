import React, { Component } from "react";
export default class CustomHeader extends Component {
  constructor(props) {
    super(props);

    props.column.addEventListener("sortChanged", this.onSortChanged.bind(this));
  }

  componentDidMount() {
    this.onSortChanged();
  }

  render() {
    let menu = null;
    if (this.props.enableMenu) {
      menu = (
        <div
          ref={(menuButton) => {
            this.menuButton = menuButton;
          }}
          className="customHeaderMenuButton"
          onClick={this.onMenuClicked.bind(this)}
        >
          <i className={`fa ${this.props.menuIcon}`}></i>
        </div>
      );
    }

    let sort = null;
    if (this.props.enableSorting) {
      sort = (
        <div
          className="customSortDownLabel"
          onClick={this.onSortRequested.bind(this, "asc")}
          onTouchEnd={this.onSortRequested.bind(this, "asc")}
        >
          <i class="fa fa-wifi"></i>
        </div>
      );
    }

    return (
      <div>
        {menu}
        <div className="customHeaderLabel">{this.props.displayName}</div>
        {sort}
      </div>
    );
  }

  onMenuClicked() {
    this.props.showColumnMenu(this.menuButton);
  }

  onSortRequested(order, event) {
    this.props.setSort(order, event.shiftKey);
  }

  onSortChanged() {
    this.setState({
      ascSort: this.props.column.isSortAscending() ? "active" : "inactive",
      descSort: this.props.column.isSortDescending() ? "active" : "inactive",
      noSort:
        !this.props.column.isSortAscending() &&
        !this.props.column.isSortDescending()
          ? "active"
          : "inactive",
    });
  }
}
