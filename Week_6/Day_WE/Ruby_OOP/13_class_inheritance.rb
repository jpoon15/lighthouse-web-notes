##### superclass
class Animal
  def speak
    "Hello!"
  end
end

###### subclass
class GoodDog < Animal
  def speak
    "Woof Woof Pow Wow"
  end
end

###### subclass
class Cat < Animal
end

##### subclass
class Fish < Animal
  def speak
    super + " method from Animal Class using super"
  end
end

##### Testing codes
sparky = GoodDog.new
paws = Cat.new
rainbow = Fish.new

puts sparky.speak           # => Woof Woof Pow Wow
puts paws.speak             # => Hello!
puts rainbow.speak          # => Hello! method from Animal Class using super




