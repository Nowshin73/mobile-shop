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

// Connect the client to the server	(optional starting in v4.7)
//await client.connect();
const productsCollection = client.db("mobileshop").collection("products");
const userCollection = client.db("mobileshop").collection("users");
const cartCollection = client.db("mobileshop").collection("cart");
const favCollection = client.db("mobileshop").collection("fav");

app.get('/products', async (req, res) => {
  const result = await productsCollection.find().toArray();
  res.send(result);
})

app.get('/products/:id', async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) }

  const options = {
    // Include only the `title` and `imdb` fields in the returned document
    projection: {
      name: 1, description: 1, price: 1, category: 1, numofReviews: 1, ratings: 1, images: 1, reviews: 1, brand: 1
    },
  };
  const result = await productsCollection.findOne(query, options);
  res.send(result);
})
//get my products
app.get(`/products`, async (req, res) => {
  const { userId } = req.query;
  if (!userId) {
    return res.status(400).send({ error: 'User ID is required' });
  }
  try {
    const myItems = await productsCollection.find({ userId }); 
    console.log(myItems); // Replace 'Cart' with your cart model
    res.status(200).json(myItems);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch cart items' });
  }
});

app.post('/products', async (req, res) => {
  const product = req.body;
  const result = await productsCollection.insertOne(product);
  res.send(result);
});

app.delete('/products/:id', async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await productsCollection.deleteOne(query);
  res.send(result);
})

//product update
app.put('/products/:id', async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const updatedProduct = req.body;
  const result = await productsCollection.replaceOne(filter,updatedProduct );
  res.send(result);
 
})

app.post('/cart', async (req, res) => {
  const cart = req.body;
  const result = await cartCollection.insertOne(cart);
  res.send(result);
});
app.get('/cart', async (req, res) => {
  const result = await cartCollection.find().toArray();
  res.send(result);
})
// my cart
app.get(`/cart`, async (req, res) => {
  const { userId } = req.query;
  if (!userId) {
    return res.status(400).send({ error: 'User ID is required' });
  }
  try {
    const cartItems = await cartCollection.find({ userId }); 
    console.log(cartItems); // Replace 'Cart' with your cart model
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch cart items' });
  }
});

app.delete('/cart/:id', async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await cartCollection.deleteOne(query);
  res.send(result);
})

app.post('/fav', async (req, res) => {
  const fav = req.body;
  const result = await favCollection.insertOne(fav);
  res.send(result);
});

app.get('/fav', async (req, res) => {
  const result = await favCollection.find().toArray();
  res.send(result);
})
// my fav
app.get(`/fav`, async (req, res) => {
  const { userId } = req.query;
  if (!userId) {
    return res.status(400).send({ error: 'User ID is required' });
  }
  try {
    const favItems = await favCollection.find({ userId }); 
    console.log(favItems); // Replace 'Cart' with your cart model
    res.status(200).json(favItems);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch cart items' });
  }
});
app.delete('/fav/:id', async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await favCollection.deleteOne(query);
  res.send(result);
})

app.get('/users/:id', async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) }

  const options = {
    // Include only the `title` and `imdb` fields in the returned document
    projection: {
      _id: 1, email: 1, name: 1, photo: 1, createdAt: 1,
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
app.get('/users', async (req, res) => {
  const result = await userCollection.find().toArray();
  res.send(result);
});
// delete user --admin
app.delete('/users/:id', async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await userCollection.deleteOne(query);
  res.send(result);
})

// Update user role -- admin
app.patch('/users/:id', async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const updatedUser = { $set: { role: req.body.role } };

  try {
    const result = await userCollection.updateOne(filter, updatedUser);
    if (result.modifiedCount > 0) {
      res.status(200).send({ message: 'User role updated successfully.' });
    } else {
      res.status(404).send({ message: 'User not found or no changes made.' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Error updating user role', error });
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

//run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('MobiVerse  is running')
})

app.listen(port, () => {
  console.log(`MobiVerse is running on port ${port}`);
})