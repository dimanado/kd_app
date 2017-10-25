class CreateProfile < ActiveRecord::Migration[5.1]
  def change
    create_table :profiles do |t|
      t.string :first_name
      t.string :last_name
      t.string :sex
      t.string :avatar
      t.integer :age
      t.integer :user_id
    end
    add_index :profiles, :user_id
  end
end
