require 'rails_helper'

RSpec.configure do |config|
  config.include(Shoulda::Matchers::ActiveModel, type: :model)
  config.include(Shoulda::Matchers::ActiveRecord, type: :model)
end


RSpec.describe Bid, :type => :model do
  describe "Associations" do
    it { should belong_to(:bidder) }
    it { should belong_to(:auction) }
  end

  describe "Validations" do
    it { should validate_presence_of(:bidder) }
  end
end