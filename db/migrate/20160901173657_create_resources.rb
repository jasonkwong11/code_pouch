class CreateResources < ActiveRecord::Migration
  def change
    create_table :resources do |t|
      t.string :name
      t.string :url
      t.text :description
      t.integer :upvote

      t.timestamps null: false
    end
  end
end
