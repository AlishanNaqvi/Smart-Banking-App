"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, Wallet, CreditCard, ArrowRightLeft, TrendingUp } from "lucide-react"

export default function Dashboard() {
  const [userName, setUserName] = useState("")
  const router = useRouter()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}")
    setUserName(user.name || "")
  }, [])

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Welcome back, {userName}</h2>

      <Card>
        <CardHeader>
          <CardTitle>Total Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-primary">$19,370.24</p>
        </CardContent>
      </Card>

      <Tabs defaultValue="accounts" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="accounts">Accounts</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="investments">Investments</TabsTrigger>
          <TabsTrigger value="stocks">Stocks</TabsTrigger>
        </TabsList>
        <TabsContent value="accounts">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Checking Account</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-primary">$5,678.90</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Savings Account</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-primary">$10,234.56</p>
                <p className="text-sm text-muted-foreground">Interest Rate: 2.5% APY</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Credit Account</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-primary">$3,456.78</p>
                <p className="text-sm text-muted-foreground">Available Credit: $6,543.22</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="cards">
          <Card>
            <CardHeader>
              <CardTitle>Credit Cards</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full" onClick={() => router.push("/cards")}>
                Manage Cards
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="investments">
          <Card>
            <CardHeader>
              <CardTitle>Investment Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-primary">$50,000.00</p>
              <p className="text-sm text-green-500">+5.2% Today</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="stocks">
          <Card>
            <CardHeader>
              <CardTitle>Stock Market Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">
                S&P 500: <span className="text-green-500">+1.2%</span>
              </p>
              <p className="text-lg font-semibold">
                NASDAQ: <span className="text-red-500">-0.5%</span>
              </p>
              <p className="text-lg font-semibold">
                DOW: <span className="text-green-500">+0.8%</span>
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-2 gap-4">
        <Button className="flex items-center justify-center gap-2" onClick={() => router.push("/transfer")}>
          <ArrowRightLeft className="w-4 h-4" />
          Transfer
        </Button>
        <Button className="flex items-center justify-center gap-2" onClick={() => router.push("/pay-bills")}>
          <Wallet className="w-4 h-4" />
          Pay Bills
        </Button>
        <Button className="flex items-center justify-center gap-2" onClick={() => router.push("/cards")}>
          <CreditCard className="w-4 h-4" />
          Cards
        </Button>
        <Button className="flex items-center justify-center gap-2" onClick={() => router.push("/budgeting")}>
          <PieChart className="w-4 h-4" />
          Budgeting
        </Button>
        <Button
          className="flex items-center justify-center gap-2 col-span-2"
          onClick={() => router.push("/trade-stocks")}
        >
          <TrendingUp className="w-4 h-4" />
          Trade Stocks
        </Button>
      </div>
    </div>
  )
}

