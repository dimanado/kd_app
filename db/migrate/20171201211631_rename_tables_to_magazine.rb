class RenameTablesToMagazine < ActiveRecord::Migration[5.1]
  def change
    rename_table :products, :magazines
    rename_table :product_modules, :editions
    rename_table :articles, :articles

    rename_column :editions, :product_id, :magazine_id
    rename_column :articles, :product_module_id, :edition_id
  end
end
