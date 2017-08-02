# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
skim = User.create(username: 'skim6281@gmail.com', password: 'password')
admin = User.create!(username: 'admin@test.com', password: 'password', admin: true)

Cart.destroy_all
skim_cart = Cart.create!(user_id: skim.id)
admin_cart = Cart.create!(user_id: admin.id)
