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
  validates :title, :url, :description, presence: true
  # validate :ensure_screenshot_photos 

  # def ensure_screenshot_photos
  #   errors[:screenshot_photos].push("An array of photos are recuired ") unless self.screenshot_photos.attached?
  # end

  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

    has_many_attached :screenshot_photos
    has_one_attached :cover_photo
    has_one_attached :thumbnail_photo

  # def average_rating
  #   reviews.average(:rating)
  # end

end
