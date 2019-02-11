class Animal
  attr_accessor :name

  def initialize(name)
    @name = name
  end
end

class GoodDog < Animal
  attr_accessor :color
  def initialize(color)
    super ### will pass the agreement to superclass
    @color = color
  end
end

##################################
class BadDog < Animal
  attr_accessor :age
  def initialize(age, name)
    super(name) ##name argument passed to superclass
    @age = age
  end
end

bruno = GoodDog.new("brown")        # => #<GoodDog:0x007fb40b1e6718 @color="brown", @name="brown">
puts bruno.name    # => brown
puts bruno.color   # => brown
##because of super, object's name is also brown

##################################
badmaru = BadDog.new("4", "Badmaru")
puts badmaru.name   # => Badmaru
puts badmaru.age    # => 4

