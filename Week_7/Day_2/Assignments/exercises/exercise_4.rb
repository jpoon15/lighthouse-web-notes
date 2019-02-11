require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'

puts "Exercise 4"
puts "----------"

coquitlam = Store.create name: 'Coquitlam', annual_revenue: '224000', mens_apparel: 'f', womens_apparel: 't'
whistler = Store.create name: 'Whistler', annual_revenue: '1900000', mens_apparel: 't', womens_apparel: 'f'
yaletown = Store.create name: 'Yaletown', annual_revenue: '430000', mens_apparel: 't', womens_apparel: 't'

puts "Number of Stores in database: #{Store.count}"

puts "=== Men Clothes ==="


@mens_stores = Store.where( mens_apparel: 't')

@mens_stores.all().each do |ms|
  print "#{ms.name} - "
  puts "Annual Revenue - $ #{ms.annual_revenue}"
end

puts "=== Women Clothes ==="

@womens_stores = Store.where("womens_apparel = ? and annual_revenue < ?", 't', "1000000")

@womens_stores.all().each do |ms|
  print "#{ms.name} - "
  puts "Annual Revenue - $ #{ms.annual_revenue}"
end