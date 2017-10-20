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


SERVICE_KINDS =
    [
      {
        name: "спорт",
        description: "организованная по определённым правилам деятельность людей, состоящая в сопоставлении их физических и/или интеллектуальных способностей, а также подготовка к этой деятельности и межличностные отношения, возникающие в её процессе.",
        children: [
          {
            name: "Циклические виды спорта",
            description: "Беговые дисциплины легкой атлетики"
          },
          {
            name: "Скоростно-силовые виды спорта",
            description: "Спринтерские номера программы в различных видах спорта"
          },
          {
            name: "сложнокоординационные виды спорта",
            description: "спортивная и художественная гимнастика, фигурное катание на коньках, прыжки в воду и др.",
          },
          {
            name: "единоборства",
            description: "все виды борьбы и бокса"
          },
          {
            name: "спортивные игры",
            description: "футбол, хоккей, волейбол и т. д."
          }
        ]
      },
      {
        name: "лечебная физкультура",
        description: "Оздоровительная физкультура имеет цель повысить уровень физического и психического состояния человека до величин, которые гарантируют стабильное здоровье."
      }
    ]

def create_service_kind(current_object, parent)
  service_kind = ServiceKind.find_or_create_by!(name: current_object[:name], description: current_object[:description], image: DEFAULT_IMAGE, parent: parent)
  if current_object[:children].present?
    current_object[:children].each do |child|
      create_service_kind(child, service_kind)
    end
  end
end

DEFAULT_IMAGE = "default.png"

root_service_kind = ServiceKind.find_or_create_by!(name: "ЗОЖ", description: "зож", image: DEFAULT_IMAGE)

SERVICE_KINDS.each do |service_kind|
  create_service_kind(service_kind, root_service_kind)
end
