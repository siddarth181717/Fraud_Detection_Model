export const userBehaviourData = {
  "U-1842": {
    userId: "U-1842",
    userName: "Rahul Sharma",
    averageAmount: "₹2,800",
    averageAmountNum: 2800,
    maxNormalAmount: "₹8,500",
    transactionsPerDay: "5–7",
    typicalTime: "10:00 AM – 9:00 PM",
    primaryLocation: "Delhi",
    trustedDevicesCount: 2,
    commonMerchants: ["Food & Dining", "Shopping", "Utilities"],
    
    // Deviation metrics
    overallDeviationScore: 87,
    deviationTier: "HIGH",
    deviation: {
      amount: 92,
      time: 85,
      location: 72,
      device: 95,
      frequency: 34
    },

    // Normal vs Current comparison
    comparison: [
      { metric: "Amount", normal: "₹2,800", current: "₹48,500", alert: true, note: "17.3× higher" },
      { metric: "Time", normal: "10AM–9PM", current: "03:17 AM", alert: true, note: "Unusual hours" },
      { metric: "Location", normal: "Delhi", current: "Mumbai", alert: true, note: "New city" },
      { metric: "Device", normal: "Device A", current: "Device B", alert: true, note: "New device" },
      { metric: "Frequency", normal: "5–7/day", current: "18/day", alert: true, note: "Spike" }
    ],

    // Spending history over 30 days
    spendingHistory: [
      { day: "Day 1", amount: 2400 },
      { day: "Day 3", amount: 3100 },
      { day: "Day 6", amount: 1800 },
      { day: "Day 9", amount: 4200 },
      { day: "Day 12", amount: 2600 },
      { day: "Day 15", amount: 2900 },
      { day: "Day 18", amount: 8200 },
      { day: "Day 21", amount: 2100 },
      { day: "Day 24", amount: 3500 },
      { day: "Day 27", amount: 2800 },
      { day: "Day 30", amount: 48500 } // Anomaly!
    ],

    // Hourly transaction distribution
    timePattern: [
      { hour: "6 AM", count: 1 },
      { hour: "9 AM", count: 4 },
      { hour: "12 PM", count: 8 },
      { hour: "3 PM", count: 10 },
      { hour: "6 PM", count: 7 },
      { hour: "9 PM", count: 3 },
      { hour: "12 AM", count: 0 },
      { hour: "3 AM", count: 5 } // Anomaly!
    ],

    // Behaviour Timeline
    timeline: [
      { date: "Aug 20", status: "normal", color: "emerald", label: "Normal activity", desc: "Routine food & shopping transactions in Delhi." },
      { date: "Aug 25", status: "normal", color: "emerald", label: "Normal activity", desc: "Regular utility bill payment from Device A." },
      { date: "Sep 02", status: "warning", color: "yellow", label: "Higher transaction frequency", desc: "8 transactions in a single afternoon." },
      { date: "Sep 10", status: "warning", color: "amber", label: "New location detected", desc: "Transaction logged from Noida highway." },
      { date: "Sep 18", status: "critical", color: "rose", label: "Major behaviour deviation", desc: "₹48,500 transferred at 03:17 AM from Mumbai." }
    ]
  },
  "U-1024": {
    userId: "U-1024",
    userName: "Ananya Roy",
    averageAmount: "₹950",
    averageAmountNum: 950,
    maxNormalAmount: "₹3,500",
    transactionsPerDay: "2–4",
    typicalTime: "09:00 AM – 08:00 PM",
    primaryLocation: "Delhi",
    trustedDevicesCount: 1,
    commonMerchants: ["Groceries", "Subcriptions"],
    
    overallDeviationScore: 12,
    deviationTier: "LOW",
    deviation: {
      amount: 14,
      time: 8,
      location: 5,
      device: 10,
      frequency: 18
    },

    comparison: [
      { metric: "Amount", normal: "₹950", current: "₹850", alert: false, note: "Normal" },
      { metric: "Time", normal: "09AM–8PM", current: "10:42 AM", alert: false, note: "Normal" },
      { metric: "Location", normal: "Delhi", current: "Delhi", alert: false, note: "Same city" },
      { metric: "Device", normal: "Device Phone", current: "Device Phone", alert: false, note: "Known" },
      { metric: "Frequency", normal: "2–4/day", current: "3/day", alert: false, note: "Normal" }
    ],

    spendingHistory: [
      { day: "Day 1", amount: 800 },
      { day: "Day 5", amount: 1200 },
      { day: "Day 10", amount: 950 },
      { day: "Day 15", amount: 1100 },
      { day: "Day 20", amount: 700 },
      { day: "Day 25", amount: 1400 },
      { day: "Day 30", amount: 850 }
    ],

    timePattern: [
      { hour: "6 AM", count: 0 },
      { hour: "9 AM", count: 3 },
      { hour: "12 PM", count: 5 },
      { hour: "3 PM", count: 4 },
      { hour: "6 PM", count: 6 },
      { hour: "9 PM", count: 1 },
      { hour: "12 AM", count: 0 },
      { hour: "3 AM", count: 0 }
    ],

    timeline: [
      { date: "Aug 20", status: "normal", color: "emerald", label: "Normal activity", desc: "Routine coffee purchase." },
      { date: "Sep 01", status: "normal", color: "emerald", label: "Normal activity", desc: "Subscription renewal." }
    ]
  },
  "U-2190": {
    userId: "U-2190",
    userName: "Vikas Verma",
    averageAmount: "₹1,500",
    averageAmountNum: 1500,
    maxNormalAmount: "₹5,000",
    transactionsPerDay: "3–5",
    typicalTime: "11:00 AM – 10:00 PM",
    primaryLocation: "Delhi",
    trustedDevicesCount: 2,
    commonMerchants: ["Electronics", "Travel"],
    
    overallDeviationScore: 34,
    deviationTier: "MEDIUM",
    deviation: {
      amount: 45,
      time: 20,
      location: 38,
      device: 15,
      frequency: 25
    },

    comparison: [
      { metric: "Amount", normal: "₹1,500", current: "₹3,200", alert: true, note: "2.1x higher" },
      { metric: "Time", normal: "11AM–10PM", current: "02:20 PM", alert: false, note: "Normal" },
      { metric: "Location", normal: "Delhi", current: "Noida", alert: font => true, note: "Nearby city" },
      { metric: "Device", normal: "Laptop", current: "Laptop", alert: false, note: "Known" },
      { metric: "Frequency", normal: "3–5/day", current: "6/day", alert: true, note: "Slight increase" }
    ],

    spendingHistory: [
      { day: "Day 1", amount: 1500 },
      { day: "Day 5", amount: 1800 },
      { day: "Day 10", amount: 1200 },
      { day: "Day 15", amount: 2200 },
      { day: "Day 20", amount: 1600 },
      { day: "Day 25", amount: 3200 },
      { day: "Day 30", amount: 1900 }
    ],

    timePattern: [
      { hour: "6 AM", count: 0 },
      { hour: "9 AM", count: 2 },
      { hour: "12 PM", count: 6 },
      { hour: "3 PM", count: 8 },
      { hour: "6 PM", count: 5 },
      { hour: "9 PM", count: 4 },
      { hour: "12 AM", count: 0 },
      { hour: "3 AM", count: 0 }
    ],

    timeline: [
      { date: "Aug 15", status: "normal", color: "emerald", label: "Normal activity", desc: "Electronics purchase." },
      { date: "Sep 15", status: "warning", color: "amber", label: "Cross-city transaction", desc: "Noida POS payment." }
    ]
  }
};

