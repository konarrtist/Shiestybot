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
                  <p className="text-slate-500">{listing.blueprint_name}</p>
                </div>
              )}
              <div className="absolute top-4 right-4">
                <Badge
                  className={`${rarityColors[listing.blueprint_rarity?.toLowerCase() || "common"]} border capitalize text-sm md:text-base px-3 py-1`}
                >
                  {listing.blueprint_rarity}
                </Badge>
              </div>
              {listing.item_category && (
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-slate-900/80 text-white border-slate-700">
                    {listing.item_category}
                  </Badge>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <div className="space-y-3">
                <CardTitle className="text-2xl md:text-3xl text-white">{listing.title}</CardTitle>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                  <Avatar className="h-14 w-14 border-2 border-cyan-500/50">
                    <AvatarImage
                      src={(listing.seller as any).avatar_url || listing.seller.discord_avatar || undefined}
                    />
                    <AvatarFallback className="bg-gradient-to-br from-cyan-600 to-indigo-600 text-white text-lg">
                      {listing.seller.display_name?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium text-white text-lg">{listing.seller.display_name}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      {averageRating > 0 && (
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-sm font-medium text-yellow-400">{averageRating.toFixed(1)}</span>
                        </div>
                      )}
                      {totalTrades > 0 && (
                        <div className="flex items-center gap-1.5">
                          <TrendingUp className="h-4 w-4 text-emerald-400" />
                          <span className="text-sm text-emerald-400 font-semibold">{successRate}% Success</span>
                          <span className="text-sm text-slate-400">
                            ({successfulTrades}/{totalTrades})
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                  <span className="text-slate-400">Available</span>
                  <span className="text-xl font-semibold text-white">{listing.quantity} in stock</span>
                </div>

                {tradeItems.length > 0 && (
                  <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <p className="text-sm font-medium text-cyan-400 mb-3">Wants in Exchange</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {tradeItems.map((item: any, idx: number) => (
                        <div
                          key={idx}
                          className="relative flex items-center gap-2 p-2 rounded-lg bg-slate-900/50 border border-slate-700"
                        >
                          <div className="relative">
                            <img
                              src={item.icon_url || "/placeholder.svg"}
                              alt={item.itemName}
                              className="w-12 h-12 object-contain rounded"
                            />
                            <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded shadow">
                              x{item.quantity}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-white font-medium truncate">{item.itemName}</p>
                            {item.rarity && <p className="text-[10px] text-slate-400 capitalize">{item.rarity}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                    {tradeItems.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0) > 3 && (
                      <div className="mt-3 p-2 rounded bg-yellow-500/10 border border-yellow-500/20">
                        <p className="text-xs text-yellow-400">
                          ⚠️ Safe Pocket Warning:{" "}
                          {tradeItems.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0)} items total.
                          Only 3 slots protected!
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {!isOwnListing && listing.status === "active" && (
                <div className="space-y-3">
                  <InitiateTradeButton
                    listingId={listing.id}
                    sellerId={listing.seller_id}
                    sellerName={listing.seller.display_name}
                  />

                  <SendMessageButton
                    recipientId={listing.seller_id}
                    recipientName={listing.seller.display_name}
                    buttonText="Send Private Message"
                    buttonVariant="outline"
                    buttonClassName="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                  />
                </div>
              )}

              {isOwnListing && (
                <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <p className="text-sm text-cyan-400 text-center">This is your listing</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="bg-slate-900/50 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300 leading-relaxed">{listing.description}</p>
        </CardContent>
      </Card>

      <Card className="bg-slate-900/50 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Item Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50">
              <Package className="h-8 w-8 text-indigo-400" />
              <div>
                <p className="text-xs text-slate-400">Name</p>
                <p className="font-medium text-white">{listing.blueprint_name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50">
              <Shield className="h-8 w-8 text-purple-400" />
              <div>
                <p className="text-xs text-slate-400">Rarity</p>
                <p className="font-medium text-white capitalize">{listing.blueprint_rarity}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50">
              <Clock className="h-8 w-8 text-emerald-400" />
              <div>
                <p className="text-xs text-slate-400">Listed</p>
                <p className="font-medium text-white">{new Date(listing.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <SellerReviews sellerId={listing.seller_id} />
    </div>
  )
}
