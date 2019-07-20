import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import App from './App'

const port = 3000
const app = express()

const html = renderToString(<App />)

// Must be no whitespace around ${html}. See facebook/react#10879
const body = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>SSR Example</title>
    <link rel="stylesheet" href="/main.css" />
  </head>
  <body>
    <div id="root">${html}</div>
    <script src="/main.js" defer></script>
  </body>
  </html>
`

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
  res.send(body)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
