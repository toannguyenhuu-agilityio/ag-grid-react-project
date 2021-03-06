import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { createMockDataTable } from "../mock-data";
import CustomHeader from "./customHeader";
import GroupRowCustom from "./groupRowCustom";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          field: "fundCode",
          suppressMenu: true,
          minWidth: 120,
        },
        {
          field: "masterIdentifier",
          sortable: false,
          headerComponentParams: { menuIcon: "fa-external-link-alt" },
        },
        {
          field: "caption",
          suppressMenu: true,
          minWidth: 120,
          rowGroup: true,
        },
        {
          field: "marketValue",
          sortable: false,
          type: "number",
        },
        {
          field: "unrealizedGains",
          suppressMenu: true,
          type: "number",
        },
        {
          field: "fairValueLevel",
          enableRowGroup: true,
          sortable: false,
        },
        {
          field: "fairValueType",
          headerComponentParams: { menuIcon: "fa-cog" },
          minWidth: 120,
          enableRowGroup: true,
        },
        {
          field: "securityInvestment",
          sortable: false,
        },
      ],
      defaultColDef: {
        editable: true,
        sortable: true,
        flex: 1,
        minWidth: 100,
        filter: true,
        resizable: true,
        headerComponentParams: { menuIcon: "fa-bars" },
      },
      columnTypes: {
        number: {
          editable: true,
          valueParser: function (params) {
            return parseInt(params.newValue);
          },
          aggFunc: "sum",
        },
      },
      frameworkComponents: {
        agColumnHeader: CustomHeader,
        groupRowInnerRenderer: GroupRowCustom,
      },
      groupRowInnerRenderer: "groupRowInnerRenderer",
      autoGroupColumnDef: { minWidth: 200 },
      rowGroupPanelShow: "always",
      rowData: null,
    };
  }

  componentDidMount() {
    const data = createMockDataTable(50);
    this.setState({ rowData: data });
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  render() {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <div
          id="myGrid"
          style={{
            height: "100%",
            width: "100%",
          }}
          className="ag-theme-alpine"
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            rowData={this.state.rowData}
            suppressMenuHide={true}
            frameworkComponents={this.state.frameworkComponents}
            autoGroupColumnDef={this.state.autoGroupColumnDef}
            suppressDragLeaveHidesColumns={true}
            suppressMakeColumnVisibleAfterUnGroup={true}
            rowGroupPanelShow={this.state.rowGroupPanelShow}
            onGridReady={this.onGridReady}
            groupRowInnerRenderer={this.state.groupRowInnerRenderer}
            groupUseEntireRow={true}
            columnTypes={this.state.columnTypes}
          />
        </div>
      </div>
    );
  }
}

export default Table;
