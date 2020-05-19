export const createMockDataTable = (lines) => {
  const rows = [];
  for (let i = 0; i < lines; i++) {
    const random = Math.random();
    const floorNumber = Math.floor(random * 10 + 1);

    if (floorNumber % 2 === 0 && floorNumber < 5) {
      rows.push({
        fundCode: "AOO5",
        masterIdentifier: "565-4586",
        caption: "Euro-Bond 5 Years",
        marketValue: Number((Math.random() * 1000000).toFixed(2)),
        unrealizedGains: Number((Math.random() * 10000000).toFixed(2)),
        fairValueLevel: "Level 1",
        fairValueType: "Asset",
        securityInvestment: "Government Bond",
      });
    }
    if (floorNumber % 2 === 0 && floorNumber > 5) {
      rows.push({
        fundCode: "AOO5",
        masterIdentifier: "565-4586",
        caption: "United States 10 Years",
        marketValue: Number((Math.random() * 1000000).toFixed(2)),
        unrealizedGains: Number((Math.random() * 10000000).toFixed(2)),
        fairValueLevel: "Level 2",
        fairValueType: "Liability",
        securityInvestment: "Unrealized Gain on For",
      });
    }
    if (floorNumber % 2 !== 0 && floorNumber < 5) {
      rows.push({
        fundCode: "AOO5",
        masterIdentifier: "565-4586",
        caption: "SPDR Barclays",
        marketValue: Number((Math.random() * 1000000).toFixed(2)),
        unrealizedGains: Number((Math.random() * 10000000).toFixed(2)),
        fairValueLevel: "Level 1",
        fairValueType: "Asset",
        securityInvestment: "Corporate Bond",
      });
    }
    if (floorNumber % 2 !== 0 && floorNumber > 5) {
      rows.push({
        fundCode: "AOO5",
        masterIdentifier: "565-4586",
        caption: "S&P/Citigroup Inter",
        marketValue: Number((Math.random() * 1000000).toFixed(2)),
        unrealizedGains: Number((Math.random() * 10000000).toFixed(2)),
        fairValueLevel: "Level 2",
        fairValueType: "Liability",
        securityInvestment: "Government Bond",
      });
    }
  }

  return rows;
};
