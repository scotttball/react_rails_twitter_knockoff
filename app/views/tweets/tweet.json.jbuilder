json.tweet do
  json.id @tweet.id
  json.body @tweet.body
  json.handle @tweet.user.handle
end