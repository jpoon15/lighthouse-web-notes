class GoodDog
  attr_accessor :name, :height, :weight
###CONSTANT
  @@number_of_dogs = 0

###CONSTRUCTOR
  def initialize(n, h, w)
    self.name   = n
    self.height = h
    self.weight = w
    @@number_of_dogs  += 1
  end

####CLASS METHOD
  def self.total_number_of_dogs
    @@number_of_dogs
  end

##INSTANCE METHOD
  def change_info(n, h, w)
    self.name   = n
    self.height = h
    self.weight = w
  end

##INSTANCE METHOD
  def info
    "#{self.name} weighs #{self.weight} and is #{self.height} tall."
  end

##INSTANCE METHOD
  def what_is_self
    self
  end

puts "Inside Class - what is self? #{self}"

end

sparky = GoodDog.new('Sparky', '12 inches', '10 lbs')
p sparky.what_is_self

