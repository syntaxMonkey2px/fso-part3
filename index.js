const http = require('http')
const express = require('express')
// const { log } = require('console')


const app = express()

app.use(express.json())


app.post('/api/notes', (request, response) => {
  const maxId = notes.length > 0
  ? Math.max(...notes.map( n => Number(n.id)))
  : 0
  
  const note = request.body;
  note.id = String(maxId + 1)

  notes = notes.concat(note)

  console.log(note)
  response.json(note)
  
})

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!!</h1>')
  })

//   "/" = root
app.get('/api/notes', (request, response) => {
  response.json(notes);
  // console.log(request.headers);
  
});
  
app.get('/api/notes/:id', (request, response) => {

  const id = request.params.id
  const note = notes.find(note => note.id === id)

    if(note){
      response.json(note)
    }else{
      response.status(404).end()
    }

  })

app.delete('/api/notes/:id', (request, response) => {
  
  const id = request.params.id
  const note = notes.find(note => note.id === id)

  response.status(204).end()

})


const PORT = 3001
app.listen(PORT, () =>{
console.log(`Server running on port ${PORT}`)
});