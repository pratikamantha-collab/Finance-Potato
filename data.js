// data.js
window.coursesData = [
  {
    id: "course-1",
    title: "Course 1: Personal Finance Foundations",
    description: "A Comprehensive Guide to Building Financial Literacy",
    lessons: [
      {
        id: "c1-l1",
        title: "Lesson 1: Saving and Budgeting Money",
        introduction: "Budgeting is one of the best habits you can develop for financial success. Without a budget, money tends to disappear - spent on things that were never consciously chosen. A budget isn't a restriction; it's a plan that puts you in control. It maps every dollar of income to a specific purpose: paying bills, building savings, eliminating debt, or enjoying the things you value most.\n\nMost people overestimate how much they earn and underestimate how much they spend. Research shows that individuals who track their spending and follow a written budget accumulate more wealth over time than those who manage money informally. Writing down a budget - or using an app to build one - forces clarity and intention that naturally leads to better decisions.",
        flashcards: [
          { term: "Budget", definition: "A plan that allocates income to expenses, savings, and debt repayment over a set period." },
          { term: "50/30/20 Rule", definition: "Allocate 50% to needs, 30% to wants, 20% to savings." },
          { term: "Emergency Fund", definition: "3-6 months of living expenses held in an accessible account." },
          { term: "Net Income", definition: "Take-home pay after all taxes and deductions." },
          { term: "Fixed Expense", definition: "A recurring cost that remains constant each month." },
          { term: "Variable Expense", definition: "A cost that changes from month to month." },
          { term: "Zero-Based Budget", definition: "A method where every dollar is assigned a category." },
          { term: "Pay Yourself First", definition: "Automatically saving money before paying any other expense." }
        ],
        lessonContent: "### Why Budgeting Works\nBudgeting works because when you decide in advance how to spend your money, you're far less likely to make impulsive decisions. Research shows that people with a spending plan consistently outperform those without one.\n\n### Building Your First Budget\nStep 1 - Calculate your net income.\nStep 2 - List all fixed expenses.\nStep 3 - Estimate variable expenses.\nStep 4 - Calculate the gap.\nStep 5 - Apply a framework.\nStep 6 - Automate.\n\n### Building an Emergency Fund\nAn emergency fund is the foundation of financial stability. Without one, any unexpected expense forces you into debt. The goal is to save three to six months of essential living expenses.",
        realWorldExamples: "Maria earns $4,000 per month take-home pay. Applying the 50/30/20 rule, she maps $2,000 to needs, $1,200 to wants, and $800 to savings...",
        tipsAndMistakes: [
          { type: 'tip', content: "Automate your savings transfer to occur on the same day as your paycheck." },
          { type: 'tip', content: "Use a separate high-yield savings account for your emergency fund." },
          { type: 'mistake', content: "Building a budget around gross income instead of net take-home pay." },
          { type: 'mistake', content: "Skipping the emergency fund and going straight to investing." }
        ],
        quiz: [
          { question: "What is the purpose of a budget?", options: ["To restrict spending entirely", "To plan how income is allocated so every dollar has a purpose", "To track gross income", "To eliminate all variable expenses"], correctIndex: 1, explanation: "A budget plans how income is allocated to expenses, savings, and debt." },
          { question: "What does the 50/30/20 rule recommend for savings?", options: ["50%", "30%", "20%", "10%"], correctIndex: 2, explanation: "20% of net income should go to savings and debt repayment." },
          { question: "Why is tracking net income more important than gross income when budgeting?", options: ["Net income is always higher", "Gross income fluctuates too much", "Net income is your actual take-home pay after taxes and deductions", "There is no difference"], correctIndex: 2, explanation: "Net income represents the actual money available to you to spend, save, or invest." },
          { question: "What is an emergency fund?", options: ["Money saved for vacation", "3-6 months of living expenses held in an accessible account", "A retirement account", "A high-risk stock portfolio"], correctIndex: 1, explanation: "An emergency fund protects you from unexpected expenses without going into debt." },
          { question: "Which of the following is a fixed expense?", options: ["Groceries", "Entertainment", "Rent", "Gas"], correctIndex: 2, explanation: "Rent is a fixed expense because it stays the same every month." }
        ],
        chartType: 'bar'
      },
      {
        id: "c1-l2",
        title: "Lesson 2: Managing Debt",
        introduction: "Debt is one of the most misunderstood forces in personal finance. Used wisely, it can fund education that multiplies earning power, purchase a home that builds equity over decades, or smooth over a short-term cash flow gap. Used poorly, it becomes a slow drain on your finances.",
        flashcards: [
          { term: "Interest Rate (APR)", definition: "Annual Percentage Rate - the yearly cost of borrowing money expressed as a percentage." },
          { term: "Debt Avalanche", definition: "A payoff strategy where you apply extra money to the highest-interest debt first." },
          { term: "Debt Snowball", definition: "A payoff strategy where you aggressively pay off the smallest balance first." },
          { term: "Credit Utilization", definition: "The percentage of your total available credit you are currently using." }
        ],
        lessonContent: "### Understanding How Interest Works Against You\nInterest is the price you pay to borrow money. When you carry a balance on a credit card, interest accrues daily on the outstanding balance. At 24% APR, a $3,000 balance accumulates about $2 of interest every day.\n\n### Debt Payoff Strategies: Avalanche vs. Snowball\nThe two most popular debt payoff strategies are the Debt Avalanche and the Debt Snowball. The Debt Avalanche is mathematically optimal. The Debt Snowball targets the smallest balance first for psychological momentum.",
        realWorldExamples: "James has three debts: a $500 medical bill, a $3,000 credit card, and a $10,000 personal loan. Using the Debt Avalanche, he targets the credit card first...",
        tipsAndMistakes: [
          { type: 'tip', content: "Always pay at least the minimum on every debt on time." },
          { type: 'tip', content: "Call your credit card company and ask for a lower interest rate." },
          { type: 'mistake', content: "Paying only the minimum on credit cards." },
          { type: 'mistake', content: "Closing old credit card accounts after paying them off." }
        ],
        quiz: [
          { question: "What is APR?", options: ["Average Payment Rate", "Annual Percentage Rate", "Accumulated Principal", "Account Payment Ratio"], correctIndex: 1, explanation: "APR is Annual Percentage Rate." },
          { question: "How does the Debt Avalanche differ from the Debt Snowball?", options: ["Avalanche targets smallest balance", "Avalanche targets highest interest", "Avalanche pays minimums", "No difference"], correctIndex: 1, explanation: "Avalanche targets highest-interest debt first." }
        ]
      },
      {
        id: "c1-l3",
        title: "Lesson 3: Saving for Retirement",
        introduction: "Retirement is the financial goal with the longest time horizon and the highest stakes. Unlike other goals, retirement cannot be funded by a loan if you run short.",
        flashcards: [
          { term: "401(k)", definition: "An employer-sponsored retirement account where contributions are made with pre-tax dollars." },
          { term: "Roth IRA", definition: "An individual retirement account funded with after-tax dollars. Qualified withdrawals are tax-free." }
        ],
        lessonContent: "### The Power of Starting Early: Compound Growth\nThe best reason for starting retirement savings as early as possible is a mathematical one. Compounding is the process by which investment returns generate their own returns.\n\n### Choosing Between Roth and Traditional Accounts\nThe Roth vs. Traditional decision comes down to whether you expect to be in a higher tax bracket now or in retirement.",
        realWorldExamples: "Sarah begins contributing $200 per month to a Roth IRA at age 25. By age 65, her account holds approximately $525,000...",
        tipsAndMistakes: [
          { type: 'tip', content: "Contribute at least enough to your 401(k) to capture the full employer match." },
          { type: 'mistake', content: "Cashing out your 401(k) when changing jobs." }
        ],
        quiz: [
          { question: "What is the key tax advantage of a Roth IRA?", options: ["Pre-tax contributions", "Qualified withdrawals in retirement are completely tax-free", "Employer match", "No limits"], correctIndex: 1, explanation: "Qualified withdrawals are tax-free." }
        ],
        chartType: 'bar'
      },
      {
        id: "c1-l4",
        title: "Lesson 4: Managing Healthcare",
        introduction: "Healthcare is among the largest and most unpredictable expenses in an American's financial life. Understanding how health insurance works allows you to select a plan that fits your needs.",
        flashcards: [{ term: "Premium", definition: "The fixed monthly amount you pay for health insurance coverage." }],
        lessonContent: "### How to Choose the Right Health Insurance Plan\nSelecting a health insurance plan requires estimating your likely healthcare usage for the year and comparing the true total cost of each plan.",
        realWorldExamples: "Alex enrolls in a High-Deductible Health Plan with a $1,500 deductible...",
        tipsAndMistakes: [],
        quiz: []
      },
      {
        id: "c1-l5",
        title: "Lesson 5: Working an Income",
        introduction: "Your income is your most valuable financial asset. Your earning capacity over a 30- to 40-year career outweighs everything else you'll build.",
        flashcards: [], lessonContent: "Content available in full PDF.", realWorldExamples: "", tipsAndMistakes: [], quiz: []
      },
      {
        id: "c1-l6",
        title: "Lesson 6: Talking to Family About Finances",
        introduction: "Money is the most avoided topic in many families, yet financial transparency within relationships is one of the strongest predictors of household financial health.",
        flashcards: [], lessonContent: "Content available in full PDF.", realWorldExamples: "", tipsAndMistakes: [], quiz: []
      },
      {
        id: "c1-l7",
        title: "Lesson 7: Personal Finance for Students",
        introduction: "The financial decisions made during college and the years immediately following have a disproportionate impact on lifetime wealth.",
        flashcards: [], lessonContent: "Content available in full PDF.", realWorldExamples: "", tipsAndMistakes: [], quiz: []
      },
      {
        id: "c1-l8",
        title: "Lesson 8: Understanding and Managing Taxes",
        introduction: "The U.S. tax system is one of the most misunderstood subjects in personal finance. Most Americans vastly overestimate how much of their income goes to taxes.",
        flashcards: [], lessonContent: "Content available in full PDF.", realWorldExamples: "", tipsAndMistakes: [], quiz: []
      },
      {
        id: "c1-l9",
        title: "Lesson 9: All About Taxes",
        introduction: "Beyond federal income taxes on wages, the U.S. tax system includes a wide range of taxes that affect individuals in different ways.",
        flashcards: [], lessonContent: "Content available in full PDF.", realWorldExamples: "", tipsAndMistakes: [], quiz: []
      },
      {
        id: "c1-l10",
        title: "Lesson 10: Estate Planning",
        introduction: "Estate planning is how you ensure that the assets and legacy you have built during your lifetime are transferred according to your wishes.",
        flashcards: [], lessonContent: "Content available in full PDF.", realWorldExamples: "", tipsAndMistakes: [], quiz: []
      },
      {
        id: "c1-l11",
        title: "Lesson 11: Retirement Planning Deep Dive",
        introduction: "The goal of retirement planning is to accumulate enough wealth to replace your working income indefinitely.",
        flashcards: [], lessonContent: "Content available in full PDF.", realWorldExamples: "", tipsAndMistakes: [], quiz: []
      }
    ]
  },
  {
    id: "course-2",
    title: "Course 2: Investing",
    description: "A Complete Beginner's Guide to Building Wealth",
    lessons: [
      {
        id: "c2-l1",
        title: "Lesson 1: Investing for Beginners",
        introduction: "Investing is one of the most powerful tools available for building long-term wealth. At its core, investing means putting your money to work so that it can grow over time.",
        flashcards: [
          { term: "Asset", definition: "Anything of economic value: stocks, bonds, real estate, cash, etc." },
          { term: "Return", definition: "The gain or loss on an investment expressed as a percentage." }
        ],
        lessonContent: "### What Is Investing?\nInvesting is the act of committing money to an asset with the expectation that it will generate a return over time.\n\n### Why Start Early? The Power of Compounding\nCompound growth - often called 'the eighth wonder of the world' - is what happens when your investment returns start generating their own returns.",
        realWorldExamples: "Tasha begins investing $100/month into a diversified index fund at age 22. Over 40 years at an average 8% annual return, she accumulates over $310,000...",
        tipsAndMistakes: [
          { type: 'tip', content: "Start with tax-advantaged accounts (401k, IRA) before investing in taxable brokerage accounts." },
          { type: 'mistake', content: "Trying to time the market - studies consistently show 'time in the market' beats 'timing the market'." }
        ],
        quiz: [
          { question: "What is diversification?", options: ["Spreading investments across different assets to reduce the impact of any single loss.", "Investing only in tech stocks", "Timing the market", "Using leverage"], correctIndex: 0, explanation: "Diversification spreads risk." }
        ]
      },
      { id: "c2-l2", title: "Lesson 2: Trading for Beginners", introduction: "While investing is about building wealth over the long term, trading involves buying and selling financial instruments in shorter timeframes.", flashcards: [], lessonContent: "", realWorldExamples: "", tipsAndMistakes: [], quiz: [] },
      { id: "c2-l3", title: "Lesson 3: Crypto - Beyond the Basics", introduction: "Cryptocurrency has evolved from a niche technology experiment into a multi-trillion dollar asset class.", flashcards: [], lessonContent: "", realWorldExamples: "", tipsAndMistakes: [], quiz: [] },
      { id: "c2-l4", title: "Lesson 4: Alternative Investing", introduction: "When most people think of investing, they think of stocks and bonds. But a vast world of alternative investments exists.", flashcards: [], lessonContent: "", realWorldExamples: "", tipsAndMistakes: [], quiz: [] },
      { id: "c2-l5", title: "Lesson 5: Exploring Stocks and Sectors", introduction: "The stock market is not a monolith - it is organized into distinct sectors.", flashcards: [], lessonContent: "", realWorldExamples: "", tipsAndMistakes: [], quiz: [] },
      { id: "c2-l6", title: "Lesson 6: Investing for Income", introduction: "Not all investors are trying to grow their wealth as quickly as possible. Many need their portfolio to generate reliable, consistent income.", flashcards: [], lessonContent: "", realWorldExamples: "", tipsAndMistakes: [], quiz: [] },
      { id: "c2-l7", title: "Lesson 7: Analyzing Stock Fundamentals", introduction: "Fundamental analysis is the art and science of evaluating a company's financial health.", flashcards: [], lessonContent: "", realWorldExamples: "", tipsAndMistakes: [], quiz: [] },
      { id: "c2-l8", title: "Lesson 8: Using Technical Analysis", introduction: "Technical analysis is the study of price charts, trading volume, and market statistics to forecast future price movements.", flashcards: [], lessonContent: "", realWorldExamples: "", tipsAndMistakes: [], quiz: [] }
    ]
  },
  {
    id: "course-3",
    title: "Course 3: Trading & Investment Vehicles",
    description: "A Comprehensive Guide to Understanding How to Invest and Trade",
    lessons: [
      {
        id: "c3-l1",
        title: "Lesson 1: Exchange-Traded Funds (ETFs)",
        introduction: "An exchange-traded fund, or ETF, is a basket of securities that trades on a stock exchange throughout the day.",
        flashcards: [
          { term: "Expense Ratio", definition: "The annual fee that a fund charges to cover management and operating costs." },
          { term: "NAV", definition: "Net Asset Value - the per-share value of a fund's underlying holdings." }
        ],
        lessonContent: "### How ETFs Work\nUnlike a mutual fund, which is bought and sold once per day at a single NAV price, an ETF trades continuously on an exchange.",
        realWorldExamples: "Devon wants to invest $10,000 for long-term growth. Comparing two S&P 500 ETFs, he finds Fund A charges 0.03% and Fund B charges 0.60%...",
        tipsAndMistakes: [
          { type: 'tip', content: "Favor broad, low-cost, diversified ETFs as the core of your portfolio." },
          { type: 'mistake', content: "Buying a thematic or sector ETF based on a hot headline." }
        ],
        quiz: [
          { question: "What is an expense ratio?", options: ["A trading fee", "The annual fee for management", "A tax on dividends", "The cost of creating an ETF"], correctIndex: 1, explanation: "The annual fee a fund charges for management and operating costs." }
        ]
      },
      { id: "c3-l2", title: "Lesson 2: Mutual Funds", introduction: "A mutual fund pools money from many investors to purchase a diversified portfolio.", flashcards: [], lessonContent: "", realWorldExamples: "", tipsAndMistakes: [], quiz: [] },
      { id: "c3-l3", title: "Lesson 3: Fixed Income & Bonds", introduction: "A bond is essentially a loan: when you buy a bond, you are lending money.", flashcards: [], lessonContent: "", realWorldExamples: "", tipsAndMistakes: [], quiz: [] },
      { id: "c3-l4", title: "Lesson 4: Annuities", introduction: "An annuity is a contract with an insurance company.", flashcards: [], lessonContent: "", realWorldExamples: "", tipsAndMistakes: [], quiz: [] },
      { id: "c3-l5", title: "Lesson 5: Closed-End Funds", introduction: "A closed-end fund (CEF) is a type of pooled investment fund that raises a fixed amount of capital.", flashcards: [], lessonContent: "", realWorldExamples: "", tipsAndMistakes: [], quiz: [] },
      { id: "c3-l6", title: "Lesson 6: Index Funds", introduction: "An index fund is designed to track the performance of a specific market index.", flashcards: [], lessonContent: "", realWorldExamples: "", tipsAndMistakes: [], quiz: [] },
      { id: "c3-l7", title: "Lesson 7: Real Estate Investing", introduction: "Real estate has built more wealth throughout history than almost any other asset class.", flashcards: [], lessonContent: "", realWorldExamples: "", tipsAndMistakes: [], quiz: [] }
    ]
  },
  {
    id: "course-4",
    title: "Course 4: Margin, Options & Technical Analysis",
    description: "A Comprehensive Guide to Advanced Trading Tools and Strategies",
    lessons: [
      {
        id: "c4-l1",
        title: "Lesson 1: Using Margin",
        introduction: "Margin trading allows an investor to borrow money from a brokerage firm to purchase securities, using the value of their existing portfolio as collateral. In effect, margin is leverage applied directly to investing - it lets you control a larger position than your own cash alone would allow, which can amplify gains but equally amplifies losses.",
        flashcards: [
          { term: "Margin Account", definition: "A brokerage account that allows an investor to borrow money against the value of their securities to purchase additional investments." },
          { term: "Initial Margin Requirement", definition: "The minimum percentage of a purchase price an investor must pay with their own cash, currently 50% for most equities." },
          { term: "Maintenance Margin", definition: "The minimum percentage of equity an investor must maintain in a margin account relative to the total position value." },
          { term: "Margin Call", definition: "A demand from a brokerage for an investor to deposit additional cash or securities after account equity falls below the maintenance margin." }
        ],
        lessonContent: "### How Margin Calls Work\nWhen you buy securities on margin, your brokerage requires you to maintain a minimum level of equity in the account relative to the total position value. If the value of your holdings falls enough that your equity percentage drops below this threshold, the brokerage issues a margin call.\n\nCritically, brokerages are legally permitted to sell an investor's securities to meet a margin call without prior notice or consent.",
        realWorldExamples: "Priya has a $40,000 diversified portfolio and decides to buy an additional $15,000 of stock using margin. Unexpected news causes the stock to fall 35% in a single week, triggering a margin call. Because she doesn't have immediate cash, her brokerage automatically sells a portion of her long-term index funds to meet the call.",
        tipsAndMistakes: [
          { type: 'tip', content: "Keep your actual leverage ratio well below your brokerage's maximum allowed limit." },
          { type: 'tip', content: "Keep a cash reserve outside your margin account specifically earmarked to meet a potential margin call quickly." },
          { type: 'mistake', content: "Assuming a margin call 'can't happen to me' because your portfolio is diversified." },
          { type: 'mistake', content: "Using margin to buy more of a position that has already declined in value, hoping to 'average down'." }
        ],
        quiz: [
          { question: "What is a margin account?", options: ["A retirement account", "A brokerage account that allows borrowing money against securities", "A high-yield savings account", "An account strictly for options trading"], correctIndex: 1, explanation: "It allows borrowing money against your securities to purchase additional investments." },
          { question: "What triggers a margin call?", options: ["A stock rising in value", "Account equity falling below the maintenance margin requirement", "Buying a dividend stock", "Holding cash for too long"], correctIndex: 1, explanation: "Account equity falling below the brokerage's maintenance margin requirement relative to the total position value." }
        ]
      },
      { id: "c4-l2", title: "Lesson 2: Options Trading Basics", introduction: "An option is a contract that gives the buyer the right, but not the obligation, to buy or sell a specific security.", flashcards: [], lessonContent: "", realWorldExamples: "", tipsAndMistakes: [], quiz: [] },
      { id: "c4-l3", title: "Lesson 3: Options Beyond the Basics", introduction: "Once the fundamentals of calls and puts are understood, the next step is learning the tools professional traders use to more precisely measure and manage options risk: the Greeks.", flashcards: [], lessonContent: "", realWorldExamples: "", tipsAndMistakes: [], quiz: [] },
      { id: "c4-l4", title: "Lesson 4: Advanced Trading Strategies", introduction: "Advanced trading strategies combine multiple positions to target very specific market outcomes.", flashcards: [], lessonContent: "", realWorldExamples: "", tipsAndMistakes: [], quiz: [] },
      { id: "c4-l5", title: "Lesson 5: Options Strategy Guide", introduction: "With the mechanics, Greeks, and multi-leg structures from the prior lessons in place, this lesson serves as a practical reference guide.", flashcards: [], lessonContent: "", realWorldExamples: "", tipsAndMistakes: [], quiz: [] },
      { id: "c4-l6", title: "Lesson 6: Technical Indicator Guide", introduction: "Technical analysis is the study of historical price and volume data to identify patterns and signals that may inform trading decisions.", flashcards: [], lessonContent: "", realWorldExamples: "", tipsAndMistakes: [], quiz: [] }
    ]
  }
];
