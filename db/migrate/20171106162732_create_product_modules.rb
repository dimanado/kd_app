class CreateProductModules < ActiveRecord::Migration[5.1]
  def change
    create_table :product_modules do |t|
      t.string :name
      t.text :description

      t.references :magazine

      t.timestamps
    end
  end
end
