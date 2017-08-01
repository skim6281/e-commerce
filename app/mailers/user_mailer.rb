class UserMailer < ApplicationMailer
  default from: 'testecommerceemail@gmail.com'

  def welcome_email(user)
    @user = user
    mail(to: @user.username, subject: 'Welcome!')
  end
end
