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

require 'test_helper'

class WebsiteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
