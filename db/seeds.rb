user = User.find_or_create_by(email: 'test@mail.ru') do |user|
  user.password = '123456789'
end

company = Company.find_or_create_by(title: 'test') do |company|
  company.is_sole = true
end

user.companies << company
