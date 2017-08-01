# == Schema Information
#
# Table name: cart_items
#
#  id         :integer          not null, primary key
#  product_id :integer          not null
#  quantity   :integer
#  cart_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CartItem < ActiveRecord::Base
  validates :product_id, :quantity, :cart_id, presence: true

  belongs_to :cart
  belongs_to :product
end
