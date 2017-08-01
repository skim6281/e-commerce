class ChangeQuantityDefaultValueInCartItems < ActiveRecord::Migration
  def change
    change_column_default :cart_items, :quantity, 1 
  end
end
