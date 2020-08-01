exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('aquario', function(table) {
        table.increments('id');
        table.string('temperatura', 100).notNullable();
        table.string('umidade', 100).notNullable();
        table.timestamp("criado_em").notNullable().defaultTo(knex.fn.now());
        table.timestamp("atualizado_em").notNullable().defaultTo(knex.fn.now());
        table.charset("utf8");
        table.engine("InnoDB");
      }),
    ]);
  };
  
  exports.down = function() {};
  
  exports.configuration = { transaction: true };
  