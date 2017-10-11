json.array! @companies do |company|
  json.partial! 'companies/show', company: @company
end
