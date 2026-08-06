// data4.js
if (!window.coursesDataPart4) window.coursesDataPart4 = [];
window.coursesDataPart4.push({
  id: "course-4",
  title: "Course 4: Margin, Options & Technical Analysis",
  description: "A Comprehensive Guide to Advanced Trading Tools and Strategies",
  lessons: [
    {
      id: "c4-l1",
      title: "Lesson 1: Using Margin",
      introduction: "Margin trading allows an investor to borrow money from a brokerage firm to purchase securities, using the value of their existing portfolio as collateral. In effect, margin is leverage applied directly to investing—it lets you control a larger position than your own cash alone would allow. While this can amplify gains during a bull market, it equally amplifies losses during a downturn.",
      flashcards: [
        { term: "Margin Account", definition: "A brokerage account that allows an investor to borrow money against the value of their securities." },
        { term: "Initial Margin Requirement", definition: "The minimum percentage of a purchase price an investor must pay with their own cash (currently 50% for most US equities)." },
        { term: "Maintenance Margin", definition: "The minimum percentage of equity an investor must maintain in a margin account relative to the total position value." },
        { term: "Margin Call", definition: "A demand from a brokerage for an investor to deposit additional cash or securities after account equity falls below the maintenance margin." }
      ],
      lessonContent: "### How Margin Amplifies Returns (and Losses)\nIf you buy $10,000 of stock with cash and it goes up 10%, you make $1,000. If you buy $20,000 of stock using $10,000 of your cash and $10,000 of margin, and it goes up 10%, you make $2,000—a 20% return on your actual cash. However, if the stock drops 10%, you lose 20% of your cash.\n\n### How Margin Calls Work\nWhen you buy securities on margin, your brokerage requires you to maintain a minimum level of equity. If the value of your holdings falls and your equity drops below this threshold, the brokerage issues a margin call. Critically, brokerages are legally permitted to sell your securities to meet a margin call without your consent.",
      realWorldExamples: "Priya has a $40,000 portfolio and decides to buy an additional $15,000 of stock using margin. Unexpected news causes the stock to fall 35% in a single week, triggering a margin call. Because she doesn't have immediate cash, her brokerage automatically sells a portion of her long-term index funds at the bottom of the market to meet the call.",
      tipsAndMistakes: [
        { type: 'tip', content: "If you use margin, keep your actual leverage ratio well below your brokerage's maximum allowed limit." },
        { type: 'mistake', content: "Assuming a margin call 'can't happen to me' because your portfolio is diversified." },
        { type: 'mistake', content: "Using margin to buy more of a position that has already declined in value, hoping to 'average down'." }
      ],
      quiz: [
        { question: "What is a margin call?", options: ["A phone call offering you a loan", "A demand to deposit cash because your account equity fell too low", "A dividend payment", "A guaranteed profit"], correctIndex: 1, explanation: "It is a demand from the broker to add funds when equity falls below the maintenance margin." },
        { question: "Can a brokerage sell your assets during a margin call without asking you?", options: ["Yes", "No", "Only if you sign a waiver that day", "Only if it is a Friday"], correctIndex: 0, explanation: "Brokerages have the legal right to liquidate assets to meet a margin call without consent." }
      ]
    },
    {
      id: "c4-l2",
      title: "Lesson 2: Options Trading Basics",
      introduction: "An option is a contract that gives the buyer the right, but not the obligation, to buy or sell a specific security at a specific price on or before a specific date. Options are derivatives, meaning their value is derived from the price of an underlying asset (like a stock).",
      flashcards: [
        { term: "Call Option", definition: "A contract giving the buyer the right to BUY a stock at a specific price." },
        { term: "Put Option", definition: "A contract giving the buyer the right to SELL a stock at a specific price." },
        { term: "Strike Price", definition: "The price at which the option can be exercised." },
        { term: "Expiration Date", definition: "The date the option contract expires and becomes worthless if not exercised." },
        { term: "Premium", definition: "The price you pay to purchase the option contract." }
      ],
      lessonContent: "### Calls vs. Puts\nYou buy a **Call** when you think the stock is going UP. You buy a **Put** when you think the stock is going DOWN.\n\n### The Multiplier Effect\nStandard equity options contracts in the US represent 100 shares of the underlying stock. So if an option premium is quoted at $2.50, the actual cost to buy one contract is $250 ($2.50 x 100).\n\n### Intrinsic vs. Extrinsic Value\nAn option's premium is made of two parts: Intrinsic value (how much it is currently 'in the money') and Extrinsic value (time value and implied volatility). As the expiration date approaches, extrinsic value decays to zero.",
      realWorldExamples: "Stock XYZ is trading at $100. John believes it will announce great earnings next week and jump to $115. Instead of spending $10,000 to buy 100 shares, he buys one Call option with a $105 Strike Price expiring next month for a $200 premium. If XYZ hits $115, his option is intrinsically worth at least $1,000, turning his $200 bet into a massive percentage gain. If the stock drops, he only loses his $200 premium.",
      tipsAndMistakes: [
        { type: 'tip', content: "For beginners, stick to buying options or selling covered calls. Avoid 'naked' selling which has unlimited risk." },
        { type: 'mistake', content: "Buying short-term 'Out of the Money' options hoping for a lottery ticket payout. They almost always expire worthless." }
      ],
      quiz: [
        { question: "If you think a stock's price will fall rapidly, which option should you buy?", options: ["A Call Option", "A Put Option", "A Dividend", "A Margin Call"], correctIndex: 1, explanation: "A Put option increases in value as the underlying stock price falls." }
      ]
    },
    {
      id: "c4-l3",
      title: "Lesson 3: Options Beyond the Basics",
      introduction: "Once the fundamentals of calls and puts are understood, the next step is learning the tools professional traders use to more precisely measure and manage options risk: the Greeks. The Greeks are mathematical calculations that show how an option's price will change based on changes in the underlying stock, time, and volatility.",
      flashcards: [
        { term: "Delta", definition: "Measures how much an option's price will change for a $1 move in the underlying stock." },
        { term: "Theta", definition: "Measures how much value an option loses each day due to time decay." },
        { term: "Vega", definition: "Measures an option's sensitivity to changes in the implied volatility of the underlying asset." },
        { term: "Gamma", definition: "Measures the rate of change of Delta." }
      ],
      lessonContent: "### Understanding Delta\nIf a Call option has a Delta of 0.50, and the underlying stock goes up by $1, the option's price will increase by $0.50. Delta is also often used as a rough proxy for probability—an option with a 0.20 Delta has roughly a 20% chance of expiring in the money.\n\n### The Silent Killer: Theta\nTheta represents time decay. If you buy an option with a Theta of -0.05, it loses $0.05 in value every single day, all else being equal. Theta decay accelerates rapidly in the last 30 days before expiration. This is why buying short-term options is extremely difficult—you are fighting the clock.",
      realWorldExamples: "Sarah buys a Call option with 14 days until expiration. The stock moves up slightly over the next week, but Sarah's option loses value! Why? Because the Theta (time decay) destroyed more value than the small upward stock movement added.",
      tipsAndMistakes: [
        { type: 'tip', content: "If you are buying options, give yourself plenty of time until expiration to minimize the daily impact of Theta." },
        { type: 'mistake', content: "Ignoring Implied Volatility (Vega). Buying options right before earnings when Vega is highly inflated often results in a 'Volatility Crush' after the event, destroying the option's value even if you guessed the direction correctly." }
      ],
      quiz: [
        { question: "Which Greek measures the daily loss of value due to time decay?", options: ["Delta", "Gamma", "Theta", "Vega"], correctIndex: 2, explanation: "Theta measures time decay." }
      ]
    },
    {
      id: "c4-l4",
      title: "Lesson 4: Advanced Trading Strategies",
      introduction: "Advanced trading strategies combine multiple options positions to target very specific market outcomes, rather than just 'up' or 'down'. By combining calls, puts, and stock, traders can profit in flat markets, hedge their portfolios, or define their exact maximum loss.",
      flashcards: [
        { term: "Covered Call", definition: "Selling a call option while owning 100 shares of the underlying stock to generate income." },
        { term: "Iron Condor", definition: "A four-leg options strategy designed to profit when a stock stays within a specific price range." },
        { term: "Straddle", definition: "Buying both a call and a put at the same strike price, profiting if the stock makes a massive move in either direction." }
      ],
      lessonContent: "### Generating Income with Covered Calls\nIf you own 100 shares of a stock you like long-term, you can sell a Call option against it. You collect a premium immediately. If the stock stays below the strike price, you keep the stock and the premium. If it rises above, you sell your stock at the strike price, capping your upside but still securing a profit.\n\n### Spreads\nA 'Spread' involves buying and selling options of the same class (calls or puts) on the same underlying asset simultaneously. A Vertical Spread caps both your maximum profit and maximum loss, making it a safer alternative to naked options.",
      realWorldExamples: "An investor owns 100 shares of Apple at $150. They sell a $160 Call option expiring in one month, collecting a $150 premium. If Apple stays below $160, they keep the $150. If Apple goes to $170, they must sell their shares for $160, missing out on the extra $10/share gain, but still profiting $10/share plus the premium.",
      tipsAndMistakes: [
        { type: 'tip', content: "Use vertical spreads instead of buying single options to dramatically increase your probability of profit." },
        { type: 'mistake', content: "Trading complex multi-leg options strategies without understanding the assignment risks." }
      ],
      quiz: [
        { question: "What do you need to execute a Covered Call?", options: ["100 shares of the underlying stock", "A margin loan", "A put option", "Inside information"], correctIndex: 0, explanation: "A covered call requires owning 100 shares to 'cover' the obligation if assigned." }
      ]
    },
    {
      id: "c4-l5",
      title: "Lesson 5: Options Strategy Guide",
      introduction: "With the mechanics, Greeks, and multi-leg structures from the prior lessons in place, this lesson serves as a practical reference guide for matching market assumptions to the correct strategy.",
      flashcards: [], lessonContent: "When you are heavily bullish, you can buy a Call or a Bull Call Spread. When you are neutral, you can use Iron Condors. When you are bearish, you can buy Puts or a Bear Put Spread. See full PDF for strategy tables.", realWorldExamples: "", tipsAndMistakes: [], quiz: []
    },
    {
      id: "c4-l6",
      title: "Lesson 6: Technical Indicator Guide",
      introduction: "Technical analysis is the study of historical price and volume data to identify patterns and signals that may inform trading decisions. This lesson covers the core indicators.",
      flashcards: [
        { term: "RSI", definition: "Relative Strength Index - a momentum oscillator that measures the speed and change of price movements." },
        { term: "MACD", definition: "Moving Average Convergence Divergence - a trend-following momentum indicator." }
      ],
      lessonContent: "### RSI (Relative Strength Index)\nRSI oscillates between 0 and 100. Generally, an RSI above 70 indicates a stock is overbought (potentially due for a pullback), while an RSI below 30 indicates it is oversold.\n\n### MACD\nMACD helps traders identify trend direction and momentum. When the MACD line crosses above the signal line, it is a bullish signal. When it crosses below, it is bearish.",
      realWorldExamples: "A swing trader notices a stock has crashed for 4 days straight and its RSI is now at 22 (highly oversold). They initiate a small long position anticipating a short-term relief bounce.",
      tipsAndMistakes: [
        { type: 'tip', content: "Never rely on a single technical indicator. Look for confluence (multiple indicators signaling the same thing)." },
        { type: 'mistake', content: "Shorting a stock simply because the RSI is above 70. In strong bull markets, RSI can stay overbought for months." }
      ],
      quiz: [
        { question: "An RSI of 25 generally indicates what?", options: ["The stock is overbought", "The stock is oversold", "The stock is paying a dividend", "The company is bankrupt"], correctIndex: 1, explanation: "An RSI below 30 is traditionally considered oversold." }
      ]
    }
  ]
});
