class MyCar

  attr_accessor :color
  attr_reader :year
##CLASS METHOD
  def self.gas_mileage(litres, km)
    puts "#{km / litres} km per litre of gas"
  end
##CONSTRUCTOR
  def initialize(y, c, m)
    @year = y
    @color = c
    @model = m
    @current_speed = 0
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
#to_s METHOD

  def to_s
    puts "My car is a #{@model} from #{year} and is colored #{color}"
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

toyota.color = 'white'
puts toyota.year
puts toyota.color
puts toyota.spray_paint("blue")

############### class methods
MyCar.gas_mileage(13, 500)

############### to_s
toyota.to_s
