# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170803142508) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cart_items", force: :cascade do |t|
    t.integer  "product_id",             null: false
    t.integer  "quantity",   default: 1
    t.integer  "cart_id",                null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "cart_items", ["cart_id"], name: "index_cart_items_on_cart_id", using: :btree
  add_index "cart_items", ["product_id"], name: "index_cart_items_on_product_id", using: :btree

  create_table "carts", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "carts", ["user_id"], name: "index_carts_on_user_id", using: :btree

  create_table "order_items", force: :cascade do |t|
    t.integer  "product_id", null: false
    t.integer  "quantity",   null: false
    t.integer  "order_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "order_items", ["order_id"], name: "index_order_items_on_order_id", using: :btree
  add_index "order_items", ["product_id"], name: "index_order_items_on_product_id", using: :btree

  create_table "orders", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "orders", ["user_id"], name: "index_orders_on_user_id", using: :btree

  create_table "products", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "brand",      null: false
    t.string   "model",      null: false
    t.string   "sku",        null: false
    t.integer  "price",      null: false
    t.string   "desc",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "products", ["sku"], name: "index_products_on_sku", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                        null: false
    t.string   "password_digest",                 null: false
    t.string   "session_token",                   null: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.boolean  "admin",           default: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
