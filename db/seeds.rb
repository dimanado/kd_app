# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ownership_type = OwnershipType.create(name: "Тип владения 1")
company_type = CompanyType.create(name: "Тип компании 1")

user = User.create(email: 'test@test.com', password: '11111111')
