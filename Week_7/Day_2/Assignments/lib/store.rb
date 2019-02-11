class Store < ActiveRecord::Base
  has_many :employees

  validates :name, length: { minimum: 3 }
  validates :annual_revenue, numericality: { only_integer: true, greater_than_or_equal_to: 0}
  validate :apparel_type

  def apparel_type
    if !womens_apparel && !mens_apparel
      errors.add(:apparel_type, "Must hold at least one type of apparel")
    end
  end

end
