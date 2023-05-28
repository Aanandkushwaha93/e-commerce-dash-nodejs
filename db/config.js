const mongoose= require('mongoose');
database = "mongodb+srv://aanandkushwaha:aQI4IqfmLbn8vwaX@cluster0.alfcauh.mongodb.net/e-commerce?retryWrites=true&w=majority"
mongoose.connect(database)
mongoose.set('strictQuery', false);