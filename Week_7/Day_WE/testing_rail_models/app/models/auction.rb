class Auction < ApplicationRecord
  belongs_to :buyer, class_name: "User", foreign_key: "user_id"
  belongs_to :seller, class_name: "User", foreign_key: "user_id"
  has_many :bids

  validates_presence_of :title, :description, :start_date, :end_date
end