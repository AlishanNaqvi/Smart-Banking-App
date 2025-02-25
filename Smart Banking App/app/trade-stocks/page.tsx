import StockTrading from "@/components/stock-trading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TradeStocksPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 bg-background">
      <div className="w-full max-w-md space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Market Overview</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Stock Markets</h3>
              <p className="text-sm">
                S&P 500: <span className="text-green-500">+1.2%</span>
              </p>
              <p className="text-sm">
                NASDAQ: <span className="text-red-500">-0.5%</span>
              </p>
              <p className="text-sm">
                DOW: <span className="text-green-500">+0.8%</span>
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Crypto Markets</h3>
              <p className="text-sm">
                BTC Dominance: <span className="text-green-500">42.5%</span>
              </p>
              <p className="text-sm">
                Global Cap: <span className="text-green-500">+2.3%</span>
              </p>
              <p className="text-sm">
                24h Volume: <span>$125.8B</span>
              </p>
            </div>
          </CardContent>
        </Card>
        <StockTrading />
      </div>
    </main>
  )
}

