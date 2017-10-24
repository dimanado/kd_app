class AddTypeToComapny < ActiveRecord::Migration[5.1]
  def change
    add_reference :companies, :company_type
    add_reference :companies, :ownership_type
  end
end
