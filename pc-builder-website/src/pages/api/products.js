 //middleware


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

async function run(req,res,) {
 
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("PC Builder Server is Running")
    const pcComponents=client.db("pc-builder").collection("components");
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

 


    if (req.method === "GET") {
      const query={}
      const products = await pcComponents.find(query).toArray();
      res.send({ message: "success", status: 2000, data: products });
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
export default run;




