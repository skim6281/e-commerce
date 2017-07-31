class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :brand, null: false
      t.string :model, null: false
      t.string :sku, null: false
      t.integer :price, null: false
      t.string :desc, null: false
      t.timestamps null: false
    end
  end
end
