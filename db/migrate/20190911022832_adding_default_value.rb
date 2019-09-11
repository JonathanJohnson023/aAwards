class AddingDefaultValue < ActiveRecord::Migration[5.2]
  def change
    change_column :websites, :score_avg, :integer, default: 0
  end
end
