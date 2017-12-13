json.extract! company, :id, :title, :is_sole
json.status company.get_integer_status
json.user_status company.company_representatives.find_by(user_id: current_user.id).status
json.ownership_type do
  json.extract! company.ownership_type, :id, :name
end
json.company_type do
  json.extract! company.company_type, :id, :name
end
json.users company.users do |user|
  json.id user.id
  json.first_name user.profile.first_name
  json.last_name user.profile.last_name
end
