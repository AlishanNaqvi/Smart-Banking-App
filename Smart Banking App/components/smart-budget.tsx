"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle } from "lucide-react"

const initialBudgets = [
  { category: "Food", limit: 500, spent: 350 },
  { category: "Transportation", limit: 200, spent: 150 },
  { category: "Entertainment", limit: 300, spent: 200 },
]

export default function SmartBudget() {
  const [budgets, setBudgets] = useState(initialBudgets)
  const [newCategory, setNewCategory] = useState("")
  const [newLimit, setNewLimit] = useState("")

  const addBudget = () => {
    if (newCategory && newLimit) {
      setBudgets([...budgets, { category: newCategory, limit: Number(newLimit), spent: 0 }])
      setNewCategory("")
      setNewLimit("")
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Smart Budgeting</CardTitle>
      </CardHeader>
      <CardContent>
        {budgets.map((budget, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-2">
              <span>{budget.category}</span>
              <span>
                ${budget.spent} / ${budget.limit}
              </span>
            </div>
            <Progress value={(budget.spent / budget.limit) * 100} />
          </div>
        ))}
        <div className="flex gap-2 mt-4">
          <Input placeholder="Category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
          <Input placeholder="Limit" type="number" value={newLimit} onChange={(e) => setNewLimit(e.target.value)} />
          <Button onClick={addBudget}>
            <PlusCircle className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

