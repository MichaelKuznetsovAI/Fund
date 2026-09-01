#!/usr/bin/env bash
ok=0
for i in $(seq 1 20); do
  body=$(curl -s --max-time 10 https://iron-hand.com)
  if echo "$body" | grep -q "Iron Hand Capital"; then
    ok=$((ok+1))
    echo "[attempt $i/20] correct content ✓ (streak: $ok)"
  else
    ok=0
    echo "[attempt $i/20] still stale (GitHub's own error page — a CDN cache node hasn't expired its old negative cache yet)"
  fi
  if [ "$ok" -ge 3 ]; then
    echo "SUCCESS: 3 consecutive correct responses — cache has cleared consistently."
    exit 0
  fi
  sleep 25
done
echo "TIMEOUT after 20 attempts (~8 min more): still inconsistent. Cache-Control was max-age=600 (10 min) on the stale entries, so if this is still happening, something beyond normal propagation may be wrong."
exit 0
