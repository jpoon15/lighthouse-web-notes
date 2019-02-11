class AddBuyerAndSellerToAuction < ActiveRecord::Migration[5.2]
  def change
    add_column :auctions, :buyer_id, :int, foreign_key: true
    add_column :auctions, :seller_id, :int, foreign_key: true
    add_reference :auctions, :user
  end
end
