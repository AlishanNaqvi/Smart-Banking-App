import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Plus } from "lucide-react"

export default function CardsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 bg-background">
      <div className="w-full max-w-md space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Your Cards</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Card className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <CreditCard className="w-8 h-8" />
                  <p className="text-lg font-bold">VISA</p>
                </div>
                <p className="text-xl">**** **** **** 1234</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm opacity-80">Card Holder</p>
                    <p>JOHN DOE</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Expires</p>
                    <p>12/25</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-600 to-purple-400 text-white">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <CreditCard className="w-8 h-8" />
                  <p className="text-lg font-bold">MASTERCARD</p>
                </div>
                <p className="text-xl">**** **** **** 5678</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm opacity-80">Card Holder</p>
                    <p>JOHN DOE</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Expires</p>
                    <p>06/24</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add New Card
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

