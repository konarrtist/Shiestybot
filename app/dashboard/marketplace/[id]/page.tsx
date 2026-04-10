import { createClient } from "@/lib/supabase/server"
import { notFound, redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Package, Shield, Clock, TrendingUp } from "lucide-react"
import { InitiateTradeButton } from "@/components/marketplace/initiate-trade-button"
import { SellerReviews } from "@/components/reviews/seller-reviews"
import { enrichTradeItems } from "@/lib/utils/trade-items"
import { SendMessageButton } from "@/components/profile/send-message-button"

export default async function ListingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect("/auth/login")

  const { data: listing } = await supabase
    .from("listings")
    .select(`
      *,
      seller:profiles!listings_seller_id_fkey(
        id,
        display_name,
        discord_username,
        discord_avatar,
        avatar_url,
        created_at
      )
    `)
    .eq("id", id)
    .single()

  if (!listing) {
    notFound()
  }

  const rarityColors: Record<string, string> = {
    common: "bg-gray-500/10 text-gray-400 border-gray-500/20",
    uncommon: "bg-green-500/10 text-green-400 border-green-500/20",
    rare: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    epic: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    legendary: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  }

  const tradeItems = await enrichTradeItems(supabase, listing.payment_methods)
  const [{ data: sellerReviews }, { data: sellerTransactions }] = await Promise.all([
    supabase.from("reviews").select("rating").eq("reviewed_id", listing.seller_id),
    supabase
      .from("transactions")
      .select("status")
      .or(`buyer_id.eq.${listing.seller_id},seller_id.eq.${listing.seller_id}`),
  ])

  const averageRating =
    sellerReviews && sellerReviews.length > 0
      ? sellerReviews.reduce((acc, r) => acc + r.rating, 0) / sellerReviews.length
      : 0

  const totalTrades = sellerTransactions?.length || 0
  const successfulTrades = sellerTransactions?.filter((t) => t.status === "completed").length || 0
  const successRate = totalTrades > 0 ? Math.round((successfulTrades / totalTrades) * 100) : 0

  const isOwnListing = listing.seller_id === user.id

  return (
    <div className="max-w-6xl mx-auto space-y-6 p-4 md:p-0">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-slate-900/50 border-slate-800">
          <CardContent className="p-0">
            <div className="aspect-square bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 relative flex items-center justify-center">
              {listing.item_icon_url ? (
                <img
                  src={listing.item_icon_url || "/placeholder.svg"}
                  alt={listing.blueprint_name}
                  className="w-24 md:w-32 h-24 md:h-32 object-contain drop-shadow-2xl"
                />
              ) : (
                <div className="text-center">
                  <div className="text-6xl md:text-7xl mb-4">📦</div>
                  <p className="text-slate-500">{listing.
