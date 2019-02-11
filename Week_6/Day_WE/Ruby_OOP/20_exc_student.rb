class Student

  attr_accessor :grade

  def initialize(n, g)
    @name = n
    @grade = g
  end

  def better_grade_than(others)
    if grade > others.grade
      puts "Well Done"
    else
      puts "Needs improvement"
    end
  end

  protected

  def grade
    @grade
  end
end


alice = Student.new('Alice', 90)
bob = Student.new('Bob', 85)
# puts "Well Done" if alice.better_grade_than(bob)
alice.better_grade_than(bob)
bob.better_grade_than(alice)