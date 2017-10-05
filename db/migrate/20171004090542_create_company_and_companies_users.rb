class CreateCompanyAndCompaniesUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :companies do |t|
      t.string :title
      t.string :type
      t.boolean :is_sole
      t.references :ownership_type
      t.references :company_type
    end
    create_table :companies_users do |t|
      t.references :user
      t.references :company
    end
  end
end
