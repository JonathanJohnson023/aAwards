class Website < ApplicationRecord
  validates :title, :url presence: true


  # def average_rating
  #   reviews.average(:rating)
  # end

end
