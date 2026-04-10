import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowLeft,
  Package,
  Star,
  TrendingUp
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// FIX 1: Path corrected to @/lib/trade-items based on your file list
import { parsePaymentMethods } from "@/lib/trade-items";

// FIX 2: Path corrected to @/components/ based on your folder structure
import { InitiateTradeButton } from "@/components/initiate-trade-button";

export const dynamic = "force-dynamic";

export default async function ListingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: listing, error } = await supabase
    .from("listings")
    .select(`
      *,
      seller:profiles!listings_seller_id_fkey (
        id,
        display_name,
        username,
        avatar_url,
        discord_avatar,
        rating,
        total_trades,
        successful_trades
      )
    `)
    .eq("id", id)
    .single();

  if (error || !listing) {
    notFound();
  }

  const { data: { user } } = await supabase.auth.getUser();
  const isOwnListing = user?.id === listing.seller_id;

  const tradeItems = parsePaymentMethods(listing.payment_methods);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link 
        href="/dashboard/marketplace"
        className="flex items-center text-sm text-slate-500 hover:text-cyan-500 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Marketplace
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Content */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-cyan-500/10 text-cyan-500 border-cyan-500/20">
                {listing.item_category || "General"}
              </Badge>
              <Badge variant="outline" className="border-slate-700 text-slate-400">
                {listing.blueprint_rarity || "Common"}
              </Badge>
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4">{listing.title}</h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-cyan-500" />
                {listing.location || "Global"}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-cyan-500" />
                Posted {new Date(listing.created_at).toLocaleDateString()}
              </span>
            </div>

            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4">Description</h3>
              <p className="whitespace-pre-wrap text-slate-300 leading-relaxed">
                {listing.description}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Pricing and Actions */}
        <div className="space-y-6">
          <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 shadow-xl">
            <div className="mb-6">
              <p className="text-sm text-slate-400 mb-1">Price</p>
              <p className="text-3xl font-bold text-white">
                ${listing.price} <span className="text-lg font-normal text-slate-500">Raider Dollars</span>
              </p>
            </div>

            {!isOwnListing && listing.status === "active" && (
              <div className="space-y-3">
                {/* FIX 3: Updated props to match standard naming conventions */}
                <InitiateTradeButton
                  itemId={listing.id}
                  ownerId={listing.seller_id}
                  itemName={listing.title}
                />
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 mt-4">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Secure trade powered by SHiESTY
                </div>
              </div>
            )}

            {isOwnListing && (
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 text-center">
                <p className="text-sm font-medium text-slate-400">This is your listing</p>
              </div>
            )}
          </div>

          {/* Seller Card */}
          <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Seller Information</h3>
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border-2 border-cyan-500/20">
                <AvatarImage src={listing.seller?.avatar_url || listing.seller?.discord_avatar} />
                <AvatarFallback className="bg-slate-800 text-white">
                  {listing.seller?.display_name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-white">{listing.seller?.display_name || "Unknown Seller"}</p>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex items-center text-yellow-500 text-xs">
                    <Star className="w-3 h-3 fill-yellow-500 mr-1" />
                    {listing.seller?.rating || "0.0"}
                  </div>
                  <div className="flex items-center text-emerald-500 text-xs">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {listing.seller?.successful_trades || 0} trades
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
