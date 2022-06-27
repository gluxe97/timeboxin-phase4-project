# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first


Team.create!(section: "Human Resources")
Project.create!(name: "phone design", description: "design mockup of new phone model", time: 4, team_id: 1)
Member.create!(name: "Elon", level: 3, username: "Technoking", image_url: "https://upload.wikimedia.org/wikipedia/commons
/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg", password: "password", team_id: 1, project_id: 1)
