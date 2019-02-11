require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'

puts "Exercise 5"
puts "----------"

@company_ann_rev = Store.sum(:annual_revenue)
@company_avg_rev = @company_ann_rev/12

puts "Total revenue for the entire company: $#{@company_ann_rev}"
puts "Avg revenue for the entire company $#{@company_avg_rev}"

@stores_above_avg = Store.where("annual_revenue > ?", @company_avg_rev).count


puts "Number of stores making more than average #{@stores_above_avg}"