import express from 'express'

let port = 3001

export default async () => {
  let app = express()
  app.use('/', express.static('public'))
  app.listen(port, () => console.log(`Server listening on port ${port}`))
}
