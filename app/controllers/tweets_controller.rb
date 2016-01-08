class TweetsController < ApplicationController
  def index
    if params[:mentions]
      @tweets = Tweet.where('lower(body) LIKE ?', "%@#{current_user.handle.downcase}%").descending
    else
      @tweets = Tweet.all.descending
    end
  end

  def create
    @tweet = current_user.tweets.create(tweet_params)
    render 'tweet'
  end

  def search
    search_term = params[:search_term]
    if search_term.split("").first == '@'
      user = User.where('lower(handle) LIKE ?', "%#{search_term.downcase.split("@").last}%")
      @tweets = user.first.tweets.descending if user.any?
    else
      @tweets = Tweet.where('lower(body) LIKE ?', "%#{search_term.downcase}%").descending
    end
    render 'index'
  end

  private
    def tweet_params
      params.require(:tweet).permit(:body)
    end
end
