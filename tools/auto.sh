echo "Getting a token for $1:$2"
#token=`curl -Ss -v -X POST https://api-staging.megaport.com/v2/login -d 'username=me@me.com&password=12345678' | jq -r .data.token`
token=`curl -Ss -v -X POST https://api-staging.megaport.com/v2/login -d "username=$1&password=$2" | jq -r .data.token`
echo "token: $token"


#curl -Ss -v  https://api-staging.megaport.com/v2/locations
