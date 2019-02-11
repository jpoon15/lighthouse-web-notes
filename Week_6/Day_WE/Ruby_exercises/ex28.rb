puts "1 #{true && true}" #true
puts "2 #{false && true}" #false
puts "3 #{1 == 1 && 2 == 1}" #false
puts "4 #{"test" == "test"}" #true
puts "5 #{1 == 1 || 2 != 1}" #true
puts "6 #{true && 1 == 1}" #true
puts "7 #{false && 0 != 0}" #false
puts "8 #{true || 1 == 1}" #true
puts "9 #{"test" == "testing"}" #false
puts "10 #{1 != 0 && 2 == 1}" #false
puts "11 #{"test" != "testing"}" #true
puts "12 #{"test" == 1}" #false
puts "13 #{!(true && false)}" #true
puts "14 #{!(1 == 1 && 0 != 1)}" #false
puts "15 #{!(10 == 1 || 1000 == 1000)}" #fase
puts "16 #{!(1 != 10 || 3 == 4)}" #false
puts "17 #{!("testing" == "testing" && "Zed" == "Cool Guy")}" #true
puts "18 #{1 == 1 && (!("testing" == 1 || 1 == 0))}" #true
puts "19 #{"chunky" == "bacon" && (!(3 == 4 || 3 == 3))}" #false
puts "20 #{3 == 3 && (!("testing" == "testing" || "Ruby" == "Fun"))}" #false
