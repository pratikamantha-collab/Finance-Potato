// data2.js
if (!window.coursesDataPart2) window.coursesDataPart2 = [];
window.coursesDataPart2.push({
  id: "course-2",
  title: "Course 2: Investing",
  description: "A Complete Beginner's Guide to Building Wealth",
  lessons: [
    {
      id: "c2-l1",
      title: "Lesson 1: Investing for Beginners",
      introduction: "Investing is one of the most powerful tools available for building long-term wealth. At its core, investing means putting your money to work so that it can grow over time. When you invest, you are buying an asset—a stock, a bond, a piece of real estate—that you believe will generate income, increase in value, or both.\n\nFor most people, the goal of investing is to outpace inflation and build enough wealth to eventually replace their working income. Unlike saving, which preserves your money but loses purchasing power over time, investing exposes your money to risk in exchange for the potential of significant reward.",
      flashcards: [
        { term: "Asset", definition: "Anything of economic value (e.g., stocks, bonds, real estate) that is expected to provide a future benefit." },
        { term: "Return", definition: "The gain or loss on an investment over a specific period, typically expressed as a percentage." },
        { term: "Diversification", definition: "A risk management strategy that mixes a wide variety of investments within a portfolio." },
        { term: "Inflation", definition: "The rate at which the general level of prices for goods and services is rising." },
        { term: "Compound Interest", definition: "The interest on a loan or deposit calculated based on both the initial principal and the accumulated interest." }
      ],
      lessonContent: "### What Is Investing?\nInvesting is the act of committing money or capital to an endeavor (a business, project, real estate, etc.) with the expectation of obtaining an additional income or profit.\n\n### Why Start Early? The Power of Compounding\nCompound growth—often called \"the eighth wonder of the world\"—is what happens when your investment returns start generating their own returns. The longer your money has to compound, the less of your own money you have to contribute.\n\n### Understanding Risk and Reward\nThe fundamental rule of investing is that risk and potential reward are correlated. To get higher returns, you must accept higher volatility (the degree of variation of a trading price series over time).",
      realWorldExamples: "Tasha begins investing $100 a month into a diversified index fund at age 22. Her friend Mark waits until age 32 to start, but invests $200 a month. Even though Mark is contributing twice as much, Tasha will likely have more money by age 65 solely because her money had 10 extra years to compound.",
      tipsAndMistakes: [
        { type: 'tip', content: "Start with tax-advantaged accounts like a 401(k) or IRA before investing in a taxable brokerage account." },
        { type: 'tip', content: "Set up automatic monthly transfers to your investment accounts so you never forget to invest." },
        { type: 'mistake', content: "Trying to time the market. Studies consistently show that 'time in the market' beats 'timing the market'." },
        { type: 'mistake', content: "Putting all your money into a single company's stock." }
      ],
      quiz: [
        { question: "What is the primary goal of investing?", options: ["To preserve capital exactly as it is", "To outpace inflation and grow wealth over time", "To avoid all risk", "To get rich overnight"], correctIndex: 1, explanation: "Investing aims to grow your purchasing power over time." },
        { question: "What does diversification do?", options: ["Guarantees a high return", "Eliminates all risk", "Spreads risk across different assets", "Concentrates your money in the best stock"], correctIndex: 2, explanation: "Diversification spreads risk so one bad asset doesn't wipe you out." }
      ]
    },
    {
      id: "c2-l2",
      title: "Lesson 2: Trading for Beginners",
      introduction: "While investing is generally focused on building wealth over years and decades, trading involves buying and selling financial instruments in much shorter timeframes—often days, hours, or even minutes. Traders seek to profit from short-term price fluctuations rather than long-term economic growth.\n\nTrading requires significantly more time, attention, and technical knowledge than passive investing. It is also inherently riskier. However, for those who commit to learning the mechanics and managing their risk, trading can be a viable strategy.",
      flashcards: [
        { term: "Day Trading", definition: "The practice of buying and selling financial instruments within the same trading day." },
        { term: "Swing Trading", definition: "A strategy that attempts to capture gains in a stock over a period of a few days to several weeks." },
        { term: "Liquidity", definition: "How quickly and easily an asset can be bought or sold without affecting its price." },
        { term: "Bid-Ask Spread", definition: "The difference between the highest price a buyer is willing to pay and the lowest price a seller is willing to accept." }
      ],
      lessonContent: "### Investing vs. Trading\nInvestors ask: 'Will this company be much larger in 10 years?' Traders ask: 'Will the price of this asset go up or down in the next 10 minutes (or 10 days)?'\n\n### Types of Trading\n1. **Day Trading**: Positions are closed before the market closes. Highly intense.\n2. **Swing Trading**: Positions are held for days or weeks to capture short-term trends.\n3. **Position Trading**: Holding positions for months based on longer-term trends.\n\n### The Importance of Risk Management\nSuccessful traders don't win every trade. They manage risk so their losing trades are small and their winning trades are large.",
      realWorldExamples: "A swing trader notices that a tech stock consistently drops slightly before its earnings report and bounces back afterward. They buy the stock three days before earnings and sell it two days after, capturing a 5% gain in one week.",
      tipsAndMistakes: [
        { type: 'tip', content: "Always use stop-loss orders to automatically limit your losses on a bad trade." },
        { type: 'tip', content: "Start by 'paper trading' (using a simulator with fake money) before risking real capital." },
        { type: 'mistake', content: "Trading with money you need for rent or bills." },
        { type: 'mistake', content: "Revenge trading—trying to win back money immediately after a loss by making reckless trades." }
      ],
      quiz: [
        { question: "How does swing trading differ from day trading?", options: ["Swing trading holds positions for years", "Swing traders hold positions for days or weeks", "Day traders hold positions overnight", "There is no difference"], correctIndex: 1, explanation: "Swing traders hold positions over days/weeks to capture short-term trends." }
      ]
    },
    {
      id: "c2-l3",
      title: "Lesson 3: Crypto - Beyond the Basics",
      introduction: "Cryptocurrency has evolved from a niche technology experiment into a multi-trillion-dollar asset class. At its core, cryptocurrency is digital money secured by cryptography and distributed across a decentralized network of computers using blockchain technology.\n\nWhile Bitcoin remains the most famous cryptocurrency, the ecosystem now includes thousands of alternative coins (altcoins), decentralized finance (DeFi) platforms, and non-fungible tokens (NFTs).",
      flashcards: [
        { term: "Blockchain", definition: "A decentralized, distributed public ledger where transactions are recorded." },
        { term: "Wallet (Hot/Cold)", definition: "Software (hot) or hardware (cold) used to store the cryptographic keys to your crypto." },
        { term: "DeFi", definition: "Decentralized Finance - financial services built on blockchain that operate without traditional intermediaries." },
        { term: "Stablecoin", definition: "A cryptocurrency pegged to a stable asset, like the US Dollar, to minimize volatility." }
      ],
      lessonContent: "### Bitcoin vs. Altcoins\nBitcoin was designed as a decentralized store of value and medium of exchange. Altcoins (like Ethereum, Solana, etc.) often aim to provide different utility, such as executing smart contracts or powering decentralized applications.\n\n### How to Store Crypto Safely\nIf you leave your crypto on an exchange (like Coinbase or Binance), you are trusting them to secure it. If the exchange goes bankrupt or is hacked, you could lose your funds. A Cold Wallet (a physical device) is the safest way to store long-term holdings.",
      realWorldExamples: "Elena wants to invest in crypto but is worried about exchange hacks. She buys Bitcoin on an exchange and immediately transfers it to her Ledger hardware wallet, securing the private keys offline.",
      tipsAndMistakes: [
        { type: 'tip', content: "Remember the phrase: 'Not your keys, not your coins.' Learn self-custody for large amounts." },
        { type: 'mistake', content: "Sending crypto to the wrong network address (it will be lost forever)." },
        { type: 'mistake', content: "Investing heavily in obscure altcoins based on social media hype." }
      ],
      quiz: [
        { question: "What is the safest way to store large amounts of cryptocurrency?", options: ["On a centralized exchange", "In a hot wallet on your phone", "In a cold hardware wallet", "Printed on a piece of paper"], correctIndex: 2, explanation: "Cold wallets keep your private keys entirely offline." }
      ]
    },
    {
      id: "c2-l4",
      title: "Lesson 4: Alternative Investing",
      introduction: "When most people think of investing, they think of stocks and bonds. But a vast world of alternative investments exists outside of the public markets. These assets can provide unique returns that are not strongly correlated with the stock market, offering excellent diversification.\n\nAlternative investments include private equity, venture capital, hedge funds, commodities, art, and collectibles.",
      flashcards: [
        { term: "Alternative Investment", definition: "An asset that is not one of the conventional investment types, such as stocks, bonds, or cash." },
        { term: "Private Equity", definition: "Capital that is not noted on a public exchange. Private equity consists of funds and investors that directly invest in private companies." },
        { term: "Commodity", definition: "A basic good used in commerce that is interchangeable with other goods of the same type (e.g., gold, oil)." }
      ],
      lessonContent: "### Types of Alternatives\n1. **Commodities**: Gold, silver, oil, agriculture. Often used as a hedge against inflation.\n2. **Private Equity & Venture Capital**: Investing in private companies before they go public.\n3. **Collectibles**: Fine art, vintage cars, rare coins, or trading cards.\n\n### Pros and Cons\nAlternatives often provide diversification and potentially high returns, but they suffer from low liquidity (they are hard to sell quickly) and can have high fees or minimum investment requirements.",
      realWorldExamples: "To protect his portfolio against inflation, Marcus allocates 5% of his investments into a gold ETF and a fractional art investing platform, ensuring he isn't 100% reliant on the stock market.",
      tipsAndMistakes: [
        { type: 'tip', content: "Use alternatives as a small slice of your portfolio (e.g., 5-10%) for diversification, not the core." },
        { type: 'mistake', content: "Investing in collectibles you don't actually understand just because they are trendy." }
      ],
      quiz: [
        { question: "Which of the following is considered an alternative investment?", options: ["Apple stock", "A U.S. Treasury Bond", "Fine Art", "A checking account"], correctIndex: 2, explanation: "Fine art is an asset outside of conventional stocks and bonds." }
      ]
    },
    {
      id: "c2-l5",
      title: "Lesson 5: Exploring Stocks and Sectors",
      introduction: "The stock market is not a monolith—it is organized into distinct sectors. A sector is a large segment of the economy containing companies that operate in similar industries. Understanding these sectors is crucial for building a properly diversified portfolio.",
      flashcards: [
        { term: "Sector", definition: "A broad area of the economy in which businesses share the same or a related product or service." },
        { term: "Cyclical Stock", definition: "A stock whose price is heavily affected by macroeconomic or systematic changes in the overall economy." },
        { term: "Defensive Stock", definition: "A stock that provides consistent dividends and stable earnings regardless of the state of the overall stock market." }
      ],
      lessonContent: "### The 11 GICS Sectors\nThe Global Industry Classification Standard divides the market into 11 sectors, including Information Technology, Health Care, Financials, Consumer Discretionary, Consumer Staples, Energy, and Utilities.\n\n### Cyclical vs. Defensive\n**Cyclical sectors** (like Consumer Discretionary or Industrials) soar when the economy is booming but crash during recessions. **Defensive sectors** (like Utilities or Consumer Staples—things people buy no matter what) remain stable during economic downturns.",
      realWorldExamples: "During a recession, a luxury car manufacturer (Cyclical/Consumer Discretionary) sees its stock plummet as people stop buying new cars. However, a company that sells toothpaste and toilet paper (Defensive/Consumer Staples) sees its stock remain relatively stable.",
      tipsAndMistakes: [
        { type: 'tip', content: "Ensure your index funds give you exposure to all 11 sectors so you aren't overly reliant on one industry." },
        { type: 'mistake', content: "Having a portfolio consisting entirely of tech stocks and thinking you are diversified." }
      ],
      quiz: [
        { question: "Which of the following is a defensive sector?", options: ["Consumer Discretionary (Luxury Goods)", "Information Technology", "Consumer Staples (Groceries/Toiletries)", "Financials"], correctIndex: 2, explanation: "Consumer staples are products people must buy regardless of the economy." }
      ]
    },
    {
      id: "c2-l6",
      title: "Lesson 6: Investing for Income",
      introduction: "Not all investors are trying to grow their wealth as quickly as possible. Many—especially those nearing retirement—need their portfolio to generate reliable, consistent cash income to pay for living expenses without having to sell off their underlying assets.",
      flashcards: [
        { term: "Dividend", definition: "A distribution of a portion of a company's earnings to its shareholders." },
        { term: "Yield", definition: "The income return on an investment, expressed as an annual percentage rate based on the investment's cost." },
        { term: "REIT", definition: "Real Estate Investment Trust - a company that owns and operates income-producing real estate." }
      ],
      lessonContent: "### Dividend Investing\nWhen you buy stock in a dividend-paying company, you receive cash payments (usually quarterly) just for owning the stock.\n\n### Real Estate Investment Trusts (REITs)\nREITs allow you to invest in large-scale, income-producing real estate (like malls, apartments, or data centers). By law, they must distribute at least 90% of their taxable income to shareholders as dividends, making them excellent income generators.",
      realWorldExamples: "Robert invests $100,000 into a portfolio of high-yield dividend ETFs and REITs with an average yield of 4.5%. This generates $4,500 of passive cash income for him every year without him having to sell a single share.",
      tipsAndMistakes: [
        { type: 'tip', content: "Look for 'Dividend Aristocrats' - companies that have consistently increased their dividend payout for 25+ consecutive years." },
        { type: 'mistake', content: "Chasing yield: Buying a stock solely because it has a massive 15% dividend yield, which is often a red flag that the company is failing and the dividend will be cut." }
      ],
      quiz: [
        { question: "What is a Dividend Aristocrat?", options: ["A company that pays no dividends", "A company that has increased its dividend for 25+ years", "A wealthy investor", "A real estate trust"], correctIndex: 1, explanation: "It is a company with a strong history of consistently raising its dividend." }
      ]
    },
    {
      id: "c2-l7",
      title: "Lesson 7: Analyzing Stock Fundamentals",
      introduction: "Fundamental analysis is the art and science of evaluating a company's financial health to determine its intrinsic value. By looking at a company's balance sheet, income statement, and cash flow, you can determine whether a stock is overvalued or undervalued by the market.",
      flashcards: [
        { term: "P/E Ratio", definition: "Price-to-Earnings Ratio - relates a company's share price to its earnings per share." },
        { term: "Market Capitalization", definition: "The total market value of a company's outstanding shares of stock." },
        { term: "Free Cash Flow", definition: "The cash a company generates after accounting for cash outflows to support operations." }
      ],
      lessonContent: "### The P/E Ratio\nThe Price-to-Earnings ratio is the most common valuation metric. A P/E of 20 means investors are willing to pay $20 for every $1 of current earnings. A high P/E suggests the market expects high growth; a low P/E might indicate a value stock (or a dying company).\n\n### The Balance Sheet\nThe balance sheet shows Assets (what the company owns) and Liabilities (what the company owes). A healthy company generally has more assets than liabilities and manageable debt levels.",
      realWorldExamples: "An investor compares two shoe companies. Company A has a P/E of 15 and zero debt. Company B has a P/E of 50 and massive debt. The investor chooses Company A because it presents a safer fundamental value.",
      tipsAndMistakes: [
        { type: 'tip', content: "Always compare a company's P/E ratio to its direct competitors in the same sector, not the market as a whole." },
        { type: 'mistake', content: "Buying a stock solely based on a low P/E ratio without investigating why the market has priced it so low." }
      ],
      quiz: [
        { question: "What does the P/E ratio measure?", options: ["Price to Equity", "Price to Earnings", "Profit to Expenses", "Past Earnings"], correctIndex: 1, explanation: "It measures the stock price relative to its per-share earnings." }
      ]
    },
    {
      id: "c2-l8",
      title: "Lesson 8: Using Technical Analysis",
      introduction: "Technical analysis is the study of historical price charts, trading volume, and market statistics to forecast future price movements. Unlike fundamental analysis, which cares about what a company actually does, technical analysis only cares about the psychology of buyers and sellers as reflected in the chart.",
      flashcards: [
        { term: "Support", definition: "A price level where a downtrend tends to pause due to a concentration of demand (buying interest)." },
        { term: "Resistance", definition: "A price level where an uptrend tends to pause due to a concentration of supply (selling interest)." },
        { term: "Moving Average", definition: "An indicator that smooths out price data by creating a constantly updated average price." }
      ],
      lessonContent: "### Support and Resistance\nImagine a stock price bouncing between a floor and a ceiling. The floor is Support—where buyers step in because the stock seems cheap. The ceiling is Resistance—where sellers take profit because the stock seems expensive.\n\n### Moving Averages\nThe 50-day and 200-day Moving Averages are the most widely watched indicators. When a stock's price crosses above its 200-day moving average, technical analysts often view it as a bullish (positive) signal.",
      realWorldExamples: "A trader notices that every time Stock X hits $50, it bounces back up. $50 is a strong support level. The trader sets a limit order to buy at $50.10, anticipating the pattern will repeat.",
      tipsAndMistakes: [
        { type: 'tip', content: "Use technical analysis in conjunction with volume; a breakout on high volume is much more reliable than a breakout on low volume." },
        { type: 'mistake', content: "Overcomplicating your charts with 15 different indicators that give conflicting signals." }
      ],
      quiz: [
        { question: "What is a 'Resistance' level?", options: ["A price floor where buyers step in", "A price ceiling where sellers tend to sell", "The moving average of a stock", "The fundamental value of a company"], correctIndex: 1, explanation: "Resistance acts as a ceiling where selling pressure overcomes buying pressure." }
      ]
    }
  ]
});
