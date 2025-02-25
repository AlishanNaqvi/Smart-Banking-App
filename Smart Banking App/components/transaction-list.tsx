"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const transactions = [
  { id: 1, date: "2023-06-01", description: "Grocery Store", amount: -85.32, category: "Food" },
  { id: 2, date: "2023-06-02", description: "Gas Station", amount: -45.0, category: "Transportation" },
  { id: 3, date: "2023-06-03", description: "Online Shopping", amount: -120.99, category: "Shopping" },
  { id: 4, date: "2023-06-04", description: "Salary Deposit", amount: 2500.0, category: "Income" },
  { id: 5, date: "2023-06-05", description: "Restaurant", amount: -65.5, category: "Food" },
]

export default function TransactionList() {
  const [filter, setFilter] = useState("")
  const [category, setCategory] = useState("All")

  const filteredTransactions = transactions.filter(
    (t) =>
      t.description.toLowerCase().includes(filter.toLowerCase()) && (category === "All" || t.category === category),
  )

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Input placeholder="Search transactions" value={filter} onChange={(e) => setFilter(e.target.value)} />
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              <SelectItem value="Food">Food</SelectItem>
              <SelectItem value="Transportation">Transportation</SelectItem>
              <SelectItem value="Shopping">Shopping</SelectItem>
              <SelectItem value="Income">Income</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ul className="space-y-2">
          {filteredTransactions.map((t) => (
            <li key={t.id} className="flex justify-between items-center p-2 bg-gray-100 rounded">
              <div>
                <p className="font-semibold">{t.description}</p>
                <p className="text-sm text-gray-500">{t.date}</p>
              </div>
              <div className={`font-semibold ${t.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                {t.amount > 0 ? "+" : ""}
                {t.amount.toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

