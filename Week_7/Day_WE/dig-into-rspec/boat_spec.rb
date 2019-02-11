require_relative 'boat'

describe Boat do
  it 'should create boats' do
    expect(Boat.new).to be_a Boat
  end
  describe '#allowed_aboard?' do
    it 'returns true if inventory includes a life jacket' do
      a_boat = Boat.new
      allowed = a_boat.allowed_aboard?(['life jacket', 'sun glasses'])
      expect(allowed).to be true
    end
    it 'returns false if inventory does not include a life jacket' do
      a_boat = Boat.new
      allowed = a_boat.allowed_aboard?(['swim trunks', 'flippy floppies'])
      expect(allowed).to be false
    end

  end
end


# it = test, takes a string (description of the feature you're testing) as an parameter
# expect = marks an assertion we're trying to make about the code we're testing
# to = to complete assertion by calling on "to" method
# matcher = By passing the Boat class to the be_a matcher, it will run the code boat.is_a? Boat
# matcher = special methods that checks whether argument passed to expect meets critera
# #allowed_board = instance method of Boat