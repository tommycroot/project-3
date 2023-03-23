import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import router from './config/router.js'

//!Variables

const app = express()

const startServer = async () => {
  try {

    //?Connect to mongoDB database
    await mongoose.connect(process.env.MONGO_URI)
    console.log('💎 Database connected')

    //? Parse JSON to req.body
    app.use(express.json())

    //? Middleware

    //Logger
    app.use((req, res, next) => {
      console.log(`☕️ Incoming request ${req.method} from ${req.url}`)
      next()
    })

    //Router goes here
    app.use(router)

    //? 404 catch all middleware
    app.use((req, res) => {
      return res.status(404).json({ message: 'Route does not exist.' })
    })

    //? Starting node server after connecting to database
    app.listen(process.env.PORT, () => console.log(`🏆 Server up and running on port ${process.env.PORT}.`))


  } catch (err) {
    console.log(err)
  }
}
startServer()