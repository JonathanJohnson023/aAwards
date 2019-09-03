class RemoveUserNullConstraint < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :username, :string, null: true
  end
end
