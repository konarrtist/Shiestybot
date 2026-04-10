'use client'; 
export const runtime = 'edge';

import { Button } from "@/components/ui/button"
import {
  Shield,
  Package,
  Lock,
  Users,
  ArrowRight,
  Zap,
  Award,
  AlertTriangle,
  CheckCircle2,
  Star,
  TrendingUp,
  Clock,
} from "lucide-react"
import Link from "next/link"

// NOTE: Metadata was removed from here and moved to layout.tsx 
// to prevent the Vercel build error.

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] rust-texture">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00d9ff]/10 via-transparent to-transparent"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00d9ff]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff6b35]/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <header>
          <nav className="relative border-b border-[#2a2520]/50 backdrop-blur-sm" aria-label="Main navigation">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
