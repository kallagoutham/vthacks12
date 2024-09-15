const { MongoClient } = require('mongodb');

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
  },
};
const config1 = {
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
  },
};

async function fetchApiUrl() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('betteryou');
    const collection = database.collection('ngrok');
    const document = await collection.findOne({ key: 'url' });
    return document ? document.value : "https://default-url.com";
  } finally {
    await client.close();
  }
}
var apiUrl = "";
(async () => {
  apiUrl = await fetchApiUrl();
  console.log(`API URL: ${apiUrl}`  );
})();

var configObj = {
  config,
  config1,
  apiUrl,
};
export default configObj;