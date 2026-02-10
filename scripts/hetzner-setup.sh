#!/bin/bash
# ============================================================================
# HETZNER SERVER SETUP — LuxArte Media Hosting
# ============================================================================
# Run on freshly provisioned Ubuntu 22.04+ Hetzner server
#
# Usage:
#   ssh root@<HETZNER_IP> 'bash -s' < scripts/hetzner-setup.sh
#
# Prerequisites:
#   - DNS A record for media.luxarte.pl → HETZNER_IP
#   - Root SSH access
# ============================================================================

set -euo pipefail

DOMAIN="media.luxarte.pl"
MEDIA_ROOT="/var/www/luxarte-media"
NGINX_SITE="/etc/nginx/sites-available/luxarte-media"
NGINX_ENABLED="/etc/nginx/sites-enabled/luxarte-media"

echo "============================================"
echo " LuxArte Media Server Setup"
echo " Domain: ${DOMAIN}"
echo "============================================"

# --- System Update ---
echo "[1/8] Updating system packages..."
apt-get update -y && apt-get upgrade -y

# --- Install Required Packages ---
echo "[2/8] Installing nginx, certbot, rsync, fail2ban..."
apt-get install -y nginx certbot python3-certbot-nginx rsync fail2ban ufw

# --- Configure Firewall ---
echo "[3/8] Configuring firewall (UFW)..."
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

# --- Configure fail2ban ---
echo "[4/8] Configuring fail2ban..."
cat > /etc/fail2ban/jail.local <<'EOF'
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 5
backend = systemd

[sshd]
enabled = true
port = ssh

[nginx-http-auth]
enabled = true

[nginx-botsearch]
enabled = true
EOF

systemctl enable fail2ban
systemctl restart fail2ban

# --- Create Media Directory Structure ---
echo "[5/8] Creating media directory structure..."
mkdir -p "${MEDIA_ROOT}/media"
mkdir -p "${MEDIA_ROOT}/catalog"
mkdir -p "${MEDIA_ROOT}/brands"
mkdir -p "${MEDIA_ROOT}/preview"
mkdir -p "${MEDIA_ROOT}/videos"

# Set ownership for nginx
chown -R www-data:www-data "${MEDIA_ROOT}"
chmod -R 755 "${MEDIA_ROOT}"

# --- Configure Nginx ---
echo "[6/8] Configuring nginx..."
cat > "${NGINX_SITE}" <<'NGINX_CONF'
server {
    listen 80;
    listen [::]:80;
    server_name media.luxarte.pl;

    root /var/www/luxarte-media;
    index index.html;

    # Security headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # CORS for Vercel frontend
    add_header Access-Control-Allow-Origin "*" always;
    add_header Access-Control-Allow-Methods "GET, HEAD, OPTIONS" always;
    add_header Access-Control-Allow-Headers "Range, Accept-Encoding" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml
        image/svg+xml;

    # Static media location
    location /media/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header Access-Control-Allow-Origin "*" always;
        try_files $uri =404;
    }

    location /catalog/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header Access-Control-Allow-Origin "*" always;
        try_files $uri =404;
    }

    location /brands/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header Access-Control-Allow-Origin "*" always;
        try_files $uri =404;
    }

    location /preview/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header Access-Control-Allow-Origin "*" always;
        try_files $uri =404;
    }

    location /videos/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header Access-Control-Allow-Origin "*" always;
        try_files $uri =404;
    }

    # Health check
    location /health {
        return 200 'OK';
        add_header Content-Type text/plain;
    }

    # Deny hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
NGINX_CONF

# Enable site, disable default
ln -sf "${NGINX_SITE}" "${NGINX_ENABLED}"
rm -f /etc/nginx/sites-enabled/default

# Test and reload nginx
nginx -t
systemctl reload nginx

# --- SSL with Certbot ---
echo "[7/8] Setting up HTTPS with Certbot..."
certbot --nginx -d "${DOMAIN}" --non-interactive --agree-tos --email admin@luxarte.pl --redirect

# --- Verify ---
echo "[8/8] Verifying setup..."
systemctl status nginx --no-pager
systemctl status fail2ban --no-pager

echo ""
echo "============================================"
echo " Setup Complete!"
echo "============================================"
echo " Media root: ${MEDIA_ROOT}"
echo " Domain:     https://${DOMAIN}"
echo ""
echo " Next steps:"
echo "   1. Upload media with rsync (see scripts/upload-media.sh)"
echo "   2. Verify: curl -I https://${DOMAIN}/health"
echo "============================================"