export const transactions = [
  {
    id: "TXN-1001",
    user: "U-1024",
    amount: "₹850",
    amountNum: 850,
    location: "Delhi",
    device: "Trusted",
    time: "10:42 AM",
    riskScore: 12,
    riskLevel: "Low",
    status: "Approved",
    behaviour: {
      normalAmount: "₹950",
      amountComparison: "Normal range",
      normalTime: "09 AM – 08 PM",
      timeComparison: "Typical hours",
      normalLocation: "Delhi",
      locationComparison: "Same city",
      normalDevice: "Trusted Phone",
      deviceComparison: "Known device"
    },
    reasons: [
      {
        type: "normal",
        title: "Standard transaction profile",
        desc: "Transaction aligns with user's typical purchasing pattern and frequency."
      }
    ]
  },
  {
    id: "TXN-1002",
    user: "U-1842",
    amount: "₹48,500",
    amountNum: 48500,
    location: "Mumbai",
    device: "New Device",
    time: "03:17 AM",
    riskScore: 89,
    riskLevel: "High",
    status: "Review",
    behaviour: {
      normalAmount: "₹2,800",
      amountComparison: "⚠️ 17.3× higher",
      normalTime: "10 AM – 9 PM",
      timeComparison: "⚠️ Unusual",
      normalLocation: "Delhi",
      locationComparison: "⚠️ Location change",
      normalDevice: "Device A",
      deviceComparison: "⚠️ New device"
    },
    reasons: [
      {
        type: "critical",
        title: "Amount deviation",
        desc: "Transaction is significantly higher than the user's normal amount."
      },
      {
        type: "critical",
        title: "New device",
        desc: "Device has not been previously associated with this user's transactions."
      },
      {
        type: "warning",
        title: "Unusual time",
        desc: "Transaction occurred outside the user's typical transaction period."
      },
      {
        type: "warning",
        title: "Location deviation",
        desc: "Current location differs from usual activity."
      }
    ]
  },
  {
    id: "TXN-1003",
    user: "U-2190",
    amount: "₹3,200",
    amountNum: 3200,
    location: "Noida",
    device: "Trusted",
    time: "02:20 PM",
    riskScore: 34,
    riskLevel: "Medium",
    status: "Approved",
    behaviour: {
      normalAmount: "₹1,500",
      amountComparison: "⚠️ 2.1× higher",
      normalTime: "11 AM – 10 PM",
      timeComparison: "Typical hours",
      normalLocation: "Delhi",
      locationComparison: "⚠️ Nearby city",
      normalDevice: "Trusted Laptop",
      deviceComparison: "Known device"
    },
    reasons: [
      {
        type: "warning",
        title: "Slight amount elevation",
        desc: "Transaction amount is slightly above 30-day average."
      },
      {
        type: "warning",
        title: "Cross-city transaction",
        desc: "Location shifted from primary home city to neighboring area."
      }
    ]
  },
  {
    id: "TXN-1004",
    user: "U-1024",
    amount: "₹1,200",
    amountNum: 1200,
    location: "Delhi",
    device: "Trusted",
    time: "01:15 PM",
    riskScore: 8,
    riskLevel: "Low",
    status: "Approved",
    behaviour: {
      normalAmount: "₹950",
      amountComparison: "Normal range",
      normalTime: "09 AM – 08 PM",
      timeComparison: "Typical hours",
      normalLocation: "Delhi",
      locationComparison: "Same city",
      normalDevice: "Trusted Phone",
      deviceComparison: "Known device"
    },
    reasons: [
      {
        type: "normal",
        title: "Low risk transaction",
        desc: "Verified device, location, and standard purchasing behavior."
      }
    ]
  },
  {
    id: "TXN-1005",
    user: "U-3091",
    amount: "₹1,25,000",
    amountNum: 125000,
    location: "Bengaluru",
    device: "Proxy / VPN",
    time: "11:05 PM",
    riskScore: 94,
    riskLevel: "High",
    status: "Review",
    behaviour: {
      normalAmount: "₹4,200",
      amountComparison: "⚠️ 29.7× higher",
      normalTime: "08 AM – 06 PM",
      timeComparison: "⚠️ Late night",
      normalLocation: "Pune",
      locationComparison: "⚠️ Major location jump",
      normalDevice: "Desktop PC",
      deviceComparison: "⚠️ Anonymous VPN Node"
    },
    reasons: [
      {
        type: "critical",
        title: "Massive amount spike",
        desc: "High volume transfer exceeding 30-day maximum limit."
      },
      {
        type: "critical",
        title: "VPN / Proxy detected",
        desc: "IP address associated with commercial VPN provider."
      },
      {
        type: "warning",
        title: "Off-peak execution",
        desc: "Attempted outside normal user working hours."
      }
    ]
  },
  {
    id: "TXN-1006",
    user: "U-4102",
    amount: "₹1,499",
    amountNum: 1499,
    location: "Hyderabad",
    device: "Trusted",
    time: "08:12 AM",
    riskScore: 6,
    riskLevel: "Low",
    status: "Approved",
    behaviour: {
      normalAmount: "₹1,800",
      amountComparison: "Normal range",
      normalTime: "08 AM – 09 PM",
      timeComparison: "Typical hours",
      normalLocation: "Hyderabad",
      locationComparison: "Same city",
      normalDevice: "Trusted Mobile",
      deviceComparison: "Known device"
    },
    reasons: [
      {
        type: "normal",
        title: "Safe transaction",
        desc: "No anomalies detected."
      }
    ]
  }
];

