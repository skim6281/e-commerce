require 'rails_helper'

describe OrderItem do
  it { is_expected.to validate_presence_of(:product_id) }
  it { is_expected.to validate_presence_of(:quantity) }
  it { is_expected.to validate_presence_of(:order_id) }
end
