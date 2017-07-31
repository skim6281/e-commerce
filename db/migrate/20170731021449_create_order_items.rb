class CreateOrderItems < ActiveRecord::Migration
  def change
    create_table :order_items do |t|
      t.integer :product_id, null: false
      t.integer :quantity, null: false
      t.integer :order_id, null: false
      t.timestamps null: false
    end
    add_index :order_items, :order_id
    add_index :order_items, :product_id
  end
end
