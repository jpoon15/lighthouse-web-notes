class MyCar

  attr_accessor :color
  attr_reader :year

  def initialize(y, c, m)
    @year = y
    @color = c
    @model = m
    @current_speed = 0
  end

  def speedup(n)
    @current_speed += n
    puts "Spend up by #{n}"
  end

  def brake(n)
    @current_speed -= n
    puts "Slowing down by #{n}"
  end

  def turn_off
    @current_speed = 0
    puts "Turning off Car"
  end

  def current_speed
    puts "you are currently going at #{@current_speed}"
  end

  def spray_paint(color)
    self.color = color
    puts "My new color is #{self.color}"
  end
end

toyota = MyCar.new(2018, 'matted black', 'Corolla')
toyota.speedup(10)
toyota.brake(5)
toyota.current_speed
toyota.turn_off
toyota.current_speed

toyota.color = 'white'
puts toyota.year
puts toyota.color
puts toyota.spray_paint("blue")