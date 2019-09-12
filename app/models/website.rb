# == Schema Information
#
# Table name: websites
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  url         :string           not null
#  description :text             not null
#  img_url     :string           not null
#  author_id   :integer
#  score_avg   :integer          default(0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Website < ApplicationRecord
  validates :title, :url, :description, :img_url, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

    has_many_attached :photos

  # def average_rating
  #   reviews.average(:rating)
  # end

end
