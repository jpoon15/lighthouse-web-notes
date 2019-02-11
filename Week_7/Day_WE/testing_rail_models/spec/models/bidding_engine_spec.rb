require 'rails_helper'

RSpec.describe BiddingEngine, type: :model do

  let(:seller) { User.new(
    :email => "jane@doe.com",
    :password => "pw1234")
  }

  let(:buyer) { User.new(
    :email => "jason@doe.com",
    :password => "pw1234")
  }

  let(:auction) { Auction.new(
                    title: 'Anything',
                    description: 'Lorem ipsum',
                    start_date: DateTime.now,
                    end_date: DateTime.now + 1.week,
                    seller_id: seller.id)
  }

  describe ".bid!" do
    it "create a new bid on an auction" do

      described_class.bid!(auction, 100, bidder)
      expect(auction.errors).to be_empty

      described_class.bid!(auction, 90, bidder)
      expect(auction.errors[:bid].first).to eq "must be bigger than the last bid on the auction"
    end
  end
end

