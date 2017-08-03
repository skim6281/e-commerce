FactoryGirl.define do
  factory :cart do
    user_id { Faker::Number.number }
  end
end
