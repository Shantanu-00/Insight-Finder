
"use client"
import { supabase } from "@/lib/supabaseClient"

export default function Login() {
  async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options:{
        redirectTo: 'http://localhost:3000/dashboard'
      }
    })
  }

  return (
    <button
      onClick={handleLogin}
      className="rounded-lg bg-black px-4 py-2 text-white"
    >
      Sign in with GitHub
    </button>
  )
}
