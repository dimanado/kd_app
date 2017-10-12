class CreateCompanyTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :company_types do |t|
      t.string :name

      t.timestamps
    end
  end
end
