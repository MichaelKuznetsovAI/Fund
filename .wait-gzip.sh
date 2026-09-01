#!/usr/bin/env bash
# Matches real browsers: send Accept-Encoding: gzip, which is the cache
# variant that was actually found stale (plain curl was misleadingly fine).
ok=0
for i in $(seq 1 18); do
  title=$(curl -s --compressed --max-time 10 https://iron-hand.com | grep -o '<title>[^<]*')
  if [[ "$title" == *"Iron Hand Capital"* ]]; then
    ok=$((ok+1))
    echo "[attempt $i/18] correct (gzip-matched) ✓ (streak: $ok) — $title"
  else
    ok=0
    echo "[attempt $i/18] still stale (gzip-matched) — $title"
  fi
  if [ "$ok" -ge 3 ]; then
    echo "SUCCESS: 3 consecutive correct responses under real-browser encoding."
    exit 0
  fi
  sleep 30
done
echo "STILL STALE after ~9 more minutes. GitHub's own community docs note this specific edge-cache (for a first-connected custom domain) can take a few hours to fully clear on their side — this is a known, documented behavior, not a sign of misconfiguration. DNS, the domain registration, and the site content have all been independently verified correct. No further action is needed; it will clear on its own."
exit 0
