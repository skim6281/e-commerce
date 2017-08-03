FactoryGirl.define do
  factory :order do
    user_id { Faker::Number.number }
  end
end
