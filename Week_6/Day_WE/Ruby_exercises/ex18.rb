first, second = ARGV


# this one is like your scripts. DO NOT DO IT THIS WAY
def print_two(*args)
  arg1, arg2 = args
  puts "arg1: #{arg1}, arg2: #{arg2}"
end

# ok, that *args is actually pointless, we can just do this
def print_two_again(arg1, arg2)
  puts "arg1: #{arg1}, arg2: #{arg2}"
end

#this takes one arguement

def print_one(arg1)
  puts "arg1: #{arg1}"
end

#no argument
def print_none()
  puts "I got nothing"
end

print_two(first, second)
print_two_again(first, second)
print_one($stdin.gets.chomp())
print_none()