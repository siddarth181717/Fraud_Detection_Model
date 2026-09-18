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
    overallDeviationScore: 87,
    deviationTier: "HIGH",
    deviation: { amount: 92, time: 85, location: 72, device: 95, frequency: 34 },
    comparison: [
      { metric: "Amount", normal: "₹2,800", current: "₹48,500", alert: true, note: "17.3× higher" },
      { metric: "Time", normal: "10AM–9PM", current: "03:17 AM", alert: true, note: "Unusual hours" },
      { metric: "Location", normal: "Delhi", current: "Mumbai", alert: true, note: "New city" },
      { metric: "Device", normal: "Device A", current: "Device B", alert: true, note: "New device" },
      { metric: "Frequency", normal: "5–7/day", current: "18/day", alert: true, note: "Spike" }
    ],
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
      { day: "Day 30", amount: 48500 }
    ],
    timePattern: [
      { hour: "6 AM", count: 1 },
      { hour: "9 AM", count: 4 },
      { hour: "12 PM", count: 8 },
      { hour: "3 PM", count: 10 },
      { hour: "6 PM", count: 7 },
      { hour: "9 PM", count: 3 },
      { hour: "12 AM", count: 0 },
      { hour: "3 AM", count: 5 }
    ],
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
    commonMerchants: ["Groceries", "Subscriptions"],
    overallDeviationScore: 12,
    deviationTier: "LOW",
    deviation: { amount: 14, time: 8, location: 5, device: 10, frequency: 18 },
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
      { date: "Aug 20", status: "normal", color: "emerald", label: "Normal activity", desc: "Routine coffee purchase." }
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
    deviation: { amount: 45, time: 20, location: 38, device: 15, frequency: 25 },
    comparison: [
      { metric: "Amount", normal: "₹1,500", current: "₹3,200", alert: true, note: "2.1x higher" },
      { metric: "Time", normal: "11AM–10PM", current: "02:20 PM", alert: false, note: "Normal" },
      { metric: "Location", normal: "Delhi", current: "Noida", alert: true, note: "Nearby city" },
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
      { date: "Aug 15", status: "normal", color: "emerald", label: "Normal activity", desc: "Electronics purchase." }
    ]
  }
};

