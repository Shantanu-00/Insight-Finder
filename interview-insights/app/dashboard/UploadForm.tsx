// app/dashboard/UploadForm.tsx
"use client"
import { useState } from "react"

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null)

  async function handleUpload() {
    if (!file) return
    const formData = new FormData()
    formData.append("file", file)
    await fetch("http://localhost:8000/upload", {
      method: "POST",
      body: formData,
    })
  }

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload} className="ml-4 rounded bg-blue-600 px-4 py-2 text-white">
        Upload
      </button>
    </div>
  )
}
