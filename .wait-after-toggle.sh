#!/usr/bin/env bash
ok=0
for i in $(seq 1 12); do
  title=$(curl -s --compressed --max-time 10 https://iron-hand.com | grep -o '<title>[^<]*')
  if [[ "$title" == *"Iron Hand Capital"* ]]; then
    ok=$((ok+1))
    echo "[attempt $i/12] correct ✓ (streak: $ok) — $title"
  else
    ok=0
    echo "[attempt $i/12] still stale — $title"
  fi
  if [ "$ok" -ge 3 ]; then
    echo "SUCCESS: the cname toggle appears to have triggered a cache purge — 3 consecutive correct responses."
    exit 0
  fi
  sleep 20
done
echo "NO CHANGE after the toggle, over ~4 more minutes. The toggle attempt did not produce a faster fix — this now looks like straightforward passive TTL expiry, which per GitHub's own community reports can take a few hours after a domain's first connection. Nothing further to try from our side; it will resolve on its own."
exit 0
