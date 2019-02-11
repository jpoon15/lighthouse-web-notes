### Defining a Module
module Towable
  def can_tow(pounds)
    pounds < 2000 ? true : false
  end
end


class Vehicle
  attr_accessor :color
  attr_reader :model, :year
  ##CLASS VARIABLE
  @@number_of_vehicles = 0

##CONSTRUCTOR
  def initialize(y, c, m)
    @year = y
    @color = c
    @model = m
    @current_speed = 0
    @@number_of_vehicles += 1
  end

##INSTANCE METHOD
  def speedup(n)
    @current_speed += n
    puts "Spend up by #{n}"
  end
##INSTANCE METHOD
  def brake(n)
    @current_speed -= n
    puts "Slowing down by #{n}"
  end
#INSTANCE METHOD
  def turn_off
    @current_speed = 0
    puts "Turning off Car"
  end
#INSTANCE METHOD
  def current_speed
    puts "you are currently going at #{@current_speed}"
  end
#INSTANCE METHOD
  def spray_paint(color)
    self.color = color
    puts "My new color is #{self.color}"
  end

  ##METHOD TO PRINT OUT VALUE OF VARIABLE
  def self.number_of_vehicles
    puts "This created #{@@number_of_vehicles} vehicles"
  end

  ##CLASS METHOD
  def self.gas_mileage(litres, km)
    puts "#{km / litres} km per litre of gas"
  end

end
#################################
class MyCar < Vehicle
  NUMBER_OF_DOORS = 4
#to_s METHOD
  def to_s
    puts "My car is a #{self.model} from #{self.year} and is colored #{self.color}"
  end
end
#################################
class MyTruck < Vehicle
##MIXING MODULE TO SUBCLASS
  include Towable
  NUMBER_OF_DOORS = 2
  def to_s
    puts "My truck is a #{self.model} from #{self.year} and is colored #{self.color}"
  end
end

##############
toyota = MyCar.new(2018, 'matted black', 'Corolla')
toyota.speedup(10)
toyota.brake(5)
toyota.current_speed
toyota.turn_off
toyota.current_speed

################ attr_accessor methods
puts toyota.color
toyota.to_s
toyota.spray_paint("blue")

############### class methods
MyCar.gas_mileage(13, 500)

############### method lookup
puts "=================="
puts MyCar.ancestors
puts "=================="
puts MyTruck.ancestors
puts "=================="
puts Vehicle.ancestors




