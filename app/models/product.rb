# == Schema Information
#
# Table name: products
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  brand      :string           not null
#  model      :string           not null
#  sku        :string           not null
#  price      :integer          not null
#  desc       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Product < ActiveRecord::Base
  validates :name, :brand, :model, :sku, :price, :desc, presence: true
end
