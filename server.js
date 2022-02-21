const express = require("express")
const mongoose = require("mongoose")
const usersRouter = require("./routes/UserRoutes.js")

const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://trish:anne@comp3123-assignment2.wrcjs.mongodb.net/comp3133?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log('Success Mongodb connection')
}).catch(err => {
    console.log('Error Mongodb connection')
});

app.use(usersRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`)
})