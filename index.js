const express = require('express');
const axios = require('axios');
const lodash = require('lodash');

const app = express();
const port = 3000;

// Middleware to fetch and analyze blog data
app.use((req, res, next) => {
  // Your middleware logic here
  Router.use();
});

// Define the route for fetching blog stats
app.get('/api/blog-stats', async (req, res) => {
  try {
    // Make the curl request to fetch the blog data
    const response = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', {
      headers: {
        'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6',
      },
    });

    // Assuming the response data is an array of blog posts
    const blogData = response.data;

    // Analyze the data using Lodash (Example: Calculate the total number of blog posts)
    const totalBlogPosts = _.size(blogData);

    // You can perform more analysis as needed

    // Send the statistics as JSON response
    res.json({ totalBlogPosts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
