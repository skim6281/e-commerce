require 'rails_helper'

describe Cart do
  it { is_expected.to validate_presence_of(:user_id) }
end
