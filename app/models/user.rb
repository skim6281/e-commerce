# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  admin           :boolean          default("false")
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true, email_format: { message: 'is not valid email'}
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  has_one :cart
  has_many :orders
  has_one :customers_orders_count

  delegate :user_order_count, to: :customers_orders_count

  def user_order_count
    customers_orders_count.user_order_count
  end

  attr_reader :password

  # gets a count of total orders made
  def order_count
    self.order_ids.count
  end

  # find user by username and password
  # check to see if password is valid
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  # session token is reset every login and logout
  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
