FactoryGirl.define do
  factory :order_item do
    product_id { Faker::Number.number }
    quantity { Faker::Number.number }
    order_id { Faker::Number.number }
  end
end
