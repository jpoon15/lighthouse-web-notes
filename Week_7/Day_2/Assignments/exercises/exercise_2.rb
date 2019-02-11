require_relative '../setup'
require_relative './exercise_1'

puts "Exercise 2"
puts "----------"

@store1 = Store.find(1)
@store2 = Store.find(2)
p @store1
p @store2

@store1.name = "Surrey"
@store1.save

puts "Changed store name of store1"
p @store1