export const statCardsData = [
  {
    title: "Transactions",
    value: "24,582",
    subtext: "+12.4%",
    isPositive: true,
    color: "cyan"
  },
  {
    title: "Suspicious",
    value: "327",
    subtext: "+8.2%",
    isPositive: false,
    color: "amber"
  },
  {
    title: "High Risk",
    value: "84",
    subtext: "Attention",
    isPositive: false,
    color: "rose"
  },
  {
    title: "Avg Risk",
    value: "31.7",
    subtext: "Normal",
    isPositive: true,
    color: "emerald"
  }
];

export const risk7DayTrendData = [
  { day: "Mon", low: 2800, medium: 420, high: 95 },
  { day: "Tue", low: 3100, medium: 480, high: 110 },
  { day: "Wed", low: 2950, medium: 510, high: 88 },
  { day: "Thu", low: 3400, medium: 460, high: 130 },
  { day: "Fri", low: 3900, medium: 590, high: 145 },
  { day: "Sat", low: 4200, medium: 640, high: 160 },
  { day: "Sun", low: 3800, medium: 530, high: 115 },
];

export const riskDonutData = [
  { name: "Low", value: 72, color: "#10b981" },
  { name: "Medium", value: 21, color: "#f59e0b" },
  { name: "High", value: 7, color: "#ef4444" },
];

export const mockAlerts = [
  {
    id: "ALT-102",
    severity: "CRITICAL",
    title: "High Velocity Spike",
    description: "Multiple transactions from IP 185.220.101.4 in Mumbai.",
    time: "4 minutes ago",
    status: "Active"
  },
  {
    id: "ALT-101",
    severity: "HIGH",
    title: "Location Anomaly",
    description: "User U-1842 logged in from Delhi and Mumbai within 15 minutes.",
    time: "12 minutes ago",
    status: "Investigating"
  }
];
