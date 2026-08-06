// data3.js
if (!window.coursesDataPart3) window.coursesDataPart3 = [];
window.coursesDataPart3.push({
  id: "course-3",
  title: "Course 3: Trading & Investment Vehicles",
  description: "A Comprehensive Guide to Understanding How to Invest and Trade",
  lessons: [
    {
      id: "c3-l1",
      title: "Lesson 1: Exchange-Traded Funds (ETFs)",
      introduction: "An exchange-traded fund, or ETF, is a basket of securities that trades on a stock exchange throughout the day, just like an individual stock. ETFs are arguably the greatest financial innovation for retail investors in the last 50 years. They allow you to buy hundreds or thousands of stocks in a single transaction, providing instant diversification at an incredibly low cost.",
      flashcards: [
        { term: "Expense Ratio", definition: "The annual fee that all funds charge their shareholders. Expressed as a percentage of the fund's assets." },
        { term: "NAV", definition: "Net Asset Value - the per-share value of a fund's underlying holdings." },
        { term: "Index ETF", definition: "An ETF designed to passively track a specific market index, like the S&P 500." }
      ],
      lessonContent: "### How ETFs Work\nUnlike a mutual fund, which is bought and sold once per day at a single NAV price, an ETF trades continuously on an exchange. This means you can buy or sell an ETF at 10:30 AM, watch its price fluctuate throughout the day, and use advanced trading orders (like stop-losses) just as you would with a stock.\n\n### The Magic of Low Expense Ratios\nThe primary advantage of most ETFs is their extremely low cost. Because many ETFs passively track an index, they do not need to pay a team of expensive analysts to pick stocks. A standard S&P 500 ETF might charge an expense ratio of 0.03% (meaning you pay $3 a year for every $10,000 invested).",
      realWorldExamples: "Devon wants to invest $10,000 for long-term growth. Comparing two S&P 500 funds, he finds an actively managed mutual fund that charges 0.60% and an ETF that charges 0.03%. Over 30 years, the higher fees on the mutual fund would cost Devon over $20,000 in lost compound growth compared to the ETF.",
      tipsAndMistakes: [
        { type: 'tip', content: "Favor broad, low-cost, diversified ETFs (like Total Stock Market ETFs) as the core foundation of your portfolio." },
        { type: 'mistake', content: "Buying a highly leveraged or 'inverse' ETF and holding it for the long term (they are designed only for day trading)." }
      ],
      quiz: [
        { question: "What is an expense ratio?", options: ["A trading commission fee", "The annual fee for management and operating costs", "A tax on dividends", "The cost of creating an ETF"], correctIndex: 1, explanation: "The annual fee a fund charges for management and operating costs." },
        { question: "When can you buy or sell an ETF?", options: ["Only at the end of the trading day", "Anytime the stock market is open", "Only once per month", "Only during IPOs"], correctIndex: 1, explanation: "ETFs trade exactly like stocks on an exchange throughout the day." }
      ]
    },
    {
      id: "c3-l2",
      title: "Lesson 2: Mutual Funds",
      introduction: "A mutual fund pools money from many investors to purchase a diversified portfolio of stocks, bonds, or other securities. Before the rise of ETFs, mutual funds were the primary way for individual investors to achieve diversification.",
      flashcards: [
        { term: "Active Management", definition: "A fund where a human manager makes decisions about which securities to buy and sell in an attempt to beat the market." },
        { term: "Passive Management", definition: "A fund that simply tracks a market index, attempting to match its performance." },
        { term: "Load Fee", definition: "A sales charge or commission assessed on a mutual fund investment." }
      ],
      lessonContent: "### Mutual Funds vs. ETFs\nWhile both offer diversification, mutual funds only settle once a day after the market closes. If you place a buy order at 11:00 AM, you won't know the exact price you paid until the Net Asset Value (NAV) is calculated at 4:00 PM.\n\n### The Problem with Active Management\nMany mutual funds are actively managed. The manager tries to pick winning stocks to beat the market. However, decades of data show that over a 10-year period, the vast majority (often over 85%) of active managers fail to beat simple, passive index funds, largely because of the higher fees they charge.",
      realWorldExamples: "An investor has the option to buy a 'No-Load' index mutual fund or an actively managed fund with a 5% front-end load fee. The investor chooses the No-Load fund, saving 5% of their initial capital immediately.",
      tipsAndMistakes: [
        { type: 'tip', content: "Always look for 'No-Load' mutual funds to avoid paying unnecessary sales commissions." },
        { type: 'mistake', content: "Assuming an actively managed mutual fund is better just because it charges higher fees." }
      ],
      quiz: [
        { question: "When is a mutual fund's price updated?", options: ["Every second during the trading day", "Once a day after the market closes", "Once a week", "Every hour"], correctIndex: 1, explanation: "Mutual funds calculate their NAV once per day at market close." }
      ]
    },
    {
      id: "c3-l3",
      title: "Lesson 3: Fixed Income & Bonds",
      introduction: "A bond is essentially a loan: when you buy a bond, you are lending money to an entity (usually a corporation or the government). In return, they promise to pay you regular interest over a specific period, and then return your original principal on a specific maturity date.",
      flashcards: [
        { term: "Coupon Rate", definition: "The annual interest rate paid by the bond issuer relative to the bond's face value." },
        { term: "Maturity Date", definition: "The exact date when the bond issuer must return the principal amount to the investor." },
        { term: "Yield to Maturity (YTM)", definition: "The total return anticipated on a bond if held until it matures." }
      ],
      lessonContent: "### The Role of Bonds in a Portfolio\nBonds provide stability. While stocks are volatile and offer high potential growth, bonds generally provide lower, steady returns and act as a shock absorber during stock market crashes.\n\n### Interest Rate Risk\nThe most important rule of bonds: Bond prices and interest rates move in opposite directions. If you own a bond paying 3%, and the government issues new bonds paying 5%, the value of your 3% bond drops because no one wants to buy it when they can get 5% elsewhere.",
      realWorldExamples: "Jessica buys a $1,000 U.S. Treasury bond with a 4% coupon rate and a 10-year maturity. She receives $40 a year for 10 years, and at the end of year 10, she gets her $1,000 back.",
      tipsAndMistakes: [
        { type: 'tip', content: "Increase your bond allocation as you get closer to retirement to protect your capital from stock market crashes." },
        { type: 'mistake', content: "Chasing 'junk bonds' (high-yield corporate bonds) without understanding the significant risk of the company defaulting." }
      ],
      quiz: [
        { question: "What happens to the price of existing bonds when interest rates rise?", options: ["The price goes up", "The price goes down", "The price stays exactly the same", "The bond matures immediately"], correctIndex: 1, explanation: "Bond prices and interest rates have an inverse relationship." }
      ]
    },
    {
      id: "c3-l4",
      title: "Lesson 4: Annuities",
      introduction: "An annuity is a contract between you and an insurance company. You make a lump-sum payment or a series of payments, and in return, the insurer agrees to make periodic payments to you, often for the rest of your life. They are primarily designed to solve one specific fear: outliving your money.",
      flashcards: [
        { term: "Fixed Annuity", definition: "An annuity that guarantees a specific rate of return." },
        { term: "Variable Annuity", definition: "An annuity where the return depends on the performance of underlying investment portfolios." },
        { term: "Surrender Charge", definition: "A heavy fee incurred if you withdraw money from an annuity too early." }
      ],
      lessonContent: "### The Pros and Cons of Annuities\nThe biggest pro is guaranteed income for life. For retirees terrified of the stock market, this peace of mind is incredibly valuable.\n\nHowever, annuities are notorious for extremely high fees, complex contracts, and illiquidity. Once you hand your money to the insurance company, getting it back in a lump sum usually incurs massive surrender charges.",
      realWorldExamples: "A 65-year-old retiree uses $200,000 of their savings to buy an immediate fixed annuity. The insurance company guarantees them a payment of $1,200 every month for the rest of their life, regardless of what the stock market does.",
      tipsAndMistakes: [
        { type: 'tip', content: "If you buy an annuity, stick to simple Fixed Immediate Annuities. Avoid complex variable or indexed annuities." },
        { type: 'mistake', content: "Buying an annuity inside an IRA. The IRA is already tax-advantaged, so you are paying high annuity fees for a tax benefit you already have." }
      ],
      quiz: [
        { question: "What is the primary benefit of a lifetime annuity?", options: ["High stock market returns", "Guaranteed income for life, ensuring you don't outlive your money", "No fees", "Extreme liquidity"], correctIndex: 1, explanation: "It acts as longevity insurance, paying you until you die." }
      ]
    },
    {
      id: "c3-l5",
      title: "Lesson 5: Closed-End Funds",
      introduction: "A closed-end fund (CEF) is a type of pooled investment fund that raises a fixed amount of capital through an initial public offering (IPO) and then lists its shares on a stock exchange.",
      flashcards: [
        { term: "Discount to NAV", definition: "When a CEF trades at a price lower than the actual value of its underlying assets." },
        { term: "Premium to NAV", definition: "When a CEF trades at a price higher than the value of its underlying assets." }
      ],
      lessonContent: "### How CEFs Differ from Mutual Funds and ETFs\nUnlike mutual funds and ETFs, which constantly issue new shares and redeem old ones based on demand, a CEF issues a fixed number of shares. Because supply is fixed, the price of the CEF on the open market can drift away from the actual Net Asset Value (NAV) of the stocks it holds.\n\n### The Yield Advantage\nMany CEFs use leverage (borrowed money) to boost their dividend yields, making them popular among aggressive income investors.",
      realWorldExamples: "A CEF holds exactly $100 million worth of bonds, but due to market panic, the total value of its shares on the exchange drops to $90 million. An investor buys the CEF at a 10% discount to its actual NAV.",
      tipsAndMistakes: [
        { type: 'tip', content: "Look for CEFs trading at a significant discount to their historical NAV." },
        { type: 'mistake', content: "Buying a CEF trading at a massive premium to its NAV." }
      ],
      quiz: [
        { question: "What makes a Closed-End Fund different from a standard ETF?", options: ["It has a fixed number of shares and can trade at a discount/premium to NAV", "It is only open at the end of the year", "It only holds cash", "It is illegal in the US"], correctIndex: 0, explanation: "CEFs do not continuously create/redeem shares, leading to price discrepancies." }
      ]
    },
    {
      id: "c3-l6",
      title: "Lesson 6: Index Funds",
      introduction: "An index fund is a type of mutual fund or ETF designed to track the performance of a specific market index, such as the S&P 500 or the Total Stock Market. John Bogle, the founder of Vanguard, created the first index fund for retail investors, revolutionizing modern finance.",
      flashcards: [
        { term: "Index", definition: "A statistical measure of changes in a representative group of individual data points (e.g., the S&P 500 tracks the 500 largest US companies)." },
        { term: "Market Capitalization Weighting", definition: "An index where the largest companies make up the largest percentage of the fund." }
      ],
      lessonContent: "### The Core Philosophy\nThe philosophy behind index funds is simple: instead of trying to find the needle in the haystack (picking the winning stock), just buy the entire haystack.\n\n### Why They Win\nIndex funds win because they guarantee you receive the market return minus a tiny fee (often 0.03%). Active managers trying to beat the market charge high fees (often 1% or more), meaning they have to beat the market by over 1% every single year just to break even for their investors. Most cannot.",
      realWorldExamples: "Warren Buffett made a famous $1 million bet in 2007 that a simple S&P 500 Index Fund would outperform a hand-picked basket of elite hedge funds over 10 years. The Index fund crushed the hedge funds, and Buffett won the bet easily.",
      tipsAndMistakes: [
        { type: 'tip', content: "A 'Three-Fund Portfolio' (US Total Stock Market, International Stock Market, Total Bond Market) is often all you need." },
        { type: 'mistake', content: "Constantly trading in and out of index funds. They are meant to be bought and held for decades." }
      ],
      quiz: [
        { question: "What is the primary philosophy of index investing?", options: ["To find the single best stock of the year", "To buy the entire market and accept market average returns with minimal fees", "To trade rapidly", "To invest only in bonds"], correctIndex: 1, explanation: "Buy the haystack instead of looking for the needle." }
      ]
    },
    {
      id: "c3-l7",
      title: "Lesson 7: Real Estate Investing",
      introduction: "Real estate has built more wealth throughout history than almost any other asset class. It offers unique advantages: tangible utility, cash flow, appreciation, tax benefits, and the ability to use leverage safely.",
      flashcards: [
        { term: "Leverage", definition: "Using borrowed capital (a mortgage) to increase the potential return of an investment." },
        { term: "Cash Flow", definition: "The net amount of cash moving into and out of an investment property after all expenses and debt service are paid." },
        { term: "Equity", definition: "The difference between the market value of the property and the amount still owed on the mortgage." }
      ],
      lessonContent: "### The Four Wealth Generators of Real Estate\n1. **Cash Flow**: Rent collected minus expenses and mortgage.\n2. **Appreciation**: The property value goes up over time.\n3. **Debt Paydown**: Your tenant is essentially paying off your mortgage for you.\n4. **Tax Benefits**: Depreciation deductions can shield real estate income from taxes.\n\n### The Power of Leverage\nIf you buy a $100,000 stock and it goes up 10%, you made $10,000. If you buy a $500,000 rental property with a $100,000 down payment, and the property goes up 10%, it is now worth $550,000. You made $50,000 on your $100,000 investment—a 50% return.",
      realWorldExamples: "Mark buys a duplex. He lives in one half and rents out the other. The rent from the tenant covers 80% of his entire mortgage payment, drastically reducing his living expenses while he builds equity in a rapidly appreciating neighborhood.",
      tipsAndMistakes: [
        { type: 'tip', content: "Always calculate cash flow assuming you will have to pay for property management, maintenance, and periods of vacancy." },
        { type: 'mistake', content: "Buying a property based solely on expected appreciation while it bleeds negative cash flow every month." }
      ],
      quiz: [
        { question: "How does a tenant paying rent contribute to your wealth in real estate?", options: ["They don't", "They slowly pay down the principal balance of your mortgage (Debt Paydown)", "They increase the interest rate", "They lower your taxes directly"], correctIndex: 1, explanation: "Rent covers the mortgage payment, paying down your debt on the asset." }
      ]
    }
  ]
});
