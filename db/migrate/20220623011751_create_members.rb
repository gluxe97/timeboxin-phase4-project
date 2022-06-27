class CreateMembers < ActiveRecord::Migration[6.1]
  def change
    create_table :members do |t|
      t.string :name
      t.integer :level
      t.string :username
      t.string :password_digest
      t.string :image_url
      t.references :team
      t.references :project
      t.timestamps
    end
  end
end
