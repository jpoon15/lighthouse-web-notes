#good_dog.rb
class GoodDog
  def initialize(name) #<- known as constructor
    @name = name # <- instance variable
    puts "This obj was initialized"
  end

  def speak
    "#{@name} says Arf!"
  end

  def name
    @name
  end

  def name=(n)
    @name = n
  end
end

sparky = GoodDog.new("Sparky") #-> "This obj was initialized"
puts sparky.speak
puts sparky.get_name

sparky.set_name = "Fido"
puts sparky.get_name