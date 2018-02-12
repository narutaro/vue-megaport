curl -sS -X POST https://api-staging.megaport.com/v2/login -d "username=$1&password=$2" | jq -r .data.token


#curl -Ss -v  https://api-staging.megaport.com/v2/locations
