import 'readline' from 'readline'
import { Event } from './db'

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let event = {}

reader.question('¿Qué vas a hacer?', (description) => {
  event.description = description
})

reader.question('¿Dónde vas a hacerlo?', (place) => {
  event.place = place
})

reader.question('¿Cuándo vas a hacerlo?', (date) => {
  event.date = date
})

reader.question('¿A qué hora vas a hacerlo?', (time) => {
  event.time = time
  reader.close()
})

new Event(event).save().then(() => {
  console.log('Evento creado con éxito!')  
})
