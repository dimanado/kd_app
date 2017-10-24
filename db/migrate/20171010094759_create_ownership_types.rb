class CreateOwnershipTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :ownership_types do |t|
      t.string :name

      t.timestamps
    end
  end
end
