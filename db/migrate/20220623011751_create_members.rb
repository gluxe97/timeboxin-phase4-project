class CreateMembers < ActiveRecord::Migration[6.1]
  def change
    create_table :members do |t|
      t.string :name
      t.integer :level
      t.string :password_digest
      t.belongs_to :team, foreign_key: true
      t.belongs_to :project, foreign_key: true
      t.timestamps
    end
  end
end
