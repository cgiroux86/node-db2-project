exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments();
    table.string("VIN").unique().notNullable();
    table.string("make").notNullable();
    table.string("model").notNullable();
    table.decimal("mileage").notNullable();
    table.string("transmission_type");
    table.string("status_of_title");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cars");
};
