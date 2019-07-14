/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const express = require('express')
const { createElement, Fragment } = require('react')
const { renderToString } = require('react-dom/server')
const { Ellipsis, Ring, Ripple } = require('react-css-spinners')

const port = 3000
const app = express()

const css = fs.readFileSync(
  './node_modules/react-css-spinners/css/style.min.css',
  'utf-8'
)

const html = renderToString(
  createElement(
    Fragment,
    null,
    createElement(Ellipsis),
    createElement(Ring),
    createElement(Ripple)
  )
)

const body = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>CJS Example</title>
    <style>
      ${css}
      #root {
        background-color: #20232a;
        padding: 1rem;
      }
    </style>
  </head>
  <body>
    <div id="root">
      ${html}
    </div>
  </body>
  </html>
`

app.get('*', (req, res) => {
  res.send(body)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
