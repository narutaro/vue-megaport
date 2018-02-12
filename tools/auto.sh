token=`curl -Ss -v -X POST https://api-staging.megaport.com/v2/login -d 'username=me@me.com&password=12345678' | jq -r .data.token`
echo "token: $token"


#curl -Ss -v  https://api-staging.megaport.com/v2/locations
