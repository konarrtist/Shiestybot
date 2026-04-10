import { createClient } from "@/lib/utils/supabase/server"; 
import { notFound } from "next/navigation";
import { InitiateTradeButton } from "@/components/trades/initiate-trade-button";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ShieldCheck, MapPin, Clock } from "lucide-react";
import { use } from "react";

export default async function ListingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const supabase = await createClient();

  const { data: listing } = await supabase
    .from("listings")
    .select(`
      *,
      seller:profiles(id, display_name, avatar_url)
    `)
    .eq("id", id)
    .single();

  if (!listing) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <div className="text-center">
          <div className="text-6xl md:text-7xl mb-4">📦</div>
          <p className="text-slate-500">Listing not found</p>
          <Link href="/dashboard/marketplace" className="text-blue-600 hover:underline mt-4 block">
            Back to Marketplace
          </Link>
        </div>
      </div>
    );
  }

  const { data: { user } } = await supabase.auth.getUser();
  const isOwnListing = user?.id === listing.seller_id;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        href="/dashboard/marketplace"
        className="flex items-center text-sm text-slate-500 hover:text-slate-800 mb-6 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Marketplace
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Image and Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
            {listing.image_url ? (
              <Image
                src={listing.image_url}
                alt={listing.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-slate-400">
                No image available
              </div>
            )}
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">{listing.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-6">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {listing.location || "Global"}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                Posted {new Date(listing.created_at).toLocaleDateString()}
              </span>
            </div>
            <div className="prose prose-slate max-w-none">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="whitespace-pre-wrap text-slate-600">{listing.description}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Pricing and Actions */}
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="mb-6">
              <p className="text-sm text-slate-500 mb-1">Price</p>
              <p className="text-3xl font-bold text-slate-900">
                ${listing.price} <span className="text-lg font-normal text-slate-500">Raider Dollars</span>
              </p>
            </div>

            {!isOwnListing && listing.status === "active" && (
              <div className="space-y-3">
                <InitiateTradeButton
                  listingId={listing.id}
                  sellerId={listing.seller_id}
                  sellerName={listing.seller.display_name}
                  listingTitle={listing.title}
                />
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-4">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  Secure trade powered by SHiESTY
                </div>
              </div>
            )}

            {isOwnListing && (
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-center">
                <p className="text-sm font-medium text-slate-600">This is your listing</p>
              </div>
            )}
            
            {listing.status !== "active" && !isOwnListing && (
              <div className="p-4 bg-red-50 rounded-lg border border-red-100 text-center">
                <p className="text-sm font-medium text-red-600">This listing is no longer active</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
