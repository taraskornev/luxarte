#!/bin/bash
# ============================================================================
# UPLOAD MEDIA TO HETZNER — LuxArte
# ============================================================================
# Uploads all media from local /public/ to Hetzner server
#
# Usage:
#   bash scripts/upload-media.sh <HETZNER_IP_OR_DOMAIN> [SSH_USER]
#
# Example:
#   bash scripts/upload-media.sh media.luxarte.pl root
#   bash scripts/upload-media.sh 123.45.67.89 deploy
# ============================================================================

set -euo pipefail

HETZNER_HOST="${1:-media.luxarte.pl}"
SSH_USER="${2:-root}"
REMOTE_ROOT="/var/www/luxarte-media"

echo "============================================"
echo " LuxArte Media Upload"
echo " Target: ${SSH_USER}@${HETZNER_HOST}"
echo "============================================"

# Verify local directories exist
for dir in public/media public/catalog public/brands public/preview; do
  if [ -d "$dir" ]; then
    echo "[OK] Found $dir"
  else
    echo "[WARN] Missing $dir — skipping"
  fi
done

echo ""
echo "Starting rsync upload..."
echo ""

# --- Upload media/ ---
if [ -d "public/media" ]; then
  echo "[1/5] Uploading media/..."
  rsync -avz --progress --stats \
    public/media/ \
    "${SSH_USER}@${HETZNER_HOST}:${REMOTE_ROOT}/media/"
  echo ""
fi

# --- Upload catalog/ ---
if [ -d "public/catalog" ]; then
  echo "[2/5] Uploading catalog/..."
  rsync -avz --progress --stats \
    public/catalog/ \
    "${SSH_USER}@${HETZNER_HOST}:${REMOTE_ROOT}/catalog/"
  echo ""
fi

# --- Upload brands/ ---
if [ -d "public/brands" ]; then
  echo "[3/5] Uploading brands/..."
  rsync -avz --progress --stats \
    public/brands/ \
    "${SSH_USER}@${HETZNER_HOST}:${REMOTE_ROOT}/brands/"
  echo ""
fi

# --- Upload preview/ ---
if [ -d "public/preview" ]; then
  echo "[4/5] Uploading preview/..."
  rsync -avz --progress --stats \
    public/preview/ \
    "${SSH_USER}@${HETZNER_HOST}:${REMOTE_ROOT}/preview/"
  echo ""
fi

# --- Upload videos/ (if exists) ---
if [ -d "public/videos" ]; then
  echo "[5/5] Uploading videos/..."
  rsync -avz --progress --stats \
    public/videos/ \
    "${SSH_USER}@${HETZNER_HOST}:${REMOTE_ROOT}/videos/"
  echo ""
fi

# --- Fix permissions on remote ---
echo "Setting remote permissions..."
ssh "${SSH_USER}@${HETZNER_HOST}" "chown -R www-data:www-data ${REMOTE_ROOT} && chmod -R 755 ${REMOTE_ROOT}"

# --- Verification ---
echo ""
echo "============================================"
echo " Verification"
echo "============================================"

echo "Remote file counts:"
ssh "${SSH_USER}@${HETZNER_HOST}" "
  echo \"  media/:   \$(find ${REMOTE_ROOT}/media -type f | wc -l) files\"
  echo \"  catalog/: \$(find ${REMOTE_ROOT}/catalog -type f | wc -l) files\"
  echo \"  brands/:  \$(find ${REMOTE_ROOT}/brands -type f | wc -l) files\"
  echo \"  preview/: \$(find ${REMOTE_ROOT}/preview -type f | wc -l) files\"
  echo \"  videos/:  \$(find ${REMOTE_ROOT}/videos -type f 2>/dev/null | wc -l) files\"
  echo \"  TOTAL:    \$(find ${REMOTE_ROOT} -type f | wc -l) files\"
"

echo ""
echo "Local file counts:"
echo "  media/:   $(find public/media -type f 2>/dev/null | wc -l) files"
echo "  catalog/: $(find public/catalog -type f 2>/dev/null | wc -l) files"
echo "  brands/:  $(find public/brands -type f 2>/dev/null | wc -l) files"
echo "  preview/: $(find public/preview -type f 2>/dev/null | wc -l) files"
echo "  videos/:  $(find public/videos -type f 2>/dev/null | wc -l) files"

echo ""
echo "Sample HTTPS checks:"
echo "  curl -sI https://${HETZNER_HOST}/health"
echo "  curl -sI https://${HETZNER_HOST}/media/luxarte-logo.png"
echo ""
echo "Upload complete!"
