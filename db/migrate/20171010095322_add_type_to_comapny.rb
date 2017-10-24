class AddTypeToComapny < ActiveRecord::Migration[5.1]
  def change
    add_column :companies, :comp_type, :string
    add_reference :companies, :company_type
    add_reference :companies, :ownership_type
  end
end
