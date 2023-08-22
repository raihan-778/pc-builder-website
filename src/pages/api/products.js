 //middleware

 app.use(cors());
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://pc-builder:MJger64Z2HKQx6xL@cluster0.wlin7fq.mongodb.net/?retryWrites=true&w=majority";

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
    await client.connect();
    // Send a ping to confirm a successful connection
    const pcComponents=client.db("pc-builder").collection("components");
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // if (req.method === "GET") {
    //   const news = await newsCollection.find({}).toArray();
    //   res.send({ message: "success", status: 2000, data: news });
    // }

    // app.get("/", async (req, res) => {
    //   const query = {};
    //   const result = await pcComponents.find(query).toArray();
    //   // console.log(result);
    //   res.send({message:"success", status: 200, data: result});
    // });
    if (req.method === "GET") {
      const products = await pcComponents.find(query).toArray();
      res.send({ message: "success", status: 2000, data: news });
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("pc-builder server is running");
});

app.listen(port, () => {
  console.log(`Used product resel site is running on port ${port}`);
});

