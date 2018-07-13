import knex from 'knex'
import bookshelf from 'bookshelf'

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename '../content/db.sqlite'
  }
})

const db = bookshelf(connection)
