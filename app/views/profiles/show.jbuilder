json.extract! @profile, :id, :first_name, :last_name, :user_id
json.companies @profile.user.companies do |company|
  json.partial! 'companies/show', company: company
end
