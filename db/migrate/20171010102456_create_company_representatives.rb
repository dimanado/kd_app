class CreateCompanyRepresentatives < ActiveRecord::Migration[5.1]
  def change
    create_table :company_representatives do |t|
      t.references :user, foreign_key: true, null: false
      t.references :company, foreign_key: true, null: false
      t.string :status, null: false

      t.timestamps
    end
  end
end
