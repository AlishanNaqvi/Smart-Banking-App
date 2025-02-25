"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpIcon, ArrowDownIcon, Sparkles } from "lucide-react"

// Mock data with predictions
const stocks = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 150.25,
    change: 2.5,
    prediction: {
      analysis: "Strong product lineup and services growth",
      recommendation: "Buy",
      confidence: 85,
      potentialReturn: 12.5,
    },
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 2750.8,
    change: -1.2,
    prediction: {
      analysis: "AI investments and ad revenue growth",
      recommendation: "Buy",
      confidence: 80,
      potentialReturn: 15.3,
    },
  },
  {
    symbol: "MSFT",
    name: "Microsoft",
    price: 305.15,
    change: 0.8,
    prediction: {
      analysis: "Cloud growth and AI integration",
      recommendation: "Buy",
      confidence: 90,
      potentialReturn: 18.2,
    },
  },
  {
    symbol: "AMZN",
    name: "Amazon",
    price: 3380.5,
    change: -0.5,
    prediction: {
      analysis: "E-commerce recovery and AWS strength",
      recommendation: "Hold",
      confidence: 75,
      potentialReturn: 8.5,
    },
  },
]

const crypto = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: 52000.35,
    change: 3.2,
    prediction: {
      analysis: "Institutional adoption increasing",
      recommendation: "Buy",
      confidence: 78,
      potentialReturn: 25.8,
    },
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: 3200.75,
    change: 2.8,
    prediction: {
      analysis: "Network upgrades and DeFi growth",
      recommendation: "Buy",
      confidence: 82,
      potentialReturn: 30.5,
    },
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: 120.45,
    change: -1.5,
    prediction: {
      analysis: "Network stability concerns",
      recommendation: "Hold",
      confidence: 65,
      potentialReturn: 12.4,
    },
  },
  {
    symbol: "DOT",
    name: "Polkadot",
    price: 18.9,
    change: 1.2,
    prediction: {
      analysis: "Parachain ecosystem expansion",
      recommendation: "Buy",
      confidence: 70,
      potentialReturn: 45.2,
    },
  },
]

interface Asset {
  symbol: string
  name: string
  price: number
  change: number
  prediction: {
    analysis: string
    recommendation: "Buy" | "Hold" | "Sell"
    confidence: number
    potentialReturn: number
  }
}

export default function StockTrading() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null)

  const renderAssetList = (assets: Asset[], type: "stock" | "crypto") => (
    <div className="space-y-2">
      <Input
        placeholder={`Search ${type}s`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <div className="space-y-2">
        {assets
          .filter(
            (asset) =>
              asset.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
              asset.name.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .map((asset) => (
            <div
              key={asset.symbol}
              onClick={() => setSelectedAsset(asset)}
              className="p-4 bg-card rounded-lg border cursor-pointer hover:bg-accent"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{asset.symbol}</h3>
                  <p className="text-sm text-muted-foreground">{asset.name}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${asset.price.toLocaleString()}</p>
                  <p className={asset.change > 0 ? "text-green-600" : "text-red-600"}>
                    {asset.change > 0 ? (
                      <ArrowUpIcon className="inline mr-1 w-4 h-4" />
                    ) : (
                      <ArrowDownIcon className="inline mr-1 w-4 h-4" />
                    )}
                    {Math.abs(asset.change)}%
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader>
          <CardTitle className="text-primary">Trading Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs defaultValue="stocks" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="stocks">Stocks</TabsTrigger>
              <TabsTrigger value="crypto">Crypto</TabsTrigger>
            </TabsList>
            <TabsContent value="stocks">{renderAssetList(stocks, "stock")}</TabsContent>
            <TabsContent value="crypto">{renderAssetList(crypto, "crypto")}</TabsContent>
          </Tabs>

          {selectedAsset && (
            <Card className="mt-4 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Sparkles className="mr-2 w-5 h-5 text-primary" />
                  {selectedAsset.symbol} Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">{selectedAsset.prediction.analysis}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Recommendation</p>
                    <p
                      className={
                        selectedAsset.prediction.recommendation === "Buy"
                          ? "text-green-600"
                          : selectedAsset.prediction.recommendation === "Sell"
                            ? "text-red-600"
                            : "text-yellow-600"
                      }
                    >
                      {selectedAsset.prediction.recommendation}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Confidence</p>
                    <p>{selectedAsset.prediction.confidence}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Potential Return</p>
                    <p className="text-green-600">+{selectedAsset.prediction.potentialReturn}%</p>
                  </div>
                </div>
                <Button className="w-full">
                  {selectedAsset.prediction.recommendation} {selectedAsset.symbol}
                </Button>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

