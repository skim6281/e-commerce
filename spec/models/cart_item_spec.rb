require 'rails_helper'

describe CartItem do
  it { is_expected.to validate_presence_of(:product_id) }
  it { is_expected.to validate_presence_of(:quantity) }
  it { is_expected.to validate_presence_of(:cart_id) }
end
