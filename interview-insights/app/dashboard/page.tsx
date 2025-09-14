// app/dashboard/page.tsx
import UploadForm from "./UploadForm"

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <UploadForm />
    </div>
  )
}
