curl -sS -v \
-H "X-Auth-Token:$1" -H "Content-Type:application/json" \
-X POST https://api-staging.megaport.com/v2/networkdesign/buy \
-d @new_mp.json

#-d @megaport.json
