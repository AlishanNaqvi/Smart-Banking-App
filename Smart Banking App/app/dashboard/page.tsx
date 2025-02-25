import Dashboard from "../../components/dashboard"

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-background">
      <div className="w-full max-w-md mx-auto">
        <Dashboard />
      </div>
    </main>
  )
}

