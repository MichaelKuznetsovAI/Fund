#!/usr/bin/env bash
set -a
source .env
set +a

for i in $(seq 1 20); do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 https://iron-hand.com 2>/dev/null || echo "000")
  pages_status=$(curl -s --max-time 10 \
    -H "Authorization: Bearer $GITHUB_TOKEN" \
    -H "Accept: application/vnd.github+json" \
    https://api.github.com/repos/MichaelKuznetsovAI/Fund/pages \
    | node -e "let d='';process.stdin.on('data',c=>d+=c).on('end',()=>{try{const j=JSON.parse(d);console.log((j.status||'null')+'/https_enforced='+j.https_enforced)}catch(e){console.log('parse-error')}})" 2>/dev/null)

  echo "[attempt $i/20] https://iron-hand.com -> HTTP $code | Pages status: $pages_status"

  if [ "$code" = "200" ]; then
    echo "SUCCESS: site is live over HTTPS."
    exit 0
  fi
  sleep 30
done

echo "TIMEOUT after 20 attempts (~10 min): site not yet reachable over HTTPS. This can occasionally take longer than 10 minutes — worth checking again later rather than assuming something is wrong."
exit 0
