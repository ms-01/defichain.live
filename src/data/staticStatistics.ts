/**
 * DeFiChain historical Ocean snapshot.
 * Retrieved: November 2026
 * Reported block height: 6592124
 *
 * These values are NOT live data.
 */
export const staticStatistics = {
  snapshot: {
    date: "2026-11",
    blockHeight: 6592124,
    live: false,
  },

  supply: {
    max: 1200000000,
    total: 1200000000,
    burned: 321437360.75626725,
    circulating: 935046796.033872,
  },

  tvl: {
    dex: 4847754.418061214,
    masternodes: 2982950.7851741575,
    loan: 3348316.9200731,
    total: 11179022.12330847,
  },

  masternodes: {
    total: 7805,
    lockedTotal: 7802,
    lockedTenYears: 4205,
  },

  dex: {
    poolpairs: 188,
    tokens: 372,
    tradingVolume24h: 1000,
  },
} as const;
