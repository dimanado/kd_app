# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
COMPANY_TYPES = [
  'Индивидуальный предприниматель (ИП)',
  'Крестьянское (фермерское) хозяйство (КФХ)',
  'Унитарное предприятие (УП)',
  'Производственный кооператив (ПК)',
  'Полное товарищество (ПТ)',
  'Коммандитное товарищество (КТ)',
  'Общество с дополнительной ответственностью (ОДО)',
  'Общество с ограниченной ответственностью (ООО)',
  'Открытое акционерное общество (ОАО)',
  'Закрытое акционерное общество (ЗАО)'
]

OWNERSHIP_TYPES = [
  'Частная собственность',
  'Государственная собственность',
  'Общая (долевая) собственность'
]

COMPANY_TYPES.each do |company_type_name|
  CompanyType.find_or_create_by(name: company_type_name)
end

OWNERSHIP_TYPES.each do |ownership_type_name|
  OwnershipType.find_or_create_by(name: ownership_type_name)
end
