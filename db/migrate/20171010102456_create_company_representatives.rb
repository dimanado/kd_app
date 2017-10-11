class CreateCompanyRepresentatives < ActiveRecord::Migration[5.1]
  def change
    create_table :company_representatives do |t|
      t.references :user
      t.references :company
      t.string :status

      t.timestamps
    end
  end
end
