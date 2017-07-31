class UserMailer < ApplicationMailer
  default from: 'skim6281@gmail.com'

  def welcome_email(user)
    @user = user
    mail(to: @user.username, subject: 'Welcome!')
  end
end
