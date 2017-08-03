class CustomersOrdersCount < ActiveRecord::Base
  self.primary_key = "user_username"

  belongs_to :user
end
