#!/bin/bash
# ============================================================================
# VERCEL DEPLOYMENT — LuxArte
# ============================================================================
# Deploys the Next.js app to Vercel with Hetzner media configuration
#
# Usage:
#   bash scripts/deploy-vercel.sh
#
# Prerequisites:
#   - Vercel CLI installed: npm i -g vercel
#   - Logged in: vercel login
#   - Project linked: vercel link
# ============================================================================

set -euo pipefail

HETZNER_MEDIA_URL="https://media.luxarte.pl"

echo "============================================"
echo " LuxArte Vercel Deployment"
echo "============================================"

# --- Check Vercel CLI ---
if ! command -v vercel &> /dev/null; then
  echo "[ERROR] Vercel CLI not found. Install with: npm i -g vercel"
  exit 1
fi

# --- Set environment variable in Vercel ---
echo "[1/3] Setting NEXT_PUBLIC_MEDIA_BASE_URL in Vercel..."
vercel env rm NEXT_PUBLIC_MEDIA_BASE_URL production --yes 2>/dev/null || true
echo "${HETZNER_MEDIA_URL}" | vercel env add NEXT_PUBLIC_MEDIA_BASE_URL production

# --- Deploy to production ---
echo "[2/3] Deploying to Vercel production..."
vercel --prod

# --- Verify ---
echo "[3/3] Deployment complete!"
echo ""
echo "  Vercel dashboard: https://vercel.com/dashboard"
echo "  Env var set: NEXT_PUBLIC_MEDIA_BASE_URL=${HETZNER_MEDIA_URL}"
echo ""
echo "  Verification checklist:"
echo "    □ Homepage loads, hero video plays from Hetzner"
echo "    □ Brand pages load gallery images from Hetzner"
echo "    □ Product pages load product images from Hetzner"
echo "    □ News articles load images from Hetzner"
echo "    □ Design page loads images from Hetzner"
echo "    □ Logo loads from Hetzner"
echo ""
echo "============================================"
