/**
 * The three pillars, in one place.
 *
 * Used by the homepage strip, the /approach hub and each pillar's own page, so
 * the same claim is never written twice and cannot drift between them.
 *
 * Market-structure figures are sourced and dated. They are the only numbers on
 * the site and they describe the market, never this fund's performance — if
 * any of them is refreshed, update `asOf` with it.
 */

export interface PillarBlock {
  h: string;
  p: string;
}

export interface Pillar {
  slug: string;
  index: string;
  name: string;
  /** one-line summary for the homepage strip and the hub */
  card: string;
  title: string;
  lede: string;
  blocks: PillarBlock[];
  avoid: string;
  structure: {
    heading: string;
    intro: string;
    points: PillarBlock[];
    /** how the fund positions itself inside that structure */
    ours: string;
  };
}

export const asOf = 'Market data as at Q2 2026. Sources noted inline.';

export const pillars: Pillar[] = [
  {
    slug: '/digital-assets',
    index: '01',
    name: 'Digital Assets',
    card: 'Bought outright and held. No leverage, so no position can be closed out from under us — volatility becomes something to sit through rather than survive.',
    title: 'We own the asset, not a claim on it.',
    lede: 'We buy the asset itself, never a leveraged claim on it — and we are prepared to hold it through the volatility that comes with the class.',
    blocks: [
      {
        h: 'Owned outright, no leverage',
        p: 'A leveraged position can be closed out by volatility alone: you can be right about an asset and still be forced out on the way there. Spot cannot be liquidated. Being able to sit through a drawdown rather than being removed from it is, in this asset class, the edge itself.',
      },
      {
        h: 'Long swings, not day trades',
        p: 'Positions are measured in months. Crypto punishes short horizons and forced exits, so the horizon is set to match the volatility rather than to fight it.',
      },
      {
        h: 'Narrative and adoption research',
        p: 'We form a view on where attention, developers and capital are rotating, and which themes are likely to draw flows before they become consensus. Relationships across the ecosystem inform that diligence — they sharpen the research, they do not replace it.',
      },
      {
        h: 'No attachment to positions',
        p: 'We do not marry projects. A project that misses its targets, breaks its commitments or fails to deliver on the thesis is cut or sold down. Conviction is a reason to enter a position; it is never a reason to stay in one.',
      },
    ],
    avoid: 'Leverage. Lending the assets out for yield. Positions we could not exit at size.',
    structure: {
      heading: 'How this market actually sets a price',
      intro:
        'Price formation in digital assets is dominated by borrowed money rather than by the people who own the asset. That single fact shapes how the market falls, and therefore where an unleveraged buyer has an advantage.',
      points: [
        {
          h: 'Derivatives dwarf spot',
          p: 'Derivatives traded roughly 9.6 times spot volume in Q1 2026 (Amberdata). Most of the price on the screen is being set by positions that can be closed involuntarily — which is a very different thing from a market of owners.',
        },
        {
          h: 'Forced sellers set the lows',
          p: 'When leverage unwinds, the marginal seller is not choosing to sell; a margin engine is selling for them. Those prints are not a considered valuation, and they are the prices at which capital that cannot be forced out is able to act.',
        },
        {
          h: 'The buyer base has changed',
          p: 'Spot ETFs have grown to roughly a quarter of global bitcoin volume, with assets concentrated in a handful of issuers (Amberdata, 2026). Allocation now arrives on institutional review cycles rather than on retail impulse, which changes both the timing and the persistence of flows.',
        },
        {
          h: 'Supply is a published calendar',
          p: 'Emissions and unlock schedules are disclosed in advance. Future supply is knowable in this asset class in a way it rarely is elsewhere; the open question is only whether the market has priced it yet.',
        },
      ],
      ours:
        'Our fundamental work concentrates on the two sides that are genuinely knowable — the supply calendar, and where mandated capital is actually permitted to go — and on the distance between them. Holding spot is what converts that research into a position we can keep: when leverage is the forced seller, being unable to be forced out is what allows us to be the buyer.',
    },
  },
  {
    slug: '/gold',
    index: '02',
    name: 'Gold',
    card: 'Actively traded, not parked — run by a specialist desk of experienced trading professionals.',
    title: 'Traded actively, and never by one hand.',
    lede: 'Gold is traded actively here, not parked. The structural decision that matters most is that no single trader runs it.',
    blocks: [
      {
        h: 'Actively traded',
        p: 'The sleeve is run as a trading mandate rather than a passive holding, by a desk that specialises in the market.',
      },
      {
        h: 'Allocated across several traders',
        p: 'Capital is divided between multiple independent traders, each operating to their own mandate, rather than concentrated with one. No single trader’s judgment, style or drawdown determines the outcome of the sleeve.',
      },
      {
        h: 'Why the split exists',
        p: 'Manager risk is a distinct risk from market risk, and it is the one most often left unmanaged. Dividing the mandate diversifies judgment, timing and style — for the same reason a portfolio does not hold a single asset.',
      },
      {
        h: 'The desk',
        p: 'Experienced traders operating to defined mandates and risk limits. [Track record and tenure — to be confirmed and substantiated before publication.]',
      },
    ],
    avoid: 'Concentrating the sleeve with a single manager. Mandates without defined limits.',
    structure: {
      heading: 'Who actually moves this market',
      intro:
        'Gold’s marginal buyer is increasingly an institution that does not trade on price. Understanding that bid matters more than any view on the metal itself.',
      points: [
        {
          h: 'The official sector is a structural bid',
          p: 'Central banks are forecast to buy in the region of 850 tonnes across 2026, having taken an estimated 244 tonnes in the first quarter alone (World Gold Council). They buy to diversify reserves, not to hit a price target.',
        },
        {
          h: 'Reserve managers changed their minds about gold',
          p: 'Official-sector surveys show gold shifting from a legacy holding to an active strategic allocation, with a record share of reserve managers intending to add over the following year (World Gold Council, 2026). That is a slow, policy-driven bid rather than a momentum one.',
        },
        {
          h: 'Real yields are the constraint',
          p: 'Gold pays no coupon, so the real yield available elsewhere is its principal headwind. Together with the dollar and investment flows, that is the macro frame the market actually trades — headline inflation prints are a much weaker signal than they appear.',
        },
        {
          h: 'Price-insensitive demand reshapes drawdowns',
          p: 'When a meaningful share of demand is strategic rather than tactical, sell-offs meet a bid that is not reacting to the fall. It does not remove downside, but it changes its character.',
        },
      ],
      ours:
        'Our fundamental work tracks the official sector, real yields and positioning — the slow variables that frame the market — and the expression of that view is handed to traders who do nothing else all day. Research sets the frame; execution is a separate discipline, and we do not confuse the two.',
    },
  },
  {
    slug: '/custody',
    index: '03',
    name: 'Custody & Controls',
    card: 'Held with a third-party custodian under multi-signature control, away from trading venues. No single party can move the assets alone.',
    title: 'Held where no one hand can reach them.',
    lede: 'The dominant way investors have lost digital assets is not market risk. It is the failure of whoever was holding them.',
    blocks: [
      {
        h: 'Held by a third party, off exchange',
        p: 'Assets sit with an independent custodian in segregated storage, not on a trading venue. Balances are not left where they are traded.',
      },
      {
        h: 'Multi-signature authorisation',
        p: 'Moving assets requires multiple independent signing keys. No single party — including Iron Hand Capital — can move them alone, which removes any one person, device or company as a single point of failure.',
      },
      {
        h: 'Separation of duties',
        p: 'The party that trades is not the party that holds. Custody sits outside the trading function by design, so an error or a compromise on one side cannot reach the other.',
      },
      {
        h: 'Provider',
        p: '[Custodian name, jurisdiction and regulatory status — to confirm before publication.]',
      },
    ],
    avoid: 'Leaving balances on exchanges. Single-key control. Custody by the same party that trades.',
    structure: {
      heading: 'The risk this industry keeps failing to price',
      intro:
        'Investors in digital assets have lost far more capital to the people holding their assets than to the market moving against them. That is a structural feature of the industry, not a run of bad luck.',
      points: [
        {
          h: 'The large failures were custodial',
          p: 'The collapses that destroyed client capital did so because assets were commingled with an operator’s own balance sheet or lent against without disclosure. The market was not the mechanism; the holder was.',
        },
        {
          h: 'Custody became a regulatory question',
          p: 'Institutional practice is now defined by qualified-custodian standards, segregation of client assets and independent verification — the same questions asked of a prime broker in any other asset class.',
        },
        {
          h: 'Multi-party control is the institutional standard',
          p: 'Serious custody distributes signing authority across independent parties, so that no single entity can move assets unilaterally. The point is not stronger secrecy; it is that no one participant is trusted absolutely.',
        },
        {
          h: 'Segregated and offline',
          p: 'Holding assets away from the venues where they are traded, in segregated accounts, removes both the commingling risk and most of the online attack surface at once.',
        },
      ],
      ours:
        'We diligence a custodian the way we diligence an asset: jurisdiction, regulatory standing, segregation of client assets, insurance, audit history and how signing keys are generated and held. An investor is exposed to the custodian whether or not they were told its name, so we treat that choice as an investment decision rather than an administrative one.',
    },
  },
];

export const pillarBySlug = (slug: string) => pillars.find((p) => p.slug === slug);
