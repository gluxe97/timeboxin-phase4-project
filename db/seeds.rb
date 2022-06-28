# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first


Team.create!(section: "Human Resources")
Team.create!(section: "IT")
Team.create!(section: "Custodial services")
Project.create!(name: "phone design", description: "design mockup of new phone model", time: 4, team_id: 1)
Project.create!(name: "Social media ad", description: "create an ad to post on our social", time: 4, team_id: 1)
Member.create!(name: "Elon", level: 3, username: "Technoking", image_url: "https://upload.wikimedia.org/wikipedia/commons
/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg", password: "password")
Member.create!(name: "Dave", level: 1, username: "coolguy99", image_url: "https://images.pexels.com/photos/3184611/
pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", password: "password")
