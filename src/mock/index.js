var axios = require('axios')
var MockAdapter = require('axios-mock-adapter')

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios)

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/api/user').reply(200, {
  status: 'OK',
  code: 200,
  data: {
    username: 'abcdefg@gmail.com',
    age: 23
  }
})

mock.onGet('/api/products').reply(200, {
  status: 'OK',
  code: 200,
  data: [
    {
      id: 5,
      name: 'Susu Kental Manis',
      sku: 'SKM-122332',
      image: 'https://www.frisianflag.com/storage/app/media/silver-500x500.jpg'
    },
    {
      id: 7,
      name: 'Gokart Balap',
      sku: 'GB-4393403',
      image: 'https://cdn3.volusion.com/kcnqf.ftjso/v/vspfiles/photos/Blazer200-4.jpg?1542013119'
    }
  ]
})

mock.onGet('/api/categories').reply(200, {
  status: 'OK',
  code: 200,
  data: [
    {
      id: 5,
      name: 'Otomotif'
    },
    {
      id: 7,
      name: 'Fashion Wanita'
    }
  ]
})
mock.onGet('/api/products/5').reply(200, {
  status: 'OK',
  code: 200,
  data: {
    id: 5,
    name: 'Susu Kental Manis',
    sku: 'SKM-122332',
    image: 'https://www.frisianflag.com/storage/app/media/silver-500x500.jpg'
  }
})
