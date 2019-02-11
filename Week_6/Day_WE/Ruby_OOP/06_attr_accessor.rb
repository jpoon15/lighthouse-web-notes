#good_dog.rb
class GoodDog
  attr_accessor :name, :height, :weight #no need to explicitly write getter/setter method

  def initialize(n, h, w) #<- known as constructor
    @name = n
    @height = h
    @weight = w # <- instance variable
  end

  def speak
    "#{name} says Arf!"
  end

  def change_info(n, h, w)
    @name = n
    @height = h
    @weight = w
  end

  def info
    "#{name} weighs #{weight} and is #{height} tall."
  end

end

sparky = GoodDog.new('Sparky', '12 inches', '10lbs') #-> "This obj was initialized"
puts sparky.speak

puts sparky.name
sparky.name = "Fido"
puts sparky.name

puts sparky.info
sparky.change_info('Mochi', '24 inches', '45lbs')
puts sparky.info