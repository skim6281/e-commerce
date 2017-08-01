class ChangeQuantityInCartItems < ActiveRecord::Migration
  def change
    change_column_null :cart_items, :quantity, true
  end
end
