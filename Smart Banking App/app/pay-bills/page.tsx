import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PayBillsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Pay Bills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Payee</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select payee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utility">Utility Company</SelectItem>
                <SelectItem value="internet">Internet Provider</SelectItem>
                <SelectItem value="phone">Phone Company</SelectItem>
                <SelectItem value="other">Add New Payee</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>From Account</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select account" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="checking">Checking Account - $5,678.90</SelectItem>
                <SelectItem value="savings">Savings Account - $10,234.56</SelectItem>
                <SelectItem value="credit">Credit Account - $3,456.78</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Amount</Label>
            <Input type="number" placeholder="Enter amount" />
          </div>
          <div className="space-y-2">
            <Label>Payment Date</Label>
            <Input type="date" />
          </div>
          <Button className="w-full">Pay Bill</Button>
        </CardContent>
      </Card>
    </main>
  )
}

