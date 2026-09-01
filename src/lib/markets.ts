/**
 * The traded universe, in one place so the Coverage strip and the Strategy
 * page cannot drift apart.
 *
 * Drawn from the CoinGecko market-cap ranking (snapshot: 1 Sep 2026) and
 * filtered to what a fund would actually take a position in. Excluded, with
 * reasons — all easy to reverse if any of them are in fact traded:
 *
 *   stablecoins (USDT, USDC, DAI, USDe, PYUSD, RLUSD, USDG, USDY …)
 *     settlement instruments, not positions
 *   tokenised funds / RWA (BUIDL, USYC, Figure Heloc, Canton, Rain)
 *     institutional products, not assets this strategy swing-trades
 *   exchange tokens (LEO, WBT, OKB, CRO)
 *     they add the venue counterparty risk this book is built to avoid
 *   smaller memecoins (SHIB, MemeCore)
 *     DOGE is kept as a genuinely liquid market
 *   XAUT (tokenised gold)
 *     would blur the line with the gold mandate, which is run separately
 *
 * NOTE: XMR and ZEC are listed as major markets, but many custodians and
 * venues will not support privacy coins — confirm against the actual
 * custodian before launch.
 */

export const majors = [
  { ticker: 'BTC', name: 'Bitcoin' },
  { ticker: 'ETH', name: 'Ethereum' },
  { ticker: 'SOL', name: 'Solana' },
];

export const wider = [
  'BNB', 'XRP', 'TRX', 'HYPE', 'DOGE', 'LINK', 'ADA', 'XLM', 'BCH', 'GRAM',
  'LTC', 'UNI', 'HBAR', 'AVAX', 'SUI', 'NEAR', 'TAO', 'AAVE', 'XMR', 'ZEC',
];

export const gold = { ticker: 'XAU', name: 'Gold' };

/** majors + wider + gold */
export const universeCount = majors.length + wider.length + 1;

export const infrastructure = [
  { label: 'Custody', value: 'Independent third party, off exchange' },
  { label: 'Authorisation', value: 'Multi-signature — three independent keys' },
  { label: 'Leverage', value: 'None on digital assets' },
  { label: 'Provider', value: '[Custodian — to confirm]' },
];
