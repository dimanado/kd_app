json.extract! @profile, :id, :first_name, :last_name, :user_id, :age, :sex
json.avatar Settings.port_and_host + @profile.avatar.url

json.companies @profile.user.companies do |company|
  json.partial! 'companies/show', company: company
end

