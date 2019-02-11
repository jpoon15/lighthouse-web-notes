#puts has \n (new line)
#calling chomp removes \n from get
print "How old are you? "
age = gets.chomp
print "How tall are you? "
height = gets.chomp
print "How much do you weigh? "
weight = gets.chomp

puts "So, you're #{age} years old, #{height} tall and #{weight} heavy."
#number is a string, so num * 10 repeats string 10 times instead of math
puts 'Hello there, Can you tell me your favourite number?'
num = gets.chomp
puts 'Your favourite number is ' + num + '?'
puts 'Well its not bad but  ' + num * 10 + ' is literally 10 times better!'

#to get numbers instead of strings as responses, use .to_i
puts 'Hello there, Can you tell me your favourite number?'
num = gets.to_i
puts 'Your favourite number is ' + num.to_s + '?'
puts 'Well its not bad but  ' + (num * 10).to_s + ' is literally 10 times better!'