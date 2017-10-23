class CreateProfile < ActiveRecord::Migration[5.1]
  def change
    create_table :profiles do |t|
      t.string :first_name, default: ""
      t.string :last_name, default: ""
      t.integer :user_id
    end
    add_index :profiles, :user_id
  end
end
