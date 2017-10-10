class AddTypeToComapny < ActiveRecord::Migration[5.1]
  def change
    add_column :companies, :comp_type, :string, null: false
    add_reference :companies, :company_type, foreign_key: true, null: false
    add_reference :companies, :ownership_type, foreign_key: true, null: false
  end
end
