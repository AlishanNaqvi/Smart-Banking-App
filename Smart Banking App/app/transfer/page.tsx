import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TransferPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Transfer Money</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
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
            <Label>To Account</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select account" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="external">External Account</SelectItem>
                <SelectItem value="savings">Savings Account</SelectItem>
                <SelectItem value="checking">Checking Account</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Amount</Label>
            <Input type="number" placeholder="Enter amount" />
          </div>
          <div className="space-y-2">
            <Label>Description (Optional)</Label>
            <Input placeholder="Enter description" />
          </div>
          <Button className="w-full">Transfer Money</Button>
        </CardContent>
      </Card>
    </main>
  )
}

