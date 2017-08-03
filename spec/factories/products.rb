FactoryGirl.define do
  factory :product do
    name { Faker::Lorem.word }
    brand { Faker::Lorem.word }
    model { Faker::Lorem.word }
    sku { Faker::Lorem.word }
    price { Faker::Number.number }
    desc { Faker::Lorem.sentence }
  end
end
