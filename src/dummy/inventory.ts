export let inventory_tables = [
  {
    name: 'Master Inventory',
    data: [
      ['Status', 'FMLS', 'PHL', 'South FL', 'Craiglist'],
      ['Active Listings', 10000, 90000, 20923, 187000],
      ['Contingent Due Diligence', 234, 2829, 234, 0],
      ['Contigent Other', 34, 32903, 234, 0],
      ['Pending', 3, 20393, 8890, 0],
      ['Pending Offer Approval', 444, 292930, 96, 0],
      ['Withdrawn', 22, 3030, 232, 0],
      ['Sold', 2793, 3030, 4234, 0],
      ['Expired', 19, 2828929, 23, 0]
    ]
  },
  {
    name: 'AVM Inventory Checker',
    data: [
      ['Inventory', 'Active', 'Zillow', 'Redfin'],
      ['FMLS MLS', 10000, 8900, 7700],
      ['Trend MLS', 90000, 90000, 50000],
      ['South FL MLS', 20923, 20923, 89000],
      ['Craiglist', 90000, 88000, 84000],
      ['ATL', 25000, 25000, 25000],
      ['PHL', 15000, 14000, 13000],
      ['South FL', 50000, 49000, 46000]
    ]
  },
  {
    name: 'Master Rental Inventory',
    data: [
      ['Status', 'FMLS', 'PHL', 'South FL'],
      ['Active Listings', 10000, 90000, 20923],
      ['Contingent Due Diligence', 234, 2829, 234],
      ['Contigent Other', 34, 32903, 234],
      ['Pending', 3, 20393, 8890],
      ['Pending Offer Approval', 444, 292930, 96],
      ['Withdrawn', 22, 3030, 232],
      ['Sold', 2793, 3030, 4234],
      ['Expired', 19, 2828929, 23]
    ]
  }
];

export let inventory_charts = [
  {
    name: 'Active Listings',
    data: [
      {
        name: 'FMLS',
        value: 10000
      },
      {
        name: 'PHL',
        value: 90000
      },
      {
        name: 'South FL',
        value: 20923
      },
      {
        name: 'Craiglist',
        value: 187000
      }
    ]
  },
  {
    name: 'Craiglist',
    data: [
      {
        name: 'ATL',
        value: 10000
      },
      {
        name: 'PHL',
        value: 87000
      },
      {
        name: 'South FL',
        value: 90000
      }
    ]
  }
]