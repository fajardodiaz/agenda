import bookshelf from 'bookshelf'
import { connection } from './db/init.js'

export const db = bookshelf(connection)

export const Event = db.Model.extend({
  tableName: 'events',
  hasTimestamps: true
})
