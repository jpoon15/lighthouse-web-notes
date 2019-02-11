
require 'rails_helper'

RSpec.configure do |config|
  config.include(Shoulda::Matchers::ActiveModel, type: :model)
  config.include(Shoulda::Matchers::ActiveRecord, type: :model)
end

RSpec.describe Auction, :type => :model do
  let(:seller) { User.new(
    :email => "jane@doe.com",
    :password => "pw1234")
  }

    let(:buyer) { User.new(
    :email => "jason@doe.com",
    :password => "pw1234")
  }

  subject { described_class.new(
    title: "Anything",
    description: "Lorem ipsum dolor sit amet",
    start_date: DateTime.now,
    end_date: DateTime.now + 1.week,
    seller: seller,
    buyer: buyer)
    }

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is not valid without a title" do
    subject.title = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a description" do
    subject.description = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a start_date" do
    subject.start_date = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a end_date" do
    subject.end_date = nil
    expect(subject).to_not be_valid
  end

  describe "Associations" do
    it { should belong_to(:buyer) }
    it { should belong_to(:seller) }
    it { should have_many(:bids) }
  end

end