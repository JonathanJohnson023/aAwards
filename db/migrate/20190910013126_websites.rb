class Websites < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:websites, :img_url, false)
    change_column_null(:websites, :description, false)
  end
end
