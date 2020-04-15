exports.up = function (knex) {
  return knex.schema.createTable("sales", (table) => {
    table.increments();
    table
      .bigInteger("sales_id")
      .unsigned()
      .index()
      .references("id")
      .inTable("cars");
    table.boolean("sold", false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("sales");
};
