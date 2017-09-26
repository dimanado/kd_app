class CreateCompanies < ActiveRecord::Migration[5.1]
  def change
    create_table :companies do |t|
      t.string :title, uniqie: true, null: false
      t.timestamps
    end
  end
end
