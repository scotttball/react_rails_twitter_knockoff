json.tweets @tweets do |tweet|
  json.id tweet.id
  json.body tweet.body
  json.handle tweet.user.handle
end