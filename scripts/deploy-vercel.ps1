# ============================================================================
# VERCEL DEPLOYMENT — LuxArte (Windows PowerShell)
# ============================================================================

$HetznerMediaUrl = "https://media.luxarte.pl"

Write-Host "============================================"
Write-Host " LuxArte Vercel Deployment"
Write-Host "============================================"

# Check Vercel CLI
if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "[ERROR] Vercel CLI not found. Install with: npm i -g vercel"
    exit 1
}

# Set environment variable
Write-Host "[1/3] Setting NEXT_PUBLIC_MEDIA_BASE_URL in Vercel..."
vercel env rm NEXT_PUBLIC_MEDIA_BASE_URL production --yes 2>$null
$HetznerMediaUrl | vercel env add NEXT_PUBLIC_MEDIA_BASE_URL production

# Deploy
Write-Host "[2/3] Deploying to Vercel production..."
vercel --prod

Write-Host "[3/3] Deployment complete!"
Write-Host ""
Write-Host "  Env var: NEXT_PUBLIC_MEDIA_BASE_URL=$HetznerMediaUrl"
Write-Host "============================================"
