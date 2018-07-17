import knex from 'knex'

export const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: './content/db.sqlite3'
  },
  useNullAsDefault: true
})
