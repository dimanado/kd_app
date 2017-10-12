# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ownership_type1 = OwnershipType.find_or_create_by!(name: "Тип владения 1")
company_type1 = CompanyType.find_or_create_by!(name: "Тип компании 1")

company1 = Company.find_or_create_by!(title: "Спорт это жизнь",
                                      comp_type: "Частная",
                                      company_type_id: ownership_type1.id,
                                      ownership_type_id: company_type1.id)
