FactoryGirl.define do
  factory :cart_item do
    product_id { Faker::Number.number }
    quantity { Faker::Number.number }
    cart_id { Faker::Number.number }
  end
end
