import express from 'express'
import http from 'http'
import storyRoutes from './routes/stories.route.js'
const app = express()
const server = http.createServer(app)
const PORT = 5000
app.use('/api/story',storyRoutes)
server.listen(PORT,()=>(
    console.log(`server running on port ${PORT}`)
))