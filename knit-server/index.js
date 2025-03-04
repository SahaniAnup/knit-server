const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});


const { MongoClient, ServerApiVersion,ObjectId } = require("mongodb");
const uri = "mongodb+srv://sanskarpandey495:zerotwo02@cluster0.g7yymvk.mongodb.net/?retryWrites=true&w=majority";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      const knitCollection = client.db("knitInventory").collection("knits")
      const usersCollection = client.db("bookInventory").collection("users")
      const sCollection = client.db("knitInventory").collection("sknits")

      // app.post("/register",async(req,res) => {
      //   const {username,password}= req.body
      //   const user =await useraCollection.findOne({username})
      //   if(user) {
      //     res.status(400).send("User already exists!")
      // }
      // const result = await useraCollection.insertOne({username, password});
      // })

      app.post('/upload-knit',async (req,res) => {
        const data = req.body
        const results = await knitCollection.insertOne(data)
        res.send(results)
        console.log(req.body)
    })

    app.post('/upload-sknit',async (req,res) => {
      const data = req.body
      const results = await sCollection.insertOne(data)
      res.send(results)
      console.log(req.body)
  })
    

    
    
    app.get('/all-knits', async (req, res) => {
      const knits = knitCollection.find()
      const results = await knits.toArray()
      res.send(results)
    })

    app.get('/s-knits', async (req, res) => {
      const sknits = sCollection.find()
      const results = await sknits.toArray()
      res.send(results)
    })


    app.patch('/update-knit/:id', async (req, res) => {
      const id = req.params.id
      const data = req.body
      const filter = { _id: new ObjectId(id) }
      const updateDoc = {
        $set:
        {
          ...data
        },
      }
      const options = { upsert: true }
      const results = await knitCollection.updateOne(filter, updateDoc, options)
      console.log(results)
      console.log(data)
      res.send(results)
    })

    app.delete('/delete-knit/:id', async (req, res) => {
      const id = req.params.id
      const results = await knitCollection.deleteOne({ _id: new ObjectId(id) })
      res.send(results)
    })

    app.get('/filter-knits/:category', async (req, res) => {
      const id = req.params.category;
      const knits = knitCollection.find({ category:category })
      const results = await knits.toArray();
      res.send(results)
    })

    app.get('/filter-knits-id/:id', async (req, res) => {
      const id = req.params.id;
      const knits = await knitCollection.findOne({ _id: new ObjectId(id) })
      console.log(knits)
      res.send(knits)
    })

    app.get('/single-knit/:id', async (req, res) => {
      const id = req.params.id;
      const results = await knitCollection.findOne({ _id: new ObjectId(id)})
      res.send(results)
    })

    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
//    await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
