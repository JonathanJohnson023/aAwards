class RemoveImgUrl < ActiveRecord::Migration[5.2]
  def change
    remove_column :websites, :img_url
  end
end
