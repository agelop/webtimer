const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/start', (req, res) => {
  const startDateAndTime = new Date()
  res.status(200).json({    
    "startDateAndTime" : startDateAndTime.toLocaleString(),
    "start" : startDateAndTime.valueOf()
  })
})

app.get('/stop', (req, res) => {
  res.status(400).json({    
    "message" : "Please inform Date Number"
  })
})

app.get('/stop/:startdatetime', (req, res) => {
  if (isNaN(req.params.startdatetime)  || req.params.startdatetime <= 0) {
    res.status(400).json({
      "message" : "Invalid Date Number"
    })
    return
  }
  const startDateAndTime = new Date(req.params.startdatetime)
  const stopDateAndTime = new Date()
  res.status(200).json({    
    "message" : "ok"
  })

})

app.listen(port, () => {
  console.log(`Webtimer listening on port ${port}`)
})