# Using the API

```javascript

const apiUrl = '/api/filters';

// Fetching all filters
superagent
  .get(apiUrl)
  .end(function(err, res) {
    const filters = res.body;
    (...)
  });

// Creating a filter
superagent
  .post(apiUrl)
  .send({
    color: 'yellow',
    name: 'Trump'
    text: 'Trump',
    hashtags: ['Trump']
  })
  .end(function(err, res) {
    (...)
  });

// Deleting a filter
superagent
  .delete(`apiUrl/${filter.name}`)
  .end(function(err, res) {
    (...)
  });

```