export const transactions = [
  {
    "id": "TX_000001",
    "user": "CUST_0036",
    "amount": "\u20b973.58",
    "amountNum": 73.58,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:07 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000002",
    "user": "CUST_0097",
    "amount": "\u20b9128.56",
    "amountNum": 128.56,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:04 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000003",
    "user": "CUST_0096",
    "amount": "\u20b9422.50",
    "amountNum": 422.5,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:33 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000004",
    "user": "CUST_0052",
    "amount": "\u20b936.15",
    "amountNum": 36.15,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:56 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000005",
    "user": "CUST_0021",
    "amount": "\u20b9256.17",
    "amountNum": 256.17,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:20 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000006",
    "user": "CUST_0074",
    "amount": "\u20b9219.32",
    "amountNum": 219.32,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:12 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000007",
    "user": "CUST_0075",
    "amount": "\u20b996.78",
    "amountNum": 96.78,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:05 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000008",
    "user": "CUST_0005",
    "amount": "\u20b9187.29",
    "amountNum": 187.29,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:09 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000009",
    "user": "CUST_0076",
    "amount": "\u20b9398.29",
    "amountNum": 398.29,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000010",
    "user": "CUST_0039",
    "amount": "\u20b9361.05",
    "amountNum": 361.05,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:05 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000011",
    "user": "CUST_0070",
    "amount": "\u20b9239.85",
    "amountNum": 239.85,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:32 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000012",
    "user": "CUST_0070",
    "amount": "\u20b951.62",
    "amountNum": 51.62,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:14 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000013",
    "user": "CUST_0077",
    "amount": "\u20b9186.30",
    "amountNum": 186.3,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:43 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000014",
    "user": "CUST_0005",
    "amount": "\u20b9298.76",
    "amountNum": 298.76,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000015",
    "user": "CUST_0071",
    "amount": "\u20b91,434.13",
    "amountNum": 1434.13,
    "location": "Mumbai",
    "device": "New Device",
    "time": "07:33 PM",
    "riskScore": 78.3,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000016",
    "user": "CUST_0022",
    "amount": "\u20b9345.06",
    "amountNum": 345.06,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000017",
    "user": "CUST_0050",
    "amount": "\u20b9441.80",
    "amountNum": 441.8,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000018",
    "user": "CUST_0035",
    "amount": "\u20b942.38",
    "amountNum": 42.38,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000019",
    "user": "CUST_0033",
    "amount": "\u20b9237.50",
    "amountNum": 237.5,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:39 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000020",
    "user": "CUST_0030",
    "amount": "\u20b9175.69",
    "amountNum": 175.69,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000021",
    "user": "CUST_0001",
    "amount": "\u20b9292.00",
    "amountNum": 292.0,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:30 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000022",
    "user": "CUST_0009",
    "amount": "\u20b9292.21",
    "amountNum": 292.21,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:07 AM",
    "riskScore": 15.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000023",
    "user": "CUST_0051",
    "amount": "\u20b9374.16",
    "amountNum": 374.16,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:21 AM",
    "riskScore": 15.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000024",
    "user": "CUST_0015",
    "amount": "\u20b9223.34",
    "amountNum": 223.34,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:00 AM",
    "riskScore": 14.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000025",
    "user": "CUST_0059",
    "amount": "\u20b9302.72",
    "amountNum": 302.72,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:26 AM",
    "riskScore": 15.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000026",
    "user": "CUST_0027",
    "amount": "\u20b930.06",
    "amountNum": 30.06,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:53 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000027",
    "user": "CUST_0067",
    "amount": "\u20b9302.00",
    "amountNum": 302.0,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:11 AM",
    "riskScore": 15.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000028",
    "user": "CUST_0051",
    "amount": "\u20b9341.73",
    "amountNum": 341.73,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:27 AM",
    "riskScore": 14.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000029",
    "user": "CUST_0098",
    "amount": "\u20b936.15",
    "amountNum": 36.15,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:14 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000030",
    "user": "CUST_0077",
    "amount": "\u20b9399.44",
    "amountNum": 399.44,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:18 AM",
    "riskScore": 5.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000031",
    "user": "CUST_0015",
    "amount": "\u20b983.88",
    "amountNum": 83.88,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:38 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000032",
    "user": "CUST_0074",
    "amount": "\u20b9341.88",
    "amountNum": 341.88,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:56 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000033",
    "user": "CUST_0093",
    "amount": "\u20b9323.63",
    "amountNum": 323.63,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:17 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000034",
    "user": "CUST_0059",
    "amount": "\u20b978.95",
    "amountNum": 78.95,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:32 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000035",
    "user": "CUST_0038",
    "amount": "\u20b9172.54",
    "amountNum": 172.54,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:35 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000036",
    "user": "CUST_0022",
    "amount": "\u20b9179.98",
    "amountNum": 179.98,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000037",
    "user": "CUST_0085",
    "amount": "\u20b965.61",
    "amountNum": 65.61,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:34 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000038",
    "user": "CUST_0001",
    "amount": "\u20b9287.80",
    "amountNum": 287.8,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:28 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000039",
    "user": "CUST_0040",
    "amount": "\u20b9353.90",
    "amountNum": 353.9,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000040",
    "user": "CUST_0094",
    "amount": "\u20b937.16",
    "amountNum": 37.16,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:32 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000041",
    "user": "CUST_0009",
    "amount": "\u20b9236.24",
    "amountNum": 236.24,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:01 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000042",
    "user": "CUST_0060",
    "amount": "\u20b978.86",
    "amountNum": 78.86,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:25 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000043",
    "user": "CUST_0033",
    "amount": "\u20b998.38",
    "amountNum": 98.38,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000044",
    "user": "CUST_0040",
    "amount": "\u20b9330.68",
    "amountNum": 330.68,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000045",
    "user": "CUST_0082",
    "amount": "\u20b9296.02",
    "amountNum": 296.02,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:48 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000046",
    "user": "CUST_0044",
    "amount": "\u20b9252.75",
    "amountNum": 252.75,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:39 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000047",
    "user": "CUST_0081",
    "amount": "\u20b9167.74",
    "amountNum": 167.74,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000048",
    "user": "CUST_0051",
    "amount": "\u20b9340.39",
    "amountNum": 340.39,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:52 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000049",
    "user": "CUST_0092",
    "amount": "\u20b9104.36",
    "amountNum": 104.36,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000050",
    "user": "CUST_0019",
    "amount": "\u20b9271.70",
    "amountNum": 271.7,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000051",
    "user": "CUST_0001",
    "amount": "\u20b9437.19",
    "amountNum": 437.19,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:45 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000052",
    "user": "CUST_0017",
    "amount": "\u20b9311.81",
    "amountNum": 311.81,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:07 AM",
    "riskScore": 15.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000053",
    "user": "CUST_0027",
    "amount": "\u20b9176.04",
    "amountNum": 176.04,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:47 AM",
    "riskScore": 27.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000054",
    "user": "CUST_0069",
    "amount": "\u20b9397.03",
    "amountNum": 397.03,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:02 AM",
    "riskScore": 16.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000055",
    "user": "CUST_0078",
    "amount": "\u20b949.29",
    "amountNum": 49.29,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:35 AM",
    "riskScore": 12.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000056",
    "user": "CUST_0082",
    "amount": "\u20b977.94",
    "amountNum": 77.94,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:24 AM",
    "riskScore": 12.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000057",
    "user": "CUST_0075",
    "amount": "\u20b9172.48",
    "amountNum": 172.48,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:00 AM",
    "riskScore": 16.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000058",
    "user": "CUST_0091",
    "amount": "\u20b9382.31",
    "amountNum": 382.31,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:34 AM",
    "riskScore": 16.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000059",
    "user": "CUST_0079",
    "amount": "\u20b9291.83",
    "amountNum": 291.83,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:55 AM",
    "riskScore": 15.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000060",
    "user": "CUST_0043",
    "amount": "\u20b9144.24",
    "amountNum": 144.24,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:23 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000061",
    "user": "CUST_0030",
    "amount": "\u20b946.75",
    "amountNum": 46.75,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:48 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000062",
    "user": "CUST_0029",
    "amount": "\u20b9274.41",
    "amountNum": 274.41,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:16 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000063",
    "user": "CUST_0063",
    "amount": "\u20b9389.54",
    "amountNum": 389.54,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:12 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000064",
    "user": "CUST_0017",
    "amount": "\u20b9300.14",
    "amountNum": 300.14,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:41 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000065",
    "user": "CUST_0086",
    "amount": "\u20b9176.93",
    "amountNum": 176.93,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:17 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000066",
    "user": "CUST_0091",
    "amount": "\u20b9268.04",
    "amountNum": 268.04,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:04 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000067",
    "user": "CUST_0053",
    "amount": "\u20b9119.81",
    "amountNum": 119.81,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:25 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000068",
    "user": "CUST_0066",
    "amount": "\u20b9155.83",
    "amountNum": 155.83,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:57 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000069",
    "user": "CUST_0062",
    "amount": "\u20b9378.02",
    "amountNum": 378.02,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:18 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000070",
    "user": "CUST_0054",
    "amount": "\u20b93,937.47",
    "amountNum": 3937.47,
    "location": "Mumbai",
    "device": "New Device",
    "time": "02:12 PM",
    "riskScore": 89.6,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000071",
    "user": "CUST_0001",
    "amount": "\u20b978.67",
    "amountNum": 78.67,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:18 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000072",
    "user": "CUST_0015",
    "amount": "\u20b9318.21",
    "amountNum": 318.21,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:25 PM",
    "riskScore": 5.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000073",
    "user": "CUST_0033",
    "amount": "\u20b9321.76",
    "amountNum": 321.76,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:49 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000074",
    "user": "CUST_0076",
    "amount": "\u20b995.72",
    "amountNum": 95.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:01 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000075",
    "user": "CUST_0036",
    "amount": "\u20b9394.76",
    "amountNum": 394.76,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:35 PM",
    "riskScore": 13.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000076",
    "user": "CUST_0068",
    "amount": "\u20b9372.46",
    "amountNum": 372.46,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:42 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000077",
    "user": "CUST_0012",
    "amount": "\u20b9418.72",
    "amountNum": 418.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000078",
    "user": "CUST_0028",
    "amount": "\u20b9365.45",
    "amountNum": 365.45,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:08 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000079",
    "user": "CUST_0033",
    "amount": "\u20b9379.24",
    "amountNum": 379.24,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:19 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000080",
    "user": "CUST_0004",
    "amount": "\u20b921.14",
    "amountNum": 21.14,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:02 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000081",
    "user": "CUST_0057",
    "amount": "\u20b9249.74",
    "amountNum": 249.74,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:51 AM",
    "riskScore": 14.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000082",
    "user": "CUST_0027",
    "amount": "\u20b9131.85",
    "amountNum": 131.85,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:13 AM",
    "riskScore": 15.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000083",
    "user": "CUST_0069",
    "amount": "\u20b968.66",
    "amountNum": 68.66,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:59 AM",
    "riskScore": 12.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000084",
    "user": "CUST_0098",
    "amount": "\u20b9423.84",
    "amountNum": 423.84,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:41 AM",
    "riskScore": 37.0,
    "riskLevel": "Medium",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000085",
    "user": "CUST_0054",
    "amount": "\u20b9255.87",
    "amountNum": 255.87,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:03 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000086",
    "user": "CUST_0094",
    "amount": "\u20b9214.41",
    "amountNum": 214.41,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:42 AM",
    "riskScore": 26.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000087",
    "user": "CUST_0072",
    "amount": "\u20b9200.92",
    "amountNum": 200.92,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:41 AM",
    "riskScore": 14.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000088",
    "user": "CUST_0027",
    "amount": "\u20b9418.33",
    "amountNum": 418.33,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:22 AM",
    "riskScore": 23.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000089",
    "user": "CUST_0017",
    "amount": "\u20b9377.54",
    "amountNum": 377.54,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:07 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000090",
    "user": "CUST_0098",
    "amount": "\u20b9386.10",
    "amountNum": 386.1,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:24 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000091",
    "user": "CUST_0029",
    "amount": "\u20b9112.67",
    "amountNum": 112.67,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:38 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000092",
    "user": "CUST_0043",
    "amount": "\u20b9269.76",
    "amountNum": 269.76,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:23 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000093",
    "user": "CUST_0005",
    "amount": "\u20b9300.75",
    "amountNum": 300.75,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:04 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000094",
    "user": "CUST_0014",
    "amount": "\u20b9295.15",
    "amountNum": 295.15,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:10 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000095",
    "user": "CUST_0027",
    "amount": "\u20b917.51",
    "amountNum": 17.51,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000096",
    "user": "CUST_0022",
    "amount": "\u20b9164.62",
    "amountNum": 164.62,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:39 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000097",
    "user": "CUST_0025",
    "amount": "\u20b92,589.37",
    "amountNum": 2589.37,
    "location": "Mumbai",
    "device": "New Device",
    "time": "02:45 PM",
    "riskScore": 87.4,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000098",
    "user": "CUST_0087",
    "amount": "\u20b9156.81",
    "amountNum": 156.81,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:45 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000099",
    "user": "CUST_0032",
    "amount": "\u20b952.02",
    "amountNum": 52.02,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:08 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000100",
    "user": "CUST_0052",
    "amount": "\u20b9333.33",
    "amountNum": 333.33,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:59 PM",
    "riskScore": 23.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000101",
    "user": "CUST_0065",
    "amount": "\u20b9158.01",
    "amountNum": 158.01,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:33 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000102",
    "user": "CUST_0093",
    "amount": "\u20b9335.21",
    "amountNum": 335.21,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:02 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000103",
    "user": "CUST_0006",
    "amount": "\u20b9105.83",
    "amountNum": 105.83,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000104",
    "user": "CUST_0070",
    "amount": "\u20b9319.66",
    "amountNum": 319.66,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:22 PM",
    "riskScore": 5.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000105",
    "user": "CUST_0009",
    "amount": "\u20b9434.16",
    "amountNum": 434.16,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:02 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000106",
    "user": "CUST_0074",
    "amount": "\u20b917.49",
    "amountNum": 17.49,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:20 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000107",
    "user": "CUST_0015",
    "amount": "\u20b9100.02",
    "amountNum": 100.02,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:02 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000108",
    "user": "CUST_0049",
    "amount": "\u20b9102.47",
    "amountNum": 102.47,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:02 AM",
    "riskScore": 13.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000109",
    "user": "CUST_0030",
    "amount": "\u20b9439.84",
    "amountNum": 439.84,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:42 AM",
    "riskScore": 22.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000110",
    "user": "CUST_0041",
    "amount": "\u20b989.78",
    "amountNum": 89.78,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:57 AM",
    "riskScore": 12.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000111",
    "user": "CUST_0048",
    "amount": "\u20b9287.28",
    "amountNum": 287.28,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:02 AM",
    "riskScore": 14.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000112",
    "user": "CUST_0001",
    "amount": "\u20b9443.25",
    "amountNum": 443.25,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:28 AM",
    "riskScore": 16.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000113",
    "user": "CUST_0002",
    "amount": "\u20b9278.15",
    "amountNum": 278.15,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:43 AM",
    "riskScore": 14.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000114",
    "user": "CUST_0076",
    "amount": "\u20b9436.16",
    "amountNum": 436.16,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:05 AM",
    "riskScore": 16.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000115",
    "user": "CUST_0078",
    "amount": "\u20b980.44",
    "amountNum": 80.44,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:20 AM",
    "riskScore": 16.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000116",
    "user": "CUST_0027",
    "amount": "\u20b9358.80",
    "amountNum": 358.8,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:40 AM",
    "riskScore": 19.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000117",
    "user": "CUST_0033",
    "amount": "\u20b9382.97",
    "amountNum": 382.97,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:47 AM",
    "riskScore": 15.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000118",
    "user": "CUST_0058",
    "amount": "\u20b9246.10",
    "amountNum": 246.1,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:40 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000119",
    "user": "CUST_0060",
    "amount": "\u20b997.59",
    "amountNum": 97.59,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:35 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000120",
    "user": "CUST_0068",
    "amount": "\u20b9188.46",
    "amountNum": 188.46,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:59 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000121",
    "user": "CUST_0035",
    "amount": "\u20b9431.09",
    "amountNum": 431.09,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:39 AM",
    "riskScore": 25.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000122",
    "user": "CUST_0083",
    "amount": "\u20b94,411.62",
    "amountNum": 4411.62,
    "location": "Mumbai",
    "device": "New Device",
    "time": "10:49 AM",
    "riskScore": 89.6,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000123",
    "user": "CUST_0030",
    "amount": "\u20b9307.23",
    "amountNum": 307.23,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:38 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000124",
    "user": "CUST_0079",
    "amount": "\u20b9325.16",
    "amountNum": 325.16,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000125",
    "user": "CUST_0049",
    "amount": "\u20b9293.46",
    "amountNum": 293.46,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:55 PM",
    "riskScore": 7.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000126",
    "user": "CUST_0044",
    "amount": "\u20b9223.81",
    "amountNum": 223.81,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:20 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000127",
    "user": "CUST_0083",
    "amount": "\u20b9392.88",
    "amountNum": 392.88,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:50 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000128",
    "user": "CUST_0008",
    "amount": "\u20b92,757.31",
    "amountNum": 2757.31,
    "location": "Mumbai",
    "device": "New Device",
    "time": "04:05 PM",
    "riskScore": 88.7,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000129",
    "user": "CUST_0030",
    "amount": "\u20b954.68",
    "amountNum": 54.68,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:40 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000130",
    "user": "CUST_0048",
    "amount": "\u20b9313.47",
    "amountNum": 313.47,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000131",
    "user": "CUST_0072",
    "amount": "\u20b9170.75",
    "amountNum": 170.75,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:28 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000132",
    "user": "CUST_0088",
    "amount": "\u20b934.72",
    "amountNum": 34.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:44 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000133",
    "user": "CUST_0083",
    "amount": "\u20b9251.72",
    "amountNum": 251.72,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000134",
    "user": "CUST_0047",
    "amount": "\u20b9409.58",
    "amountNum": 409.58,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:35 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000135",
    "user": "CUST_0097",
    "amount": "\u20b93,637.07",
    "amountNum": 3637.07,
    "location": "Mumbai",
    "device": "New Device",
    "time": "09:01 PM",
    "riskScore": 79.2,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000136",
    "user": "CUST_0082",
    "amount": "\u20b994.71",
    "amountNum": 94.71,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:19 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000137",
    "user": "CUST_0093",
    "amount": "\u20b9174.59",
    "amountNum": 174.59,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:41 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000138",
    "user": "CUST_0019",
    "amount": "\u20b9183.41",
    "amountNum": 183.41,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:41 AM",
    "riskScore": 13.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000139",
    "user": "CUST_0073",
    "amount": "\u20b9371.09",
    "amountNum": 371.09,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:11 AM",
    "riskScore": 15.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000140",
    "user": "CUST_0012",
    "amount": "\u20b9362.26",
    "amountNum": 362.26,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:14 AM",
    "riskScore": 14.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000141",
    "user": "CUST_0036",
    "amount": "\u20b9384.24",
    "amountNum": 384.24,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:26 AM",
    "riskScore": 16.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000142",
    "user": "CUST_0035",
    "amount": "\u20b9339.01",
    "amountNum": 339.01,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:49 AM",
    "riskScore": 15.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000143",
    "user": "CUST_0031",
    "amount": "\u20b9443.90",
    "amountNum": 443.9,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:42 AM",
    "riskScore": 16.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000144",
    "user": "CUST_0060",
    "amount": "\u20b9374.74",
    "amountNum": 374.74,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:38 AM",
    "riskScore": 11.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000145",
    "user": "CUST_0056",
    "amount": "\u20b9133.51",
    "amountNum": 133.51,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:06 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000146",
    "user": "CUST_0075",
    "amount": "\u20b9227.62",
    "amountNum": 227.62,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:51 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000147",
    "user": "CUST_0022",
    "amount": "\u20b91,778.61",
    "amountNum": 1778.61,
    "location": "Mumbai",
    "device": "New Device",
    "time": "08:47 AM",
    "riskScore": 84.3,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000148",
    "user": "CUST_0060",
    "amount": "\u20b9147.48",
    "amountNum": 147.48,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:03 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000149",
    "user": "CUST_0094",
    "amount": "\u20b9153.12",
    "amountNum": 153.12,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:35 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000150",
    "user": "CUST_0064",
    "amount": "\u20b9158.20",
    "amountNum": 158.2,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:50 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000151",
    "user": "CUST_0041",
    "amount": "\u20b9410.10",
    "amountNum": 410.1,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:15 PM",
    "riskScore": 11.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000152",
    "user": "CUST_0018",
    "amount": "\u20b9104.19",
    "amountNum": 104.19,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000153",
    "user": "CUST_0022",
    "amount": "\u20b990.28",
    "amountNum": 90.28,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000154",
    "user": "CUST_0048",
    "amount": "\u20b9332.23",
    "amountNum": 332.23,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:07 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000155",
    "user": "CUST_0017",
    "amount": "\u20b9320.28",
    "amountNum": 320.28,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000156",
    "user": "CUST_0088",
    "amount": "\u20b915.45",
    "amountNum": 15.45,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000157",
    "user": "CUST_0064",
    "amount": "\u20b9150.13",
    "amountNum": 150.13,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000158",
    "user": "CUST_0058",
    "amount": "\u20b9300.22",
    "amountNum": 300.22,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000159",
    "user": "CUST_0085",
    "amount": "\u20b9226.16",
    "amountNum": 226.16,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:53 PM",
    "riskScore": 8.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000160",
    "user": "CUST_0001",
    "amount": "\u20b9153.61",
    "amountNum": 153.61,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:18 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000161",
    "user": "CUST_0026",
    "amount": "\u20b927.55",
    "amountNum": 27.55,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:01 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000162",
    "user": "CUST_0034",
    "amount": "\u20b9298.51",
    "amountNum": 298.51,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000163",
    "user": "CUST_0014",
    "amount": "\u20b9180.93",
    "amountNum": 180.93,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:41 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000164",
    "user": "CUST_0008",
    "amount": "\u20b9277.62",
    "amountNum": 277.62,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:29 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000165",
    "user": "CUST_0100",
    "amount": "\u20b9135.05",
    "amountNum": 135.05,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:47 AM",
    "riskScore": 13.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000166",
    "user": "CUST_0046",
    "amount": "\u20b9399.81",
    "amountNum": 399.81,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:52 AM",
    "riskScore": 16.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000167",
    "user": "CUST_0049",
    "amount": "\u20b9363.31",
    "amountNum": 363.31,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:52 AM",
    "riskScore": 16.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000168",
    "user": "CUST_0079",
    "amount": "\u20b9191.71",
    "amountNum": 191.71,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:17 AM",
    "riskScore": 13.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000169",
    "user": "CUST_0083",
    "amount": "\u20b9193.93",
    "amountNum": 193.93,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:27 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000170",
    "user": "CUST_0079",
    "amount": "\u20b962.52",
    "amountNum": 62.52,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:16 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000171",
    "user": "CUST_0063",
    "amount": "\u20b9211.66",
    "amountNum": 211.66,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:36 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000172",
    "user": "CUST_0066",
    "amount": "\u20b9180.39",
    "amountNum": 180.39,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:08 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000173",
    "user": "CUST_0020",
    "amount": "\u20b9317.85",
    "amountNum": 317.85,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:37 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000174",
    "user": "CUST_0096",
    "amount": "\u20b9324.50",
    "amountNum": 324.5,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:58 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000175",
    "user": "CUST_0013",
    "amount": "\u20b9324.23",
    "amountNum": 324.23,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:04 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000176",
    "user": "CUST_0056",
    "amount": "\u20b9289.33",
    "amountNum": 289.33,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:21 AM",
    "riskScore": 5.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000177",
    "user": "CUST_0034",
    "amount": "\u20b9344.78",
    "amountNum": 344.78,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000178",
    "user": "CUST_0046",
    "amount": "\u20b993.48",
    "amountNum": 93.48,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000179",
    "user": "CUST_0019",
    "amount": "\u20b9215.12",
    "amountNum": 215.12,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:25 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000180",
    "user": "CUST_0054",
    "amount": "\u20b9229.18",
    "amountNum": 229.18,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000181",
    "user": "CUST_0026",
    "amount": "\u20b9398.80",
    "amountNum": 398.8,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:38 PM",
    "riskScore": 25.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000182",
    "user": "CUST_0008",
    "amount": "\u20b9320.46",
    "amountNum": 320.46,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:21 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000183",
    "user": "CUST_0075",
    "amount": "\u20b9380.71",
    "amountNum": 380.71,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:25 PM",
    "riskScore": 5.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000184",
    "user": "CUST_0009",
    "amount": "\u20b9428.38",
    "amountNum": 428.38,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:44 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000185",
    "user": "CUST_0006",
    "amount": "\u20b953.53",
    "amountNum": 53.53,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:18 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000186",
    "user": "CUST_0013",
    "amount": "\u20b9387.21",
    "amountNum": 387.21,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:34 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000187",
    "user": "CUST_0053",
    "amount": "\u20b9410.68",
    "amountNum": 410.68,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:59 PM",
    "riskScore": 8.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000188",
    "user": "CUST_0015",
    "amount": "\u20b971.76",
    "amountNum": 71.76,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:23 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000189",
    "user": "CUST_0071",
    "amount": "\u20b9205.74",
    "amountNum": 205.74,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:49 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000190",
    "user": "CUST_0060",
    "amount": "\u20b9148.40",
    "amountNum": 148.4,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:21 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000191",
    "user": "CUST_0007",
    "amount": "\u20b991.72",
    "amountNum": 91.72,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:01 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000192",
    "user": "CUST_0033",
    "amount": "\u20b9412.62",
    "amountNum": 412.62,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:19 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000193",
    "user": "CUST_0003",
    "amount": "\u20b9171.62",
    "amountNum": 171.62,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:19 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000194",
    "user": "CUST_0097",
    "amount": "\u20b9377.67",
    "amountNum": 377.67,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:30 AM",
    "riskScore": 12.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000195",
    "user": "CUST_0080",
    "amount": "\u20b9422.63",
    "amountNum": 422.63,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:27 AM",
    "riskScore": 16.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000196",
    "user": "CUST_0036",
    "amount": "\u20b91,567.79",
    "amountNum": 1567.79,
    "location": "Mumbai",
    "device": "New Device",
    "time": "01:53 AM",
    "riskScore": 89.9,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000197",
    "user": "CUST_0034",
    "amount": "\u20b9268.96",
    "amountNum": 268.96,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:08 AM",
    "riskScore": 14.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000198",
    "user": "CUST_0045",
    "amount": "\u20b9136.22",
    "amountNum": 136.22,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:59 AM",
    "riskScore": 13.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000199",
    "user": "CUST_0047",
    "amount": "\u20b9426.94",
    "amountNum": 426.94,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:44 AM",
    "riskScore": 14.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000200",
    "user": "CUST_0051",
    "amount": "\u20b9227.53",
    "amountNum": 227.53,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:29 AM",
    "riskScore": 13.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000201",
    "user": "CUST_0034",
    "amount": "\u20b952.29",
    "amountNum": 52.29,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:50 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000202",
    "user": "CUST_0079",
    "amount": "\u20b9318.23",
    "amountNum": 318.23,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:12 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000203",
    "user": "CUST_0082",
    "amount": "\u20b9133.68",
    "amountNum": 133.68,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:58 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000204",
    "user": "CUST_0004",
    "amount": "\u20b9274.77",
    "amountNum": 274.77,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:01 AM",
    "riskScore": 25.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000205",
    "user": "CUST_0085",
    "amount": "\u20b9143.37",
    "amountNum": 143.37,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:15 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000206",
    "user": "CUST_0083",
    "amount": "\u20b9427.36",
    "amountNum": 427.36,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:40 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000207",
    "user": "CUST_0090",
    "amount": "\u20b9418.89",
    "amountNum": 418.89,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:25 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000208",
    "user": "CUST_0056",
    "amount": "\u20b9424.71",
    "amountNum": 424.71,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:52 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000209",
    "user": "CUST_0088",
    "amount": "\u20b9416.11",
    "amountNum": 416.11,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:17 PM",
    "riskScore": 25.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000210",
    "user": "CUST_0033",
    "amount": "\u20b9423.84",
    "amountNum": 423.84,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:53 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000211",
    "user": "CUST_0026",
    "amount": "\u20b9179.26",
    "amountNum": 179.26,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:33 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000212",
    "user": "CUST_0023",
    "amount": "\u20b9127.59",
    "amountNum": 127.59,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:02 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000213",
    "user": "CUST_0084",
    "amount": "\u20b9318.80",
    "amountNum": 318.8,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:39 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000214",
    "user": "CUST_0094",
    "amount": "\u20b9202.26",
    "amountNum": 202.26,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000215",
    "user": "CUST_0049",
    "amount": "\u20b9102.07",
    "amountNum": 102.07,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000216",
    "user": "CUST_0063",
    "amount": "\u20b9146.54",
    "amountNum": 146.54,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000217",
    "user": "CUST_0023",
    "amount": "\u20b9291.26",
    "amountNum": 291.26,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:10 PM",
    "riskScore": 5.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000218",
    "user": "CUST_0012",
    "amount": "\u20b9436.04",
    "amountNum": 436.04,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:29 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000219",
    "user": "CUST_0016",
    "amount": "\u20b9431.48",
    "amountNum": 431.48,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:04 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000220",
    "user": "CUST_0047",
    "amount": "\u20b9210.61",
    "amountNum": 210.61,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:39 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000221",
    "user": "CUST_0031",
    "amount": "\u20b9162.14",
    "amountNum": 162.14,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:45 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000222",
    "user": "CUST_0007",
    "amount": "\u20b920.66",
    "amountNum": 20.66,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:00 AM",
    "riskScore": 12.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000223",
    "user": "CUST_0006",
    "amount": "\u20b9327.07",
    "amountNum": 327.07,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:14 AM",
    "riskScore": 22.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000224",
    "user": "CUST_0068",
    "amount": "\u20b916.87",
    "amountNum": 16.87,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:17 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000225",
    "user": "CUST_0068",
    "amount": "\u20b9216.36",
    "amountNum": 216.36,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:40 AM",
    "riskScore": 14.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000226",
    "user": "CUST_0074",
    "amount": "\u20b9210.45",
    "amountNum": 210.45,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:52 AM",
    "riskScore": 14.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000227",
    "user": "CUST_0084",
    "amount": "\u20b936.36",
    "amountNum": 36.36,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:12 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000228",
    "user": "CUST_0084",
    "amount": "\u20b9351.76",
    "amountNum": 351.76,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:21 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000229",
    "user": "CUST_0016",
    "amount": "\u20b9106.29",
    "amountNum": 106.29,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:44 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000230",
    "user": "CUST_0018",
    "amount": "\u20b933.07",
    "amountNum": 33.07,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:45 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000231",
    "user": "CUST_0031",
    "amount": "\u20b924.33",
    "amountNum": 24.33,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:57 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000232",
    "user": "CUST_0022",
    "amount": "\u20b9337.67",
    "amountNum": 337.67,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:28 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000233",
    "user": "CUST_0063",
    "amount": "\u20b9119.06",
    "amountNum": 119.06,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:43 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000234",
    "user": "CUST_0048",
    "amount": "\u20b9199.37",
    "amountNum": 199.37,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:27 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000235",
    "user": "CUST_0007",
    "amount": "\u20b9437.25",
    "amountNum": 437.25,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:04 PM",
    "riskScore": 19.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000236",
    "user": "CUST_0013",
    "amount": "\u20b9374.78",
    "amountNum": 374.78,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000237",
    "user": "CUST_0030",
    "amount": "\u20b9161.81",
    "amountNum": 161.81,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:39 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000238",
    "user": "CUST_0004",
    "amount": "\u20b9209.57",
    "amountNum": 209.57,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000239",
    "user": "CUST_0043",
    "amount": "\u20b9413.60",
    "amountNum": 413.6,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000240",
    "user": "CUST_0037",
    "amount": "\u20b9359.91",
    "amountNum": 359.91,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:13 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000241",
    "user": "CUST_0002",
    "amount": "\u20b9327.29",
    "amountNum": 327.29,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:28 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000242",
    "user": "CUST_0043",
    "amount": "\u20b9188.68",
    "amountNum": 188.68,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000243",
    "user": "CUST_0099",
    "amount": "\u20b9345.95",
    "amountNum": 345.95,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:45 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000244",
    "user": "CUST_0006",
    "amount": "\u20b9248.72",
    "amountNum": 248.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:21 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000245",
    "user": "CUST_0060",
    "amount": "\u20b9155.28",
    "amountNum": 155.28,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:53 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000246",
    "user": "CUST_0078",
    "amount": "\u20b983.96",
    "amountNum": 83.96,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:33 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000247",
    "user": "CUST_0067",
    "amount": "\u20b9133.20",
    "amountNum": 133.2,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:01 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000248",
    "user": "CUST_0047",
    "amount": "\u20b9338.40",
    "amountNum": 338.4,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:28 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000249",
    "user": "CUST_0014",
    "amount": "\u20b9223.86",
    "amountNum": 223.86,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:14 AM",
    "riskScore": 14.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000250",
    "user": "CUST_0044",
    "amount": "\u20b996.13",
    "amountNum": 96.13,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:35 AM",
    "riskScore": 13.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000251",
    "user": "CUST_0088",
    "amount": "\u20b9282.49",
    "amountNum": 282.49,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:23 AM",
    "riskScore": 16.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000252",
    "user": "CUST_0040",
    "amount": "\u20b9220.16",
    "amountNum": 220.16,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:42 AM",
    "riskScore": 13.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000253",
    "user": "CUST_0055",
    "amount": "\u20b960.24",
    "amountNum": 60.24,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:56 AM",
    "riskScore": 12.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000254",
    "user": "CUST_0080",
    "amount": "\u20b9289.49",
    "amountNum": 289.49,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:54 AM",
    "riskScore": 13.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000255",
    "user": "CUST_0100",
    "amount": "\u20b9198.78",
    "amountNum": 198.78,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:11 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000256",
    "user": "CUST_0024",
    "amount": "\u20b9267.22",
    "amountNum": 267.22,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:13 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000257",
    "user": "CUST_0085",
    "amount": "\u20b9337.52",
    "amountNum": 337.52,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:20 AM",
    "riskScore": 5.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000258",
    "user": "CUST_0063",
    "amount": "\u20b9356.28",
    "amountNum": 356.28,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:38 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000259",
    "user": "CUST_0052",
    "amount": "\u20b9310.73",
    "amountNum": 310.73,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:28 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000260",
    "user": "CUST_0073",
    "amount": "\u20b9152.60",
    "amountNum": 152.6,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:40 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000261",
    "user": "CUST_0068",
    "amount": "\u20b999.82",
    "amountNum": 99.82,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000262",
    "user": "CUST_0026",
    "amount": "\u20b9443.11",
    "amountNum": 443.11,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:39 PM",
    "riskScore": 5.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000263",
    "user": "CUST_0085",
    "amount": "\u20b949.07",
    "amountNum": 49.07,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000264",
    "user": "CUST_0025",
    "amount": "\u20b9220.38",
    "amountNum": 220.38,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:35 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000265",
    "user": "CUST_0052",
    "amount": "\u20b9373.84",
    "amountNum": 373.84,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:52 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000266",
    "user": "CUST_0094",
    "amount": "\u20b970.19",
    "amountNum": 70.19,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000267",
    "user": "CUST_0093",
    "amount": "\u20b9340.79",
    "amountNum": 340.79,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:53 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000268",
    "user": "CUST_0078",
    "amount": "\u20b9347.04",
    "amountNum": 347.04,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:21 PM",
    "riskScore": 14.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000269",
    "user": "CUST_0035",
    "amount": "\u20b92,689.79",
    "amountNum": 2689.79,
    "location": "Mumbai",
    "device": "New Device",
    "time": "07:02 PM",
    "riskScore": 89.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000270",
    "user": "CUST_0082",
    "amount": "\u20b959.07",
    "amountNum": 59.07,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:05 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000271",
    "user": "CUST_0042",
    "amount": "\u20b9146.13",
    "amountNum": 146.13,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:45 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000272",
    "user": "CUST_0009",
    "amount": "\u20b9127.94",
    "amountNum": 127.94,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:37 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000273",
    "user": "CUST_0014",
    "amount": "\u20b9268.70",
    "amountNum": 268.7,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000274",
    "user": "CUST_0035",
    "amount": "\u20b9224.15",
    "amountNum": 224.15,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000275",
    "user": "CUST_0098",
    "amount": "\u20b9382.77",
    "amountNum": 382.77,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:34 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000276",
    "user": "CUST_0076",
    "amount": "\u20b9400.87",
    "amountNum": 400.87,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:43 AM",
    "riskScore": 15.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000277",
    "user": "CUST_0009",
    "amount": "\u20b9175.36",
    "amountNum": 175.36,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:36 AM",
    "riskScore": 13.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000278",
    "user": "CUST_0056",
    "amount": "\u20b9166.53",
    "amountNum": 166.53,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:11 AM",
    "riskScore": 13.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000279",
    "user": "CUST_0058",
    "amount": "\u20b9130.78",
    "amountNum": 130.78,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:11 AM",
    "riskScore": 13.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000280",
    "user": "CUST_0044",
    "amount": "\u20b9294.43",
    "amountNum": 294.43,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:24 AM",
    "riskScore": 15.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000281",
    "user": "CUST_0064",
    "amount": "\u20b990.00",
    "amountNum": 90.0,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:00 AM",
    "riskScore": 13.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000282",
    "user": "CUST_0090",
    "amount": "\u20b9420.53",
    "amountNum": 420.53,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:16 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000283",
    "user": "CUST_0040",
    "amount": "\u20b9438.47",
    "amountNum": 438.47,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:46 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000284",
    "user": "CUST_0091",
    "amount": "\u20b9257.47",
    "amountNum": 257.47,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:19 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000285",
    "user": "CUST_0023",
    "amount": "\u20b9342.67",
    "amountNum": 342.67,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:58 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000286",
    "user": "CUST_0081",
    "amount": "\u20b9422.99",
    "amountNum": 422.99,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:28 AM",
    "riskScore": 6.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000287",
    "user": "CUST_0077",
    "amount": "\u20b9275.31",
    "amountNum": 275.31,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:33 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000288",
    "user": "CUST_0041",
    "amount": "\u20b9274.37",
    "amountNum": 274.37,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:44 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000289",
    "user": "CUST_0030",
    "amount": "\u20b9104.03",
    "amountNum": 104.03,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000290",
    "user": "CUST_0058",
    "amount": "\u20b9107.42",
    "amountNum": 107.42,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000291",
    "user": "CUST_0013",
    "amount": "\u20b9315.46",
    "amountNum": 315.46,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:46 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000292",
    "user": "CUST_0046",
    "amount": "\u20b994.33",
    "amountNum": 94.33,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:10 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000293",
    "user": "CUST_0096",
    "amount": "\u20b92,694.78",
    "amountNum": 2694.78,
    "location": "Mumbai",
    "device": "New Device",
    "time": "03:38 PM",
    "riskScore": 79.6,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000294",
    "user": "CUST_0024",
    "amount": "\u20b916.24",
    "amountNum": 16.24,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:53 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000295",
    "user": "CUST_0093",
    "amount": "\u20b9107.29",
    "amountNum": 107.29,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:35 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000296",
    "user": "CUST_0088",
    "amount": "\u20b9229.67",
    "amountNum": 229.67,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000297",
    "user": "CUST_0037",
    "amount": "\u20b9337.01",
    "amountNum": 337.01,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:04 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000298",
    "user": "CUST_0040",
    "amount": "\u20b9190.48",
    "amountNum": 190.48,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000299",
    "user": "CUST_0092",
    "amount": "\u20b946.85",
    "amountNum": 46.85,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000300",
    "user": "CUST_0023",
    "amount": "\u20b92,312.33",
    "amountNum": 2312.33,
    "location": "Mumbai",
    "device": "New Device",
    "time": "10:15 PM",
    "riskScore": 87.3,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000301",
    "user": "CUST_0009",
    "amount": "\u20b9269.20",
    "amountNum": 269.2,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000302",
    "user": "CUST_0022",
    "amount": "\u20b9416.99",
    "amountNum": 416.99,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:59 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000303",
    "user": "CUST_0026",
    "amount": "\u20b943.45",
    "amountNum": 43.45,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:15 AM",
    "riskScore": 12.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000304",
    "user": "CUST_0053",
    "amount": "\u20b9422.48",
    "amountNum": 422.48,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:24 AM",
    "riskScore": 16.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000305",
    "user": "CUST_0099",
    "amount": "\u20b9123.22",
    "amountNum": 123.22,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:03 AM",
    "riskScore": 12.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000306",
    "user": "CUST_0076",
    "amount": "\u20b924.68",
    "amountNum": 24.68,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:19 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000307",
    "user": "CUST_0026",
    "amount": "\u20b9214.08",
    "amountNum": 214.08,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:25 AM",
    "riskScore": 14.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000308",
    "user": "CUST_0052",
    "amount": "\u20b9244.36",
    "amountNum": 244.36,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:31 AM",
    "riskScore": 14.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000309",
    "user": "CUST_0083",
    "amount": "\u20b9125.88",
    "amountNum": 125.88,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:46 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000310",
    "user": "CUST_0070",
    "amount": "\u20b9282.19",
    "amountNum": 282.19,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:53 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000311",
    "user": "CUST_0086",
    "amount": "\u20b9377.15",
    "amountNum": 377.15,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:53 AM",
    "riskScore": 5.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000312",
    "user": "CUST_0027",
    "amount": "\u20b9384.02",
    "amountNum": 384.02,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:44 AM",
    "riskScore": 5.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000313",
    "user": "CUST_0042",
    "amount": "\u20b9431.58",
    "amountNum": 431.58,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:38 AM",
    "riskScore": 7.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000314",
    "user": "CUST_0093",
    "amount": "\u20b9155.29",
    "amountNum": 155.29,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:01 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000315",
    "user": "CUST_0060",
    "amount": "\u20b956.84",
    "amountNum": 56.84,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:03 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000316",
    "user": "CUST_0014",
    "amount": "\u20b9261.26",
    "amountNum": 261.26,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:47 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000317",
    "user": "CUST_0092",
    "amount": "\u20b9214.21",
    "amountNum": 214.21,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:10 PM",
    "riskScore": 7.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000318",
    "user": "CUST_0030",
    "amount": "\u20b9322.89",
    "amountNum": 322.89,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:51 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000319",
    "user": "CUST_0047",
    "amount": "\u20b9126.19",
    "amountNum": 126.19,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000320",
    "user": "CUST_0077",
    "amount": "\u20b9109.70",
    "amountNum": 109.7,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:04 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000321",
    "user": "CUST_0025",
    "amount": "\u20b9294.34",
    "amountNum": 294.34,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:23 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000322",
    "user": "CUST_0004",
    "amount": "\u20b9208.74",
    "amountNum": 208.74,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000323",
    "user": "CUST_0092",
    "amount": "\u20b9393.66",
    "amountNum": 393.66,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:02 PM",
    "riskScore": 8.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000324",
    "user": "CUST_0087",
    "amount": "\u20b9270.07",
    "amountNum": 270.07,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000325",
    "user": "CUST_0040",
    "amount": "\u20b9260.03",
    "amountNum": 260.03,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:27 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000326",
    "user": "CUST_0060",
    "amount": "\u20b994.74",
    "amountNum": 94.74,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:07 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000327",
    "user": "CUST_0031",
    "amount": "\u20b9333.85",
    "amountNum": 333.85,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:19 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000328",
    "user": "CUST_0029",
    "amount": "\u20b9340.89",
    "amountNum": 340.89,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:03 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000329",
    "user": "CUST_0067",
    "amount": "\u20b992.93",
    "amountNum": 92.93,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:51 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000330",
    "user": "CUST_0029",
    "amount": "\u20b9258.46",
    "amountNum": 258.46,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000331",
    "user": "CUST_0072",
    "amount": "\u20b9357.55",
    "amountNum": 357.55,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:45 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000332",
    "user": "CUST_0099",
    "amount": "\u20b9259.34",
    "amountNum": 259.34,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:14 AM",
    "riskScore": 14.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000333",
    "user": "CUST_0023",
    "amount": "\u20b9123.60",
    "amountNum": 123.6,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:31 AM",
    "riskScore": 12.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000334",
    "user": "CUST_0029",
    "amount": "\u20b9232.26",
    "amountNum": 232.26,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:03 AM",
    "riskScore": 14.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000335",
    "user": "CUST_0034",
    "amount": "\u20b9239.58",
    "amountNum": 239.58,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:40 AM",
    "riskScore": 14.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000336",
    "user": "CUST_0047",
    "amount": "\u20b9395.22",
    "amountNum": 395.22,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:21 AM",
    "riskScore": 15.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000337",
    "user": "CUST_0015",
    "amount": "\u20b945.77",
    "amountNum": 45.77,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:22 AM",
    "riskScore": 12.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000338",
    "user": "CUST_0060",
    "amount": "\u20b971.00",
    "amountNum": 71.0,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:37 AM",
    "riskScore": 13.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000339",
    "user": "CUST_0063",
    "amount": "\u20b9400.29",
    "amountNum": 400.29,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:48 AM",
    "riskScore": 16.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000340",
    "user": "CUST_0080",
    "amount": "\u20b967.33",
    "amountNum": 67.33,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:34 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000341",
    "user": "CUST_0008",
    "amount": "\u20b9105.25",
    "amountNum": 105.25,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:02 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000342",
    "user": "CUST_0014",
    "amount": "\u20b9305.20",
    "amountNum": 305.2,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:38 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000343",
    "user": "CUST_0009",
    "amount": "\u20b993.20",
    "amountNum": 93.2,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:04 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000344",
    "user": "CUST_0054",
    "amount": "\u20b972.89",
    "amountNum": 72.89,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:42 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000345",
    "user": "CUST_0004",
    "amount": "\u20b9256.70",
    "amountNum": 256.7,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:21 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000346",
    "user": "CUST_0100",
    "amount": "\u20b9212.32",
    "amountNum": 212.32,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:52 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000347",
    "user": "CUST_0070",
    "amount": "\u20b9382.71",
    "amountNum": 382.71,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:53 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000348",
    "user": "CUST_0065",
    "amount": "\u20b9320.01",
    "amountNum": 320.01,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:08 PM",
    "riskScore": 5.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000349",
    "user": "CUST_0037",
    "amount": "\u20b941.06",
    "amountNum": 41.06,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:14 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000350",
    "user": "CUST_0050",
    "amount": "\u20b9339.78",
    "amountNum": 339.78,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:37 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000351",
    "user": "CUST_0034",
    "amount": "\u20b9168.00",
    "amountNum": 168.0,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:29 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000352",
    "user": "CUST_0024",
    "amount": "\u20b947.54",
    "amountNum": 47.54,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:39 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000353",
    "user": "CUST_0014",
    "amount": "\u20b923.93",
    "amountNum": 23.93,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:23 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000354",
    "user": "CUST_0029",
    "amount": "\u20b961.11",
    "amountNum": 61.11,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:52 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000355",
    "user": "CUST_0043",
    "amount": "\u20b9399.27",
    "amountNum": 399.27,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:40 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000356",
    "user": "CUST_0040",
    "amount": "\u20b9312.03",
    "amountNum": 312.03,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000357",
    "user": "CUST_0076",
    "amount": "\u20b9369.66",
    "amountNum": 369.66,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000358",
    "user": "CUST_0016",
    "amount": "\u20b9367.22",
    "amountNum": 367.22,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:37 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000359",
    "user": "CUST_0039",
    "amount": "\u20b945.73",
    "amountNum": 45.73,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000360",
    "user": "CUST_0071",
    "amount": "\u20b9412.15",
    "amountNum": 412.15,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:41 AM",
    "riskScore": 13.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000361",
    "user": "CUST_0006",
    "amount": "\u20b9122.63",
    "amountNum": 122.63,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:32 AM",
    "riskScore": 13.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000362",
    "user": "CUST_0065",
    "amount": "\u20b9336.97",
    "amountNum": 336.97,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:13 AM",
    "riskScore": 15.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000363",
    "user": "CUST_0066",
    "amount": "\u20b9264.32",
    "amountNum": 264.32,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:06 AM",
    "riskScore": 15.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000364",
    "user": "CUST_0013",
    "amount": "\u20b9258.52",
    "amountNum": 258.52,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:11 AM",
    "riskScore": 13.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000365",
    "user": "CUST_0044",
    "amount": "\u20b9411.79",
    "amountNum": 411.79,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:16 AM",
    "riskScore": 16.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000366",
    "user": "CUST_0003",
    "amount": "\u20b9194.80",
    "amountNum": 194.8,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:16 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000367",
    "user": "CUST_0092",
    "amount": "\u20b936.87",
    "amountNum": 36.87,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:39 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000368",
    "user": "CUST_0040",
    "amount": "\u20b9354.76",
    "amountNum": 354.76,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:01 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000369",
    "user": "CUST_0027",
    "amount": "\u20b935.00",
    "amountNum": 35.0,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:22 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000370",
    "user": "CUST_0070",
    "amount": "\u20b9171.04",
    "amountNum": 171.04,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:20 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000371",
    "user": "CUST_0002",
    "amount": "\u20b9154.26",
    "amountNum": 154.26,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:07 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000372",
    "user": "CUST_0034",
    "amount": "\u20b93,324.07",
    "amountNum": 3324.07,
    "location": "Mumbai",
    "device": "New Device",
    "time": "09:52 AM",
    "riskScore": 88.3,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000373",
    "user": "CUST_0093",
    "amount": "\u20b9335.52",
    "amountNum": 335.52,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:25 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000374",
    "user": "CUST_0020",
    "amount": "\u20b9160.83",
    "amountNum": 160.83,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:52 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000375",
    "user": "CUST_0059",
    "amount": "\u20b9103.57",
    "amountNum": 103.57,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000376",
    "user": "CUST_0020",
    "amount": "\u20b9184.98",
    "amountNum": 184.98,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:06 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000377",
    "user": "CUST_0071",
    "amount": "\u20b9101.55",
    "amountNum": 101.55,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:22 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000378",
    "user": "CUST_0062",
    "amount": "\u20b9341.95",
    "amountNum": 341.95,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:37 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000379",
    "user": "CUST_0086",
    "amount": "\u20b9427.83",
    "amountNum": 427.83,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000380",
    "user": "CUST_0018",
    "amount": "\u20b9107.11",
    "amountNum": 107.11,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000381",
    "user": "CUST_0027",
    "amount": "\u20b9255.05",
    "amountNum": 255.05,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:23 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000382",
    "user": "CUST_0078",
    "amount": "\u20b9418.51",
    "amountNum": 418.51,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:11 PM",
    "riskScore": 7.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000383",
    "user": "CUST_0044",
    "amount": "\u20b9197.74",
    "amountNum": 197.74,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:27 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000384",
    "user": "CUST_0062",
    "amount": "\u20b9344.82",
    "amountNum": 344.82,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000385",
    "user": "CUST_0063",
    "amount": "\u20b9411.48",
    "amountNum": 411.48,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000386",
    "user": "CUST_0044",
    "amount": "\u20b9258.97",
    "amountNum": 258.97,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:41 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000387",
    "user": "CUST_0007",
    "amount": "\u20b9335.79",
    "amountNum": 335.79,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000388",
    "user": "CUST_0075",
    "amount": "\u20b9203.32",
    "amountNum": 203.32,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:19 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000389",
    "user": "CUST_0048",
    "amount": "\u20b9369.22",
    "amountNum": 369.22,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:12 AM",
    "riskScore": 15.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000390",
    "user": "CUST_0038",
    "amount": "\u20b9387.51",
    "amountNum": 387.51,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:56 AM",
    "riskScore": 17.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000391",
    "user": "CUST_0020",
    "amount": "\u20b9315.10",
    "amountNum": 315.1,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:22 AM",
    "riskScore": 15.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000392",
    "user": "CUST_0012",
    "amount": "\u20b977.02",
    "amountNum": 77.02,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:51 AM",
    "riskScore": 12.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000393",
    "user": "CUST_0053",
    "amount": "\u20b9420.29",
    "amountNum": 420.29,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:06 AM",
    "riskScore": 15.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000394",
    "user": "CUST_0074",
    "amount": "\u20b9350.00",
    "amountNum": 350.0,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:32 AM",
    "riskScore": 16.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000395",
    "user": "CUST_0014",
    "amount": "\u20b9330.14",
    "amountNum": 330.14,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:35 AM",
    "riskScore": 15.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000396",
    "user": "CUST_0016",
    "amount": "\u20b93,153.69",
    "amountNum": 3153.69,
    "location": "Mumbai",
    "device": "New Device",
    "time": "04:57 AM",
    "riskScore": 96.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000397",
    "user": "CUST_0100",
    "amount": "\u20b9412.42",
    "amountNum": 412.42,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:13 AM",
    "riskScore": 7.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000398",
    "user": "CUST_0044",
    "amount": "\u20b9227.39",
    "amountNum": 227.39,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:34 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000399",
    "user": "CUST_0063",
    "amount": "\u20b9362.23",
    "amountNum": 362.23,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:02 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000400",
    "user": "CUST_0012",
    "amount": "\u20b996.83",
    "amountNum": 96.83,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:24 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000401",
    "user": "CUST_0076",
    "amount": "\u20b9239.47",
    "amountNum": 239.47,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:50 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000402",
    "user": "CUST_0022",
    "amount": "\u20b9236.82",
    "amountNum": 236.82,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:20 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000403",
    "user": "CUST_0006",
    "amount": "\u20b931.51",
    "amountNum": 31.51,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:06 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000404",
    "user": "CUST_0041",
    "amount": "\u20b9289.52",
    "amountNum": 289.52,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:03 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000405",
    "user": "CUST_0048",
    "amount": "\u20b9418.66",
    "amountNum": 418.66,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:15 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000406",
    "user": "CUST_0086",
    "amount": "\u20b9172.22",
    "amountNum": 172.22,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000407",
    "user": "CUST_0017",
    "amount": "\u20b9164.73",
    "amountNum": 164.73,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:57 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000408",
    "user": "CUST_0027",
    "amount": "\u20b9270.87",
    "amountNum": 270.87,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000409",
    "user": "CUST_0047",
    "amount": "\u20b925.69",
    "amountNum": 25.69,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:50 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000410",
    "user": "CUST_0072",
    "amount": "\u20b9296.25",
    "amountNum": 296.25,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:13 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000411",
    "user": "CUST_0046",
    "amount": "\u20b9153.31",
    "amountNum": 153.31,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:42 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000412",
    "user": "CUST_0062",
    "amount": "\u20b9370.58",
    "amountNum": 370.58,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000413",
    "user": "CUST_0096",
    "amount": "\u20b9271.26",
    "amountNum": 271.26,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:29 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000414",
    "user": "CUST_0063",
    "amount": "\u20b954.11",
    "amountNum": 54.11,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:28 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000415",
    "user": "CUST_0081",
    "amount": "\u20b9369.27",
    "amountNum": 369.27,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000416",
    "user": "CUST_0040",
    "amount": "\u20b9283.63",
    "amountNum": 283.63,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:36 AM",
    "riskScore": 14.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000417",
    "user": "CUST_0044",
    "amount": "\u20b9242.79",
    "amountNum": 242.79,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:24 AM",
    "riskScore": 14.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000418",
    "user": "CUST_0060",
    "amount": "\u20b9264.92",
    "amountNum": 264.92,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:50 AM",
    "riskScore": 16.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000419",
    "user": "CUST_0078",
    "amount": "\u20b9366.06",
    "amountNum": 366.06,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:21 AM",
    "riskScore": 16.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000420",
    "user": "CUST_0023",
    "amount": "\u20b9368.46",
    "amountNum": 368.46,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:44 AM",
    "riskScore": 13.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000421",
    "user": "CUST_0096",
    "amount": "\u20b91,243.26",
    "amountNum": 1243.26,
    "location": "Mumbai",
    "device": "New Device",
    "time": "04:35 AM",
    "riskScore": 76.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000422",
    "user": "CUST_0010",
    "amount": "\u20b915.78",
    "amountNum": 15.78,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:53 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000423",
    "user": "CUST_0099",
    "amount": "\u20b955.85",
    "amountNum": 55.85,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:23 AM",
    "riskScore": 12.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000424",
    "user": "CUST_0017",
    "amount": "\u20b9279.77",
    "amountNum": 279.77,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:16 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000425",
    "user": "CUST_0097",
    "amount": "\u20b9112.26",
    "amountNum": 112.26,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:04 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000426",
    "user": "CUST_0026",
    "amount": "\u20b9180.55",
    "amountNum": 180.55,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:40 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000427",
    "user": "CUST_0034",
    "amount": "\u20b9279.73",
    "amountNum": 279.73,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:52 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000428",
    "user": "CUST_0081",
    "amount": "\u20b9186.59",
    "amountNum": 186.59,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:09 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000429",
    "user": "CUST_0032",
    "amount": "\u20b9239.62",
    "amountNum": 239.62,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:27 AM",
    "riskScore": 11.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000430",
    "user": "CUST_0070",
    "amount": "\u20b9271.34",
    "amountNum": 271.34,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:42 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000431",
    "user": "CUST_0027",
    "amount": "\u20b91,897.52",
    "amountNum": 1897.52,
    "location": "Mumbai",
    "device": "New Device",
    "time": "12:22 PM",
    "riskScore": 87.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000432",
    "user": "CUST_0082",
    "amount": "\u20b9220.46",
    "amountNum": 220.46,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:19 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000433",
    "user": "CUST_0078",
    "amount": "\u20b9294.64",
    "amountNum": 294.64,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:57 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000434",
    "user": "CUST_0055",
    "amount": "\u20b9315.84",
    "amountNum": 315.84,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:22 PM",
    "riskScore": 14.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000435",
    "user": "CUST_0085",
    "amount": "\u20b988.19",
    "amountNum": 88.19,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000436",
    "user": "CUST_0060",
    "amount": "\u20b938.18",
    "amountNum": 38.18,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000437",
    "user": "CUST_0004",
    "amount": "\u20b9443.50",
    "amountNum": 443.5,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:41 PM",
    "riskScore": 5.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000438",
    "user": "CUST_0047",
    "amount": "\u20b9177.75",
    "amountNum": 177.75,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:44 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000439",
    "user": "CUST_0008",
    "amount": "\u20b963.94",
    "amountNum": 63.94,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000440",
    "user": "CUST_0020",
    "amount": "\u20b9129.62",
    "amountNum": 129.62,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000441",
    "user": "CUST_0076",
    "amount": "\u20b936.23",
    "amountNum": 36.23,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:14 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000442",
    "user": "CUST_0027",
    "amount": "\u20b9293.41",
    "amountNum": 293.41,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:29 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000443",
    "user": "CUST_0070",
    "amount": "\u20b9225.07",
    "amountNum": 225.07,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000444",
    "user": "CUST_0084",
    "amount": "\u20b9134.89",
    "amountNum": 134.89,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:10 AM",
    "riskScore": 13.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000445",
    "user": "CUST_0061",
    "amount": "\u20b9406.27",
    "amountNum": 406.27,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:45 AM",
    "riskScore": 16.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000446",
    "user": "CUST_0058",
    "amount": "\u20b9390.34",
    "amountNum": 390.34,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:32 AM",
    "riskScore": 17.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000447",
    "user": "CUST_0048",
    "amount": "\u20b9322.35",
    "amountNum": 322.35,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:52 AM",
    "riskScore": 14.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000448",
    "user": "CUST_0064",
    "amount": "\u20b9280.03",
    "amountNum": 280.03,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:43 AM",
    "riskScore": 17.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000449",
    "user": "CUST_0093",
    "amount": "\u20b9109.07",
    "amountNum": 109.07,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:03 AM",
    "riskScore": 13.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000450",
    "user": "CUST_0055",
    "amount": "\u20b9394.89",
    "amountNum": 394.89,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:59 AM",
    "riskScore": 17.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000451",
    "user": "CUST_0046",
    "amount": "\u20b9318.70",
    "amountNum": 318.7,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:00 AM",
    "riskScore": 16.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000452",
    "user": "CUST_0051",
    "amount": "\u20b9103.86",
    "amountNum": 103.86,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:28 AM",
    "riskScore": 12.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000453",
    "user": "CUST_0086",
    "amount": "\u20b967.14",
    "amountNum": 67.14,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:10 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000454",
    "user": "CUST_0049",
    "amount": "\u20b967.89",
    "amountNum": 67.89,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:12 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000455",
    "user": "CUST_0028",
    "amount": "\u20b9165.03",
    "amountNum": 165.03,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:18 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000456",
    "user": "CUST_0069",
    "amount": "\u20b9265.17",
    "amountNum": 265.17,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:42 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000457",
    "user": "CUST_0098",
    "amount": "\u20b9177.99",
    "amountNum": 177.99,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:48 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000458",
    "user": "CUST_0080",
    "amount": "\u20b9128.08",
    "amountNum": 128.08,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:19 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000459",
    "user": "CUST_0067",
    "amount": "\u20b9273.95",
    "amountNum": 273.95,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:59 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000460",
    "user": "CUST_0086",
    "amount": "\u20b9185.34",
    "amountNum": 185.34,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:55 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000461",
    "user": "CUST_0018",
    "amount": "\u20b9234.15",
    "amountNum": 234.15,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:25 PM",
    "riskScore": 8.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000462",
    "user": "CUST_0087",
    "amount": "\u20b937.24",
    "amountNum": 37.24,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:28 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000463",
    "user": "CUST_0050",
    "amount": "\u20b9237.58",
    "amountNum": 237.58,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000464",
    "user": "CUST_0078",
    "amount": "\u20b9122.85",
    "amountNum": 122.85,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:06 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000465",
    "user": "CUST_0003",
    "amount": "\u20b9334.42",
    "amountNum": 334.42,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:10 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000466",
    "user": "CUST_0056",
    "amount": "\u20b9343.02",
    "amountNum": 343.02,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:53 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000467",
    "user": "CUST_0046",
    "amount": "\u20b950.61",
    "amountNum": 50.61,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000468",
    "user": "CUST_0013",
    "amount": "\u20b9329.72",
    "amountNum": 329.72,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000469",
    "user": "CUST_0005",
    "amount": "\u20b9328.97",
    "amountNum": 328.97,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000470",
    "user": "CUST_0039",
    "amount": "\u20b9305.41",
    "amountNum": 305.41,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:20 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000471",
    "user": "CUST_0034",
    "amount": "\u20b9109.89",
    "amountNum": 109.89,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:32 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000472",
    "user": "CUST_0066",
    "amount": "\u20b9172.61",
    "amountNum": 172.61,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000473",
    "user": "CUST_0004",
    "amount": "\u20b9777.94",
    "amountNum": 777.94,
    "location": "Mumbai",
    "device": "New Device",
    "time": "11:51 PM",
    "riskScore": 70.2,
    "riskLevel": "Medium",
    "status": "Approved",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000474",
    "user": "CUST_0034",
    "amount": "\u20b9150.43",
    "amountNum": 150.43,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:05 AM",
    "riskScore": 12.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000475",
    "user": "CUST_0068",
    "amount": "\u20b951.98",
    "amountNum": 51.98,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:31 AM",
    "riskScore": 12.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000476",
    "user": "CUST_0009",
    "amount": "\u20b9238.97",
    "amountNum": 238.97,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:17 AM",
    "riskScore": 14.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000477",
    "user": "CUST_0049",
    "amount": "\u20b9248.76",
    "amountNum": 248.76,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:01 AM",
    "riskScore": 15.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000478",
    "user": "CUST_0071",
    "amount": "\u20b93,802.14",
    "amountNum": 3802.14,
    "location": "Mumbai",
    "device": "New Device",
    "time": "05:14 AM",
    "riskScore": 94.2,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000479",
    "user": "CUST_0095",
    "amount": "\u20b9397.78",
    "amountNum": 397.78,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:43 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000480",
    "user": "CUST_0078",
    "amount": "\u20b958.39",
    "amountNum": 58.39,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:25 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000481",
    "user": "CUST_0046",
    "amount": "\u20b9328.73",
    "amountNum": 328.73,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:17 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000482",
    "user": "CUST_0067",
    "amount": "\u20b9367.54",
    "amountNum": 367.54,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:36 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000483",
    "user": "CUST_0059",
    "amount": "\u20b9391.58",
    "amountNum": 391.58,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:59 AM",
    "riskScore": 6.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000484",
    "user": "CUST_0041",
    "amount": "\u20b9185.34",
    "amountNum": 185.34,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:25 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000485",
    "user": "CUST_0005",
    "amount": "\u20b9124.24",
    "amountNum": 124.24,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:43 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000486",
    "user": "CUST_0002",
    "amount": "\u20b9110.78",
    "amountNum": 110.78,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:09 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000487",
    "user": "CUST_0053",
    "amount": "\u20b9325.51",
    "amountNum": 325.51,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:19 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000488",
    "user": "CUST_0001",
    "amount": "\u20b984.66",
    "amountNum": 84.66,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:21 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000489",
    "user": "CUST_0084",
    "amount": "\u20b9182.70",
    "amountNum": 182.7,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:13 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000490",
    "user": "CUST_0096",
    "amount": "\u20b9424.61",
    "amountNum": 424.61,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000491",
    "user": "CUST_0037",
    "amount": "\u20b9226.70",
    "amountNum": 226.7,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:57 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000492",
    "user": "CUST_0088",
    "amount": "\u20b9196.65",
    "amountNum": 196.65,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:15 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000493",
    "user": "CUST_0083",
    "amount": "\u20b93,862.87",
    "amountNum": 3862.87,
    "location": "Mumbai",
    "device": "New Device",
    "time": "08:24 PM",
    "riskScore": 74.1,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000494",
    "user": "CUST_0099",
    "amount": "\u20b9276.72",
    "amountNum": 276.72,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000495",
    "user": "CUST_0086",
    "amount": "\u20b938.19",
    "amountNum": 38.19,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000496",
    "user": "CUST_0048",
    "amount": "\u20b964.32",
    "amountNum": 64.32,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000497",
    "user": "CUST_0046",
    "amount": "\u20b92,637.79",
    "amountNum": 2637.79,
    "location": "Mumbai",
    "device": "New Device",
    "time": "11:42 PM",
    "riskScore": 89.1,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000498",
    "user": "CUST_0055",
    "amount": "\u20b916.30",
    "amountNum": 16.3,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:48 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000499",
    "user": "CUST_0086",
    "amount": "\u20b9231.04",
    "amountNum": 231.04,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:06 AM",
    "riskScore": 14.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000500",
    "user": "CUST_0017",
    "amount": "\u20b9407.72",
    "amountNum": 407.72,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:12 AM",
    "riskScore": 15.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000501",
    "user": "CUST_0033",
    "amount": "\u20b9239.92",
    "amountNum": 239.92,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:26 AM",
    "riskScore": 13.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000502",
    "user": "CUST_0062",
    "amount": "\u20b9335.03",
    "amountNum": 335.03,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:02 AM",
    "riskScore": 14.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000503",
    "user": "CUST_0022",
    "amount": "\u20b9272.98",
    "amountNum": 272.98,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:28 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000504",
    "user": "CUST_0069",
    "amount": "\u20b9193.57",
    "amountNum": 193.57,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:51 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000505",
    "user": "CUST_0090",
    "amount": "\u20b997.14",
    "amountNum": 97.14,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:48 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000506",
    "user": "CUST_0078",
    "amount": "\u20b966.83",
    "amountNum": 66.83,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:22 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000507",
    "user": "CUST_0019",
    "amount": "\u20b9277.21",
    "amountNum": 277.21,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:37 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000508",
    "user": "CUST_0013",
    "amount": "\u20b9206.07",
    "amountNum": 206.07,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:27 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000509",
    "user": "CUST_0051",
    "amount": "\u20b996.41",
    "amountNum": 96.41,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:33 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000510",
    "user": "CUST_0013",
    "amount": "\u20b9128.87",
    "amountNum": 128.87,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:25 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000511",
    "user": "CUST_0060",
    "amount": "\u20b9253.72",
    "amountNum": 253.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000512",
    "user": "CUST_0076",
    "amount": "\u20b9381.95",
    "amountNum": 381.95,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000513",
    "user": "CUST_0062",
    "amount": "\u20b9364.02",
    "amountNum": 364.02,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:05 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000514",
    "user": "CUST_0039",
    "amount": "\u20b918.10",
    "amountNum": 18.1,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000515",
    "user": "CUST_0076",
    "amount": "\u20b980.42",
    "amountNum": 80.42,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:18 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000516",
    "user": "CUST_0023",
    "amount": "\u20b9113.15",
    "amountNum": 113.15,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:41 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000517",
    "user": "CUST_0082",
    "amount": "\u20b9238.72",
    "amountNum": 238.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000518",
    "user": "CUST_0067",
    "amount": "\u20b920.74",
    "amountNum": 20.74,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:13 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000519",
    "user": "CUST_0047",
    "amount": "\u20b9310.96",
    "amountNum": 310.96,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:53 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000520",
    "user": "CUST_0093",
    "amount": "\u20b9169.01",
    "amountNum": 169.01,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000521",
    "user": "CUST_0088",
    "amount": "\u20b9345.03",
    "amountNum": 345.03,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:28 AM",
    "riskScore": 16.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000522",
    "user": "CUST_0089",
    "amount": "\u20b9148.64",
    "amountNum": 148.64,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:45 AM",
    "riskScore": 13.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000523",
    "user": "CUST_0083",
    "amount": "\u20b9444.27",
    "amountNum": 444.27,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:14 AM",
    "riskScore": 12.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000524",
    "user": "CUST_0018",
    "amount": "\u20b9425.58",
    "amountNum": 425.58,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:46 AM",
    "riskScore": 21.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000525",
    "user": "CUST_0054",
    "amount": "\u20b969.57",
    "amountNum": 69.57,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:11 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000526",
    "user": "CUST_0057",
    "amount": "\u20b9298.47",
    "amountNum": 298.47,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:36 AM",
    "riskScore": 15.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000527",
    "user": "CUST_0054",
    "amount": "\u20b9320.12",
    "amountNum": 320.12,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:03 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000528",
    "user": "CUST_0035",
    "amount": "\u20b9167.44",
    "amountNum": 167.44,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:36 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000529",
    "user": "CUST_0029",
    "amount": "\u20b993.19",
    "amountNum": 93.19,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:04 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000530",
    "user": "CUST_0029",
    "amount": "\u20b9329.30",
    "amountNum": 329.3,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:32 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000531",
    "user": "CUST_0024",
    "amount": "\u20b9146.25",
    "amountNum": 146.25,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:15 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000532",
    "user": "CUST_0061",
    "amount": "\u20b949.22",
    "amountNum": 49.22,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:43 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000533",
    "user": "CUST_0027",
    "amount": "\u20b9367.02",
    "amountNum": 367.02,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:06 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000534",
    "user": "CUST_0038",
    "amount": "\u20b9439.66",
    "amountNum": 439.66,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:07 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000535",
    "user": "CUST_0007",
    "amount": "\u20b9399.94",
    "amountNum": 399.94,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:43 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000536",
    "user": "CUST_0084",
    "amount": "\u20b9212.96",
    "amountNum": 212.96,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:29 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000537",
    "user": "CUST_0092",
    "amount": "\u20b995.77",
    "amountNum": 95.77,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:32 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000538",
    "user": "CUST_0048",
    "amount": "\u20b9261.43",
    "amountNum": 261.43,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:48 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000539",
    "user": "CUST_0084",
    "amount": "\u20b934.64",
    "amountNum": 34.64,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:03 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000540",
    "user": "CUST_0096",
    "amount": "\u20b9231.97",
    "amountNum": 231.97,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000541",
    "user": "CUST_0062",
    "amount": "\u20b942.86",
    "amountNum": 42.86,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:25 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000542",
    "user": "CUST_0061",
    "amount": "\u20b9416.71",
    "amountNum": 416.71,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000543",
    "user": "CUST_0043",
    "amount": "\u20b9331.12",
    "amountNum": 331.12,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:35 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000544",
    "user": "CUST_0006",
    "amount": "\u20b9195.13",
    "amountNum": 195.13,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:48 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000545",
    "user": "CUST_0067",
    "amount": "\u20b996.08",
    "amountNum": 96.08,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:49 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000546",
    "user": "CUST_0022",
    "amount": "\u20b9153.36",
    "amountNum": 153.36,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:19 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000547",
    "user": "CUST_0036",
    "amount": "\u20b991.91",
    "amountNum": 91.91,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000548",
    "user": "CUST_0047",
    "amount": "\u20b9407.88",
    "amountNum": 407.88,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:04 AM",
    "riskScore": 15.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000549",
    "user": "CUST_0064",
    "amount": "\u20b977.20",
    "amountNum": 77.2,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:16 AM",
    "riskScore": 13.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000550",
    "user": "CUST_0021",
    "amount": "\u20b91,323.78",
    "amountNum": 1323.78,
    "location": "Mumbai",
    "device": "New Device",
    "time": "02:03 AM",
    "riskScore": 86.9,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000551",
    "user": "CUST_0029",
    "amount": "\u20b9417.09",
    "amountNum": 417.09,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:14 AM",
    "riskScore": 16.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000552",
    "user": "CUST_0039",
    "amount": "\u20b9240.14",
    "amountNum": 240.14,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:39 AM",
    "riskScore": 15.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000553",
    "user": "CUST_0035",
    "amount": "\u20b951.82",
    "amountNum": 51.82,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:36 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000554",
    "user": "CUST_0086",
    "amount": "\u20b996.85",
    "amountNum": 96.85,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:59 AM",
    "riskScore": 13.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000555",
    "user": "CUST_0032",
    "amount": "\u20b9421.94",
    "amountNum": 421.94,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:24 AM",
    "riskScore": 7.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000556",
    "user": "CUST_0069",
    "amount": "\u20b9157.83",
    "amountNum": 157.83,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:47 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000557",
    "user": "CUST_0007",
    "amount": "\u20b9439.90",
    "amountNum": 439.9,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:03 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000558",
    "user": "CUST_0093",
    "amount": "\u20b9264.60",
    "amountNum": 264.6,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:33 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000559",
    "user": "CUST_0094",
    "amount": "\u20b9440.87",
    "amountNum": 440.87,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:47 AM",
    "riskScore": 8.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000560",
    "user": "CUST_0067",
    "amount": "\u20b9130.34",
    "amountNum": 130.34,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:04 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000561",
    "user": "CUST_0023",
    "amount": "\u20b9447.69",
    "amountNum": 447.69,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:54 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000562",
    "user": "CUST_0098",
    "amount": "\u20b9368.59",
    "amountNum": 368.59,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:23 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000563",
    "user": "CUST_0042",
    "amount": "\u20b932.31",
    "amountNum": 32.31,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:10 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000564",
    "user": "CUST_0099",
    "amount": "\u20b9368.72",
    "amountNum": 368.72,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:27 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000565",
    "user": "CUST_0078",
    "amount": "\u20b9105.39",
    "amountNum": 105.39,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:51 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000566",
    "user": "CUST_0040",
    "amount": "\u20b9251.69",
    "amountNum": 251.69,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:08 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000567",
    "user": "CUST_0004",
    "amount": "\u20b9339.32",
    "amountNum": 339.32,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:59 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000568",
    "user": "CUST_0063",
    "amount": "\u20b9128.26",
    "amountNum": 128.26,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:40 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000569",
    "user": "CUST_0092",
    "amount": "\u20b999.12",
    "amountNum": 99.12,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:48 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000570",
    "user": "CUST_0091",
    "amount": "\u20b9143.07",
    "amountNum": 143.07,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:39 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000571",
    "user": "CUST_0058",
    "amount": "\u20b9416.21",
    "amountNum": 416.21,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:03 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000572",
    "user": "CUST_0063",
    "amount": "\u20b9151.03",
    "amountNum": 151.03,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:19 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000573",
    "user": "CUST_0043",
    "amount": "\u20b9149.62",
    "amountNum": 149.62,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000574",
    "user": "CUST_0035",
    "amount": "\u20b996.91",
    "amountNum": 96.91,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000575",
    "user": "CUST_0022",
    "amount": "\u20b934.25",
    "amountNum": 34.25,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000576",
    "user": "CUST_0018",
    "amount": "\u20b9114.48",
    "amountNum": 114.48,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000577",
    "user": "CUST_0036",
    "amount": "\u20b9365.05",
    "amountNum": 365.05,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000578",
    "user": "CUST_0061",
    "amount": "\u20b989.35",
    "amountNum": 89.35,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:39 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000579",
    "user": "CUST_0094",
    "amount": "\u20b9182.30",
    "amountNum": 182.3,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:32 AM",
    "riskScore": 14.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000580",
    "user": "CUST_0006",
    "amount": "\u20b9436.44",
    "amountNum": 436.44,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:39 AM",
    "riskScore": 19.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000581",
    "user": "CUST_0067",
    "amount": "\u20b9298.07",
    "amountNum": 298.07,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:18 AM",
    "riskScore": 16.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000582",
    "user": "CUST_0042",
    "amount": "\u20b9197.59",
    "amountNum": 197.59,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:24 AM",
    "riskScore": 14.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000583",
    "user": "CUST_0068",
    "amount": "\u20b9202.54",
    "amountNum": 202.54,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:57 AM",
    "riskScore": 15.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000584",
    "user": "CUST_0061",
    "amount": "\u20b9292.64",
    "amountNum": 292.64,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:28 AM",
    "riskScore": 15.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000585",
    "user": "CUST_0091",
    "amount": "\u20b9373.75",
    "amountNum": 373.75,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:45 AM",
    "riskScore": 15.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000586",
    "user": "CUST_0052",
    "amount": "\u20b9236.35",
    "amountNum": 236.35,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:45 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000587",
    "user": "CUST_0037",
    "amount": "\u20b993.10",
    "amountNum": 93.1,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:06 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000588",
    "user": "CUST_0100",
    "amount": "\u20b9229.80",
    "amountNum": 229.8,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:00 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000589",
    "user": "CUST_0072",
    "amount": "\u20b93,260.62",
    "amountNum": 3260.62,
    "location": "Mumbai",
    "device": "New Device",
    "time": "09:11 AM",
    "riskScore": 89.6,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000590",
    "user": "CUST_0084",
    "amount": "\u20b9433.27",
    "amountNum": 433.27,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:28 AM",
    "riskScore": 6.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000591",
    "user": "CUST_0063",
    "amount": "\u20b9245.52",
    "amountNum": 245.52,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:23 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000592",
    "user": "CUST_0040",
    "amount": "\u20b9273.72",
    "amountNum": 273.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:58 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000593",
    "user": "CUST_0076",
    "amount": "\u20b9329.85",
    "amountNum": 329.85,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:20 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000594",
    "user": "CUST_0063",
    "amount": "\u20b9440.43",
    "amountNum": 440.43,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000595",
    "user": "CUST_0027",
    "amount": "\u20b9255.13",
    "amountNum": 255.13,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:22 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000596",
    "user": "CUST_0033",
    "amount": "\u20b9113.10",
    "amountNum": 113.1,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000597",
    "user": "CUST_0028",
    "amount": "\u20b9185.07",
    "amountNum": 185.07,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:52 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000598",
    "user": "CUST_0043",
    "amount": "\u20b9377.26",
    "amountNum": 377.26,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:59 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000599",
    "user": "CUST_0027",
    "amount": "\u20b922.66",
    "amountNum": 22.66,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:24 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000600",
    "user": "CUST_0049",
    "amount": "\u20b9289.56",
    "amountNum": 289.56,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:28 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000601",
    "user": "CUST_0042",
    "amount": "\u20b9317.64",
    "amountNum": 317.64,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000602",
    "user": "CUST_0005",
    "amount": "\u20b928.62",
    "amountNum": 28.62,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:25 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000603",
    "user": "CUST_0002",
    "amount": "\u20b9214.58",
    "amountNum": 214.58,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:39 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000604",
    "user": "CUST_0049",
    "amount": "\u20b9122.39",
    "amountNum": 122.39,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000605",
    "user": "CUST_0018",
    "amount": "\u20b9408.93",
    "amountNum": 408.93,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:36 PM",
    "riskScore": 6.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000606",
    "user": "CUST_0070",
    "amount": "\u20b9309.17",
    "amountNum": 309.17,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:30 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000607",
    "user": "CUST_0046",
    "amount": "\u20b951.58",
    "amountNum": 51.58,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000608",
    "user": "CUST_0086",
    "amount": "\u20b93,418.49",
    "amountNum": 3418.49,
    "location": "Mumbai",
    "device": "New Device",
    "time": "11:51 PM",
    "riskScore": 87.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000609",
    "user": "CUST_0069",
    "amount": "\u20b9288.67",
    "amountNum": 288.67,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:05 AM",
    "riskScore": 15.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000610",
    "user": "CUST_0041",
    "amount": "\u20b9302.56",
    "amountNum": 302.56,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:43 AM",
    "riskScore": 15.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000611",
    "user": "CUST_0025",
    "amount": "\u20b9158.09",
    "amountNum": 158.09,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:13 AM",
    "riskScore": 12.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000612",
    "user": "CUST_0086",
    "amount": "\u20b9444.61",
    "amountNum": 444.61,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:21 AM",
    "riskScore": 14.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000613",
    "user": "CUST_0083",
    "amount": "\u20b994.73",
    "amountNum": 94.73,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:07 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000614",
    "user": "CUST_0065",
    "amount": "\u20b9121.46",
    "amountNum": 121.46,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:47 AM",
    "riskScore": 13.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000615",
    "user": "CUST_0018",
    "amount": "\u20b9137.00",
    "amountNum": 137.0,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:44 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000616",
    "user": "CUST_0062",
    "amount": "\u20b9368.44",
    "amountNum": 368.44,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:27 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000617",
    "user": "CUST_0022",
    "amount": "\u20b9386.79",
    "amountNum": 386.79,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:34 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000618",
    "user": "CUST_0041",
    "amount": "\u20b9334.42",
    "amountNum": 334.42,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:01 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000619",
    "user": "CUST_0051",
    "amount": "\u20b9345.41",
    "amountNum": 345.41,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:19 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000620",
    "user": "CUST_0097",
    "amount": "\u20b9323.04",
    "amountNum": 323.04,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:20 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000621",
    "user": "CUST_0018",
    "amount": "\u20b9278.51",
    "amountNum": 278.51,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:24 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000622",
    "user": "CUST_0094",
    "amount": "\u20b9350.78",
    "amountNum": 350.78,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:27 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000623",
    "user": "CUST_0055",
    "amount": "\u20b9226.21",
    "amountNum": 226.21,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:42 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000624",
    "user": "CUST_0083",
    "amount": "\u20b9339.03",
    "amountNum": 339.03,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000625",
    "user": "CUST_0010",
    "amount": "\u20b931.21",
    "amountNum": 31.21,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:21 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000626",
    "user": "CUST_0095",
    "amount": "\u20b9204.03",
    "amountNum": 204.03,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:50 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000627",
    "user": "CUST_0070",
    "amount": "\u20b9280.69",
    "amountNum": 280.69,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:57 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000628",
    "user": "CUST_0049",
    "amount": "\u20b9171.35",
    "amountNum": 171.35,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:29 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000629",
    "user": "CUST_0027",
    "amount": "\u20b918.13",
    "amountNum": 18.13,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000630",
    "user": "CUST_0022",
    "amount": "\u20b92,259.53",
    "amountNum": 2259.53,
    "location": "Mumbai",
    "device": "New Device",
    "time": "08:29 PM",
    "riskScore": 80.4,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000631",
    "user": "CUST_0088",
    "amount": "\u20b9333.10",
    "amountNum": 333.1,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:41 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000632",
    "user": "CUST_0007",
    "amount": "\u20b9179.74",
    "amountNum": 179.74,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:28 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000633",
    "user": "CUST_0028",
    "amount": "\u20b9123.63",
    "amountNum": 123.63,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:52 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000634",
    "user": "CUST_0030",
    "amount": "\u20b9309.15",
    "amountNum": 309.15,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:48 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000635",
    "user": "CUST_0023",
    "amount": "\u20b952.09",
    "amountNum": 52.09,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:50 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000636",
    "user": "CUST_0070",
    "amount": "\u20b9429.33",
    "amountNum": 429.33,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:07 AM",
    "riskScore": 16.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000637",
    "user": "CUST_0032",
    "amount": "\u20b9111.43",
    "amountNum": 111.43,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:00 AM",
    "riskScore": 13.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000638",
    "user": "CUST_0025",
    "amount": "\u20b9247.85",
    "amountNum": 247.85,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:21 AM",
    "riskScore": 12.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000639",
    "user": "CUST_0034",
    "amount": "\u20b9437.19",
    "amountNum": 437.19,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:33 AM",
    "riskScore": 14.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000640",
    "user": "CUST_0012",
    "amount": "\u20b9195.08",
    "amountNum": 195.08,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:39 AM",
    "riskScore": 13.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000641",
    "user": "CUST_0051",
    "amount": "\u20b935.05",
    "amountNum": 35.05,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:13 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000642",
    "user": "CUST_0088",
    "amount": "\u20b91,560.59",
    "amountNum": 1560.59,
    "location": "Mumbai",
    "device": "New Device",
    "time": "07:10 AM",
    "riskScore": 81.4,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000643",
    "user": "CUST_0085",
    "amount": "\u20b9375.58",
    "amountNum": 375.58,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:05 AM",
    "riskScore": 6.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000644",
    "user": "CUST_0042",
    "amount": "\u20b9396.26",
    "amountNum": 396.26,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:25 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000645",
    "user": "CUST_0058",
    "amount": "\u20b9153.67",
    "amountNum": 153.67,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:11 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000646",
    "user": "CUST_0083",
    "amount": "\u20b9216.68",
    "amountNum": 216.68,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:09 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000647",
    "user": "CUST_0030",
    "amount": "\u20b9435.04",
    "amountNum": 435.04,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:03 AM",
    "riskScore": 5.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000648",
    "user": "CUST_0042",
    "amount": "\u20b9214.47",
    "amountNum": 214.47,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:35 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000649",
    "user": "CUST_0016",
    "amount": "\u20b9417.44",
    "amountNum": 417.44,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:52 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000650",
    "user": "CUST_0018",
    "amount": "\u20b932.09",
    "amountNum": 32.09,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:18 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000651",
    "user": "CUST_0045",
    "amount": "\u20b9207.47",
    "amountNum": 207.47,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000652",
    "user": "CUST_0010",
    "amount": "\u20b9422.26",
    "amountNum": 422.26,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:04 PM",
    "riskScore": 25.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000653",
    "user": "CUST_0061",
    "amount": "\u20b9244.97",
    "amountNum": 244.97,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:22 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000654",
    "user": "CUST_0075",
    "amount": "\u20b9124.67",
    "amountNum": 124.67,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:35 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000655",
    "user": "CUST_0007",
    "amount": "\u20b9419.29",
    "amountNum": 419.29,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000656",
    "user": "CUST_0036",
    "amount": "\u20b9166.90",
    "amountNum": 166.9,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:18 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000657",
    "user": "CUST_0029",
    "amount": "\u20b999.11",
    "amountNum": 99.11,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:45 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000658",
    "user": "CUST_0035",
    "amount": "\u20b943.09",
    "amountNum": 43.09,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:10 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000659",
    "user": "CUST_0048",
    "amount": "\u20b992.19",
    "amountNum": 92.19,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:57 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000660",
    "user": "CUST_0065",
    "amount": "\u20b9196.60",
    "amountNum": 196.6,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:44 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000661",
    "user": "CUST_0070",
    "amount": "\u20b9246.71",
    "amountNum": 246.71,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:29 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000662",
    "user": "CUST_0024",
    "amount": "\u20b9119.50",
    "amountNum": 119.5,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:25 AM",
    "riskScore": 14.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000663",
    "user": "CUST_0023",
    "amount": "\u20b92,369.17",
    "amountNum": 2369.17,
    "location": "Mumbai",
    "device": "New Device",
    "time": "01:15 AM",
    "riskScore": 88.9,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000664",
    "user": "CUST_0038",
    "amount": "\u20b9349.73",
    "amountNum": 349.73,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:39 AM",
    "riskScore": 14.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000665",
    "user": "CUST_0084",
    "amount": "\u20b9355.67",
    "amountNum": 355.67,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:32 AM",
    "riskScore": 16.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000666",
    "user": "CUST_0071",
    "amount": "\u20b9388.29",
    "amountNum": 388.29,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:34 AM",
    "riskScore": 12.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000667",
    "user": "CUST_0060",
    "amount": "\u20b9356.90",
    "amountNum": 356.9,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:58 AM",
    "riskScore": 19.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000668",
    "user": "CUST_0060",
    "amount": "\u20b9395.03",
    "amountNum": 395.03,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:25 AM",
    "riskScore": 6.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000669",
    "user": "CUST_0005",
    "amount": "\u20b9160.75",
    "amountNum": 160.75,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:51 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000670",
    "user": "CUST_0069",
    "amount": "\u20b9183.31",
    "amountNum": 183.31,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:09 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000671",
    "user": "CUST_0059",
    "amount": "\u20b9124.08",
    "amountNum": 124.08,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:04 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000672",
    "user": "CUST_0016",
    "amount": "\u20b996.40",
    "amountNum": 96.4,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:17 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000673",
    "user": "CUST_0086",
    "amount": "\u20b9377.46",
    "amountNum": 377.46,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:38 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000674",
    "user": "CUST_0065",
    "amount": "\u20b9446.86",
    "amountNum": 446.86,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:21 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000675",
    "user": "CUST_0085",
    "amount": "\u20b9161.88",
    "amountNum": 161.88,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:50 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000676",
    "user": "CUST_0077",
    "amount": "\u20b9315.90",
    "amountNum": 315.9,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:07 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000677",
    "user": "CUST_0002",
    "amount": "\u20b9371.08",
    "amountNum": 371.08,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:27 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000678",
    "user": "CUST_0027",
    "amount": "\u20b9129.59",
    "amountNum": 129.59,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:53 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000679",
    "user": "CUST_0087",
    "amount": "\u20b936.32",
    "amountNum": 36.32,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:37 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000680",
    "user": "CUST_0005",
    "amount": "\u20b963.81",
    "amountNum": 63.81,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000681",
    "user": "CUST_0097",
    "amount": "\u20b9117.93",
    "amountNum": 117.93,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:15 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000682",
    "user": "CUST_0047",
    "amount": "\u20b9379.38",
    "amountNum": 379.38,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:24 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000683",
    "user": "CUST_0053",
    "amount": "\u20b9318.39",
    "amountNum": 318.39,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:02 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000684",
    "user": "CUST_0015",
    "amount": "\u20b9175.77",
    "amountNum": 175.77,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:14 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000685",
    "user": "CUST_0018",
    "amount": "\u20b9313.71",
    "amountNum": 313.71,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000686",
    "user": "CUST_0066",
    "amount": "\u20b953.34",
    "amountNum": 53.34,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000687",
    "user": "CUST_0040",
    "amount": "\u20b9321.10",
    "amountNum": 321.1,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000688",
    "user": "CUST_0033",
    "amount": "\u20b9270.81",
    "amountNum": 270.81,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:28 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000689",
    "user": "CUST_0096",
    "amount": "\u20b9442.27",
    "amountNum": 442.27,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:46 AM",
    "riskScore": 13.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000690",
    "user": "CUST_0002",
    "amount": "\u20b951.42",
    "amountNum": 51.42,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:06 AM",
    "riskScore": 12.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000691",
    "user": "CUST_0093",
    "amount": "\u20b9447.09",
    "amountNum": 447.09,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:26 AM",
    "riskScore": 16.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000692",
    "user": "CUST_0009",
    "amount": "\u20b9194.78",
    "amountNum": 194.78,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:44 AM",
    "riskScore": 13.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000693",
    "user": "CUST_0011",
    "amount": "\u20b9240.58",
    "amountNum": 240.58,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:20 AM",
    "riskScore": 14.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000694",
    "user": "CUST_0042",
    "amount": "\u20b9163.86",
    "amountNum": 163.86,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:24 AM",
    "riskScore": 13.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000695",
    "user": "CUST_0044",
    "amount": "\u20b9149.70",
    "amountNum": 149.7,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:40 AM",
    "riskScore": 13.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000696",
    "user": "CUST_0036",
    "amount": "\u20b929.88",
    "amountNum": 29.88,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:00 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000697",
    "user": "CUST_0013",
    "amount": "\u20b9218.59",
    "amountNum": 218.59,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:56 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000698",
    "user": "CUST_0040",
    "amount": "\u20b9151.02",
    "amountNum": 151.02,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:46 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000699",
    "user": "CUST_0005",
    "amount": "\u20b975.70",
    "amountNum": 75.7,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:38 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000700",
    "user": "CUST_0051",
    "amount": "\u20b9350.10",
    "amountNum": 350.1,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:03 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000701",
    "user": "CUST_0092",
    "amount": "\u20b9413.34",
    "amountNum": 413.34,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:28 AM",
    "riskScore": 9.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000702",
    "user": "CUST_0091",
    "amount": "\u20b9342.85",
    "amountNum": 342.85,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:20 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000703",
    "user": "CUST_0080",
    "amount": "\u20b9100.69",
    "amountNum": 100.69,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:43 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000704",
    "user": "CUST_0030",
    "amount": "\u20b9336.77",
    "amountNum": 336.77,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000705",
    "user": "CUST_0059",
    "amount": "\u20b91,749.64",
    "amountNum": 1749.64,
    "location": "Mumbai",
    "device": "New Device",
    "time": "02:17 PM",
    "riskScore": 86.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000706",
    "user": "CUST_0059",
    "amount": "\u20b9419.68",
    "amountNum": 419.68,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:43 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000707",
    "user": "CUST_0058",
    "amount": "\u20b9302.48",
    "amountNum": 302.48,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000708",
    "user": "CUST_0045",
    "amount": "\u20b9216.95",
    "amountNum": 216.95,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:14 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000709",
    "user": "CUST_0048",
    "amount": "\u20b93,646.83",
    "amountNum": 3646.83,
    "location": "Mumbai",
    "device": "New Device",
    "time": "06:47 PM",
    "riskScore": 90.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000710",
    "user": "CUST_0092",
    "amount": "\u20b9122.13",
    "amountNum": 122.13,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:15 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000711",
    "user": "CUST_0005",
    "amount": "\u20b9133.03",
    "amountNum": 133.03,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:10 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000712",
    "user": "CUST_0056",
    "amount": "\u20b9237.26",
    "amountNum": 237.26,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000713",
    "user": "CUST_0071",
    "amount": "\u20b9361.43",
    "amountNum": 361.43,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000714",
    "user": "CUST_0009",
    "amount": "\u20b9195.75",
    "amountNum": 195.75,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:37 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000715",
    "user": "CUST_0096",
    "amount": "\u20b9205.17",
    "amountNum": 205.17,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:34 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000716",
    "user": "CUST_0092",
    "amount": "\u20b9402.28",
    "amountNum": 402.28,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:01 AM",
    "riskScore": 17.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000717",
    "user": "CUST_0026",
    "amount": "\u20b926.24",
    "amountNum": 26.24,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:02 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000718",
    "user": "CUST_0003",
    "amount": "\u20b9425.29",
    "amountNum": 425.29,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:25 AM",
    "riskScore": 16.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000719",
    "user": "CUST_0054",
    "amount": "\u20b9313.29",
    "amountNum": 313.29,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:22 AM",
    "riskScore": 13.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000720",
    "user": "CUST_0083",
    "amount": "\u20b9427.98",
    "amountNum": 427.98,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:44 AM",
    "riskScore": 13.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000721",
    "user": "CUST_0086",
    "amount": "\u20b9209.82",
    "amountNum": 209.82,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:13 AM",
    "riskScore": 13.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000722",
    "user": "CUST_0058",
    "amount": "\u20b9106.47",
    "amountNum": 106.47,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:07 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000723",
    "user": "CUST_0051",
    "amount": "\u20b9207.84",
    "amountNum": 207.84,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:59 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000724",
    "user": "CUST_0071",
    "amount": "\u20b92,547.34",
    "amountNum": 2547.34,
    "location": "Mumbai",
    "device": "New Device",
    "time": "07:55 AM",
    "riskScore": 69.5,
    "riskLevel": "Medium",
    "status": "Approved",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000725",
    "user": "CUST_0038",
    "amount": "\u20b9179.57",
    "amountNum": 179.57,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:56 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000726",
    "user": "CUST_0079",
    "amount": "\u20b9359.04",
    "amountNum": 359.04,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:58 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000727",
    "user": "CUST_0079",
    "amount": "\u20b937.18",
    "amountNum": 37.18,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:13 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000728",
    "user": "CUST_0009",
    "amount": "\u20b9385.08",
    "amountNum": 385.08,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:06 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000729",
    "user": "CUST_0077",
    "amount": "\u20b9219.69",
    "amountNum": 219.69,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:35 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000730",
    "user": "CUST_0072",
    "amount": "\u20b998.68",
    "amountNum": 98.68,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000731",
    "user": "CUST_0082",
    "amount": "\u20b9155.86",
    "amountNum": 155.86,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:10 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000732",
    "user": "CUST_0033",
    "amount": "\u20b9310.67",
    "amountNum": 310.67,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:33 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000733",
    "user": "CUST_0008",
    "amount": "\u20b9290.50",
    "amountNum": 290.5,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:52 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000734",
    "user": "CUST_0098",
    "amount": "\u20b9284.90",
    "amountNum": 284.9,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:51 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000735",
    "user": "CUST_0038",
    "amount": "\u20b923.46",
    "amountNum": 23.46,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:02 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000736",
    "user": "CUST_0030",
    "amount": "\u20b9368.09",
    "amountNum": 368.09,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:48 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000737",
    "user": "CUST_0090",
    "amount": "\u20b9280.72",
    "amountNum": 280.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:46 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000738",
    "user": "CUST_0064",
    "amount": "\u20b93,487.72",
    "amountNum": 3487.72,
    "location": "Mumbai",
    "device": "New Device",
    "time": "07:08 PM",
    "riskScore": 90.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000739",
    "user": "CUST_0006",
    "amount": "\u20b998.51",
    "amountNum": 98.51,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:22 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000740",
    "user": "CUST_0012",
    "amount": "\u20b9361.85",
    "amountNum": 361.85,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:49 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000741",
    "user": "CUST_0069",
    "amount": "\u20b9274.90",
    "amountNum": 274.9,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:29 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000742",
    "user": "CUST_0071",
    "amount": "\u20b9129.22",
    "amountNum": 129.22,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:46 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000743",
    "user": "CUST_0060",
    "amount": "\u20b9360.53",
    "amountNum": 360.53,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:07 AM",
    "riskScore": 17.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000744",
    "user": "CUST_0064",
    "amount": "\u20b9170.75",
    "amountNum": 170.75,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:36 AM",
    "riskScore": 12.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000745",
    "user": "CUST_0068",
    "amount": "\u20b9266.17",
    "amountNum": 266.17,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:33 AM",
    "riskScore": 16.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000746",
    "user": "CUST_0080",
    "amount": "\u20b936.72",
    "amountNum": 36.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:03 AM",
    "riskScore": 12.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000747",
    "user": "CUST_0090",
    "amount": "\u20b979.49",
    "amountNum": 79.49,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:03 AM",
    "riskScore": 12.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000748",
    "user": "CUST_0078",
    "amount": "\u20b9317.03",
    "amountNum": 317.03,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:34 AM",
    "riskScore": 16.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000749",
    "user": "CUST_0034",
    "amount": "\u20b9280.72",
    "amountNum": 280.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:00 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000750",
    "user": "CUST_0072",
    "amount": "\u20b9344.62",
    "amountNum": 344.62,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:46 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000751",
    "user": "CUST_0038",
    "amount": "\u20b9242.87",
    "amountNum": 242.87,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:07 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000752",
    "user": "CUST_0043",
    "amount": "\u20b9177.85",
    "amountNum": 177.85,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:51 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000753",
    "user": "CUST_0082",
    "amount": "\u20b9178.70",
    "amountNum": 178.7,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:30 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000754",
    "user": "CUST_0065",
    "amount": "\u20b9383.19",
    "amountNum": 383.19,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:57 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000755",
    "user": "CUST_0089",
    "amount": "\u20b9109.69",
    "amountNum": 109.69,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:34 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000756",
    "user": "CUST_0006",
    "amount": "\u20b9290.89",
    "amountNum": 290.89,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:04 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000757",
    "user": "CUST_0008",
    "amount": "\u20b9354.72",
    "amountNum": 354.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000758",
    "user": "CUST_0032",
    "amount": "\u20b989.42",
    "amountNum": 89.42,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:20 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000759",
    "user": "CUST_0062",
    "amount": "\u20b9358.22",
    "amountNum": 358.22,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000760",
    "user": "CUST_0053",
    "amount": "\u20b9262.99",
    "amountNum": 262.99,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:42 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000761",
    "user": "CUST_0014",
    "amount": "\u20b9366.37",
    "amountNum": 366.37,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:01 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000762",
    "user": "CUST_0096",
    "amount": "\u20b9205.26",
    "amountNum": 205.26,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000763",
    "user": "CUST_0071",
    "amount": "\u20b930.19",
    "amountNum": 30.19,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:39 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000764",
    "user": "CUST_0024",
    "amount": "\u20b9110.90",
    "amountNum": 110.9,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:33 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000765",
    "user": "CUST_0053",
    "amount": "\u20b9210.84",
    "amountNum": 210.84,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:46 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000766",
    "user": "CUST_0090",
    "amount": "\u20b9117.61",
    "amountNum": 117.61,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:12 AM",
    "riskScore": 13.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000767",
    "user": "CUST_0092",
    "amount": "\u20b9295.79",
    "amountNum": 295.79,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:41 AM",
    "riskScore": 15.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000768",
    "user": "CUST_0086",
    "amount": "\u20b940.04",
    "amountNum": 40.04,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:38 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000769",
    "user": "CUST_0097",
    "amount": "\u20b9259.66",
    "amountNum": 259.66,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:58 AM",
    "riskScore": 12.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000770",
    "user": "CUST_0002",
    "amount": "\u20b9338.69",
    "amountNum": 338.69,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:03 AM",
    "riskScore": 15.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000771",
    "user": "CUST_0017",
    "amount": "\u20b9149.73",
    "amountNum": 149.73,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:56 AM",
    "riskScore": 13.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000772",
    "user": "CUST_0094",
    "amount": "\u20b9172.46",
    "amountNum": 172.46,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:35 AM",
    "riskScore": 14.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000773",
    "user": "CUST_0099",
    "amount": "\u20b9270.41",
    "amountNum": 270.41,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:04 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000774",
    "user": "CUST_0053",
    "amount": "\u20b9131.68",
    "amountNum": 131.68,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:11 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000775",
    "user": "CUST_0047",
    "amount": "\u20b9101.56",
    "amountNum": 101.56,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:20 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000776",
    "user": "CUST_0016",
    "amount": "\u20b9208.54",
    "amountNum": 208.54,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:52 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000777",
    "user": "CUST_0052",
    "amount": "\u20b974.21",
    "amountNum": 74.21,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:21 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000778",
    "user": "CUST_0021",
    "amount": "\u20b9276.85",
    "amountNum": 276.85,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:45 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000779",
    "user": "CUST_0100",
    "amount": "\u20b9240.37",
    "amountNum": 240.37,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:09 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000780",
    "user": "CUST_0031",
    "amount": "\u20b9413.69",
    "amountNum": 413.69,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:34 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000781",
    "user": "CUST_0055",
    "amount": "\u20b9185.75",
    "amountNum": 185.75,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:01 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000782",
    "user": "CUST_0097",
    "amount": "\u20b9316.17",
    "amountNum": 316.17,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000783",
    "user": "CUST_0068",
    "amount": "\u20b9214.48",
    "amountNum": 214.48,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000784",
    "user": "CUST_0003",
    "amount": "\u20b9257.66",
    "amountNum": 257.66,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:13 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000785",
    "user": "CUST_0050",
    "amount": "\u20b9367.75",
    "amountNum": 367.75,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000786",
    "user": "CUST_0074",
    "amount": "\u20b9396.85",
    "amountNum": 396.85,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:51 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000787",
    "user": "CUST_0094",
    "amount": "\u20b9419.51",
    "amountNum": 419.51,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:58 PM",
    "riskScore": 5.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000788",
    "user": "CUST_0072",
    "amount": "\u20b963.31",
    "amountNum": 63.31,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:13 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000789",
    "user": "CUST_0014",
    "amount": "\u20b9339.93",
    "amountNum": 339.93,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:08 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000790",
    "user": "CUST_0009",
    "amount": "\u20b9358.01",
    "amountNum": 358.01,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000791",
    "user": "CUST_0036",
    "amount": "\u20b9209.20",
    "amountNum": 209.2,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:30 AM",
    "riskScore": 13.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000792",
    "user": "CUST_0085",
    "amount": "\u20b9408.90",
    "amountNum": 408.9,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:39 AM",
    "riskScore": 17.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000793",
    "user": "CUST_0054",
    "amount": "\u20b9125.73",
    "amountNum": 125.73,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:06 AM",
    "riskScore": 12.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000794",
    "user": "CUST_0044",
    "amount": "\u20b955.16",
    "amountNum": 55.16,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:38 AM",
    "riskScore": 12.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000795",
    "user": "CUST_0091",
    "amount": "\u20b9177.70",
    "amountNum": 177.7,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:15 AM",
    "riskScore": 13.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000796",
    "user": "CUST_0027",
    "amount": "\u20b962.08",
    "amountNum": 62.08,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:24 AM",
    "riskScore": 12.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000797",
    "user": "CUST_0059",
    "amount": "\u20b9444.44",
    "amountNum": 444.44,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:19 AM",
    "riskScore": 14.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000798",
    "user": "CUST_0100",
    "amount": "\u20b9335.89",
    "amountNum": 335.89,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:57 AM",
    "riskScore": 15.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000799",
    "user": "CUST_0063",
    "amount": "\u20b9314.79",
    "amountNum": 314.79,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:23 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000800",
    "user": "CUST_0022",
    "amount": "\u20b9287.49",
    "amountNum": 287.49,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:56 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000801",
    "user": "CUST_0018",
    "amount": "\u20b920.59",
    "amountNum": 20.59,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:22 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000802",
    "user": "CUST_0002",
    "amount": "\u20b9210.76",
    "amountNum": 210.76,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:42 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000803",
    "user": "CUST_0028",
    "amount": "\u20b9240.65",
    "amountNum": 240.65,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:43 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000804",
    "user": "CUST_0028",
    "amount": "\u20b9164.43",
    "amountNum": 164.43,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:33 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000805",
    "user": "CUST_0019",
    "amount": "\u20b9322.44",
    "amountNum": 322.44,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:34 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000806",
    "user": "CUST_0041",
    "amount": "\u20b9245.97",
    "amountNum": 245.97,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:18 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000807",
    "user": "CUST_0072",
    "amount": "\u20b9335.46",
    "amountNum": 335.46,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:49 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000808",
    "user": "CUST_0045",
    "amount": "\u20b9367.24",
    "amountNum": 367.24,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000809",
    "user": "CUST_0019",
    "amount": "\u20b9321.45",
    "amountNum": 321.45,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:23 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000810",
    "user": "CUST_0075",
    "amount": "\u20b989.28",
    "amountNum": 89.28,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:32 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000811",
    "user": "CUST_0066",
    "amount": "\u20b982.73",
    "amountNum": 82.73,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:22 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000812",
    "user": "CUST_0087",
    "amount": "\u20b9279.90",
    "amountNum": 279.9,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:27 PM",
    "riskScore": 5.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000813",
    "user": "CUST_0078",
    "amount": "\u20b9265.53",
    "amountNum": 265.53,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:01 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000814",
    "user": "CUST_0026",
    "amount": "\u20b9338.71",
    "amountNum": 338.71,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:29 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000815",
    "user": "CUST_0071",
    "amount": "\u20b91,164.81",
    "amountNum": 1164.81,
    "location": "Mumbai",
    "device": "New Device",
    "time": "10:49 PM",
    "riskScore": 60.7,
    "riskLevel": "Medium",
    "status": "Approved",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000816",
    "user": "CUST_0100",
    "amount": "\u20b9278.86",
    "amountNum": 278.86,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:35 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000817",
    "user": "CUST_0094",
    "amount": "\u20b9369.54",
    "amountNum": 369.54,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:16 AM",
    "riskScore": 16.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000818",
    "user": "CUST_0014",
    "amount": "\u20b9260.96",
    "amountNum": 260.96,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:07 AM",
    "riskScore": 14.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000819",
    "user": "CUST_0046",
    "amount": "\u20b9384.47",
    "amountNum": 384.47,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:22 AM",
    "riskScore": 14.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000820",
    "user": "CUST_0097",
    "amount": "\u20b9347.45",
    "amountNum": 347.45,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:52 AM",
    "riskScore": 13.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000821",
    "user": "CUST_0092",
    "amount": "\u20b9181.77",
    "amountNum": 181.77,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:05 AM",
    "riskScore": 14.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000822",
    "user": "CUST_0035",
    "amount": "\u20b9233.44",
    "amountNum": 233.44,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:32 AM",
    "riskScore": 13.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000823",
    "user": "CUST_0079",
    "amount": "\u20b9182.51",
    "amountNum": 182.51,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:56 AM",
    "riskScore": 14.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000824",
    "user": "CUST_0053",
    "amount": "\u20b923.12",
    "amountNum": 23.12,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:49 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000825",
    "user": "CUST_0063",
    "amount": "\u20b9103.44",
    "amountNum": 103.44,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:13 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000826",
    "user": "CUST_0050",
    "amount": "\u20b9449.77",
    "amountNum": 449.77,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:56 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000827",
    "user": "CUST_0087",
    "amount": "\u20b9101.33",
    "amountNum": 101.33,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:45 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000828",
    "user": "CUST_0066",
    "amount": "\u20b9127.87",
    "amountNum": 127.87,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:05 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000829",
    "user": "CUST_0010",
    "amount": "\u20b9159.52",
    "amountNum": 159.52,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:30 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000830",
    "user": "CUST_0055",
    "amount": "\u20b948.65",
    "amountNum": 48.65,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:59 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000831",
    "user": "CUST_0032",
    "amount": "\u20b9251.74",
    "amountNum": 251.74,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:34 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000832",
    "user": "CUST_0002",
    "amount": "\u20b9269.50",
    "amountNum": 269.5,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000833",
    "user": "CUST_0065",
    "amount": "\u20b9129.32",
    "amountNum": 129.32,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:44 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000834",
    "user": "CUST_0016",
    "amount": "\u20b9381.31",
    "amountNum": 381.31,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:14 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000835",
    "user": "CUST_0047",
    "amount": "\u20b9198.95",
    "amountNum": 198.95,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:29 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000836",
    "user": "CUST_0065",
    "amount": "\u20b9257.91",
    "amountNum": 257.91,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000837",
    "user": "CUST_0083",
    "amount": "\u20b9381.50",
    "amountNum": 381.5,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:07 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000838",
    "user": "CUST_0088",
    "amount": "\u20b9120.87",
    "amountNum": 120.87,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000839",
    "user": "CUST_0007",
    "amount": "\u20b9427.84",
    "amountNum": 427.84,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:07 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000840",
    "user": "CUST_0062",
    "amount": "\u20b9141.58",
    "amountNum": 141.58,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000841",
    "user": "CUST_0040",
    "amount": "\u20b965.79",
    "amountNum": 65.79,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:22 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000842",
    "user": "CUST_0088",
    "amount": "\u20b9196.53",
    "amountNum": 196.53,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:28 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000843",
    "user": "CUST_0004",
    "amount": "\u20b9390.53",
    "amountNum": 390.53,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:05 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000844",
    "user": "CUST_0021",
    "amount": "\u20b9209.84",
    "amountNum": 209.84,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000845",
    "user": "CUST_0082",
    "amount": "\u20b9177.11",
    "amountNum": 177.11,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:06 AM",
    "riskScore": 14.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000846",
    "user": "CUST_0074",
    "amount": "\u20b9279.60",
    "amountNum": 279.6,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:28 AM",
    "riskScore": 14.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000847",
    "user": "CUST_0007",
    "amount": "\u20b9419.39",
    "amountNum": 419.39,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:19 AM",
    "riskScore": 15.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000848",
    "user": "CUST_0084",
    "amount": "\u20b9271.24",
    "amountNum": 271.24,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:09 AM",
    "riskScore": 15.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000849",
    "user": "CUST_0078",
    "amount": "\u20b9227.77",
    "amountNum": 227.77,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:59 AM",
    "riskScore": 14.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000850",
    "user": "CUST_0037",
    "amount": "\u20b9446.19",
    "amountNum": 446.19,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:17 AM",
    "riskScore": 5.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000851",
    "user": "CUST_0048",
    "amount": "\u20b9123.09",
    "amountNum": 123.09,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:26 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000852",
    "user": "CUST_0097",
    "amount": "\u20b9193.00",
    "amountNum": 193.0,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:46 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000853",
    "user": "CUST_0068",
    "amount": "\u20b998.94",
    "amountNum": 98.94,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:34 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000854",
    "user": "CUST_0049",
    "amount": "\u20b9202.44",
    "amountNum": 202.44,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:48 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000855",
    "user": "CUST_0100",
    "amount": "\u20b9273.97",
    "amountNum": 273.97,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:37 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000856",
    "user": "CUST_0082",
    "amount": "\u20b9282.03",
    "amountNum": 282.03,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:57 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000857",
    "user": "CUST_0046",
    "amount": "\u20b9306.92",
    "amountNum": 306.92,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:18 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000858",
    "user": "CUST_0094",
    "amount": "\u20b9386.88",
    "amountNum": 386.88,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:49 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000859",
    "user": "CUST_0009",
    "amount": "\u20b9357.77",
    "amountNum": 357.77,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000860",
    "user": "CUST_0061",
    "amount": "\u20b9155.54",
    "amountNum": 155.54,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:35 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000861",
    "user": "CUST_0068",
    "amount": "\u20b928.72",
    "amountNum": 28.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000862",
    "user": "CUST_0051",
    "amount": "\u20b9418.77",
    "amountNum": 418.77,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:59 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000863",
    "user": "CUST_0079",
    "amount": "\u20b9383.03",
    "amountNum": 383.03,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:29 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000864",
    "user": "CUST_0043",
    "amount": "\u20b9299.75",
    "amountNum": 299.75,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:51 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000865",
    "user": "CUST_0036",
    "amount": "\u20b9271.99",
    "amountNum": 271.99,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000866",
    "user": "CUST_0016",
    "amount": "\u20b92,270.65",
    "amountNum": 2270.65,
    "location": "Mumbai",
    "device": "New Device",
    "time": "06:22 PM",
    "riskScore": 72.5,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000867",
    "user": "CUST_0015",
    "amount": "\u20b9398.06",
    "amountNum": 398.06,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:20 PM",
    "riskScore": 7.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000868",
    "user": "CUST_0016",
    "amount": "\u20b9150.93",
    "amountNum": 150.93,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:40 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000869",
    "user": "CUST_0037",
    "amount": "\u20b9373.35",
    "amountNum": 373.35,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:23 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000870",
    "user": "CUST_0034",
    "amount": "\u20b9145.76",
    "amountNum": 145.76,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:07 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000871",
    "user": "CUST_0062",
    "amount": "\u20b999.93",
    "amountNum": 99.93,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:27 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000872",
    "user": "CUST_0006",
    "amount": "\u20b9397.16",
    "amountNum": 397.16,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:03 AM",
    "riskScore": 17.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000873",
    "user": "CUST_0095",
    "amount": "\u20b9214.96",
    "amountNum": 214.96,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:56 AM",
    "riskScore": 13.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000874",
    "user": "CUST_0086",
    "amount": "\u20b9332.81",
    "amountNum": 332.81,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:14 AM",
    "riskScore": 13.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000875",
    "user": "CUST_0055",
    "amount": "\u20b922.09",
    "amountNum": 22.09,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:18 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000876",
    "user": "CUST_0098",
    "amount": "\u20b9185.40",
    "amountNum": 185.4,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:05 AM",
    "riskScore": 13.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000877",
    "user": "CUST_0076",
    "amount": "\u20b9124.23",
    "amountNum": 124.23,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:17 AM",
    "riskScore": 13.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000878",
    "user": "CUST_0072",
    "amount": "\u20b9337.12",
    "amountNum": 337.12,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:38 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000879",
    "user": "CUST_0097",
    "amount": "\u20b9130.26",
    "amountNum": 130.26,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:07 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000880",
    "user": "CUST_0098",
    "amount": "\u20b9128.07",
    "amountNum": 128.07,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:02 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000881",
    "user": "CUST_0032",
    "amount": "\u20b9217.18",
    "amountNum": 217.18,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:09 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000882",
    "user": "CUST_0091",
    "amount": "\u20b9368.00",
    "amountNum": 368.0,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:07 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000883",
    "user": "CUST_0051",
    "amount": "\u20b9170.29",
    "amountNum": 170.29,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:38 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000884",
    "user": "CUST_0072",
    "amount": "\u20b9187.83",
    "amountNum": 187.83,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:29 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000885",
    "user": "CUST_0077",
    "amount": "\u20b9263.10",
    "amountNum": 263.1,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:35 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000886",
    "user": "CUST_0069",
    "amount": "\u20b92,614.47",
    "amountNum": 2614.47,
    "location": "Mumbai",
    "device": "New Device",
    "time": "01:56 PM",
    "riskScore": 88.3,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000887",
    "user": "CUST_0044",
    "amount": "\u20b984.47",
    "amountNum": 84.47,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:59 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000888",
    "user": "CUST_0050",
    "amount": "\u20b986.62",
    "amountNum": 86.62,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000889",
    "user": "CUST_0028",
    "amount": "\u20b9241.03",
    "amountNum": 241.03,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:05 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000890",
    "user": "CUST_0039",
    "amount": "\u20b9116.42",
    "amountNum": 116.42,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000891",
    "user": "CUST_0100",
    "amount": "\u20b9303.08",
    "amountNum": 303.08,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:23 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000892",
    "user": "CUST_0007",
    "amount": "\u20b946.60",
    "amountNum": 46.6,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000893",
    "user": "CUST_0071",
    "amount": "\u20b9417.74",
    "amountNum": 417.74,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000894",
    "user": "CUST_0019",
    "amount": "\u20b980.74",
    "amountNum": 80.74,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:57 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000895",
    "user": "CUST_0010",
    "amount": "\u20b9183.76",
    "amountNum": 183.76,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:23 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000896",
    "user": "CUST_0060",
    "amount": "\u20b934.33",
    "amountNum": 34.33,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:22 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000897",
    "user": "CUST_0078",
    "amount": "\u20b9373.75",
    "amountNum": 373.75,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:05 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000898",
    "user": "CUST_0070",
    "amount": "\u20b966.27",
    "amountNum": 66.27,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:43 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000899",
    "user": "CUST_0015",
    "amount": "\u20b9193.34",
    "amountNum": 193.34,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:23 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000900",
    "user": "CUST_0002",
    "amount": "\u20b9106.37",
    "amountNum": 106.37,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:45 AM",
    "riskScore": 13.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000901",
    "user": "CUST_0071",
    "amount": "\u20b9114.46",
    "amountNum": 114.46,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:17 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000902",
    "user": "CUST_0059",
    "amount": "\u20b9402.17",
    "amountNum": 402.17,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:40 AM",
    "riskScore": 14.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000903",
    "user": "CUST_0095",
    "amount": "\u20b9256.90",
    "amountNum": 256.9,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:47 AM",
    "riskScore": 14.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000904",
    "user": "CUST_0004",
    "amount": "\u20b9243.83",
    "amountNum": 243.83,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:53 AM",
    "riskScore": 13.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000905",
    "user": "CUST_0023",
    "amount": "\u20b9427.44",
    "amountNum": 427.44,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:05 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000906",
    "user": "CUST_0011",
    "amount": "\u20b980.40",
    "amountNum": 80.4,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:27 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000907",
    "user": "CUST_0066",
    "amount": "\u20b9118.40",
    "amountNum": 118.4,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:47 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000908",
    "user": "CUST_0069",
    "amount": "\u20b932.21",
    "amountNum": 32.21,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:09 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000909",
    "user": "CUST_0079",
    "amount": "\u20b979.74",
    "amountNum": 79.74,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:29 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000910",
    "user": "CUST_0068",
    "amount": "\u20b9361.40",
    "amountNum": 361.4,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:14 AM",
    "riskScore": 5.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000911",
    "user": "CUST_0080",
    "amount": "\u20b9390.63",
    "amountNum": 390.63,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:15 AM",
    "riskScore": 5.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000912",
    "user": "CUST_0040",
    "amount": "\u20b9719.59",
    "amountNum": 719.59,
    "location": "Mumbai",
    "device": "New Device",
    "time": "12:19 PM",
    "riskScore": 66.4,
    "riskLevel": "Medium",
    "status": "Approved",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000913",
    "user": "CUST_0007",
    "amount": "\u20b91,073.59",
    "amountNum": 1073.59,
    "location": "Mumbai",
    "device": "New Device",
    "time": "01:25 PM",
    "riskScore": 70.7,
    "riskLevel": "Medium",
    "status": "Approved",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000914",
    "user": "CUST_0035",
    "amount": "\u20b9301.20",
    "amountNum": 301.2,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000915",
    "user": "CUST_0010",
    "amount": "\u20b9100.96",
    "amountNum": 100.96,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000916",
    "user": "CUST_0058",
    "amount": "\u20b968.47",
    "amountNum": 68.47,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:06 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000917",
    "user": "CUST_0091",
    "amount": "\u20b9213.32",
    "amountNum": 213.32,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000918",
    "user": "CUST_0068",
    "amount": "\u20b9357.33",
    "amountNum": 357.33,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:02 PM",
    "riskScore": 5.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000919",
    "user": "CUST_0011",
    "amount": "\u20b9258.67",
    "amountNum": 258.67,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000920",
    "user": "CUST_0037",
    "amount": "\u20b9197.46",
    "amountNum": 197.46,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:34 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000921",
    "user": "CUST_0078",
    "amount": "\u20b9412.77",
    "amountNum": 412.77,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:59 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000922",
    "user": "CUST_0090",
    "amount": "\u20b9359.09",
    "amountNum": 359.09,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:39 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000923",
    "user": "CUST_0093",
    "amount": "\u20b9146.62",
    "amountNum": 146.62,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:09 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000924",
    "user": "CUST_0036",
    "amount": "\u20b9240.99",
    "amountNum": 240.99,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:18 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000925",
    "user": "CUST_0025",
    "amount": "\u20b9216.88",
    "amountNum": 216.88,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:28 AM",
    "riskScore": 12.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000926",
    "user": "CUST_0056",
    "amount": "\u20b9258.21",
    "amountNum": 258.21,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:05 AM",
    "riskScore": 14.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000927",
    "user": "CUST_0029",
    "amount": "\u20b926.91",
    "amountNum": 26.91,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:34 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000928",
    "user": "CUST_0089",
    "amount": "\u20b9194.19",
    "amountNum": 194.19,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:51 AM",
    "riskScore": 15.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000929",
    "user": "CUST_0060",
    "amount": "\u20b940.38",
    "amountNum": 40.38,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:21 AM",
    "riskScore": 12.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000930",
    "user": "CUST_0052",
    "amount": "\u20b9174.05",
    "amountNum": 174.05,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:46 AM",
    "riskScore": 13.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000931",
    "user": "CUST_0016",
    "amount": "\u20b9361.19",
    "amountNum": 361.19,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:22 AM",
    "riskScore": 13.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000932",
    "user": "CUST_0051",
    "amount": "\u20b9350.98",
    "amountNum": 350.98,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:12 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000933",
    "user": "CUST_0047",
    "amount": "\u20b9193.26",
    "amountNum": 193.26,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:20 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000934",
    "user": "CUST_0087",
    "amount": "\u20b9334.35",
    "amountNum": 334.35,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:18 AM",
    "riskScore": 5.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000935",
    "user": "CUST_0075",
    "amount": "\u20b9316.16",
    "amountNum": 316.16,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:38 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000936",
    "user": "CUST_0059",
    "amount": "\u20b9390.00",
    "amountNum": 390.0,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:56 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000937",
    "user": "CUST_0073",
    "amount": "\u20b9437.17",
    "amountNum": 437.17,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:34 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000938",
    "user": "CUST_0065",
    "amount": "\u20b9148.49",
    "amountNum": 148.49,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:13 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000939",
    "user": "CUST_0057",
    "amount": "\u20b9200.92",
    "amountNum": 200.92,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:42 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000940",
    "user": "CUST_0044",
    "amount": "\u20b94,228.00",
    "amountNum": 4228.0,
    "location": "Mumbai",
    "device": "New Device",
    "time": "02:13 PM",
    "riskScore": 89.1,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000941",
    "user": "CUST_0006",
    "amount": "\u20b9359.58",
    "amountNum": 359.58,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:32 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000942",
    "user": "CUST_0070",
    "amount": "\u20b953.22",
    "amountNum": 53.22,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:07 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000943",
    "user": "CUST_0063",
    "amount": "\u20b9178.39",
    "amountNum": 178.39,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:06 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000944",
    "user": "CUST_0025",
    "amount": "\u20b9126.25",
    "amountNum": 126.25,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:48 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000945",
    "user": "CUST_0055",
    "amount": "\u20b9204.32",
    "amountNum": 204.32,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:09 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000946",
    "user": "CUST_0046",
    "amount": "\u20b9189.67",
    "amountNum": 189.67,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:15 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000947",
    "user": "CUST_0084",
    "amount": "\u20b9278.15",
    "amountNum": 278.15,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:32 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000948",
    "user": "CUST_0056",
    "amount": "\u20b9101.81",
    "amountNum": 101.81,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000949",
    "user": "CUST_0094",
    "amount": "\u20b9279.31",
    "amountNum": 279.31,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000950",
    "user": "CUST_0076",
    "amount": "\u20b959.69",
    "amountNum": 59.69,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:20 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000951",
    "user": "CUST_0068",
    "amount": "\u20b9209.05",
    "amountNum": 209.05,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:36 AM",
    "riskScore": 14.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000952",
    "user": "CUST_0050",
    "amount": "\u20b957.89",
    "amountNum": 57.89,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:02 AM",
    "riskScore": 12.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000953",
    "user": "CUST_0013",
    "amount": "\u20b9365.58",
    "amountNum": 365.58,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:35 AM",
    "riskScore": 15.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000954",
    "user": "CUST_0098",
    "amount": "\u20b9352.85",
    "amountNum": 352.85,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:01 AM",
    "riskScore": 15.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000955",
    "user": "CUST_0041",
    "amount": "\u20b937.09",
    "amountNum": 37.09,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:25 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000956",
    "user": "CUST_0081",
    "amount": "\u20b9406.66",
    "amountNum": 406.66,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:41 AM",
    "riskScore": 15.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000957",
    "user": "CUST_0012",
    "amount": "\u20b9344.90",
    "amountNum": 344.9,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:04 AM",
    "riskScore": 15.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000958",
    "user": "CUST_0096",
    "amount": "\u20b9118.50",
    "amountNum": 118.5,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:15 AM",
    "riskScore": 12.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000959",
    "user": "CUST_0074",
    "amount": "\u20b9247.42",
    "amountNum": 247.42,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:03 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000960",
    "user": "CUST_0051",
    "amount": "\u20b9427.79",
    "amountNum": 427.79,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:34 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000961",
    "user": "CUST_0004",
    "amount": "\u20b9187.55",
    "amountNum": 187.55,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:28 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000962",
    "user": "CUST_0065",
    "amount": "\u20b9240.76",
    "amountNum": 240.76,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:54 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000963",
    "user": "CUST_0085",
    "amount": "\u20b9205.53",
    "amountNum": 205.53,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:51 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000964",
    "user": "CUST_0033",
    "amount": "\u20b9376.23",
    "amountNum": 376.23,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:24 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000965",
    "user": "CUST_0004",
    "amount": "\u20b976.18",
    "amountNum": 76.18,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:40 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000966",
    "user": "CUST_0058",
    "amount": "\u20b9214.06",
    "amountNum": 214.06,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:51 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000967",
    "user": "CUST_0010",
    "amount": "\u20b9311.65",
    "amountNum": 311.65,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:53 PM",
    "riskScore": 5.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000968",
    "user": "CUST_0080",
    "amount": "\u20b9430.18",
    "amountNum": 430.18,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:12 PM",
    "riskScore": 5.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000969",
    "user": "CUST_0079",
    "amount": "\u20b9166.47",
    "amountNum": 166.47,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000970",
    "user": "CUST_0084",
    "amount": "\u20b9185.64",
    "amountNum": 185.64,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:19 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000971",
    "user": "CUST_0087",
    "amount": "\u20b9169.12",
    "amountNum": 169.12,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000972",
    "user": "CUST_0090",
    "amount": "\u20b9191.37",
    "amountNum": 191.37,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:27 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000973",
    "user": "CUST_0004",
    "amount": "\u20b978.86",
    "amountNum": 78.86,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:46 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000974",
    "user": "CUST_0083",
    "amount": "\u20b9288.92",
    "amountNum": 288.92,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000975",
    "user": "CUST_0017",
    "amount": "\u20b9184.70",
    "amountNum": 184.7,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:13 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000976",
    "user": "CUST_0064",
    "amount": "\u20b9262.03",
    "amountNum": 262.03,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000977",
    "user": "CUST_0007",
    "amount": "\u20b9438.81",
    "amountNum": 438.81,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000978",
    "user": "CUST_0023",
    "amount": "\u20b9299.75",
    "amountNum": 299.75,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:25 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000979",
    "user": "CUST_0040",
    "amount": "\u20b9378.92",
    "amountNum": 378.92,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000980",
    "user": "CUST_0060",
    "amount": "\u20b9419.78",
    "amountNum": 419.78,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:43 PM",
    "riskScore": 6.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000981",
    "user": "CUST_0069",
    "amount": "\u20b93,408.29",
    "amountNum": 3408.29,
    "location": "Mumbai",
    "device": "New Device",
    "time": "12:20 AM",
    "riskScore": 93.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000982",
    "user": "CUST_0056",
    "amount": "\u20b9378.74",
    "amountNum": 378.74,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:31 AM",
    "riskScore": 15.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000983",
    "user": "CUST_0054",
    "amount": "\u20b9395.97",
    "amountNum": 395.97,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:56 AM",
    "riskScore": 13.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000984",
    "user": "CUST_0058",
    "amount": "\u20b9430.50",
    "amountNum": 430.5,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:04 AM",
    "riskScore": 16.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000985",
    "user": "CUST_0082",
    "amount": "\u20b9334.00",
    "amountNum": 334.0,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:29 AM",
    "riskScore": 16.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000986",
    "user": "CUST_0092",
    "amount": "\u20b917.42",
    "amountNum": 17.42,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:57 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000987",
    "user": "CUST_0013",
    "amount": "\u20b9128.70",
    "amountNum": 128.7,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:39 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000988",
    "user": "CUST_0022",
    "amount": "\u20b9258.09",
    "amountNum": 258.09,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:45 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000989",
    "user": "CUST_0063",
    "amount": "\u20b996.56",
    "amountNum": 96.56,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:22 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000990",
    "user": "CUST_0006",
    "amount": "\u20b9437.41",
    "amountNum": 437.41,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:22 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000991",
    "user": "CUST_0086",
    "amount": "\u20b9174.77",
    "amountNum": 174.77,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:35 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000992",
    "user": "CUST_0058",
    "amount": "\u20b9346.26",
    "amountNum": 346.26,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:34 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000993",
    "user": "CUST_0057",
    "amount": "\u20b9251.06",
    "amountNum": 251.06,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:49 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000994",
    "user": "CUST_0037",
    "amount": "\u20b9328.36",
    "amountNum": 328.36,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:10 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000995",
    "user": "CUST_0035",
    "amount": "\u20b9400.06",
    "amountNum": 400.06,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:33 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000996",
    "user": "CUST_0009",
    "amount": "\u20b91,397.69",
    "amountNum": 1397.69,
    "location": "Mumbai",
    "device": "New Device",
    "time": "02:49 PM",
    "riskScore": 77.1,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_000997",
    "user": "CUST_0018",
    "amount": "\u20b9306.86",
    "amountNum": 306.86,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:23 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000998",
    "user": "CUST_0039",
    "amount": "\u20b9408.67",
    "amountNum": 408.67,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:07 PM",
    "riskScore": 5.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_000999",
    "user": "CUST_0025",
    "amount": "\u20b9315.78",
    "amountNum": 315.78,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001000",
    "user": "CUST_0027",
    "amount": "\u20b9158.72",
    "amountNum": 158.72,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001001",
    "user": "CUST_0066",
    "amount": "\u20b975.93",
    "amountNum": 75.93,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:53 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001002",
    "user": "CUST_0014",
    "amount": "\u20b963.65",
    "amountNum": 63.65,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:27 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001003",
    "user": "CUST_0014",
    "amount": "\u20b937.00",
    "amountNum": 37.0,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:49 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001004",
    "user": "CUST_0032",
    "amount": "\u20b9185.09",
    "amountNum": 185.09,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:27 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001005",
    "user": "CUST_0061",
    "amount": "\u20b9245.44",
    "amountNum": 245.44,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:32 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001006",
    "user": "CUST_0020",
    "amount": "\u20b9409.19",
    "amountNum": 409.19,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001007",
    "user": "CUST_0086",
    "amount": "\u20b9322.35",
    "amountNum": 322.35,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001008",
    "user": "CUST_0093",
    "amount": "\u20b9437.36",
    "amountNum": 437.36,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:26 AM",
    "riskScore": 16.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001009",
    "user": "CUST_0069",
    "amount": "\u20b9176.07",
    "amountNum": 176.07,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:11 AM",
    "riskScore": 12.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001010",
    "user": "CUST_0050",
    "amount": "\u20b9277.42",
    "amountNum": 277.42,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:21 AM",
    "riskScore": 14.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001011",
    "user": "CUST_0098",
    "amount": "\u20b9270.70",
    "amountNum": 270.7,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:53 AM",
    "riskScore": 14.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001012",
    "user": "CUST_0082",
    "amount": "\u20b9320.07",
    "amountNum": 320.07,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:14 AM",
    "riskScore": 16.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001013",
    "user": "CUST_0007",
    "amount": "\u20b9362.84",
    "amountNum": 362.84,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:49 AM",
    "riskScore": 14.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001014",
    "user": "CUST_0005",
    "amount": "\u20b9219.85",
    "amountNum": 219.85,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:05 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001015",
    "user": "CUST_0041",
    "amount": "\u20b933.21",
    "amountNum": 33.21,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:52 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001016",
    "user": "CUST_0020",
    "amount": "\u20b9328.63",
    "amountNum": 328.63,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:08 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001017",
    "user": "CUST_0078",
    "amount": "\u20b9360.31",
    "amountNum": 360.31,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:37 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001018",
    "user": "CUST_0042",
    "amount": "\u20b9255.58",
    "amountNum": 255.58,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:40 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001019",
    "user": "CUST_0094",
    "amount": "\u20b971.00",
    "amountNum": 71.0,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:17 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001020",
    "user": "CUST_0086",
    "amount": "\u20b9298.64",
    "amountNum": 298.64,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:00 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001021",
    "user": "CUST_0085",
    "amount": "\u20b9385.41",
    "amountNum": 385.41,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:47 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001022",
    "user": "CUST_0096",
    "amount": "\u20b9146.20",
    "amountNum": 146.2,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:06 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001023",
    "user": "CUST_0066",
    "amount": "\u20b9223.80",
    "amountNum": 223.8,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001024",
    "user": "CUST_0077",
    "amount": "\u20b9133.17",
    "amountNum": 133.17,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001025",
    "user": "CUST_0070",
    "amount": "\u20b9352.75",
    "amountNum": 352.75,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:35 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001026",
    "user": "CUST_0030",
    "amount": "\u20b942.19",
    "amountNum": 42.19,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:28 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001027",
    "user": "CUST_0057",
    "amount": "\u20b9330.21",
    "amountNum": 330.21,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:51 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001028",
    "user": "CUST_0019",
    "amount": "\u20b9429.16",
    "amountNum": 429.16,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:18 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001029",
    "user": "CUST_0063",
    "amount": "\u20b9269.09",
    "amountNum": 269.09,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001030",
    "user": "CUST_0014",
    "amount": "\u20b9404.75",
    "amountNum": 404.75,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:04 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001031",
    "user": "CUST_0001",
    "amount": "\u20b9320.97",
    "amountNum": 320.97,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:27 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001032",
    "user": "CUST_0032",
    "amount": "\u20b9327.95",
    "amountNum": 327.95,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:23 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001033",
    "user": "CUST_0068",
    "amount": "\u20b9354.37",
    "amountNum": 354.37,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:32 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001034",
    "user": "CUST_0030",
    "amount": "\u20b985.63",
    "amountNum": 85.63,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:49 AM",
    "riskScore": 12.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001035",
    "user": "CUST_0077",
    "amount": "\u20b9704.34",
    "amountNum": 704.34,
    "location": "Mumbai",
    "device": "New Device",
    "time": "02:16 AM",
    "riskScore": 81.8,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001036",
    "user": "CUST_0089",
    "amount": "\u20b9313.83",
    "amountNum": 313.83,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:14 AM",
    "riskScore": 17.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001037",
    "user": "CUST_0059",
    "amount": "\u20b9298.90",
    "amountNum": 298.9,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:36 AM",
    "riskScore": 13.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001038",
    "user": "CUST_0070",
    "amount": "\u20b9358.46",
    "amountNum": 358.46,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:03 AM",
    "riskScore": 15.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001039",
    "user": "CUST_0070",
    "amount": "\u20b9229.90",
    "amountNum": 229.9,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:13 AM",
    "riskScore": 14.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001040",
    "user": "CUST_0018",
    "amount": "\u20b9326.03",
    "amountNum": 326.03,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:37 AM",
    "riskScore": 16.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001041",
    "user": "CUST_0032",
    "amount": "\u20b954.11",
    "amountNum": 54.11,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:59 AM",
    "riskScore": 12.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001042",
    "user": "CUST_0044",
    "amount": "\u20b9316.26",
    "amountNum": 316.26,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:08 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001043",
    "user": "CUST_0074",
    "amount": "\u20b9425.44",
    "amountNum": 425.44,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:34 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001044",
    "user": "CUST_0012",
    "amount": "\u20b9362.32",
    "amountNum": 362.32,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:01 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001045",
    "user": "CUST_0072",
    "amount": "\u20b9300.14",
    "amountNum": 300.14,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:28 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001046",
    "user": "CUST_0090",
    "amount": "\u20b9120.52",
    "amountNum": 120.52,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:01 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001047",
    "user": "CUST_0067",
    "amount": "\u20b9400.16",
    "amountNum": 400.16,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:50 AM",
    "riskScore": 5.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001048",
    "user": "CUST_0034",
    "amount": "\u20b9392.55",
    "amountNum": 392.55,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:13 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001049",
    "user": "CUST_0031",
    "amount": "\u20b9396.03",
    "amountNum": 396.03,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:47 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001050",
    "user": "CUST_0034",
    "amount": "\u20b927.01",
    "amountNum": 27.01,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001051",
    "user": "CUST_0049",
    "amount": "\u20b934.53",
    "amountNum": 34.53,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:52 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001052",
    "user": "CUST_0054",
    "amount": "\u20b995.86",
    "amountNum": 95.86,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001053",
    "user": "CUST_0040",
    "amount": "\u20b9254.06",
    "amountNum": 254.06,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:09 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001054",
    "user": "CUST_0082",
    "amount": "\u20b9297.43",
    "amountNum": 297.43,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:46 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001055",
    "user": "CUST_0071",
    "amount": "\u20b9386.02",
    "amountNum": 386.02,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001056",
    "user": "CUST_0086",
    "amount": "\u20b9283.08",
    "amountNum": 283.08,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:02 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001057",
    "user": "CUST_0062",
    "amount": "\u20b9363.12",
    "amountNum": 363.12,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:04 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001058",
    "user": "CUST_0066",
    "amount": "\u20b9326.66",
    "amountNum": 326.66,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:56 PM",
    "riskScore": 5.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001059",
    "user": "CUST_0066",
    "amount": "\u20b959.10",
    "amountNum": 59.1,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:19 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001060",
    "user": "CUST_0100",
    "amount": "\u20b9215.89",
    "amountNum": 215.89,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:45 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001061",
    "user": "CUST_0066",
    "amount": "\u20b9366.08",
    "amountNum": 366.08,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:21 PM",
    "riskScore": 6.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001062",
    "user": "CUST_0063",
    "amount": "\u20b9121.94",
    "amountNum": 121.94,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:48 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001063",
    "user": "CUST_0005",
    "amount": "\u20b9352.50",
    "amountNum": 352.5,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:03 AM",
    "riskScore": 17.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001064",
    "user": "CUST_0068",
    "amount": "\u20b9386.29",
    "amountNum": 386.29,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:09 AM",
    "riskScore": 16.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001065",
    "user": "CUST_0035",
    "amount": "\u20b964.72",
    "amountNum": 64.72,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:34 AM",
    "riskScore": 12.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001066",
    "user": "CUST_0047",
    "amount": "\u20b9311.43",
    "amountNum": 311.43,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:33 AM",
    "riskScore": 14.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001067",
    "user": "CUST_0062",
    "amount": "\u20b9399.20",
    "amountNum": 399.2,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:31 AM",
    "riskScore": 15.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001068",
    "user": "CUST_0099",
    "amount": "\u20b9249.50",
    "amountNum": 249.5,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:11 AM",
    "riskScore": 14.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001069",
    "user": "CUST_0047",
    "amount": "\u20b929.11",
    "amountNum": 29.11,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:32 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001070",
    "user": "CUST_0026",
    "amount": "\u20b9411.14",
    "amountNum": 411.14,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:33 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001071",
    "user": "CUST_0090",
    "amount": "\u20b9221.11",
    "amountNum": 221.11,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:05 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001072",
    "user": "CUST_0039",
    "amount": "\u20b9375.68",
    "amountNum": 375.68,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:07 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001073",
    "user": "CUST_0006",
    "amount": "\u20b9432.18",
    "amountNum": 432.18,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:11 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001074",
    "user": "CUST_0066",
    "amount": "\u20b942.59",
    "amountNum": 42.59,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:30 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001075",
    "user": "CUST_0050",
    "amount": "\u20b9278.01",
    "amountNum": 278.01,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:20 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001076",
    "user": "CUST_0012",
    "amount": "\u20b9371.87",
    "amountNum": 371.87,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:27 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001077",
    "user": "CUST_0072",
    "amount": "\u20b958.41",
    "amountNum": 58.41,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:14 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001078",
    "user": "CUST_0035",
    "amount": "\u20b9441.65",
    "amountNum": 441.65,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:03 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001079",
    "user": "CUST_0005",
    "amount": "\u20b9143.28",
    "amountNum": 143.28,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:44 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001080",
    "user": "CUST_0081",
    "amount": "\u20b9268.00",
    "amountNum": 268.0,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:05 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001081",
    "user": "CUST_0080",
    "amount": "\u20b9158.44",
    "amountNum": 158.44,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001082",
    "user": "CUST_0039",
    "amount": "\u20b9315.95",
    "amountNum": 315.95,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:01 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001083",
    "user": "CUST_0100",
    "amount": "\u20b9236.02",
    "amountNum": 236.02,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:20 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001084",
    "user": "CUST_0017",
    "amount": "\u20b926.23",
    "amountNum": 26.23,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:02 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001085",
    "user": "CUST_0058",
    "amount": "\u20b9161.38",
    "amountNum": 161.38,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:40 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001086",
    "user": "CUST_0064",
    "amount": "\u20b9234.37",
    "amountNum": 234.37,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:19 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001087",
    "user": "CUST_0064",
    "amount": "\u20b9408.25",
    "amountNum": 408.25,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001088",
    "user": "CUST_0059",
    "amount": "\u20b9123.41",
    "amountNum": 123.41,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001089",
    "user": "CUST_0054",
    "amount": "\u20b989.77",
    "amountNum": 89.77,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:46 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001090",
    "user": "CUST_0022",
    "amount": "\u20b9399.05",
    "amountNum": 399.05,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001091",
    "user": "CUST_0038",
    "amount": "\u20b9105.54",
    "amountNum": 105.54,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:44 AM",
    "riskScore": 13.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001092",
    "user": "CUST_0012",
    "amount": "\u20b9449.18",
    "amountNum": 449.18,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:04 AM",
    "riskScore": 15.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001093",
    "user": "CUST_0074",
    "amount": "\u20b9210.99",
    "amountNum": 210.99,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:43 AM",
    "riskScore": 13.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001094",
    "user": "CUST_0052",
    "amount": "\u20b940.82",
    "amountNum": 40.82,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:40 AM",
    "riskScore": 12.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001095",
    "user": "CUST_0049",
    "amount": "\u20b9103.25",
    "amountNum": 103.25,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:53 AM",
    "riskScore": 13.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001096",
    "user": "CUST_0038",
    "amount": "\u20b9270.34",
    "amountNum": 270.34,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:24 AM",
    "riskScore": 14.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001097",
    "user": "CUST_0021",
    "amount": "\u20b9158.44",
    "amountNum": 158.44,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:46 AM",
    "riskScore": 12.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001098",
    "user": "CUST_0018",
    "amount": "\u20b9208.61",
    "amountNum": 208.61,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:24 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001099",
    "user": "CUST_0091",
    "amount": "\u20b957.07",
    "amountNum": 57.07,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:35 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001100",
    "user": "CUST_0008",
    "amount": "\u20b9347.22",
    "amountNum": 347.22,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:50 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001101",
    "user": "CUST_0022",
    "amount": "\u20b9175.31",
    "amountNum": 175.31,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:50 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001102",
    "user": "CUST_0055",
    "amount": "\u20b9153.32",
    "amountNum": 153.32,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:08 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001103",
    "user": "CUST_0016",
    "amount": "\u20b9197.60",
    "amountNum": 197.6,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:03 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001104",
    "user": "CUST_0012",
    "amount": "\u20b9347.23",
    "amountNum": 347.23,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001105",
    "user": "CUST_0077",
    "amount": "\u20b9250.77",
    "amountNum": 250.77,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:46 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001106",
    "user": "CUST_0011",
    "amount": "\u20b9147.49",
    "amountNum": 147.49,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:07 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001107",
    "user": "CUST_0033",
    "amount": "\u20b9199.01",
    "amountNum": 199.01,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001108",
    "user": "CUST_0093",
    "amount": "\u20b9343.06",
    "amountNum": 343.06,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:48 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001109",
    "user": "CUST_0033",
    "amount": "\u20b967.32",
    "amountNum": 67.32,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:09 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001110",
    "user": "CUST_0069",
    "amount": "\u20b9338.50",
    "amountNum": 338.5,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001111",
    "user": "CUST_0096",
    "amount": "\u20b9165.40",
    "amountNum": 165.4,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:49 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001112",
    "user": "CUST_0002",
    "amount": "\u20b9211.43",
    "amountNum": 211.43,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:44 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001113",
    "user": "CUST_0062",
    "amount": "\u20b9444.23",
    "amountNum": 444.23,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:30 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001114",
    "user": "CUST_0076",
    "amount": "\u20b9185.82",
    "amountNum": 185.82,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001115",
    "user": "CUST_0043",
    "amount": "\u20b926.26",
    "amountNum": 26.26,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001116",
    "user": "CUST_0006",
    "amount": "\u20b941.48",
    "amountNum": 41.48,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:18 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001117",
    "user": "CUST_0078",
    "amount": "\u20b9333.94",
    "amountNum": 333.94,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:32 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001118",
    "user": "CUST_0063",
    "amount": "\u20b948.81",
    "amountNum": 48.81,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:52 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001119",
    "user": "CUST_0054",
    "amount": "\u20b9227.52",
    "amountNum": 227.52,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:41 AM",
    "riskScore": 13.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001120",
    "user": "CUST_0043",
    "amount": "\u20b9248.54",
    "amountNum": 248.54,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:43 AM",
    "riskScore": 14.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001121",
    "user": "CUST_0042",
    "amount": "\u20b9306.08",
    "amountNum": 306.08,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:26 AM",
    "riskScore": 15.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001122",
    "user": "CUST_0071",
    "amount": "\u20b9404.07",
    "amountNum": 404.07,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:03 AM",
    "riskScore": 13.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001123",
    "user": "CUST_0059",
    "amount": "\u20b9369.08",
    "amountNum": 369.08,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:00 AM",
    "riskScore": 14.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001124",
    "user": "CUST_0032",
    "amount": "\u20b9200.46",
    "amountNum": 200.46,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:21 AM",
    "riskScore": 14.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001125",
    "user": "CUST_0032",
    "amount": "\u20b923.66",
    "amountNum": 23.66,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:37 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001126",
    "user": "CUST_0077",
    "amount": "\u20b9201.92",
    "amountNum": 201.92,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:27 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001127",
    "user": "CUST_0040",
    "amount": "\u20b9439.92",
    "amountNum": 439.92,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:44 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001128",
    "user": "CUST_0084",
    "amount": "\u20b9404.29",
    "amountNum": 404.29,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:21 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001129",
    "user": "CUST_0029",
    "amount": "\u20b9101.81",
    "amountNum": 101.81,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:48 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001130",
    "user": "CUST_0023",
    "amount": "\u20b949.84",
    "amountNum": 49.84,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:10 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001131",
    "user": "CUST_0032",
    "amount": "\u20b9439.40",
    "amountNum": 439.4,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:13 AM",
    "riskScore": 6.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001132",
    "user": "CUST_0065",
    "amount": "\u20b9366.30",
    "amountNum": 366.3,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:21 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001133",
    "user": "CUST_0076",
    "amount": "\u20b967.63",
    "amountNum": 67.63,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:33 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001134",
    "user": "CUST_0079",
    "amount": "\u20b9125.98",
    "amountNum": 125.98,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:49 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001135",
    "user": "CUST_0028",
    "amount": "\u20b9170.71",
    "amountNum": 170.71,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001136",
    "user": "CUST_0041",
    "amount": "\u20b9315.12",
    "amountNum": 315.12,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:42 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001137",
    "user": "CUST_0063",
    "amount": "\u20b9424.77",
    "amountNum": 424.77,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:14 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001138",
    "user": "CUST_0055",
    "amount": "\u20b9435.21",
    "amountNum": 435.21,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:44 PM",
    "riskScore": 7.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001139",
    "user": "CUST_0072",
    "amount": "\u20b997.83",
    "amountNum": 97.83,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:22 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001140",
    "user": "CUST_0005",
    "amount": "\u20b991.13",
    "amountNum": 91.13,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:35 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001141",
    "user": "CUST_0089",
    "amount": "\u20b9270.41",
    "amountNum": 270.41,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:18 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001142",
    "user": "CUST_0014",
    "amount": "\u20b9439.04",
    "amountNum": 439.04,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:03 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001143",
    "user": "CUST_0048",
    "amount": "\u20b995.71",
    "amountNum": 95.71,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001144",
    "user": "CUST_0089",
    "amount": "\u20b9110.55",
    "amountNum": 110.55,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001145",
    "user": "CUST_0081",
    "amount": "\u20b9124.47",
    "amountNum": 124.47,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001146",
    "user": "CUST_0063",
    "amount": "\u20b9364.08",
    "amountNum": 364.08,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:06 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001147",
    "user": "CUST_0018",
    "amount": "\u20b9127.77",
    "amountNum": 127.77,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:22 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001148",
    "user": "CUST_0073",
    "amount": "\u20b991.79",
    "amountNum": 91.79,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:40 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001149",
    "user": "CUST_0062",
    "amount": "\u20b9135.11",
    "amountNum": 135.11,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:47 AM",
    "riskScore": 13.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001150",
    "user": "CUST_0061",
    "amount": "\u20b934.99",
    "amountNum": 34.99,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:01 AM",
    "riskScore": 12.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001151",
    "user": "CUST_0008",
    "amount": "\u20b9147.68",
    "amountNum": 147.68,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:18 AM",
    "riskScore": 12.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001152",
    "user": "CUST_0077",
    "amount": "\u20b9166.13",
    "amountNum": 166.13,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:55 AM",
    "riskScore": 13.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001153",
    "user": "CUST_0096",
    "amount": "\u20b9154.78",
    "amountNum": 154.78,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:16 AM",
    "riskScore": 12.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001154",
    "user": "CUST_0028",
    "amount": "\u20b996.53",
    "amountNum": 96.53,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:53 AM",
    "riskScore": 13.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001155",
    "user": "CUST_0031",
    "amount": "\u20b9130.65",
    "amountNum": 130.65,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:18 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001156",
    "user": "CUST_0062",
    "amount": "\u20b932.29",
    "amountNum": 32.29,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:35 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001157",
    "user": "CUST_0096",
    "amount": "\u20b9416.77",
    "amountNum": 416.77,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:39 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001158",
    "user": "CUST_0003",
    "amount": "\u20b9365.66",
    "amountNum": 365.66,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:28 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001159",
    "user": "CUST_0013",
    "amount": "\u20b936.89",
    "amountNum": 36.89,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:31 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001160",
    "user": "CUST_0021",
    "amount": "\u20b9136.28",
    "amountNum": 136.28,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:01 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001161",
    "user": "CUST_0023",
    "amount": "\u20b9300.61",
    "amountNum": 300.61,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:29 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001162",
    "user": "CUST_0034",
    "amount": "\u20b94,034.06",
    "amountNum": 4034.06,
    "location": "Mumbai",
    "device": "New Device",
    "time": "01:45 PM",
    "riskScore": 86.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001163",
    "user": "CUST_0065",
    "amount": "\u20b9362.77",
    "amountNum": 362.77,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:02 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001164",
    "user": "CUST_0050",
    "amount": "\u20b9188.81",
    "amountNum": 188.81,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:39 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001165",
    "user": "CUST_0059",
    "amount": "\u20b9383.32",
    "amountNum": 383.32,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:25 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001166",
    "user": "CUST_0082",
    "amount": "\u20b9193.24",
    "amountNum": 193.24,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:37 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001167",
    "user": "CUST_0004",
    "amount": "\u20b9188.46",
    "amountNum": 188.46,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:37 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001168",
    "user": "CUST_0096",
    "amount": "\u20b9326.09",
    "amountNum": 326.09,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001169",
    "user": "CUST_0041",
    "amount": "\u20b9273.04",
    "amountNum": 273.04,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:42 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001170",
    "user": "CUST_0039",
    "amount": "\u20b975.59",
    "amountNum": 75.59,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:08 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001171",
    "user": "CUST_0001",
    "amount": "\u20b9413.01",
    "amountNum": 413.01,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:03 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001172",
    "user": "CUST_0077",
    "amount": "\u20b91,541.45",
    "amountNum": 1541.45,
    "location": "Mumbai",
    "device": "New Device",
    "time": "10:17 PM",
    "riskScore": 78.9,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001173",
    "user": "CUST_0097",
    "amount": "\u20b9187.01",
    "amountNum": 187.01,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001174",
    "user": "CUST_0051",
    "amount": "\u20b922.73",
    "amountNum": 22.73,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:52 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001175",
    "user": "CUST_0055",
    "amount": "\u20b9399.14",
    "amountNum": 399.14,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:03 AM",
    "riskScore": 17.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001176",
    "user": "CUST_0059",
    "amount": "\u20b951.53",
    "amountNum": 51.53,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:01 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001177",
    "user": "CUST_0037",
    "amount": "\u20b915.24",
    "amountNum": 15.24,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:25 AM",
    "riskScore": 12.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001178",
    "user": "CUST_0033",
    "amount": "\u20b9412.82",
    "amountNum": 412.82,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:25 AM",
    "riskScore": 15.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001179",
    "user": "CUST_0098",
    "amount": "\u20b9442.62",
    "amountNum": 442.62,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:00 AM",
    "riskScore": 16.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001180",
    "user": "CUST_0023",
    "amount": "\u20b9342.16",
    "amountNum": 342.16,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:14 AM",
    "riskScore": 13.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001181",
    "user": "CUST_0055",
    "amount": "\u20b9376.94",
    "amountNum": 376.94,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:13 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001182",
    "user": "CUST_0081",
    "amount": "\u20b9287.72",
    "amountNum": 287.72,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:37 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001183",
    "user": "CUST_0052",
    "amount": "\u20b9270.68",
    "amountNum": 270.68,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:40 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001184",
    "user": "CUST_0067",
    "amount": "\u20b9332.86",
    "amountNum": 332.86,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:59 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001185",
    "user": "CUST_0058",
    "amount": "\u20b9155.32",
    "amountNum": 155.32,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:15 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001186",
    "user": "CUST_0048",
    "amount": "\u20b9389.40",
    "amountNum": 389.4,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:11 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001187",
    "user": "CUST_0032",
    "amount": "\u20b9120.49",
    "amountNum": 120.49,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:23 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001188",
    "user": "CUST_0028",
    "amount": "\u20b9117.22",
    "amountNum": 117.22,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:07 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001189",
    "user": "CUST_0044",
    "amount": "\u20b979.55",
    "amountNum": 79.55,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:32 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001190",
    "user": "CUST_0004",
    "amount": "\u20b9371.61",
    "amountNum": 371.61,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001191",
    "user": "CUST_0068",
    "amount": "\u20b9400.58",
    "amountNum": 400.58,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001192",
    "user": "CUST_0064",
    "amount": "\u20b9180.72",
    "amountNum": 180.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001193",
    "user": "CUST_0036",
    "amount": "\u20b9352.09",
    "amountNum": 352.09,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:30 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001194",
    "user": "CUST_0058",
    "amount": "\u20b9386.49",
    "amountNum": 386.49,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001195",
    "user": "CUST_0057",
    "amount": "\u20b983.49",
    "amountNum": 83.49,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001196",
    "user": "CUST_0024",
    "amount": "\u20b9135.44",
    "amountNum": 135.44,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:42 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001197",
    "user": "CUST_0069",
    "amount": "\u20b9212.70",
    "amountNum": 212.7,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:03 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001198",
    "user": "CUST_0026",
    "amount": "\u20b9237.48",
    "amountNum": 237.48,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:43 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001199",
    "user": "CUST_0082",
    "amount": "\u20b9123.92",
    "amountNum": 123.92,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:13 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001200",
    "user": "CUST_0045",
    "amount": "\u20b9351.47",
    "amountNum": 351.47,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001201",
    "user": "CUST_0042",
    "amount": "\u20b9323.21",
    "amountNum": 323.21,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:15 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001202",
    "user": "CUST_0046",
    "amount": "\u20b9335.82",
    "amountNum": 335.82,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:10 AM",
    "riskScore": 14.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001203",
    "user": "CUST_0007",
    "amount": "\u20b9193.24",
    "amountNum": 193.24,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:31 AM",
    "riskScore": 13.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001204",
    "user": "CUST_0018",
    "amount": "\u20b9138.01",
    "amountNum": 138.01,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:48 AM",
    "riskScore": 13.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001205",
    "user": "CUST_0082",
    "amount": "\u20b9117.80",
    "amountNum": 117.8,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:05 AM",
    "riskScore": 13.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001206",
    "user": "CUST_0075",
    "amount": "\u20b9182.58",
    "amountNum": 182.58,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:34 AM",
    "riskScore": 14.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001207",
    "user": "CUST_0067",
    "amount": "\u20b9403.91",
    "amountNum": 403.91,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:10 AM",
    "riskScore": 16.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001208",
    "user": "CUST_0051",
    "amount": "\u20b9104.90",
    "amountNum": 104.9,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:22 AM",
    "riskScore": 13.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001209",
    "user": "CUST_0054",
    "amount": "\u20b9197.26",
    "amountNum": 197.26,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:47 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001210",
    "user": "CUST_0046",
    "amount": "\u20b949.13",
    "amountNum": 49.13,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:13 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001211",
    "user": "CUST_0077",
    "amount": "\u20b9145.08",
    "amountNum": 145.08,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:57 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001212",
    "user": "CUST_0033",
    "amount": "\u20b9257.22",
    "amountNum": 257.22,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:58 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001213",
    "user": "CUST_0080",
    "amount": "\u20b9134.75",
    "amountNum": 134.75,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:56 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001214",
    "user": "CUST_0045",
    "amount": "\u20b9368.05",
    "amountNum": 368.05,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:02 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001215",
    "user": "CUST_0072",
    "amount": "\u20b994.35",
    "amountNum": 94.35,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:19 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001216",
    "user": "CUST_0079",
    "amount": "\u20b9411.13",
    "amountNum": 411.13,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:01 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001217",
    "user": "CUST_0098",
    "amount": "\u20b9294.22",
    "amountNum": 294.22,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:46 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001218",
    "user": "CUST_0059",
    "amount": "\u20b9256.74",
    "amountNum": 256.74,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001219",
    "user": "CUST_0068",
    "amount": "\u20b974.59",
    "amountNum": 74.59,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:20 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001220",
    "user": "CUST_0011",
    "amount": "\u20b9278.00",
    "amountNum": 278.0,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:13 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001221",
    "user": "CUST_0075",
    "amount": "\u20b9291.20",
    "amountNum": 291.2,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001222",
    "user": "CUST_0078",
    "amount": "\u20b996.01",
    "amountNum": 96.01,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:49 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001223",
    "user": "CUST_0031",
    "amount": "\u20b9430.69",
    "amountNum": 430.69,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:03 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001224",
    "user": "CUST_0085",
    "amount": "\u20b9446.98",
    "amountNum": 446.98,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:30 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001225",
    "user": "CUST_0075",
    "amount": "\u20b9357.93",
    "amountNum": 357.93,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001226",
    "user": "CUST_0084",
    "amount": "\u20b9447.97",
    "amountNum": 447.97,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:33 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001227",
    "user": "CUST_0006",
    "amount": "\u20b9310.77",
    "amountNum": 310.77,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:05 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001228",
    "user": "CUST_0011",
    "amount": "\u20b9115.47",
    "amountNum": 115.47,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001229",
    "user": "CUST_0088",
    "amount": "\u20b9183.64",
    "amountNum": 183.64,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:25 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001230",
    "user": "CUST_0050",
    "amount": "\u20b917.51",
    "amountNum": 17.51,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001231",
    "user": "CUST_0088",
    "amount": "\u20b9217.54",
    "amountNum": 217.54,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:38 AM",
    "riskScore": 13.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001232",
    "user": "CUST_0079",
    "amount": "\u20b9232.80",
    "amountNum": 232.8,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:57 AM",
    "riskScore": 14.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001233",
    "user": "CUST_0082",
    "amount": "\u20b9402.59",
    "amountNum": 402.59,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:54 AM",
    "riskScore": 17.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001234",
    "user": "CUST_0046",
    "amount": "\u20b960.01",
    "amountNum": 60.01,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:43 AM",
    "riskScore": 12.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001235",
    "user": "CUST_0100",
    "amount": "\u20b9166.16",
    "amountNum": 166.16,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:17 AM",
    "riskScore": 13.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001236",
    "user": "CUST_0009",
    "amount": "\u20b9176.46",
    "amountNum": 176.46,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:00 AM",
    "riskScore": 13.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001237",
    "user": "CUST_0087",
    "amount": "\u20b9405.80",
    "amountNum": 405.8,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:10 AM",
    "riskScore": 17.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001238",
    "user": "CUST_0003",
    "amount": "\u20b9309.83",
    "amountNum": 309.83,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:09 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001239",
    "user": "CUST_0003",
    "amount": "\u20b9433.73",
    "amountNum": 433.73,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:36 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001240",
    "user": "CUST_0073",
    "amount": "\u20b9245.76",
    "amountNum": 245.76,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:04 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001241",
    "user": "CUST_0078",
    "amount": "\u20b9227.87",
    "amountNum": 227.87,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:14 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001242",
    "user": "CUST_0003",
    "amount": "\u20b9351.65",
    "amountNum": 351.65,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:44 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001243",
    "user": "CUST_0008",
    "amount": "\u20b9297.53",
    "amountNum": 297.53,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:06 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001244",
    "user": "CUST_0015",
    "amount": "\u20b964.64",
    "amountNum": 64.64,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:34 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001245",
    "user": "CUST_0080",
    "amount": "\u20b9331.51",
    "amountNum": 331.51,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001246",
    "user": "CUST_0041",
    "amount": "\u20b9240.00",
    "amountNum": 240.0,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001247",
    "user": "CUST_0073",
    "amount": "\u20b982.07",
    "amountNum": 82.07,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:08 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001248",
    "user": "CUST_0099",
    "amount": "\u20b982.63",
    "amountNum": 82.63,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:02 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001249",
    "user": "CUST_0049",
    "amount": "\u20b9225.14",
    "amountNum": 225.14,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:15 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001250",
    "user": "CUST_0048",
    "amount": "\u20b9417.23",
    "amountNum": 417.23,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:42 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001251",
    "user": "CUST_0049",
    "amount": "\u20b9265.87",
    "amountNum": 265.87,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:01 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001252",
    "user": "CUST_0048",
    "amount": "\u20b9350.71",
    "amountNum": 350.71,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:32 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001253",
    "user": "CUST_0062",
    "amount": "\u20b9271.31",
    "amountNum": 271.31,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001254",
    "user": "CUST_0087",
    "amount": "\u20b9380.03",
    "amountNum": 380.03,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:09 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001255",
    "user": "CUST_0012",
    "amount": "\u20b9148.51",
    "amountNum": 148.51,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001256",
    "user": "CUST_0066",
    "amount": "\u20b9385.43",
    "amountNum": 385.43,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:00 AM",
    "riskScore": 18.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001257",
    "user": "CUST_0094",
    "amount": "\u20b9423.47",
    "amountNum": 423.47,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:02 AM",
    "riskScore": 16.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001258",
    "user": "CUST_0025",
    "amount": "\u20b964.44",
    "amountNum": 64.44,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:52 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001259",
    "user": "CUST_0029",
    "amount": "\u20b9258.50",
    "amountNum": 258.5,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:14 AM",
    "riskScore": 15.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001260",
    "user": "CUST_0007",
    "amount": "\u20b9163.61",
    "amountNum": 163.61,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:43 AM",
    "riskScore": 13.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001261",
    "user": "CUST_0092",
    "amount": "\u20b9429.67",
    "amountNum": 429.67,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:35 AM",
    "riskScore": 18.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001262",
    "user": "CUST_0042",
    "amount": "\u20b9165.26",
    "amountNum": 165.26,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:50 AM",
    "riskScore": 13.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001263",
    "user": "CUST_0070",
    "amount": "\u20b995.82",
    "amountNum": 95.82,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:26 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001264",
    "user": "CUST_0007",
    "amount": "\u20b9119.47",
    "amountNum": 119.47,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:40 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001265",
    "user": "CUST_0023",
    "amount": "\u20b9342.42",
    "amountNum": 342.42,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:56 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001266",
    "user": "CUST_0042",
    "amount": "\u20b9932.10",
    "amountNum": 932.1,
    "location": "Mumbai",
    "device": "New Device",
    "time": "09:24 AM",
    "riskScore": 72.3,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001267",
    "user": "CUST_0037",
    "amount": "\u20b9405.56",
    "amountNum": 405.56,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:39 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001268",
    "user": "CUST_0015",
    "amount": "\u20b9329.24",
    "amountNum": 329.24,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:05 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001269",
    "user": "CUST_0041",
    "amount": "\u20b9249.62",
    "amountNum": 249.62,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:44 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001270",
    "user": "CUST_0049",
    "amount": "\u20b9400.33",
    "amountNum": 400.33,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:57 PM",
    "riskScore": 5.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001271",
    "user": "CUST_0047",
    "amount": "\u20b9299.79",
    "amountNum": 299.79,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001272",
    "user": "CUST_0071",
    "amount": "\u20b9205.65",
    "amountNum": 205.65,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:19 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001273",
    "user": "CUST_0038",
    "amount": "\u20b9171.79",
    "amountNum": 171.79,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001274",
    "user": "CUST_0044",
    "amount": "\u20b9298.31",
    "amountNum": 298.31,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:44 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001275",
    "user": "CUST_0096",
    "amount": "\u20b91,217.90",
    "amountNum": 1217.9,
    "location": "Mumbai",
    "device": "New Device",
    "time": "07:04 PM",
    "riskScore": 62.2,
    "riskLevel": "Medium",
    "status": "Approved",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001276",
    "user": "CUST_0025",
    "amount": "\u20b9280.10",
    "amountNum": 280.1,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:42 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001277",
    "user": "CUST_0014",
    "amount": "\u20b9390.85",
    "amountNum": 390.85,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:07 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001278",
    "user": "CUST_0080",
    "amount": "\u20b931.03",
    "amountNum": 31.03,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001279",
    "user": "CUST_0096",
    "amount": "\u20b9309.77",
    "amountNum": 309.77,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001280",
    "user": "CUST_0035",
    "amount": "\u20b9151.75",
    "amountNum": 151.75,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:19 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001281",
    "user": "CUST_0049",
    "amount": "\u20b9374.64",
    "amountNum": 374.64,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:30 AM",
    "riskScore": 16.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001282",
    "user": "CUST_0051",
    "amount": "\u20b983.99",
    "amountNum": 83.99,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:50 AM",
    "riskScore": 12.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001283",
    "user": "CUST_0055",
    "amount": "\u20b9419.11",
    "amountNum": 419.11,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:44 AM",
    "riskScore": 16.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001284",
    "user": "CUST_0016",
    "amount": "\u20b9180.60",
    "amountNum": 180.6,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:29 AM",
    "riskScore": 12.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001285",
    "user": "CUST_0099",
    "amount": "\u20b9283.73",
    "amountNum": 283.73,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:49 AM",
    "riskScore": 15.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001286",
    "user": "CUST_0084",
    "amount": "\u20b9443.38",
    "amountNum": 443.38,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:21 AM",
    "riskScore": 16.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001287",
    "user": "CUST_0011",
    "amount": "\u20b9188.36",
    "amountNum": 188.36,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:52 AM",
    "riskScore": 14.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001288",
    "user": "CUST_0032",
    "amount": "\u20b930.24",
    "amountNum": 30.24,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:01 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001289",
    "user": "CUST_0068",
    "amount": "\u20b9173.36",
    "amountNum": 173.36,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:58 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001290",
    "user": "CUST_0089",
    "amount": "\u20b9231.83",
    "amountNum": 231.83,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:47 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001291",
    "user": "CUST_0092",
    "amount": "\u20b9226.07",
    "amountNum": 226.07,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:21 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001292",
    "user": "CUST_0041",
    "amount": "\u20b9119.85",
    "amountNum": 119.85,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:37 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001293",
    "user": "CUST_0077",
    "amount": "\u20b982.45",
    "amountNum": 82.45,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:07 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001294",
    "user": "CUST_0098",
    "amount": "\u20b9174.45",
    "amountNum": 174.45,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:38 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001295",
    "user": "CUST_0048",
    "amount": "\u20b947.63",
    "amountNum": 47.63,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:08 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001296",
    "user": "CUST_0077",
    "amount": "\u20b9328.42",
    "amountNum": 328.42,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:27 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001297",
    "user": "CUST_0034",
    "amount": "\u20b9367.75",
    "amountNum": 367.75,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001298",
    "user": "CUST_0076",
    "amount": "\u20b91,710.81",
    "amountNum": 1710.81,
    "location": "Mumbai",
    "device": "New Device",
    "time": "02:17 PM",
    "riskScore": 84.9,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001299",
    "user": "CUST_0023",
    "amount": "\u20b966.82",
    "amountNum": 66.82,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001300",
    "user": "CUST_0037",
    "amount": "\u20b9375.68",
    "amountNum": 375.68,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:44 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001301",
    "user": "CUST_0085",
    "amount": "\u20b9164.07",
    "amountNum": 164.07,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:49 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001302",
    "user": "CUST_0075",
    "amount": "\u20b9341.89",
    "amountNum": 341.89,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001303",
    "user": "CUST_0080",
    "amount": "\u20b9235.34",
    "amountNum": 235.34,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001304",
    "user": "CUST_0058",
    "amount": "\u20b9114.34",
    "amountNum": 114.34,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:57 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001305",
    "user": "CUST_0045",
    "amount": "\u20b921.41",
    "amountNum": 21.41,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:27 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001306",
    "user": "CUST_0069",
    "amount": "\u20b9278.70",
    "amountNum": 278.7,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:34 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001307",
    "user": "CUST_0014",
    "amount": "\u20b999.49",
    "amountNum": 99.49,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:34 AM",
    "riskScore": 12.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001308",
    "user": "CUST_0004",
    "amount": "\u20b9153.31",
    "amountNum": 153.31,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:33 AM",
    "riskScore": 13.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001309",
    "user": "CUST_0096",
    "amount": "\u20b9257.59",
    "amountNum": 257.59,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:00 AM",
    "riskScore": 13.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001310",
    "user": "CUST_0028",
    "amount": "\u20b9321.56",
    "amountNum": 321.56,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:23 AM",
    "riskScore": 16.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001311",
    "user": "CUST_0007",
    "amount": "\u20b9179.54",
    "amountNum": 179.54,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:10 AM",
    "riskScore": 13.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001312",
    "user": "CUST_0060",
    "amount": "\u20b9268.23",
    "amountNum": 268.23,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:37 AM",
    "riskScore": 15.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001313",
    "user": "CUST_0020",
    "amount": "\u20b9260.44",
    "amountNum": 260.44,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:28 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001314",
    "user": "CUST_0064",
    "amount": "\u20b9363.25",
    "amountNum": 363.25,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:02 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001315",
    "user": "CUST_0003",
    "amount": "\u20b9313.13",
    "amountNum": 313.13,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:17 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001316",
    "user": "CUST_0055",
    "amount": "\u20b9114.33",
    "amountNum": 114.33,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:09 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001317",
    "user": "CUST_0071",
    "amount": "\u20b9227.49",
    "amountNum": 227.49,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:27 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001318",
    "user": "CUST_0004",
    "amount": "\u20b9385.20",
    "amountNum": 385.2,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:29 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001319",
    "user": "CUST_0021",
    "amount": "\u20b9389.14",
    "amountNum": 389.14,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:09 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001320",
    "user": "CUST_0032",
    "amount": "\u20b976.71",
    "amountNum": 76.71,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001321",
    "user": "CUST_0085",
    "amount": "\u20b9300.29",
    "amountNum": 300.29,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:50 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001322",
    "user": "CUST_0098",
    "amount": "\u20b9265.66",
    "amountNum": 265.66,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:24 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001323",
    "user": "CUST_0092",
    "amount": "\u20b9407.74",
    "amountNum": 407.74,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:33 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001324",
    "user": "CUST_0042",
    "amount": "\u20b9112.13",
    "amountNum": 112.13,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:27 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001325",
    "user": "CUST_0027",
    "amount": "\u20b9138.74",
    "amountNum": 138.74,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001326",
    "user": "CUST_0023",
    "amount": "\u20b9361.80",
    "amountNum": 361.8,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:50 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001327",
    "user": "CUST_0017",
    "amount": "\u20b9173.34",
    "amountNum": 173.34,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:25 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001328",
    "user": "CUST_0052",
    "amount": "\u20b9376.01",
    "amountNum": 376.01,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:01 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001329",
    "user": "CUST_0100",
    "amount": "\u20b9287.99",
    "amountNum": 287.99,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:10 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001330",
    "user": "CUST_0089",
    "amount": "\u20b919.02",
    "amountNum": 19.02,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:33 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001331",
    "user": "CUST_0041",
    "amount": "\u20b9404.05",
    "amountNum": 404.05,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:42 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001332",
    "user": "CUST_0028",
    "amount": "\u20b9218.59",
    "amountNum": 218.59,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001333",
    "user": "CUST_0042",
    "amount": "\u20b9415.18",
    "amountNum": 415.18,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:25 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001334",
    "user": "CUST_0034",
    "amount": "\u20b928.74",
    "amountNum": 28.74,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:45 AM",
    "riskScore": 12.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001335",
    "user": "CUST_0096",
    "amount": "\u20b923.27",
    "amountNum": 23.27,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:02 AM",
    "riskScore": 12.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001336",
    "user": "CUST_0088",
    "amount": "\u20b9348.38",
    "amountNum": 348.38,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:31 AM",
    "riskScore": 14.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001337",
    "user": "CUST_0028",
    "amount": "\u20b9399.84",
    "amountNum": 399.84,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:54 AM",
    "riskScore": 17.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001338",
    "user": "CUST_0091",
    "amount": "\u20b9276.30",
    "amountNum": 276.3,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:35 AM",
    "riskScore": 14.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001339",
    "user": "CUST_0025",
    "amount": "\u20b970.95",
    "amountNum": 70.95,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:02 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001340",
    "user": "CUST_0080",
    "amount": "\u20b941.57",
    "amountNum": 41.57,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:38 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001341",
    "user": "CUST_0031",
    "amount": "\u20b94,177.36",
    "amountNum": 4177.36,
    "location": "Mumbai",
    "device": "New Device",
    "time": "08:23 AM",
    "riskScore": 89.1,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001342",
    "user": "CUST_0072",
    "amount": "\u20b9146.03",
    "amountNum": 146.03,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:44 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001343",
    "user": "CUST_0087",
    "amount": "\u20b9447.79",
    "amountNum": 447.79,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:06 AM",
    "riskScore": 5.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001344",
    "user": "CUST_0017",
    "amount": "\u20b918.04",
    "amountNum": 18.04,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001345",
    "user": "CUST_0032",
    "amount": "\u20b9412.27",
    "amountNum": 412.27,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:37 PM",
    "riskScore": 5.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001346",
    "user": "CUST_0051",
    "amount": "\u20b928.53",
    "amountNum": 28.53,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001347",
    "user": "CUST_0098",
    "amount": "\u20b9387.13",
    "amountNum": 387.13,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:25 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001348",
    "user": "CUST_0047",
    "amount": "\u20b9420.39",
    "amountNum": 420.39,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001349",
    "user": "CUST_0001",
    "amount": "\u20b9343.06",
    "amountNum": 343.06,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:52 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001350",
    "user": "CUST_0039",
    "amount": "\u20b989.54",
    "amountNum": 89.54,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001351",
    "user": "CUST_0082",
    "amount": "\u20b9442.42",
    "amountNum": 442.42,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:27 PM",
    "riskScore": 5.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001352",
    "user": "CUST_0081",
    "amount": "\u20b9114.78",
    "amountNum": 114.78,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001353",
    "user": "CUST_0026",
    "amount": "\u20b931.84",
    "amountNum": 31.84,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:34 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001354",
    "user": "CUST_0023",
    "amount": "\u20b9103.97",
    "amountNum": 103.97,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:32 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001355",
    "user": "CUST_0096",
    "amount": "\u20b9392.29",
    "amountNum": 392.29,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001356",
    "user": "CUST_0027",
    "amount": "\u20b9274.31",
    "amountNum": 274.31,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:03 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001357",
    "user": "CUST_0039",
    "amount": "\u20b9308.88",
    "amountNum": 308.88,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001358",
    "user": "CUST_0065",
    "amount": "\u20b93,006.31",
    "amountNum": 3006.31,
    "location": "Mumbai",
    "device": "New Device",
    "time": "12:40 AM",
    "riskScore": 96.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001359",
    "user": "CUST_0100",
    "amount": "\u20b926.74",
    "amountNum": 26.74,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:42 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001360",
    "user": "CUST_0068",
    "amount": "\u20b9388.85",
    "amountNum": 388.85,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:29 AM",
    "riskScore": 16.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001361",
    "user": "CUST_0094",
    "amount": "\u20b921.57",
    "amountNum": 21.57,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:46 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001362",
    "user": "CUST_0084",
    "amount": "\u20b972.33",
    "amountNum": 72.33,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:01 AM",
    "riskScore": 12.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001363",
    "user": "CUST_0026",
    "amount": "\u20b9381.68",
    "amountNum": 381.68,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:00 AM",
    "riskScore": 16.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001364",
    "user": "CUST_0048",
    "amount": "\u20b9193.08",
    "amountNum": 193.08,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:17 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001365",
    "user": "CUST_0091",
    "amount": "\u20b9405.18",
    "amountNum": 405.18,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:41 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001366",
    "user": "CUST_0094",
    "amount": "\u20b920.68",
    "amountNum": 20.68,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:48 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001367",
    "user": "CUST_0092",
    "amount": "\u20b9415.54",
    "amountNum": 415.54,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:27 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001368",
    "user": "CUST_0016",
    "amount": "\u20b940.73",
    "amountNum": 40.73,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:45 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001369",
    "user": "CUST_0026",
    "amount": "\u20b930.86",
    "amountNum": 30.86,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:48 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001370",
    "user": "CUST_0030",
    "amount": "\u20b9397.59",
    "amountNum": 397.59,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:50 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001371",
    "user": "CUST_0078",
    "amount": "\u20b9286.01",
    "amountNum": 286.01,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:07 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001372",
    "user": "CUST_0027",
    "amount": "\u20b9288.46",
    "amountNum": 288.46,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:23 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001373",
    "user": "CUST_0058",
    "amount": "\u20b9213.49",
    "amountNum": 213.49,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:13 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001374",
    "user": "CUST_0062",
    "amount": "\u20b920.77",
    "amountNum": 20.77,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001375",
    "user": "CUST_0036",
    "amount": "\u20b923.63",
    "amountNum": 23.63,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:51 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001376",
    "user": "CUST_0078",
    "amount": "\u20b940.07",
    "amountNum": 40.07,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:14 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001377",
    "user": "CUST_0078",
    "amount": "\u20b9439.33",
    "amountNum": 439.33,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001378",
    "user": "CUST_0010",
    "amount": "\u20b9395.83",
    "amountNum": 395.83,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:35 PM",
    "riskScore": 5.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001379",
    "user": "CUST_0087",
    "amount": "\u20b9114.40",
    "amountNum": 114.4,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:15 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001380",
    "user": "CUST_0100",
    "amount": "\u20b9102.14",
    "amountNum": 102.14,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:41 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001381",
    "user": "CUST_0054",
    "amount": "\u20b961.21",
    "amountNum": 61.21,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001382",
    "user": "CUST_0013",
    "amount": "\u20b9157.31",
    "amountNum": 157.31,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001383",
    "user": "CUST_0059",
    "amount": "\u20b936.40",
    "amountNum": 36.4,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:35 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001384",
    "user": "CUST_0084",
    "amount": "\u20b94,092.46",
    "amountNum": 4092.46,
    "location": "Mumbai",
    "device": "New Device",
    "time": "10:52 PM",
    "riskScore": 90.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001385",
    "user": "CUST_0039",
    "amount": "\u20b9440.36",
    "amountNum": 440.36,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001386",
    "user": "CUST_0084",
    "amount": "\u20b978.41",
    "amountNum": 78.41,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:59 AM",
    "riskScore": 12.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001387",
    "user": "CUST_0052",
    "amount": "\u20b982.52",
    "amountNum": 82.52,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:00 AM",
    "riskScore": 12.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001388",
    "user": "CUST_0042",
    "amount": "\u20b9311.33",
    "amountNum": 311.33,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:25 AM",
    "riskScore": 14.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001389",
    "user": "CUST_0071",
    "amount": "\u20b976.16",
    "amountNum": 76.16,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:44 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001390",
    "user": "CUST_0056",
    "amount": "\u20b9113.31",
    "amountNum": 113.31,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:05 AM",
    "riskScore": 13.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001391",
    "user": "CUST_0024",
    "amount": "\u20b9250.51",
    "amountNum": 250.51,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:51 AM",
    "riskScore": 17.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001392",
    "user": "CUST_0015",
    "amount": "\u20b9159.56",
    "amountNum": 159.56,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:57 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001393",
    "user": "CUST_0026",
    "amount": "\u20b9196.39",
    "amountNum": 196.39,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:25 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001394",
    "user": "CUST_0034",
    "amount": "\u20b9217.30",
    "amountNum": 217.3,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:10 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001395",
    "user": "CUST_0016",
    "amount": "\u20b9120.76",
    "amountNum": 120.76,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:17 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001396",
    "user": "CUST_0008",
    "amount": "\u20b9111.28",
    "amountNum": 111.28,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:01 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001397",
    "user": "CUST_0071",
    "amount": "\u20b9388.36",
    "amountNum": 388.36,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:08 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001398",
    "user": "CUST_0086",
    "amount": "\u20b9358.28",
    "amountNum": 358.28,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:39 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001399",
    "user": "CUST_0017",
    "amount": "\u20b998.48",
    "amountNum": 98.48,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001400",
    "user": "CUST_0069",
    "amount": "\u20b9353.03",
    "amountNum": 353.03,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:04 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001401",
    "user": "CUST_0030",
    "amount": "\u20b9122.38",
    "amountNum": 122.38,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:40 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001402",
    "user": "CUST_0051",
    "amount": "\u20b9429.39",
    "amountNum": 429.39,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:39 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001403",
    "user": "CUST_0062",
    "amount": "\u20b9114.39",
    "amountNum": 114.39,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001404",
    "user": "CUST_0031",
    "amount": "\u20b9411.53",
    "amountNum": 411.53,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:45 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001405",
    "user": "CUST_0057",
    "amount": "\u20b9114.29",
    "amountNum": 114.29,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001406",
    "user": "CUST_0039",
    "amount": "\u20b946.72",
    "amountNum": 46.72,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:07 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001407",
    "user": "CUST_0007",
    "amount": "\u20b9366.11",
    "amountNum": 366.11,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001408",
    "user": "CUST_0091",
    "amount": "\u20b995.26",
    "amountNum": 95.26,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001409",
    "user": "CUST_0071",
    "amount": "\u20b9230.90",
    "amountNum": 230.9,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001410",
    "user": "CUST_0025",
    "amount": "\u20b9197.75",
    "amountNum": 197.75,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001411",
    "user": "CUST_0095",
    "amount": "\u20b9366.36",
    "amountNum": 366.36,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001412",
    "user": "CUST_0052",
    "amount": "\u20b9258.75",
    "amountNum": 258.75,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001413",
    "user": "CUST_0037",
    "amount": "\u20b925.96",
    "amountNum": 25.96,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:15 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001414",
    "user": "CUST_0056",
    "amount": "\u20b9148.34",
    "amountNum": 148.34,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:29 AM",
    "riskScore": 13.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001415",
    "user": "CUST_0068",
    "amount": "\u20b9311.73",
    "amountNum": 311.73,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:59 AM",
    "riskScore": 15.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001416",
    "user": "CUST_0057",
    "amount": "\u20b9362.91",
    "amountNum": 362.91,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:32 AM",
    "riskScore": 16.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001417",
    "user": "CUST_0058",
    "amount": "\u20b9435.61",
    "amountNum": 435.61,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:30 AM",
    "riskScore": 16.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001418",
    "user": "CUST_0082",
    "amount": "\u20b9359.07",
    "amountNum": 359.07,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:35 AM",
    "riskScore": 16.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001419",
    "user": "CUST_0006",
    "amount": "\u20b9186.86",
    "amountNum": 186.86,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:46 AM",
    "riskScore": 13.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001420",
    "user": "CUST_0063",
    "amount": "\u20b9255.40",
    "amountNum": 255.4,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:15 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001421",
    "user": "CUST_0053",
    "amount": "\u20b992.74",
    "amountNum": 92.74,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:57 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001422",
    "user": "CUST_0072",
    "amount": "\u20b953.16",
    "amountNum": 53.16,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:34 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001423",
    "user": "CUST_0080",
    "amount": "\u20b936.45",
    "amountNum": 36.45,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:43 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001424",
    "user": "CUST_0099",
    "amount": "\u20b9184.31",
    "amountNum": 184.31,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:07 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001425",
    "user": "CUST_0081",
    "amount": "\u20b9209.80",
    "amountNum": 209.8,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:07 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001426",
    "user": "CUST_0073",
    "amount": "\u20b9256.56",
    "amountNum": 256.56,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:36 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001427",
    "user": "CUST_0068",
    "amount": "\u20b9445.32",
    "amountNum": 445.32,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001428",
    "user": "CUST_0039",
    "amount": "\u20b9140.31",
    "amountNum": 140.31,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001429",
    "user": "CUST_0014",
    "amount": "\u20b9128.76",
    "amountNum": 128.76,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:09 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001430",
    "user": "CUST_0060",
    "amount": "\u20b93,986.59",
    "amountNum": 3986.59,
    "location": "Mumbai",
    "device": "New Device",
    "time": "02:13 PM",
    "riskScore": 89.6,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001431",
    "user": "CUST_0068",
    "amount": "\u20b9422.82",
    "amountNum": 422.82,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:43 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001432",
    "user": "CUST_0011",
    "amount": "\u20b9403.71",
    "amountNum": 403.71,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:26 PM",
    "riskScore": 5.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001433",
    "user": "CUST_0051",
    "amount": "\u20b9110.39",
    "amountNum": 110.39,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:03 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001434",
    "user": "CUST_0014",
    "amount": "\u20b9184.77",
    "amountNum": 184.77,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:59 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001435",
    "user": "CUST_0099",
    "amount": "\u20b983.97",
    "amountNum": 83.97,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:10 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001436",
    "user": "CUST_0074",
    "amount": "\u20b9230.09",
    "amountNum": 230.09,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:40 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001437",
    "user": "CUST_0053",
    "amount": "\u20b970.28",
    "amountNum": 70.28,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:57 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001438",
    "user": "CUST_0029",
    "amount": "\u20b9344.46",
    "amountNum": 344.46,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:13 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001439",
    "user": "CUST_0037",
    "amount": "\u20b9202.05",
    "amountNum": 202.05,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001440",
    "user": "CUST_0074",
    "amount": "\u20b9273.82",
    "amountNum": 273.82,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:39 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001441",
    "user": "CUST_0034",
    "amount": "\u20b9447.21",
    "amountNum": 447.21,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:09 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001442",
    "user": "CUST_0002",
    "amount": "\u20b9354.06",
    "amountNum": 354.06,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:20 AM",
    "riskScore": 16.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001443",
    "user": "CUST_0052",
    "amount": "\u20b9224.94",
    "amountNum": 224.94,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:51 AM",
    "riskScore": 14.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001444",
    "user": "CUST_0074",
    "amount": "\u20b9266.18",
    "amountNum": 266.18,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:37 AM",
    "riskScore": 14.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001445",
    "user": "CUST_0036",
    "amount": "\u20b978.82",
    "amountNum": 78.82,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:00 AM",
    "riskScore": 12.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001446",
    "user": "CUST_0043",
    "amount": "\u20b9291.31",
    "amountNum": 291.31,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:28 AM",
    "riskScore": 14.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001447",
    "user": "CUST_0085",
    "amount": "\u20b9152.61",
    "amountNum": 152.61,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:42 AM",
    "riskScore": 13.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001448",
    "user": "CUST_0057",
    "amount": "\u20b9343.93",
    "amountNum": 343.93,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:12 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001449",
    "user": "CUST_0028",
    "amount": "\u20b9133.91",
    "amountNum": 133.91,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:15 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001450",
    "user": "CUST_0018",
    "amount": "\u20b9305.08",
    "amountNum": 305.08,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:08 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001451",
    "user": "CUST_0076",
    "amount": "\u20b9323.87",
    "amountNum": 323.87,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:31 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001452",
    "user": "CUST_0002",
    "amount": "\u20b9175.81",
    "amountNum": 175.81,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:11 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001453",
    "user": "CUST_0077",
    "amount": "\u20b9361.58",
    "amountNum": 361.58,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:44 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001454",
    "user": "CUST_0029",
    "amount": "\u20b942.08",
    "amountNum": 42.08,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:09 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001455",
    "user": "CUST_0059",
    "amount": "\u20b9273.09",
    "amountNum": 273.09,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:20 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001456",
    "user": "CUST_0001",
    "amount": "\u20b924.19",
    "amountNum": 24.19,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:49 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001457",
    "user": "CUST_0040",
    "amount": "\u20b9385.71",
    "amountNum": 385.71,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:06 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001458",
    "user": "CUST_0099",
    "amount": "\u20b9213.84",
    "amountNum": 213.84,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001459",
    "user": "CUST_0038",
    "amount": "\u20b9387.31",
    "amountNum": 387.31,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:07 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001460",
    "user": "CUST_0034",
    "amount": "\u20b963.88",
    "amountNum": 63.88,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001461",
    "user": "CUST_0043",
    "amount": "\u20b963.58",
    "amountNum": 63.58,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:48 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001462",
    "user": "CUST_0036",
    "amount": "\u20b9442.03",
    "amountNum": 442.03,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:46 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001463",
    "user": "CUST_0027",
    "amount": "\u20b9223.71",
    "amountNum": 223.71,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001464",
    "user": "CUST_0048",
    "amount": "\u20b9387.35",
    "amountNum": 387.35,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001465",
    "user": "CUST_0100",
    "amount": "\u20b9432.34",
    "amountNum": 432.34,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:37 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001466",
    "user": "CUST_0037",
    "amount": "\u20b968.21",
    "amountNum": 68.21,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:44 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001467",
    "user": "CUST_0058",
    "amount": "\u20b9154.78",
    "amountNum": 154.78,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001468",
    "user": "CUST_0088",
    "amount": "\u20b9147.93",
    "amountNum": 147.93,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:14 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001469",
    "user": "CUST_0065",
    "amount": "\u20b91,768.59",
    "amountNum": 1768.59,
    "location": "Mumbai",
    "device": "New Device",
    "time": "11:40 PM",
    "riskScore": 72.4,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001470",
    "user": "CUST_0065",
    "amount": "\u20b9408.83",
    "amountNum": 408.83,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:19 AM",
    "riskScore": 13.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001471",
    "user": "CUST_0041",
    "amount": "\u20b9224.00",
    "amountNum": 224.0,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:34 AM",
    "riskScore": 14.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001472",
    "user": "CUST_0079",
    "amount": "\u20b9360.31",
    "amountNum": 360.31,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:20 AM",
    "riskScore": 16.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001473",
    "user": "CUST_0054",
    "amount": "\u20b9249.72",
    "amountNum": 249.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:09 AM",
    "riskScore": 13.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001474",
    "user": "CUST_0031",
    "amount": "\u20b9188.10",
    "amountNum": 188.1,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:26 AM",
    "riskScore": 12.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001475",
    "user": "CUST_0021",
    "amount": "\u20b972.76",
    "amountNum": 72.76,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:49 AM",
    "riskScore": 12.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001476",
    "user": "CUST_0039",
    "amount": "\u20b9346.39",
    "amountNum": 346.39,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:30 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001477",
    "user": "CUST_0038",
    "amount": "\u20b9202.22",
    "amountNum": 202.22,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:36 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001478",
    "user": "CUST_0034",
    "amount": "\u20b928.96",
    "amountNum": 28.96,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:23 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001479",
    "user": "CUST_0053",
    "amount": "\u20b9113.01",
    "amountNum": 113.01,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:59 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001480",
    "user": "CUST_0012",
    "amount": "\u20b9352.41",
    "amountNum": 352.41,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:29 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001481",
    "user": "CUST_0013",
    "amount": "\u20b927.25",
    "amountNum": 27.25,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:12 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001482",
    "user": "CUST_0075",
    "amount": "\u20b9110.78",
    "amountNum": 110.78,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:41 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001483",
    "user": "CUST_0017",
    "amount": "\u20b9201.80",
    "amountNum": 201.8,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:09 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001484",
    "user": "CUST_0028",
    "amount": "\u20b981.61",
    "amountNum": 81.61,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:01 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001485",
    "user": "CUST_0085",
    "amount": "\u20b9417.61",
    "amountNum": 417.61,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001486",
    "user": "CUST_0075",
    "amount": "\u20b9331.79",
    "amountNum": 331.79,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001487",
    "user": "CUST_0048",
    "amount": "\u20b9157.41",
    "amountNum": 157.41,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:49 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001488",
    "user": "CUST_0088",
    "amount": "\u20b9411.61",
    "amountNum": 411.61,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:40 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001489",
    "user": "CUST_0082",
    "amount": "\u20b920.83",
    "amountNum": 20.83,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001490",
    "user": "CUST_0034",
    "amount": "\u20b9434.72",
    "amountNum": 434.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:15 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001491",
    "user": "CUST_0064",
    "amount": "\u20b9399.31",
    "amountNum": 399.31,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:59 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001492",
    "user": "CUST_0093",
    "amount": "\u20b9314.43",
    "amountNum": 314.43,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:41 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001493",
    "user": "CUST_0046",
    "amount": "\u20b9434.94",
    "amountNum": 434.94,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:21 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001494",
    "user": "CUST_0014",
    "amount": "\u20b948.41",
    "amountNum": 48.41,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:22 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001495",
    "user": "CUST_0002",
    "amount": "\u20b9317.41",
    "amountNum": 317.41,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:07 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001496",
    "user": "CUST_0019",
    "amount": "\u20b9354.58",
    "amountNum": 354.58,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:29 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001497",
    "user": "CUST_0005",
    "amount": "\u20b91,681.11",
    "amountNum": 1681.11,
    "location": "Mumbai",
    "device": "New Device",
    "time": "12:56 AM",
    "riskScore": 96.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001498",
    "user": "CUST_0039",
    "amount": "\u20b9318.81",
    "amountNum": 318.81,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:42 AM",
    "riskScore": 15.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001499",
    "user": "CUST_0083",
    "amount": "\u20b951.83",
    "amountNum": 51.83,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:49 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001500",
    "user": "CUST_0099",
    "amount": "\u20b930.50",
    "amountNum": 30.5,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:29 AM",
    "riskScore": 12.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001501",
    "user": "CUST_0031",
    "amount": "\u20b957.86",
    "amountNum": 57.86,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:44 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001502",
    "user": "CUST_0023",
    "amount": "\u20b9211.19",
    "amountNum": 211.19,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:22 AM",
    "riskScore": 13.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001503",
    "user": "CUST_0098",
    "amount": "\u20b9248.46",
    "amountNum": 248.46,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:49 AM",
    "riskScore": 14.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001504",
    "user": "CUST_0005",
    "amount": "\u20b9393.95",
    "amountNum": 393.95,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:55 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001505",
    "user": "CUST_0033",
    "amount": "\u20b949.13",
    "amountNum": 49.13,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:24 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001506",
    "user": "CUST_0015",
    "amount": "\u20b9361.98",
    "amountNum": 361.98,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:52 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001507",
    "user": "CUST_0082",
    "amount": "\u20b9241.43",
    "amountNum": 241.43,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:20 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001508",
    "user": "CUST_0058",
    "amount": "\u20b9221.97",
    "amountNum": 221.97,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001509",
    "user": "CUST_0085",
    "amount": "\u20b9242.93",
    "amountNum": 242.93,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:07 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001510",
    "user": "CUST_0004",
    "amount": "\u20b920.58",
    "amountNum": 20.58,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001511",
    "user": "CUST_0070",
    "amount": "\u20b9151.06",
    "amountNum": 151.06,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001512",
    "user": "CUST_0048",
    "amount": "\u20b9311.36",
    "amountNum": 311.36,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:09 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001513",
    "user": "CUST_0006",
    "amount": "\u20b9442.05",
    "amountNum": 442.05,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001514",
    "user": "CUST_0049",
    "amount": "\u20b9429.62",
    "amountNum": 429.62,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:27 PM",
    "riskScore": 5.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001515",
    "user": "CUST_0038",
    "amount": "\u20b9251.23",
    "amountNum": 251.23,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001516",
    "user": "CUST_0090",
    "amount": "\u20b9281.11",
    "amountNum": 281.11,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001517",
    "user": "CUST_0067",
    "amount": "\u20b9233.80",
    "amountNum": 233.8,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:37 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001518",
    "user": "CUST_0085",
    "amount": "\u20b9403.02",
    "amountNum": 403.02,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:15 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001519",
    "user": "CUST_0067",
    "amount": "\u20b9221.83",
    "amountNum": 221.83,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:25 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001520",
    "user": "CUST_0099",
    "amount": "\u20b9363.09",
    "amountNum": 363.09,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001521",
    "user": "CUST_0071",
    "amount": "\u20b9328.38",
    "amountNum": 328.38,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:26 AM",
    "riskScore": 13.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001522",
    "user": "CUST_0075",
    "amount": "\u20b921.12",
    "amountNum": 21.12,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:24 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001523",
    "user": "CUST_0027",
    "amount": "\u20b9444.11",
    "amountNum": 444.11,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:47 AM",
    "riskScore": 16.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001524",
    "user": "CUST_0010",
    "amount": "\u20b9193.69",
    "amountNum": 193.69,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:56 AM",
    "riskScore": 14.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001525",
    "user": "CUST_0072",
    "amount": "\u20b9407.51",
    "amountNum": 407.51,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:38 AM",
    "riskScore": 14.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001526",
    "user": "CUST_0029",
    "amount": "\u20b9443.04",
    "amountNum": 443.04,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:01 AM",
    "riskScore": 17.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001527",
    "user": "CUST_0005",
    "amount": "\u20b9119.44",
    "amountNum": 119.44,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:55 AM",
    "riskScore": 13.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001528",
    "user": "CUST_0025",
    "amount": "\u20b9211.26",
    "amountNum": 211.26,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:42 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001529",
    "user": "CUST_0073",
    "amount": "\u20b9294.58",
    "amountNum": 294.58,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:05 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001530",
    "user": "CUST_0092",
    "amount": "\u20b9442.79",
    "amountNum": 442.79,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:28 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001531",
    "user": "CUST_0054",
    "amount": "\u20b9119.95",
    "amountNum": 119.95,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:12 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001532",
    "user": "CUST_0074",
    "amount": "\u20b9364.72",
    "amountNum": 364.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:30 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001533",
    "user": "CUST_0089",
    "amount": "\u20b9394.81",
    "amountNum": 394.81,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:01 AM",
    "riskScore": 5.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001534",
    "user": "CUST_0055",
    "amount": "\u20b9205.07",
    "amountNum": 205.07,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:31 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001535",
    "user": "CUST_0014",
    "amount": "\u20b9401.57",
    "amountNum": 401.57,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:01 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001536",
    "user": "CUST_0071",
    "amount": "\u20b9261.93",
    "amountNum": 261.93,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:43 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001537",
    "user": "CUST_0024",
    "amount": "\u20b9258.62",
    "amountNum": 258.62,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:21 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001538",
    "user": "CUST_0055",
    "amount": "\u20b933.59",
    "amountNum": 33.59,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001539",
    "user": "CUST_0099",
    "amount": "\u20b977.95",
    "amountNum": 77.95,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:02 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001540",
    "user": "CUST_0037",
    "amount": "\u20b9341.60",
    "amountNum": 341.6,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:06 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001541",
    "user": "CUST_0056",
    "amount": "\u20b9412.32",
    "amountNum": 412.32,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001542",
    "user": "CUST_0040",
    "amount": "\u20b921.01",
    "amountNum": 21.01,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:39 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001543",
    "user": "CUST_0086",
    "amount": "\u20b9206.39",
    "amountNum": 206.39,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:15 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001544",
    "user": "CUST_0091",
    "amount": "\u20b9200.61",
    "amountNum": 200.61,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001545",
    "user": "CUST_0063",
    "amount": "\u20b9174.51",
    "amountNum": 174.51,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:52 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001546",
    "user": "CUST_0024",
    "amount": "\u20b9212.70",
    "amountNum": 212.7,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:45 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001547",
    "user": "CUST_0092",
    "amount": "\u20b9128.64",
    "amountNum": 128.64,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:04 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001548",
    "user": "CUST_0064",
    "amount": "\u20b9199.33",
    "amountNum": 199.33,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:43 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001549",
    "user": "CUST_0003",
    "amount": "\u20b9384.38",
    "amountNum": 384.38,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:08 AM",
    "riskScore": 15.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001550",
    "user": "CUST_0058",
    "amount": "\u20b9311.78",
    "amountNum": 311.78,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:21 AM",
    "riskScore": 15.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001551",
    "user": "CUST_0092",
    "amount": "\u20b9414.58",
    "amountNum": 414.58,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:26 AM",
    "riskScore": 16.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001552",
    "user": "CUST_0040",
    "amount": "\u20b9195.35",
    "amountNum": 195.35,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:29 AM",
    "riskScore": 13.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001553",
    "user": "CUST_0064",
    "amount": "\u20b9403.28",
    "amountNum": 403.28,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:46 AM",
    "riskScore": 14.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001554",
    "user": "CUST_0024",
    "amount": "\u20b9367.68",
    "amountNum": 367.68,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:30 AM",
    "riskScore": 17.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001555",
    "user": "CUST_0097",
    "amount": "\u20b9114.51",
    "amountNum": 114.51,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:48 AM",
    "riskScore": 12.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001556",
    "user": "CUST_0058",
    "amount": "\u20b9240.01",
    "amountNum": 240.01,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:05 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001557",
    "user": "CUST_0058",
    "amount": "\u20b9123.89",
    "amountNum": 123.89,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:32 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001558",
    "user": "CUST_0053",
    "amount": "\u20b9314.79",
    "amountNum": 314.79,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:34 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001559",
    "user": "CUST_0049",
    "amount": "\u20b920.75",
    "amountNum": 20.75,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:50 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001560",
    "user": "CUST_0031",
    "amount": "\u20b9231.58",
    "amountNum": 231.58,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:33 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001561",
    "user": "CUST_0029",
    "amount": "\u20b964.29",
    "amountNum": 64.29,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:01 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001562",
    "user": "CUST_0011",
    "amount": "\u20b9108.58",
    "amountNum": 108.58,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:19 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001563",
    "user": "CUST_0031",
    "amount": "\u20b9238.93",
    "amountNum": 238.93,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:40 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001564",
    "user": "CUST_0071",
    "amount": "\u20b9127.11",
    "amountNum": 127.11,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:04 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001565",
    "user": "CUST_0089",
    "amount": "\u20b964.22",
    "amountNum": 64.22,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:05 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001566",
    "user": "CUST_0030",
    "amount": "\u20b9269.55",
    "amountNum": 269.55,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:28 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001567",
    "user": "CUST_0094",
    "amount": "\u20b9378.31",
    "amountNum": 378.31,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:23 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001568",
    "user": "CUST_0014",
    "amount": "\u20b9358.72",
    "amountNum": 358.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:21 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001569",
    "user": "CUST_0077",
    "amount": "\u20b9218.42",
    "amountNum": 218.42,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:05 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001570",
    "user": "CUST_0008",
    "amount": "\u20b9110.57",
    "amountNum": 110.57,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:32 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001571",
    "user": "CUST_0079",
    "amount": "\u20b954.56",
    "amountNum": 54.56,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001572",
    "user": "CUST_0047",
    "amount": "\u20b957.20",
    "amountNum": 57.2,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:18 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001573",
    "user": "CUST_0022",
    "amount": "\u20b9318.06",
    "amountNum": 318.06,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:43 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001574",
    "user": "CUST_0058",
    "amount": "\u20b9304.53",
    "amountNum": 304.53,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:25 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001575",
    "user": "CUST_0066",
    "amount": "\u20b9411.59",
    "amountNum": 411.59,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:34 AM",
    "riskScore": 17.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001576",
    "user": "CUST_0007",
    "amount": "\u20b9161.01",
    "amountNum": 161.01,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:55 AM",
    "riskScore": 13.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001577",
    "user": "CUST_0011",
    "amount": "\u20b9408.88",
    "amountNum": 408.88,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:57 AM",
    "riskScore": 17.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001578",
    "user": "CUST_0064",
    "amount": "\u20b9410.79",
    "amountNum": 410.79,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:57 AM",
    "riskScore": 14.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001579",
    "user": "CUST_0091",
    "amount": "\u20b9351.88",
    "amountNum": 351.88,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:18 AM",
    "riskScore": 15.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001580",
    "user": "CUST_0087",
    "amount": "\u20b93,269.27",
    "amountNum": 3269.27,
    "location": "Mumbai",
    "device": "New Device",
    "time": "05:08 AM",
    "riskScore": 96.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001581",
    "user": "CUST_0062",
    "amount": "\u20b9334.34",
    "amountNum": 334.34,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:24 AM",
    "riskScore": 15.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001582",
    "user": "CUST_0098",
    "amount": "\u20b9115.50",
    "amountNum": 115.5,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:55 AM",
    "riskScore": 13.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001583",
    "user": "CUST_0032",
    "amount": "\u20b9343.63",
    "amountNum": 343.63,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:05 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001584",
    "user": "CUST_0015",
    "amount": "\u20b9223.22",
    "amountNum": 223.22,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:00 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001585",
    "user": "CUST_0006",
    "amount": "\u20b9246.07",
    "amountNum": 246.07,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:35 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001586",
    "user": "CUST_0040",
    "amount": "\u20b9378.41",
    "amountNum": 378.41,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:12 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001587",
    "user": "CUST_0035",
    "amount": "\u20b9151.59",
    "amountNum": 151.59,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:36 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001588",
    "user": "CUST_0004",
    "amount": "\u20b9385.70",
    "amountNum": 385.7,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:30 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001589",
    "user": "CUST_0088",
    "amount": "\u20b9360.41",
    "amountNum": 360.41,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:49 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001590",
    "user": "CUST_0090",
    "amount": "\u20b9118.07",
    "amountNum": 118.07,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:51 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001591",
    "user": "CUST_0056",
    "amount": "\u20b9234.05",
    "amountNum": 234.05,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:10 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001592",
    "user": "CUST_0014",
    "amount": "\u20b9447.79",
    "amountNum": 447.79,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001593",
    "user": "CUST_0099",
    "amount": "\u20b9415.44",
    "amountNum": 415.44,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:02 PM",
    "riskScore": 5.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001594",
    "user": "CUST_0036",
    "amount": "\u20b918.06",
    "amountNum": 18.06,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:23 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001595",
    "user": "CUST_0073",
    "amount": "\u20b9186.85",
    "amountNum": 186.85,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:44 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001596",
    "user": "CUST_0075",
    "amount": "\u20b9256.49",
    "amountNum": 256.49,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:59 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001597",
    "user": "CUST_0033",
    "amount": "\u20b9345.10",
    "amountNum": 345.1,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:39 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001598",
    "user": "CUST_0014",
    "amount": "\u20b9307.38",
    "amountNum": 307.38,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:05 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001599",
    "user": "CUST_0037",
    "amount": "\u20b994.93",
    "amountNum": 94.93,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:28 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001600",
    "user": "CUST_0062",
    "amount": "\u20b9326.10",
    "amountNum": 326.1,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001601",
    "user": "CUST_0084",
    "amount": "\u20b984.17",
    "amountNum": 84.17,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:48 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001602",
    "user": "CUST_0088",
    "amount": "\u20b942.29",
    "amountNum": 42.29,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:05 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001603",
    "user": "CUST_0003",
    "amount": "\u20b9162.63",
    "amountNum": 162.63,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:15 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001604",
    "user": "CUST_0012",
    "amount": "\u20b9161.97",
    "amountNum": 161.97,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:30 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001605",
    "user": "CUST_0073",
    "amount": "\u20b9203.61",
    "amountNum": 203.61,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:47 AM",
    "riskScore": 14.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001606",
    "user": "CUST_0032",
    "amount": "\u20b9369.48",
    "amountNum": 369.48,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:13 AM",
    "riskScore": 16.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001607",
    "user": "CUST_0033",
    "amount": "\u20b9253.45",
    "amountNum": 253.45,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:13 AM",
    "riskScore": 14.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001608",
    "user": "CUST_0034",
    "amount": "\u20b950.99",
    "amountNum": 50.99,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:15 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001609",
    "user": "CUST_0046",
    "amount": "\u20b9112.31",
    "amountNum": 112.31,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:32 AM",
    "riskScore": 12.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001610",
    "user": "CUST_0031",
    "amount": "\u20b920.05",
    "amountNum": 20.05,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:06 AM",
    "riskScore": 12.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001611",
    "user": "CUST_0002",
    "amount": "\u20b9256.20",
    "amountNum": 256.2,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:28 AM",
    "riskScore": 14.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001612",
    "user": "CUST_0026",
    "amount": "\u20b9352.39",
    "amountNum": 352.39,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:52 AM",
    "riskScore": 16.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001613",
    "user": "CUST_0096",
    "amount": "\u20b9224.92",
    "amountNum": 224.92,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:34 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001614",
    "user": "CUST_0037",
    "amount": "\u20b9311.88",
    "amountNum": 311.88,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:22 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001615",
    "user": "CUST_0018",
    "amount": "\u20b9369.28",
    "amountNum": 369.28,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:41 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001616",
    "user": "CUST_0080",
    "amount": "\u20b9338.98",
    "amountNum": 338.98,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:10 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001617",
    "user": "CUST_0024",
    "amount": "\u20b9347.92",
    "amountNum": 347.92,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:04 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001618",
    "user": "CUST_0024",
    "amount": "\u20b9143.83",
    "amountNum": 143.83,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:51 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001619",
    "user": "CUST_0082",
    "amount": "\u20b9168.36",
    "amountNum": 168.36,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:23 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001620",
    "user": "CUST_0080",
    "amount": "\u20b9386.93",
    "amountNum": 386.93,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:50 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001621",
    "user": "CUST_0038",
    "amount": "\u20b9374.02",
    "amountNum": 374.02,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:41 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001622",
    "user": "CUST_0046",
    "amount": "\u20b9387.97",
    "amountNum": 387.97,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:48 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001623",
    "user": "CUST_0015",
    "amount": "\u20b961.78",
    "amountNum": 61.78,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001624",
    "user": "CUST_0019",
    "amount": "\u20b9204.31",
    "amountNum": 204.31,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001625",
    "user": "CUST_0011",
    "amount": "\u20b92,925.35",
    "amountNum": 2925.35,
    "location": "Mumbai",
    "device": "New Device",
    "time": "04:38 PM",
    "riskScore": 89.1,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001626",
    "user": "CUST_0031",
    "amount": "\u20b9234.37",
    "amountNum": 234.37,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:41 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001627",
    "user": "CUST_0078",
    "amount": "\u20b91,262.36",
    "amountNum": 1262.36,
    "location": "Mumbai",
    "device": "New Device",
    "time": "07:03 PM",
    "riskScore": 78.1,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001628",
    "user": "CUST_0013",
    "amount": "\u20b9193.82",
    "amountNum": 193.82,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001629",
    "user": "CUST_0055",
    "amount": "\u20b9287.12",
    "amountNum": 287.12,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:12 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001630",
    "user": "CUST_0049",
    "amount": "\u20b9102.65",
    "amountNum": 102.65,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:08 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001631",
    "user": "CUST_0056",
    "amount": "\u20b983.74",
    "amountNum": 83.74,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001632",
    "user": "CUST_0046",
    "amount": "\u20b9126.33",
    "amountNum": 126.33,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:05 AM",
    "riskScore": 12.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001633",
    "user": "CUST_0029",
    "amount": "\u20b9161.88",
    "amountNum": 161.88,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:24 AM",
    "riskScore": 14.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001634",
    "user": "CUST_0083",
    "amount": "\u20b9247.36",
    "amountNum": 247.36,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:30 AM",
    "riskScore": 12.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001635",
    "user": "CUST_0002",
    "amount": "\u20b9235.23",
    "amountNum": 235.23,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:00 AM",
    "riskScore": 14.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001636",
    "user": "CUST_0082",
    "amount": "\u20b9128.08",
    "amountNum": 128.08,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:28 AM",
    "riskScore": 13.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001637",
    "user": "CUST_0060",
    "amount": "\u20b9390.48",
    "amountNum": 390.48,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:55 AM",
    "riskScore": 15.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001638",
    "user": "CUST_0077",
    "amount": "\u20b9101.05",
    "amountNum": 101.05,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:14 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001639",
    "user": "CUST_0061",
    "amount": "\u20b9278.49",
    "amountNum": 278.49,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:04 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001640",
    "user": "CUST_0060",
    "amount": "\u20b9116.81",
    "amountNum": 116.81,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:31 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001641",
    "user": "CUST_0063",
    "amount": "\u20b9188.96",
    "amountNum": 188.96,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:21 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001642",
    "user": "CUST_0075",
    "amount": "\u20b9376.38",
    "amountNum": 376.38,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:40 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001643",
    "user": "CUST_0082",
    "amount": "\u20b946.34",
    "amountNum": 46.34,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:09 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001644",
    "user": "CUST_0054",
    "amount": "\u20b9126.00",
    "amountNum": 126.0,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:48 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001645",
    "user": "CUST_0012",
    "amount": "\u20b9310.93",
    "amountNum": 310.93,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:59 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001646",
    "user": "CUST_0014",
    "amount": "\u20b9408.10",
    "amountNum": 408.1,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:49 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001647",
    "user": "CUST_0042",
    "amount": "\u20b92,285.69",
    "amountNum": 2285.69,
    "location": "Mumbai",
    "device": "New Device",
    "time": "02:48 PM",
    "riskScore": 83.9,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001648",
    "user": "CUST_0046",
    "amount": "\u20b9393.33",
    "amountNum": 393.33,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001649",
    "user": "CUST_0020",
    "amount": "\u20b9395.15",
    "amountNum": 395.15,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:28 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001650",
    "user": "CUST_0086",
    "amount": "\u20b9275.78",
    "amountNum": 275.78,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001651",
    "user": "CUST_0092",
    "amount": "\u20b9228.51",
    "amountNum": 228.51,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:46 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001652",
    "user": "CUST_0004",
    "amount": "\u20b927.41",
    "amountNum": 27.41,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:02 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001653",
    "user": "CUST_0009",
    "amount": "\u20b968.91",
    "amountNum": 68.91,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:21 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001654",
    "user": "CUST_0084",
    "amount": "\u20b9390.96",
    "amountNum": 390.96,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:48 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001655",
    "user": "CUST_0022",
    "amount": "\u20b9236.11",
    "amountNum": 236.11,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:35 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001656",
    "user": "CUST_0095",
    "amount": "\u20b9157.73",
    "amountNum": 157.73,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:21 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001657",
    "user": "CUST_0072",
    "amount": "\u20b9350.77",
    "amountNum": 350.77,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:43 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001658",
    "user": "CUST_0100",
    "amount": "\u20b9304.65",
    "amountNum": 304.65,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:02 AM",
    "riskScore": 15.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001659",
    "user": "CUST_0027",
    "amount": "\u20b9232.24",
    "amountNum": 232.24,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:21 AM",
    "riskScore": 14.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001660",
    "user": "CUST_0043",
    "amount": "\u20b957.36",
    "amountNum": 57.36,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:34 AM",
    "riskScore": 12.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001661",
    "user": "CUST_0100",
    "amount": "\u20b9149.27",
    "amountNum": 149.27,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:49 AM",
    "riskScore": 13.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001662",
    "user": "CUST_0026",
    "amount": "\u20b9186.58",
    "amountNum": 186.58,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:57 AM",
    "riskScore": 14.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001663",
    "user": "CUST_0004",
    "amount": "\u20b9217.50",
    "amountNum": 217.5,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:23 AM",
    "riskScore": 14.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001664",
    "user": "CUST_0063",
    "amount": "\u20b9231.77",
    "amountNum": 231.77,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:39 AM",
    "riskScore": 14.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001665",
    "user": "CUST_0012",
    "amount": "\u20b9109.58",
    "amountNum": 109.58,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:09 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001666",
    "user": "CUST_0002",
    "amount": "\u20b9424.63",
    "amountNum": 424.63,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:14 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001667",
    "user": "CUST_0003",
    "amount": "\u20b9412.87",
    "amountNum": 412.87,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:20 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001668",
    "user": "CUST_0042",
    "amount": "\u20b9259.28",
    "amountNum": 259.28,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:57 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001669",
    "user": "CUST_0087",
    "amount": "\u20b9199.47",
    "amountNum": 199.47,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:42 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001670",
    "user": "CUST_0093",
    "amount": "\u20b9305.67",
    "amountNum": 305.67,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:06 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001671",
    "user": "CUST_0062",
    "amount": "\u20b9228.25",
    "amountNum": 228.25,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:41 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001672",
    "user": "CUST_0064",
    "amount": "\u20b9317.31",
    "amountNum": 317.31,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001673",
    "user": "CUST_0017",
    "amount": "\u20b9349.10",
    "amountNum": 349.1,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:01 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001674",
    "user": "CUST_0063",
    "amount": "\u20b9328.22",
    "amountNum": 328.22,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:06 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001675",
    "user": "CUST_0012",
    "amount": "\u20b9328.48",
    "amountNum": 328.48,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:23 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001676",
    "user": "CUST_0037",
    "amount": "\u20b9180.39",
    "amountNum": 180.39,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:23 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001677",
    "user": "CUST_0069",
    "amount": "\u20b9188.48",
    "amountNum": 188.48,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:48 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001678",
    "user": "CUST_0050",
    "amount": "\u20b980.86",
    "amountNum": 80.86,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001679",
    "user": "CUST_0002",
    "amount": "\u20b923.83",
    "amountNum": 23.83,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:10 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001680",
    "user": "CUST_0029",
    "amount": "\u20b9174.31",
    "amountNum": 174.31,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:40 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001681",
    "user": "CUST_0093",
    "amount": "\u20b9447.37",
    "amountNum": 447.37,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:44 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001682",
    "user": "CUST_0046",
    "amount": "\u20b9162.79",
    "amountNum": 162.79,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:23 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001683",
    "user": "CUST_0066",
    "amount": "\u20b9186.24",
    "amountNum": 186.24,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001684",
    "user": "CUST_0055",
    "amount": "\u20b9293.33",
    "amountNum": 293.33,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001685",
    "user": "CUST_0066",
    "amount": "\u20b972.68",
    "amountNum": 72.68,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:18 AM",
    "riskScore": 13.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001686",
    "user": "CUST_0018",
    "amount": "\u20b9290.32",
    "amountNum": 290.32,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:12 AM",
    "riskScore": 15.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001687",
    "user": "CUST_0095",
    "amount": "\u20b919.79",
    "amountNum": 19.79,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:49 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001688",
    "user": "CUST_0067",
    "amount": "\u20b9288.46",
    "amountNum": 288.46,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:36 AM",
    "riskScore": 15.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001689",
    "user": "CUST_0075",
    "amount": "\u20b9323.06",
    "amountNum": 323.06,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:01 AM",
    "riskScore": 15.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001690",
    "user": "CUST_0061",
    "amount": "\u20b915.39",
    "amountNum": 15.39,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:09 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001691",
    "user": "CUST_0028",
    "amount": "\u20b975.84",
    "amountNum": 75.84,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:39 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001692",
    "user": "CUST_0056",
    "amount": "\u20b9250.28",
    "amountNum": 250.28,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:17 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001693",
    "user": "CUST_0088",
    "amount": "\u20b9267.32",
    "amountNum": 267.32,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:50 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001694",
    "user": "CUST_0018",
    "amount": "\u20b9361.50",
    "amountNum": 361.5,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:10 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001695",
    "user": "CUST_0006",
    "amount": "\u20b9202.78",
    "amountNum": 202.78,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:24 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001696",
    "user": "CUST_0006",
    "amount": "\u20b943.67",
    "amountNum": 43.67,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:14 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001697",
    "user": "CUST_0067",
    "amount": "\u20b9230.36",
    "amountNum": 230.36,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:06 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001698",
    "user": "CUST_0089",
    "amount": "\u20b9406.74",
    "amountNum": 406.74,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:21 PM",
    "riskScore": 5.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001699",
    "user": "CUST_0048",
    "amount": "\u20b9278.25",
    "amountNum": 278.25,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:32 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001700",
    "user": "CUST_0040",
    "amount": "\u20b9329.63",
    "amountNum": 329.63,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:45 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001701",
    "user": "CUST_0039",
    "amount": "\u20b9246.71",
    "amountNum": 246.71,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:29 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001702",
    "user": "CUST_0063",
    "amount": "\u20b9172.52",
    "amountNum": 172.52,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001703",
    "user": "CUST_0001",
    "amount": "\u20b930.09",
    "amountNum": 30.09,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:37 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001704",
    "user": "CUST_0046",
    "amount": "\u20b9103.45",
    "amountNum": 103.45,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:02 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001705",
    "user": "CUST_0025",
    "amount": "\u20b9418.18",
    "amountNum": 418.18,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001706",
    "user": "CUST_0052",
    "amount": "\u20b9152.19",
    "amountNum": 152.19,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:37 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001707",
    "user": "CUST_0043",
    "amount": "\u20b940.33",
    "amountNum": 40.33,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:33 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001708",
    "user": "CUST_0091",
    "amount": "\u20b957.52",
    "amountNum": 57.52,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:21 AM",
    "riskScore": 12.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001709",
    "user": "CUST_0013",
    "amount": "\u20b9199.33",
    "amountNum": 199.33,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:56 AM",
    "riskScore": 14.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001710",
    "user": "CUST_0064",
    "amount": "\u20b9158.61",
    "amountNum": 158.61,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:54 AM",
    "riskScore": 12.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001711",
    "user": "CUST_0042",
    "amount": "\u20b9106.26",
    "amountNum": 106.26,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:54 AM",
    "riskScore": 12.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001712",
    "user": "CUST_0002",
    "amount": "\u20b94,158.05",
    "amountNum": 4158.05,
    "location": "Mumbai",
    "device": "New Device",
    "time": "04:24 AM",
    "riskScore": 96.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001713",
    "user": "CUST_0089",
    "amount": "\u20b9322.13",
    "amountNum": 322.13,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:39 AM",
    "riskScore": 15.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001714",
    "user": "CUST_0051",
    "amount": "\u20b967.06",
    "amountNum": 67.06,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:32 AM",
    "riskScore": 12.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001715",
    "user": "CUST_0007",
    "amount": "\u20b9356.43",
    "amountNum": 356.43,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:50 AM",
    "riskScore": 14.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001716",
    "user": "CUST_0082",
    "amount": "\u20b9396.51",
    "amountNum": 396.51,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:13 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001717",
    "user": "CUST_0033",
    "amount": "\u20b9336.25",
    "amountNum": 336.25,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:37 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001718",
    "user": "CUST_0007",
    "amount": "\u20b9374.90",
    "amountNum": 374.9,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:52 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001719",
    "user": "CUST_0093",
    "amount": "\u20b9407.60",
    "amountNum": 407.6,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:33 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001720",
    "user": "CUST_0050",
    "amount": "\u20b9449.64",
    "amountNum": 449.64,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:43 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001721",
    "user": "CUST_0089",
    "amount": "\u20b9209.21",
    "amountNum": 209.21,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:08 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001722",
    "user": "CUST_0057",
    "amount": "\u20b9230.18",
    "amountNum": 230.18,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:44 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001723",
    "user": "CUST_0033",
    "amount": "\u20b9394.67",
    "amountNum": 394.67,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001724",
    "user": "CUST_0098",
    "amount": "\u20b9405.20",
    "amountNum": 405.2,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:19 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001725",
    "user": "CUST_0075",
    "amount": "\u20b940.42",
    "amountNum": 40.42,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:59 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001726",
    "user": "CUST_0038",
    "amount": "\u20b928.70",
    "amountNum": 28.7,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:06 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001727",
    "user": "CUST_0033",
    "amount": "\u20b950.29",
    "amountNum": 50.29,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001728",
    "user": "CUST_0083",
    "amount": "\u20b9208.41",
    "amountNum": 208.41,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:09 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001729",
    "user": "CUST_0010",
    "amount": "\u20b9321.41",
    "amountNum": 321.41,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:28 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001730",
    "user": "CUST_0060",
    "amount": "\u20b9166.56",
    "amountNum": 166.56,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:30 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001731",
    "user": "CUST_0040",
    "amount": "\u20b91,659.71",
    "amountNum": 1659.71,
    "location": "Mumbai",
    "device": "New Device",
    "time": "09:21 PM",
    "riskScore": 77.9,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001732",
    "user": "CUST_0098",
    "amount": "\u20b9401.51",
    "amountNum": 401.51,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:48 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001733",
    "user": "CUST_0082",
    "amount": "\u20b9334.22",
    "amountNum": 334.22,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:37 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001734",
    "user": "CUST_0091",
    "amount": "\u20b9342.98",
    "amountNum": 342.98,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:41 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001735",
    "user": "CUST_0073",
    "amount": "\u20b9198.50",
    "amountNum": 198.5,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:03 AM",
    "riskScore": 14.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001736",
    "user": "CUST_0074",
    "amount": "\u20b9233.64",
    "amountNum": 233.64,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:20 AM",
    "riskScore": 14.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001737",
    "user": "CUST_0045",
    "amount": "\u20b923.77",
    "amountNum": 23.77,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:50 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001738",
    "user": "CUST_0032",
    "amount": "\u20b9421.86",
    "amountNum": 421.86,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:53 AM",
    "riskScore": 17.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001739",
    "user": "CUST_0093",
    "amount": "\u20b9155.12",
    "amountNum": 155.12,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:17 AM",
    "riskScore": 13.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001740",
    "user": "CUST_0040",
    "amount": "\u20b9355.08",
    "amountNum": 355.08,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:42 AM",
    "riskScore": 14.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001741",
    "user": "CUST_0041",
    "amount": "\u20b9445.05",
    "amountNum": 445.05,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:58 AM",
    "riskScore": 16.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001742",
    "user": "CUST_0010",
    "amount": "\u20b9114.75",
    "amountNum": 114.75,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:28 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001743",
    "user": "CUST_0084",
    "amount": "\u20b9232.97",
    "amountNum": 232.97,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:30 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001744",
    "user": "CUST_0074",
    "amount": "\u20b93,499.99",
    "amountNum": 3499.99,
    "location": "Mumbai",
    "device": "New Device",
    "time": "08:57 AM",
    "riskScore": 88.7,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001745",
    "user": "CUST_0004",
    "amount": "\u20b9203.78",
    "amountNum": 203.78,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:18 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001746",
    "user": "CUST_0011",
    "amount": "\u20b9172.39",
    "amountNum": 172.39,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:33 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001747",
    "user": "CUST_0078",
    "amount": "\u20b9430.15",
    "amountNum": 430.15,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:46 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001748",
    "user": "CUST_0024",
    "amount": "\u20b9428.45",
    "amountNum": 428.45,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:43 PM",
    "riskScore": 5.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001749",
    "user": "CUST_0007",
    "amount": "\u20b9353.30",
    "amountNum": 353.3,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001750",
    "user": "CUST_0071",
    "amount": "\u20b9147.45",
    "amountNum": 147.45,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001751",
    "user": "CUST_0032",
    "amount": "\u20b9155.56",
    "amountNum": 155.56,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:42 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001752",
    "user": "CUST_0056",
    "amount": "\u20b9101.87",
    "amountNum": 101.87,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001753",
    "user": "CUST_0062",
    "amount": "\u20b9444.46",
    "amountNum": 444.46,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001754",
    "user": "CUST_0032",
    "amount": "\u20b9202.02",
    "amountNum": 202.02,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001755",
    "user": "CUST_0001",
    "amount": "\u20b9243.82",
    "amountNum": 243.82,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:53 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001756",
    "user": "CUST_0023",
    "amount": "\u20b9235.68",
    "amountNum": 235.68,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:40 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001757",
    "user": "CUST_0043",
    "amount": "\u20b9157.28",
    "amountNum": 157.28,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:33 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001758",
    "user": "CUST_0098",
    "amount": "\u20b994.96",
    "amountNum": 94.96,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:25 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001759",
    "user": "CUST_0049",
    "amount": "\u20b9263.80",
    "amountNum": 263.8,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001760",
    "user": "CUST_0088",
    "amount": "\u20b9387.89",
    "amountNum": 387.89,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001761",
    "user": "CUST_0046",
    "amount": "\u20b965.98",
    "amountNum": 65.98,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:15 AM",
    "riskScore": 12.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001762",
    "user": "CUST_0092",
    "amount": "\u20b9443.96",
    "amountNum": 443.96,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:07 AM",
    "riskScore": 16.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001763",
    "user": "CUST_0053",
    "amount": "\u20b92,000.07",
    "amountNum": 2000.07,
    "location": "Mumbai",
    "device": "New Device",
    "time": "02:34 AM",
    "riskScore": 96.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001764",
    "user": "CUST_0022",
    "amount": "\u20b9216.93",
    "amountNum": 216.93,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:58 AM",
    "riskScore": 13.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001765",
    "user": "CUST_0043",
    "amount": "\u20b9232.13",
    "amountNum": 232.13,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:27 AM",
    "riskScore": 15.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001766",
    "user": "CUST_0022",
    "amount": "\u20b990.02",
    "amountNum": 90.02,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:22 AM",
    "riskScore": 12.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001767",
    "user": "CUST_0042",
    "amount": "\u20b93,856.74",
    "amountNum": 3856.74,
    "location": "Mumbai",
    "device": "New Device",
    "time": "05:43 AM",
    "riskScore": 96.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001768",
    "user": "CUST_0061",
    "amount": "\u20b9213.29",
    "amountNum": 213.29,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:43 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001769",
    "user": "CUST_0021",
    "amount": "\u20b94,208.23",
    "amountNum": 4208.23,
    "location": "Mumbai",
    "device": "New Device",
    "time": "07:21 AM",
    "riskScore": 89.1,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001770",
    "user": "CUST_0064",
    "amount": "\u20b9233.27",
    "amountNum": 233.27,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:48 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001771",
    "user": "CUST_0094",
    "amount": "\u20b9232.93",
    "amountNum": 232.93,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:03 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001772",
    "user": "CUST_0009",
    "amount": "\u20b9157.21",
    "amountNum": 157.21,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:11 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001773",
    "user": "CUST_0040",
    "amount": "\u20b9352.26",
    "amountNum": 352.26,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:30 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001774",
    "user": "CUST_0002",
    "amount": "\u20b9432.07",
    "amountNum": 432.07,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:22 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001775",
    "user": "CUST_0100",
    "amount": "\u20b9217.63",
    "amountNum": 217.63,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001776",
    "user": "CUST_0061",
    "amount": "\u20b9420.92",
    "amountNum": 420.92,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:54 PM",
    "riskScore": 5.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001777",
    "user": "CUST_0085",
    "amount": "\u20b9172.88",
    "amountNum": 172.88,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:13 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001778",
    "user": "CUST_0068",
    "amount": "\u20b929.30",
    "amountNum": 29.3,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001779",
    "user": "CUST_0040",
    "amount": "\u20b9211.43",
    "amountNum": 211.43,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:41 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001780",
    "user": "CUST_0008",
    "amount": "\u20b9425.39",
    "amountNum": 425.39,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:02 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001781",
    "user": "CUST_0012",
    "amount": "\u20b9113.10",
    "amountNum": 113.1,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:37 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001782",
    "user": "CUST_0068",
    "amount": "\u20b9132.47",
    "amountNum": 132.47,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:40 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001783",
    "user": "CUST_0066",
    "amount": "\u20b9293.47",
    "amountNum": 293.47,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:33 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001784",
    "user": "CUST_0002",
    "amount": "\u20b9352.19",
    "amountNum": 352.19,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:52 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001785",
    "user": "CUST_0084",
    "amount": "\u20b9315.62",
    "amountNum": 315.62,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001786",
    "user": "CUST_0043",
    "amount": "\u20b9373.70",
    "amountNum": 373.7,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:43 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001787",
    "user": "CUST_0055",
    "amount": "\u20b990.21",
    "amountNum": 90.21,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:33 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001788",
    "user": "CUST_0092",
    "amount": "\u20b916.55",
    "amountNum": 16.55,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:03 AM",
    "riskScore": 12.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001789",
    "user": "CUST_0079",
    "amount": "\u20b9432.10",
    "amountNum": 432.1,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:23 AM",
    "riskScore": 16.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001790",
    "user": "CUST_0013",
    "amount": "\u20b91,727.22",
    "amountNum": 1727.22,
    "location": "Mumbai",
    "device": "New Device",
    "time": "02:08 AM",
    "riskScore": 95.5,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001791",
    "user": "CUST_0031",
    "amount": "\u20b967.90",
    "amountNum": 67.9,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:25 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001792",
    "user": "CUST_0068",
    "amount": "\u20b9149.86",
    "amountNum": 149.86,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:54 AM",
    "riskScore": 13.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001793",
    "user": "CUST_0002",
    "amount": "\u20b94,301.29",
    "amountNum": 4301.29,
    "location": "Mumbai",
    "device": "New Device",
    "time": "05:16 AM",
    "riskScore": 96.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001794",
    "user": "CUST_0005",
    "amount": "\u20b9355.80",
    "amountNum": 355.8,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:04 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001795",
    "user": "CUST_0076",
    "amount": "\u20b9392.12",
    "amountNum": 392.12,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:02 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001796",
    "user": "CUST_0005",
    "amount": "\u20b9426.74",
    "amountNum": 426.74,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:56 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001797",
    "user": "CUST_0058",
    "amount": "\u20b972.68",
    "amountNum": 72.68,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:30 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001798",
    "user": "CUST_0039",
    "amount": "\u20b9316.77",
    "amountNum": 316.77,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:45 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001799",
    "user": "CUST_0031",
    "amount": "\u20b9383.98",
    "amountNum": 383.98,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:49 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001800",
    "user": "CUST_0049",
    "amount": "\u20b9115.45",
    "amountNum": 115.45,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:10 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001801",
    "user": "CUST_0018",
    "amount": "\u20b9306.05",
    "amountNum": 306.05,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:22 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001802",
    "user": "CUST_0079",
    "amount": "\u20b9337.86",
    "amountNum": 337.86,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:34 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001803",
    "user": "CUST_0029",
    "amount": "\u20b9222.89",
    "amountNum": 222.89,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:03 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001804",
    "user": "CUST_0086",
    "amount": "\u20b91,902.91",
    "amountNum": 1902.91,
    "location": "Mumbai",
    "device": "New Device",
    "time": "04:44 PM",
    "riskScore": 76.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001805",
    "user": "CUST_0057",
    "amount": "\u20b92,050.06",
    "amountNum": 2050.06,
    "location": "Mumbai",
    "device": "New Device",
    "time": "05:14 PM",
    "riskScore": 85.8,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001806",
    "user": "CUST_0087",
    "amount": "\u20b9325.85",
    "amountNum": 325.85,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:09 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001807",
    "user": "CUST_0043",
    "amount": "\u20b927.56",
    "amountNum": 27.56,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:34 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001808",
    "user": "CUST_0022",
    "amount": "\u20b9333.45",
    "amountNum": 333.45,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001809",
    "user": "CUST_0075",
    "amount": "\u20b9202.60",
    "amountNum": 202.6,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001810",
    "user": "CUST_0092",
    "amount": "\u20b9348.94",
    "amountNum": 348.94,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001811",
    "user": "CUST_0043",
    "amount": "\u20b9369.46",
    "amountNum": 369.46,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:17 AM",
    "riskScore": 16.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001812",
    "user": "CUST_0100",
    "amount": "\u20b9238.73",
    "amountNum": 238.73,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:42 AM",
    "riskScore": 14.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001813",
    "user": "CUST_0011",
    "amount": "\u20b9379.49",
    "amountNum": 379.49,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:31 AM",
    "riskScore": 14.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001814",
    "user": "CUST_0041",
    "amount": "\u20b936.50",
    "amountNum": 36.5,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:26 AM",
    "riskScore": 12.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001815",
    "user": "CUST_0080",
    "amount": "\u20b9270.87",
    "amountNum": 270.87,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:43 AM",
    "riskScore": 15.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001816",
    "user": "CUST_0029",
    "amount": "\u20b9306.39",
    "amountNum": 306.39,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:01 AM",
    "riskScore": 15.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001817",
    "user": "CUST_0080",
    "amount": "\u20b9228.53",
    "amountNum": 228.53,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:26 AM",
    "riskScore": 14.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001818",
    "user": "CUST_0028",
    "amount": "\u20b9207.97",
    "amountNum": 207.97,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:27 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001819",
    "user": "CUST_0059",
    "amount": "\u20b9159.97",
    "amountNum": 159.97,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:32 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001820",
    "user": "CUST_0039",
    "amount": "\u20b9264.00",
    "amountNum": 264.0,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:52 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001821",
    "user": "CUST_0100",
    "amount": "\u20b9340.24",
    "amountNum": 340.24,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:11 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001822",
    "user": "CUST_0017",
    "amount": "\u20b9128.35",
    "amountNum": 128.35,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:31 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001823",
    "user": "CUST_0067",
    "amount": "\u20b9363.07",
    "amountNum": 363.07,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:18 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001824",
    "user": "CUST_0055",
    "amount": "\u20b931.43",
    "amountNum": 31.43,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:29 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001825",
    "user": "CUST_0022",
    "amount": "\u20b9185.82",
    "amountNum": 185.82,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:33 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001826",
    "user": "CUST_0045",
    "amount": "\u20b9429.77",
    "amountNum": 429.77,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:24 PM",
    "riskScore": 5.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001827",
    "user": "CUST_0020",
    "amount": "\u20b9117.18",
    "amountNum": 117.18,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:54 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001828",
    "user": "CUST_0010",
    "amount": "\u20b9422.71",
    "amountNum": 422.71,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:37 PM",
    "riskScore": 5.2,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001829",
    "user": "CUST_0078",
    "amount": "\u20b9304.69",
    "amountNum": 304.69,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:07 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001830",
    "user": "CUST_0001",
    "amount": "\u20b9241.91",
    "amountNum": 241.91,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:53 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001831",
    "user": "CUST_0057",
    "amount": "\u20b9294.82",
    "amountNum": 294.82,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:14 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001832",
    "user": "CUST_0078",
    "amount": "\u20b9412.91",
    "amountNum": 412.91,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001833",
    "user": "CUST_0084",
    "amount": "\u20b9148.46",
    "amountNum": 148.46,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:01 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001834",
    "user": "CUST_0041",
    "amount": "\u20b9228.54",
    "amountNum": 228.54,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001835",
    "user": "CUST_0053",
    "amount": "\u20b9427.59",
    "amountNum": 427.59,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:55 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001836",
    "user": "CUST_0008",
    "amount": "\u20b9320.77",
    "amountNum": 320.77,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:22 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001837",
    "user": "CUST_0088",
    "amount": "\u20b9319.30",
    "amountNum": 319.3,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:32 AM",
    "riskScore": 14.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001838",
    "user": "CUST_0084",
    "amount": "\u20b9448.58",
    "amountNum": 448.58,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:46 AM",
    "riskScore": 14.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001839",
    "user": "CUST_0099",
    "amount": "\u20b9442.89",
    "amountNum": 442.89,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:38 AM",
    "riskScore": 17.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001840",
    "user": "CUST_0092",
    "amount": "\u20b93,603.22",
    "amountNum": 3603.22,
    "location": "Mumbai",
    "device": "New Device",
    "time": "03:20 AM",
    "riskScore": 96.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001841",
    "user": "CUST_0014",
    "amount": "\u20b987.90",
    "amountNum": 87.9,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:23 AM",
    "riskScore": 12.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001842",
    "user": "CUST_0031",
    "amount": "\u20b9101.34",
    "amountNum": 101.34,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:39 AM",
    "riskScore": 12.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001843",
    "user": "CUST_0094",
    "amount": "\u20b9272.04",
    "amountNum": 272.04,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:38 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001844",
    "user": "CUST_0098",
    "amount": "\u20b9421.82",
    "amountNum": 421.82,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:55 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001845",
    "user": "CUST_0057",
    "amount": "\u20b9232.98",
    "amountNum": 232.98,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:12 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001846",
    "user": "CUST_0044",
    "amount": "\u20b9338.51",
    "amountNum": 338.51,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:00 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001847",
    "user": "CUST_0027",
    "amount": "\u20b9193.16",
    "amountNum": 193.16,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:59 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001848",
    "user": "CUST_0022",
    "amount": "\u20b9225.72",
    "amountNum": 225.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:37 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001849",
    "user": "CUST_0006",
    "amount": "\u20b9396.60",
    "amountNum": 396.6,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:56 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001850",
    "user": "CUST_0068",
    "amount": "\u20b9435.37",
    "amountNum": 435.37,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:57 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001851",
    "user": "CUST_0048",
    "amount": "\u20b9232.93",
    "amountNum": 232.93,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:21 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001852",
    "user": "CUST_0032",
    "amount": "\u20b9367.47",
    "amountNum": 367.47,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:15 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001853",
    "user": "CUST_0074",
    "amount": "\u20b9355.73",
    "amountNum": 355.73,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:06 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001854",
    "user": "CUST_0073",
    "amount": "\u20b991.31",
    "amountNum": 91.31,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:29 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001855",
    "user": "CUST_0037",
    "amount": "\u20b92,582.94",
    "amountNum": 2582.94,
    "location": "Mumbai",
    "device": "New Device",
    "time": "05:52 PM",
    "riskScore": 89.6,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001856",
    "user": "CUST_0012",
    "amount": "\u20b9370.62",
    "amountNum": 370.62,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:03 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001857",
    "user": "CUST_0086",
    "amount": "\u20b9446.75",
    "amountNum": 446.75,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001858",
    "user": "CUST_0093",
    "amount": "\u20b9334.07",
    "amountNum": 334.07,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:33 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001859",
    "user": "CUST_0083",
    "amount": "\u20b9214.58",
    "amountNum": 214.58,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001860",
    "user": "CUST_0070",
    "amount": "\u20b927.68",
    "amountNum": 27.68,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:07 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001861",
    "user": "CUST_0051",
    "amount": "\u20b9216.14",
    "amountNum": 216.14,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:52 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001862",
    "user": "CUST_0059",
    "amount": "\u20b992.03",
    "amountNum": 92.03,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:50 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001863",
    "user": "CUST_0095",
    "amount": "\u20b967.97",
    "amountNum": 67.97,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:03 AM",
    "riskScore": 12.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001864",
    "user": "CUST_0017",
    "amount": "\u20b928.44",
    "amountNum": 28.44,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:28 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001865",
    "user": "CUST_0062",
    "amount": "\u20b9249.70",
    "amountNum": 249.7,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:14 AM",
    "riskScore": 14.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001866",
    "user": "CUST_0010",
    "amount": "\u20b9258.33",
    "amountNum": 258.33,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:14 AM",
    "riskScore": 14.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001867",
    "user": "CUST_0054",
    "amount": "\u20b9235.19",
    "amountNum": 235.19,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:29 AM",
    "riskScore": 13.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001868",
    "user": "CUST_0034",
    "amount": "\u20b9424.57",
    "amountNum": 424.57,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:37 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001869",
    "user": "CUST_0022",
    "amount": "\u20b9127.56",
    "amountNum": 127.56,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:22 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001870",
    "user": "CUST_0021",
    "amount": "\u20b9324.87",
    "amountNum": 324.87,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:07 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001871",
    "user": "CUST_0031",
    "amount": "\u20b9358.54",
    "amountNum": 358.54,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:51 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001872",
    "user": "CUST_0099",
    "amount": "\u20b9256.72",
    "amountNum": 256.72,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:07 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001873",
    "user": "CUST_0047",
    "amount": "\u20b9188.52",
    "amountNum": 188.52,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:33 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001874",
    "user": "CUST_0092",
    "amount": "\u20b995.67",
    "amountNum": 95.67,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:59 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001875",
    "user": "CUST_0045",
    "amount": "\u20b979.23",
    "amountNum": 79.23,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:14 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001876",
    "user": "CUST_0037",
    "amount": "\u20b9245.06",
    "amountNum": 245.06,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:13 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001877",
    "user": "CUST_0079",
    "amount": "\u20b940.47",
    "amountNum": 40.47,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:24 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001878",
    "user": "CUST_0091",
    "amount": "\u20b9289.17",
    "amountNum": 289.17,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001879",
    "user": "CUST_0068",
    "amount": "\u20b9162.08",
    "amountNum": 162.08,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:48 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001880",
    "user": "CUST_0069",
    "amount": "\u20b9231.00",
    "amountNum": 231.0,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001881",
    "user": "CUST_0092",
    "amount": "\u20b94,178.86",
    "amountNum": 4178.86,
    "location": "Mumbai",
    "device": "New Device",
    "time": "05:04 PM",
    "riskScore": 89.6,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001882",
    "user": "CUST_0011",
    "amount": "\u20b9442.14",
    "amountNum": 442.14,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:20 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001883",
    "user": "CUST_0010",
    "amount": "\u20b941.95",
    "amountNum": 41.95,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:42 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001884",
    "user": "CUST_0045",
    "amount": "\u20b9320.56",
    "amountNum": 320.56,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:18 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001885",
    "user": "CUST_0006",
    "amount": "\u20b9443.10",
    "amountNum": 443.1,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:40 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001886",
    "user": "CUST_0011",
    "amount": "\u20b9116.38",
    "amountNum": 116.38,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001887",
    "user": "CUST_0071",
    "amount": "\u20b9226.89",
    "amountNum": 226.89,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:48 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001888",
    "user": "CUST_0057",
    "amount": "\u20b9396.99",
    "amountNum": 396.99,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001889",
    "user": "CUST_0011",
    "amount": "\u20b9221.26",
    "amountNum": 221.26,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:51 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001890",
    "user": "CUST_0073",
    "amount": "\u20b9159.38",
    "amountNum": 159.38,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:17 AM",
    "riskScore": 13.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001891",
    "user": "CUST_0016",
    "amount": "\u20b9201.49",
    "amountNum": 201.49,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:47 AM",
    "riskScore": 12.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001892",
    "user": "CUST_0062",
    "amount": "\u20b975.10",
    "amountNum": 75.1,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:54 AM",
    "riskScore": 12.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001893",
    "user": "CUST_0023",
    "amount": "\u20b948.90",
    "amountNum": 48.9,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:53 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001894",
    "user": "CUST_0021",
    "amount": "\u20b9398.58",
    "amountNum": 398.58,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:32 AM",
    "riskScore": 13.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001895",
    "user": "CUST_0065",
    "amount": "\u20b91,295.63",
    "amountNum": 1295.63,
    "location": "Mumbai",
    "device": "New Device",
    "time": "05:02 AM",
    "riskScore": 80.0,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001896",
    "user": "CUST_0036",
    "amount": "\u20b9127.38",
    "amountNum": 127.38,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:44 AM",
    "riskScore": 13.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001897",
    "user": "CUST_0054",
    "amount": "\u20b9155.30",
    "amountNum": 155.3,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:11 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001898",
    "user": "CUST_0071",
    "amount": "\u20b9192.25",
    "amountNum": 192.25,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:38 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001899",
    "user": "CUST_0009",
    "amount": "\u20b935.06",
    "amountNum": 35.06,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:47 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001900",
    "user": "CUST_0081",
    "amount": "\u20b9248.53",
    "amountNum": 248.53,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:15 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001901",
    "user": "CUST_0070",
    "amount": "\u20b91,143.98",
    "amountNum": 1143.98,
    "location": "Mumbai",
    "device": "New Device",
    "time": "08:57 AM",
    "riskScore": 76.3,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001902",
    "user": "CUST_0034",
    "amount": "\u20b9421.55",
    "amountNum": 421.55,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:28 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001903",
    "user": "CUST_0028",
    "amount": "\u20b9244.88",
    "amountNum": 244.88,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:45 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001904",
    "user": "CUST_0045",
    "amount": "\u20b971.88",
    "amountNum": 71.88,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:33 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001905",
    "user": "CUST_0005",
    "amount": "\u20b9261.95",
    "amountNum": 261.95,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:12 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001906",
    "user": "CUST_0026",
    "amount": "\u20b923.21",
    "amountNum": 23.21,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:58 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001907",
    "user": "CUST_0052",
    "amount": "\u20b9424.66",
    "amountNum": 424.66,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001908",
    "user": "CUST_0021",
    "amount": "\u20b9419.22",
    "amountNum": 419.22,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:52 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001909",
    "user": "CUST_0014",
    "amount": "\u20b9103.47",
    "amountNum": 103.47,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:27 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001910",
    "user": "CUST_0086",
    "amount": "\u20b9296.80",
    "amountNum": 296.8,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:46 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001911",
    "user": "CUST_0030",
    "amount": "\u20b9431.99",
    "amountNum": 431.99,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:11 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001912",
    "user": "CUST_0018",
    "amount": "\u20b9258.37",
    "amountNum": 258.37,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:15 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001913",
    "user": "CUST_0010",
    "amount": "\u20b9121.76",
    "amountNum": 121.76,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:49 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001914",
    "user": "CUST_0021",
    "amount": "\u20b9232.72",
    "amountNum": 232.72,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:23 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001915",
    "user": "CUST_0067",
    "amount": "\u20b9438.84",
    "amountNum": 438.84,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:39 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001916",
    "user": "CUST_0072",
    "amount": "\u20b9368.67",
    "amountNum": 368.67,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:51 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001917",
    "user": "CUST_0025",
    "amount": "\u20b9294.94",
    "amountNum": 294.94,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:13 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001918",
    "user": "CUST_0061",
    "amount": "\u20b9399.49",
    "amountNum": 399.49,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:06 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001919",
    "user": "CUST_0047",
    "amount": "\u20b988.58",
    "amountNum": 88.58,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001920",
    "user": "CUST_0084",
    "amount": "\u20b9384.95",
    "amountNum": 384.95,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:19 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001921",
    "user": "CUST_0032",
    "amount": "\u20b9257.37",
    "amountNum": 257.37,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001922",
    "user": "CUST_0088",
    "amount": "\u20b9331.47",
    "amountNum": 331.47,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:38 AM",
    "riskScore": 14.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001923",
    "user": "CUST_0070",
    "amount": "\u20b9300.76",
    "amountNum": 300.76,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:01 AM",
    "riskScore": 14.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001924",
    "user": "CUST_0020",
    "amount": "\u20b984.15",
    "amountNum": 84.15,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:24 AM",
    "riskScore": 12.8,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001925",
    "user": "CUST_0038",
    "amount": "\u20b9108.72",
    "amountNum": 108.72,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:41 AM",
    "riskScore": 13.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001926",
    "user": "CUST_0057",
    "amount": "\u20b9213.30",
    "amountNum": 213.3,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:08 AM",
    "riskScore": 13.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001927",
    "user": "CUST_0028",
    "amount": "\u20b9262.32",
    "amountNum": 262.32,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:20 AM",
    "riskScore": 15.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001928",
    "user": "CUST_0085",
    "amount": "\u20b9259.15",
    "amountNum": 259.15,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:02 AM",
    "riskScore": 14.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001929",
    "user": "CUST_0008",
    "amount": "\u20b9191.52",
    "amountNum": 191.52,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:19 AM",
    "riskScore": 13.1,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001930",
    "user": "CUST_0030",
    "amount": "\u20b9363.92",
    "amountNum": 363.92,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:05 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001931",
    "user": "CUST_0004",
    "amount": "\u20b962.30",
    "amountNum": 62.3,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:31 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001932",
    "user": "CUST_0058",
    "amount": "\u20b9203.51",
    "amountNum": 203.51,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:56 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001933",
    "user": "CUST_0013",
    "amount": "\u20b9321.21",
    "amountNum": 321.21,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:18 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001934",
    "user": "CUST_0087",
    "amount": "\u20b9234.55",
    "amountNum": 234.55,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:08 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001935",
    "user": "CUST_0051",
    "amount": "\u20b9149.16",
    "amountNum": 149.16,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "09:28 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001936",
    "user": "CUST_0044",
    "amount": "\u20b976.76",
    "amountNum": 76.76,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:50 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001937",
    "user": "CUST_0080",
    "amount": "\u20b9129.16",
    "amountNum": 129.16,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:41 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001938",
    "user": "CUST_0033",
    "amount": "\u20b9445.30",
    "amountNum": 445.3,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "12:09 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001939",
    "user": "CUST_0034",
    "amount": "\u20b9300.18",
    "amountNum": 300.18,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001940",
    "user": "CUST_0072",
    "amount": "\u20b9245.55",
    "amountNum": 245.55,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:53 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001941",
    "user": "CUST_0062",
    "amount": "\u20b957.90",
    "amountNum": 57.9,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:18 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001942",
    "user": "CUST_0042",
    "amount": "\u20b9272.56",
    "amountNum": 272.56,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:26 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001943",
    "user": "CUST_0027",
    "amount": "\u20b9279.00",
    "amountNum": 279.0,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:38 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001944",
    "user": "CUST_0031",
    "amount": "\u20b9185.17",
    "amountNum": 185.17,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:17 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001945",
    "user": "CUST_0078",
    "amount": "\u20b9337.43",
    "amountNum": 337.43,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:46 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001946",
    "user": "CUST_0039",
    "amount": "\u20b9364.58",
    "amountNum": 364.58,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:41 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001947",
    "user": "CUST_0010",
    "amount": "\u20b9205.88",
    "amountNum": 205.88,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:00 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001948",
    "user": "CUST_0024",
    "amount": "\u20b9338.61",
    "amountNum": 338.61,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:56 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001949",
    "user": "CUST_0099",
    "amount": "\u20b9404.47",
    "amountNum": 404.47,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:22 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001950",
    "user": "CUST_0095",
    "amount": "\u20b9139.64",
    "amountNum": 139.64,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:20 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001951",
    "user": "CUST_0086",
    "amount": "\u20b946.76",
    "amountNum": 46.76,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:01 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001952",
    "user": "CUST_0035",
    "amount": "\u20b9398.69",
    "amountNum": 398.69,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:24 AM",
    "riskScore": 14.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001953",
    "user": "CUST_0027",
    "amount": "\u20b951.31",
    "amountNum": 51.31,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:41 AM",
    "riskScore": 12.5,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001954",
    "user": "CUST_0069",
    "amount": "\u20b9347.37",
    "amountNum": 347.37,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:00 AM",
    "riskScore": 13.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001955",
    "user": "CUST_0029",
    "amount": "\u20b9406.63",
    "amountNum": 406.63,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:49 AM",
    "riskScore": 16.9,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001956",
    "user": "CUST_0044",
    "amount": "\u20b9102.10",
    "amountNum": 102.1,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:50 AM",
    "riskScore": 12.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001957",
    "user": "CUST_0036",
    "amount": "\u20b964.80",
    "amountNum": 64.8,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:00 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001958",
    "user": "CUST_0040",
    "amount": "\u20b9405.67",
    "amountNum": 405.67,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:23 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001959",
    "user": "CUST_0024",
    "amount": "\u20b9384.20",
    "amountNum": 384.2,
    "location": "Delhi",
    "device": "Trusted",
    "time": "07:00 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001960",
    "user": "CUST_0020",
    "amount": "\u20b9246.28",
    "amountNum": 246.28,
    "location": "Delhi",
    "device": "Trusted",
    "time": "08:28 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001961",
    "user": "CUST_0015",
    "amount": "\u20b9125.40",
    "amountNum": 125.4,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:54 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001962",
    "user": "CUST_0024",
    "amount": "\u20b9301.89",
    "amountNum": 301.89,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:39 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001963",
    "user": "CUST_0060",
    "amount": "\u20b9383.34",
    "amountNum": 383.34,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:32 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001964",
    "user": "CUST_0009",
    "amount": "\u20b9238.95",
    "amountNum": 238.95,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:19 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001965",
    "user": "CUST_0024",
    "amount": "\u20b9308.82",
    "amountNum": 308.82,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:22 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001966",
    "user": "CUST_0016",
    "amount": "\u20b9328.69",
    "amountNum": 328.69,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:09 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001967",
    "user": "CUST_0018",
    "amount": "\u20b936.33",
    "amountNum": 36.33,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:31 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001968",
    "user": "CUST_0009",
    "amount": "\u20b9328.74",
    "amountNum": 328.74,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:03 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001969",
    "user": "CUST_0010",
    "amount": "\u20b930.08",
    "amountNum": 30.08,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:06 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001970",
    "user": "CUST_0094",
    "amount": "\u20b9363.61",
    "amountNum": 363.61,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:36 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001971",
    "user": "CUST_0009",
    "amount": "\u20b9348.83",
    "amountNum": 348.83,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:10 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001972",
    "user": "CUST_0012",
    "amount": "\u20b9419.25",
    "amountNum": 419.25,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:33 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001973",
    "user": "CUST_0023",
    "amount": "\u20b9297.10",
    "amountNum": 297.1,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "04:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001974",
    "user": "CUST_0022",
    "amount": "\u20b92,791.92",
    "amountNum": 2791.92,
    "location": "Mumbai",
    "device": "New Device",
    "time": "05:31 PM",
    "riskScore": 81.6,
    "riskLevel": "High",
    "status": "Review",
    "reasons": [
      {
        "type": "critical",
        "title": "Amount deviation",
        "desc": "Higher than normal baseline"
      }
    ]
  },
  {
    "id": "TX_001975",
    "user": "CUST_0091",
    "amount": "\u20b9164.10",
    "amountNum": 164.1,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "06:58 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001976",
    "user": "CUST_0021",
    "amount": "\u20b9365.56",
    "amountNum": 365.56,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "07:49 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001977",
    "user": "CUST_0067",
    "amount": "\u20b9148.17",
    "amountNum": 148.17,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:50 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001978",
    "user": "CUST_0054",
    "amount": "\u20b9379.42",
    "amountNum": 379.42,
    "location": "Delhi",
    "device": "Trusted",
    "time": "10:16 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001979",
    "user": "CUST_0035",
    "amount": "\u20b9130.18",
    "amountNum": 130.18,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:45 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001980",
    "user": "CUST_0022",
    "amount": "\u20b9370.11",
    "amountNum": 370.11,
    "location": "Delhi",
    "device": "Trusted",
    "time": "12:52 AM",
    "riskScore": 14.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001981",
    "user": "CUST_0046",
    "amount": "\u20b9383.43",
    "amountNum": 383.43,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:37 AM",
    "riskScore": 15.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001982",
    "user": "CUST_0018",
    "amount": "\u20b9152.54",
    "amountNum": 152.54,
    "location": "Delhi",
    "device": "Trusted",
    "time": "01:52 AM",
    "riskScore": 13.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001983",
    "user": "CUST_0055",
    "amount": "\u20b9385.02",
    "amountNum": 385.02,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "02:15 AM",
    "riskScore": 16.7,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001984",
    "user": "CUST_0047",
    "amount": "\u20b9449.06",
    "amountNum": 449.06,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "03:36 AM",
    "riskScore": 16.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001985",
    "user": "CUST_0100",
    "amount": "\u20b957.84",
    "amountNum": 57.84,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:51 AM",
    "riskScore": 12.6,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001986",
    "user": "CUST_0042",
    "amount": "\u20b958.73",
    "amountNum": 58.73,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:14 AM",
    "riskScore": 12.3,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001987",
    "user": "CUST_0080",
    "amount": "\u20b9201.81",
    "amountNum": 201.81,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:54 AM",
    "riskScore": 14.4,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001988",
    "user": "CUST_0002",
    "amount": "\u20b9228.39",
    "amountNum": 228.39,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:59 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001989",
    "user": "CUST_0061",
    "amount": "\u20b936.33",
    "amountNum": 36.33,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "08:16 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001990",
    "user": "CUST_0052",
    "amount": "\u20b9188.92",
    "amountNum": 188.92,
    "location": "Delhi",
    "device": "Trusted",
    "time": "09:17 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001991",
    "user": "CUST_0045",
    "amount": "\u20b9337.91",
    "amountNum": 337.91,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "10:17 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001992",
    "user": "CUST_0038",
    "amount": "\u20b9432.60",
    "amountNum": 432.6,
    "location": "Delhi",
    "device": "Trusted",
    "time": "11:05 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001993",
    "user": "CUST_0023",
    "amount": "\u20b9202.95",
    "amountNum": 202.95,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "11:41 AM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001994",
    "user": "CUST_0015",
    "amount": "\u20b926.23",
    "amountNum": 26.23,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "01:05 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001995",
    "user": "CUST_0080",
    "amount": "\u20b9258.91",
    "amountNum": 258.91,
    "location": "Delhi",
    "device": "Trusted",
    "time": "02:21 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001996",
    "user": "CUST_0066",
    "amount": "\u20b9186.90",
    "amountNum": 186.9,
    "location": "Delhi",
    "device": "Trusted",
    "time": "03:32 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001997",
    "user": "CUST_0012",
    "amount": "\u20b9171.45",
    "amountNum": 171.45,
    "location": "Delhi",
    "device": "Trusted",
    "time": "04:32 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001998",
    "user": "CUST_0040",
    "amount": "\u20b9246.58",
    "amountNum": 246.58,
    "location": "Delhi",
    "device": "Trusted",
    "time": "05:03 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_001999",
    "user": "CUST_0025",
    "amount": "\u20b9447.12",
    "amountNum": 447.12,
    "location": "Bangalore",
    "device": "Trusted",
    "time": "05:24 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  },
  {
    "id": "TX_002000",
    "user": "CUST_0026",
    "amount": "\u20b933.37",
    "amountNum": 33.37,
    "location": "Delhi",
    "device": "Trusted",
    "time": "06:47 PM",
    "riskScore": 5.0,
    "riskLevel": "Low",
    "status": "Approved",
    "reasons": [
      {
        "type": "normal",
        "title": "Standard transaction profile",
        "desc": "Matches user baseline"
      }
    ]
  }
];

export const statCardsData = [
  { title: "Transactions", value: "2,000", subtext: "+12.4%", isPositive: true, color: "cyan" },
  { title: "Suspicious", value: "70", subtext: "+8.2%", isPositive: false, color: "amber" },
  { title: "High Risk", value: "63", subtext: "Attention", isPositive: false, color: "rose" },
  { title: "Avg Risk", value: "10.1", subtext: "Normal", isPositive: true, color: "emerald" }
];

export const risk7DayTrendData = [
  { day: "Jan 10", low: 240, medium: 1, high: 8 },
  { day: "Jan 13", low: 280, medium: 1, high: 9 },
  { day: "Jan 17", low: 310, medium: 2, high: 11 },
  { day: "Jan 21", low: 290, medium: 1, high: 10 },
  { day: "Jan 25", low: 350, medium: 1, high: 12 },
  { day: "Jan 28", low: 380, medium: 1, high: 7 },
  { day: "Jan 31", low: 380, medium: 0, high: 6 }
];

export const riskDonutData = [
  { name: "Low", value: 96.5, color: "#10b981" },
  { name: "Medium", value: 0.4, color: "#f59e0b" },
  { name: "High", value: 3.1, color: "#ef4444" }
];

export const mockAlerts = [
  {
    id: "TX_000015",
    severity: "CRITICAL",
    title: "High ML Risk Probability",
    description: "Suspicious beneficiary BENEF_SUSP_9706 with amount ₹1,434.13.",
    time: "10-01-2026 19:33",
    status: "Active"
  }
];
