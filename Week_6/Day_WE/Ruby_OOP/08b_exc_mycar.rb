class Vehicle
  ##CLASS VARIABLE
  @@number_of_vehicles = 0
  ##INSTANCE METHOD
  def initialize
    @@number_of_vehicles += 1
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

class MyCar < Vehicle

  NUMBER_OF_DOORS = 4
  attr_accessor :color
  attr_reader :year

##CONSTRUCTOR
  def initialize(y, c, m)
    @year = y
    @color = c
    @model = m
    @current_speed = 0
  end
#INSTANCE METHOD
  def spray_paint(color)
    self.color = color
    puts "My new color is #{self.color}"
  end
#to_s METHOD

  def to_s
    puts "My car is a #{@model} from #{year} and is colored #{color}"
  end
end

class MyTruck < Vehicle
  NUMBER_OF_DOORS = 2
end


##############
toyota = MyCar.new(2018, 'matted black', 'Corolla')
toyota.speedup(10)
toyota.brake(5)
toyota.current_speed
toyota.turn_off
toyota.current_speed

################ attr_accessor methods

toyota.color = 'white'
puts toyota.year
puts toyota.color
puts toyota.spray_paint("blue")

############### class methods
MyCar.gas_mileage(13, 500)

############### to_s
toyota.to_s
