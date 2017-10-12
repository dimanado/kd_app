json.extract! company, :id, :title, :comp_type
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
