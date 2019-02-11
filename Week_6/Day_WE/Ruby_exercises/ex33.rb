def while_loop(num, incr)
  i = 0
  numbers = []

  while i < num
    puts "At the top i is #{i}"
    numbers.push(i)

    i += incr
    puts "Numbers now: ", numbers
    puts "At the bottom i is #{i}"
  end

  puts "The numbers: "

  # remember you can write this 2 other ways?
  numbers.each {|num| puts num }
end

while_loop(21, 3)