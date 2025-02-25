import SmartBudget from "@/components/smart-budget"

export default function BudgetingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 bg-background">
      <div className="w-full max-w-md space-y-4">
        <SmartBudget />
      </div>
    </main>
  )
}

