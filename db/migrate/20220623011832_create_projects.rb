class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.integer :time
      t.belongs_to :team, foreign_key: true 

      t.timestamps
    end
  end
end
