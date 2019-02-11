require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'
require_relative './exercise_5'

puts "Exercise 6"
puts "----------"

@store1.employees.create(first_name: "Harry", last_name: "Potter", hourly_rate: 60)
@store1.employees.create(first_name: "Ron", last_name: "Weasley", hourly_rate: 60)
@store1.employees.create(first_name: "Hermione", last_name: "Granger", hourly_rate: 60)
@store1.employees.create(first_name: "Hedwig", last_name: "Owlet", hourly_rate: 40)

@store2.employees.create(first_name: "Albus", last_name: "Dumbledore", hourly_rate: 100)
@store2.employees.create(first_name: "Dobby", last_name: "Elf", hourly_rate: 40)
@store2.employees.create(first_name: "Sirius", last_name: "Black", hourly_rate: 80)
@store2.employees.create(first_name: "Remus", last_name: "Lupin", hourly_rate: 80)

puts "Store 1 has #{@store1.employees.count} employees"
puts "Store 2 has #{@store2.employees.count} employees"
puts "Total number of employees at all stores: #{Employee.count}"