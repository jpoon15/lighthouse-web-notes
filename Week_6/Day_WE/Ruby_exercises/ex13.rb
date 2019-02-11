first, second, third = ARGV
ARGV.clear

puts "Your first variable is: #{first}"
puts "Your second variable is: #{second}"
puts "Your third variable is: #{third}"

print "Give me some money: "
money = gets.chomp.to_f

change = money * 0.1
puts "this is 10 percent of what you have me: #{change}"
