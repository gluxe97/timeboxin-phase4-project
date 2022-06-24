# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first


Team.create!(section: "Human Resources")
Project.create!(name: "phone design", description: "design mockup of new phone model", time: 4, team_id: 1)
Member.create!(name: "Tino", level: 3, team_id: 1, project_id: 1)
