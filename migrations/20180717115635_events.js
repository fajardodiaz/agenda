
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('events', function(table) {
    table.increments('id')
    table.string('description')
    table.string('place')
    table.string('date')
    table.string('time')
    table.timestamps(true)
  })


};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
