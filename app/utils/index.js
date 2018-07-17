export const ask = (reader, question) => {
  return new Promise((resolve, reject) => {
    reader.question(question, (answer) => resolve(answer))
  })
}
