#good_dog.rb
class GoodDog
  def initialize(name) #<- known as constructor
    @name = name # <- instance variable
    puts "This obj was initialized"
  end

  def speak
    "#{@name} says Arf!"
  end

  def get_name
    @name
  end
end

sparky = GoodDog.new("Sparky") #-> "This obj was initialized"
puts sparky.speak
puts sparky.get_name