class CreateWebsites < ActiveRecord::Migration[5.2]
  def change
    create_table :websites do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.text :description
      t.string :img_url
      t.integer :author_id
      t.integer :score_avg

      t.timestamps
    end
    add_index :websites, :url, unique: true
    add_index :websites, :score_avg
  end
end
