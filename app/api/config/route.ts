import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    superAdminUsernames: (process.env.SUPER_ADMIN_USERNAMES || process.env.NEXT_PUBLIC_SUPER_ADMIN_USERNAMES || "")
      .split(",")
      .map((u) => u.trim().toLowerCase())
      .filter(Boolean),
    escrowUsernames: (process.env.ESCROW_USERNAMES || process.env.NEXT_PUBLIC_ESCROW_USERNAMES || "")
      .split(",")
      .map((u) => u.trim().toLowerCase())
      .filter(Boolean),
  })
}
