class GoodDog
  DOG_YEARS = 7

  attr_accessor :name, :age

  def initialize(n, a)
    @name = n
    @age = a * DOG_YEARS
  end

  def to_s
    "This dog's name is #{name} and its age is #{age} in dog years"
  end
end

sparky = GoodDog.new('Sparky', 3)
puts "Sparky's age is #{sparky.age}"


puts sparky
puts sparky.to_s