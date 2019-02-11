#good_dog.rb

class GoodDog
  def initialize(name) #<- known as constructor
    @name = name # <- instance variable
    put "This obj was initialized"
  end

  def speak
    "#{@name} says Arf!"
  end
end

sparky = GoodDog.new("Sparky") #-> "This obj was initialized"
puts sparky.speak #-> "Arf!"

