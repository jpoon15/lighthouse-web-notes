#good_dog.rb
class GoodDog
  def initialize #<- known as constructor
    put "This obj was initialized"
  end
end

sparky = GoodDog.new #-> "This obj was initialized"
puts sparky