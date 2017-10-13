class CreateServiceKinds < ActiveRecord::Migration[5.1]
  def change
    create_table :service_kinds do |t|
      t.string :name
      t.string :image
      t.string :description
      t.integer :parent_id, null: true
      t.timestamps
    end
  end
end
