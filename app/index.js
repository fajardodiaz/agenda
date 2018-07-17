import readline from 'readline'
import { Event } from './db'
import { ask } from './utils'

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let event = {}

Event.collection().fetch()
.then((collection) => {
  collection.models.forEach((event) => {
    let ev = event.toJSON()
    console.log(`${ev.id}: ${ev.description}`)
  })
  newEvent()
})

const newEvent = () => ask(reader, '¿Qué vas a hacer?')
.then((description) => {
  event.description = description
  return ask(reader,  '¿Dónde vas a hacerlo?')
})
.then((place) => {
  event.place = place
  return ask(reader, '¿Cuándo vas a hacerlo?')
})
.then((date) => {
  event.date = date
  return ask(reader, '¿A qué hora vas a hacerlo?')
})
  .then((time) => {
    event.time = time
    reader.close()
    console.log(`Vas a ${event.description} en ${event.place}, ${event.date}, ${event.time}`)
    new Event(event).save().then(() => {
      console.log('Evento creado con éxito!')
    })
})
