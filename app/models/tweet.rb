class Tweet < ActiveRecord::Base
  belongs_to :user

  def self.descending
    order(created_at: :desc)
  end

end
