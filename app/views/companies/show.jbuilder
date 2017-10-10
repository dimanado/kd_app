json.extract! @company, :id, :title, :type
json.ownership_type @company.ownership_type
json.company_type @company.company_type
json.users @company.users do |user|
  json.id user.id
  json.first_name user.profile.first_name
  json.last_name user.profile.last_name
end
