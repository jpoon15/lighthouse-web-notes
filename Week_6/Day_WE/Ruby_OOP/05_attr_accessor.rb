#good_dog.rb
class GoodDog
  attr_accessor :name #no need to explicitly write getter/setter method

  def initialize(name) #<- known as constructor
    @name = name # <- instance variable
    puts "This obj was initialized"
  end

  def speak
    "#{name} says Arf!"
  end

  # def name
  #   @name
  # end

  # def name=(n)
  #   @name = n
  # end
end

sparky = GoodDog.new("Sparky") #-> "This obj was initialized"
puts sparky.speak

puts sparky.name
sparky.name = "Fido"
puts sparky.name