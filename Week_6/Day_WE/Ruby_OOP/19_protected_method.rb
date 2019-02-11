class Animal
  #### we can call protected method from within class and use self
  def a_public_method
    "Will this work? " + self.a_protected_method
  end

  #### protected method
  protected

  #### this is protected but can be called within class
  def a_protected_method
    "Yes, I'm protected!"
  end
end

fido = Animal.new
puts fido.a_public_method
# puts fido.a_protected_method