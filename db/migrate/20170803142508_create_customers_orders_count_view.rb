class CreateCustomersOrdersCountView < ActiveRecord::Migration
  def up
    execute <<-SQL
      CREATE VIEW customers_orders_count AS
        SELECT
          users.username AS user_username,
          COUNT(orders.id) AS user_order_count
        FROM
          users
        LEFT JOIN orders ON users.id = orders.user_id
        GROUP BY
          users.username
    SQL
  end

  def down
    execute "DROP VIEW customers_orders_count"
  end
end
