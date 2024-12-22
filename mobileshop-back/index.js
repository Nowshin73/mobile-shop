const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zmagebg.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    //await client.connect();
    const collegeCollection = client.db("collegebooking").collection("colleges");
    const mycollegeCollection = client.db("collegebooking").collection("mycolleges");
    const userCollection = client.db("collegebooking").collection("users");
    const bannerCollection = client.db("collegebooking").collection("banner");
    
    //get banner
    app.get('/banner', async (req,res) => {
       const result = await bannerCollection.find().toArray();
       res.send(result);
    })

    app.get('/colleges', async (req, res) => {
      const result = await collegeCollection.find().toArray();
      res.send(result);
    })

    app.get('/colleges/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }

      const options = {
        // Include only the `title` and `imdb` fields in the returned document
        projection: {
          id: 1, collegename: 1, category:1, clgimage: 1, collegelocation: 1, collegedes: 1, events: 1, research_papers: 1, reviews: 1, grad_img: 1
        },
      };
      const result = await collegeCollection.findOne(query, options);
      res.send(result);
    })
   
    app.get('/mycolleges', async (req, res) => {
      const result = await mycollegeCollection.find().toArray();
      res.send(result);
    })
    app.get('/mycolleges/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }

      const options = {
        // Include only the `title` and `imdb` fields in the returned document
        projection: {
          classid: 1, instructoremail: 1, instructorname: 1, classimage: 1, classname: 1, available_seats: 1,
          booked_seats: 1, price: 1, email: 1, status:1
        },
      };
      const result = await mycollegeCollection.findOne(query, options);
      res.send(result);
    })
    // Define API endpoint to update user's cart
   
    app.post('/mycolleges', async (req, res) => {
      const cart = req.body;
     
      const result = await mycollegeCollection.insertOne(cart);
      res.send(result);
    });
    app.delete('/cart/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await mycollegeCollection.deleteOne(query);
      res.send(result);
    })

    // app.get('/mycolleges', async (req, res) => {
    //   const result = await myclassCollection.find().toArray();
    //   res.send(result);
    // })
    // app.post('/mycolleges', async (req, res) => {
    //   const myclass = req.body;
    //   const result = await myclassCollection.insertOne(myclass);
    //   res.send(result);
    // });
    
    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }

      const options = {
        // Include only the `title` and `imdb` fields in the returned document
        projection: {
          _id: 1, email: 1, name: 1, photo: 1
        },
      };
      const result = await userCollection.findOne(query, options);
      res.send(result);
    })

    // users related apis
    // app.get('/users', verifyJWT, verifyAdmin, async (req, res) => {
    //   const result = await usersCollection.find().toArray();
    //   res.send(result);
    // });
    app.get('/users',  async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    });
    app.get('/colleges', async (req, res) => {
      const category = req.query.category;
      if (category) {
        const filteredColleges = await collegeCollection.find(category).toArray();
        console.log(filteredColleges);
        return res.send(filteredColleges)
      }
      else {
        return res.send({message: 'category not found'});
      }
    });
    app.post('/users', async (req, res) => {
      const user = req.body;
      const query = { email: user.email }
      const existingUser = await userCollection.findOne(query);

      if (existingUser) {
        return res.send({ message: 'user already exists' })
      }

      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    //await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('CU College Admission  is running')
})

app.listen(port, () => {
  console.log(`CU College Admission is running on port ${port}`);
})