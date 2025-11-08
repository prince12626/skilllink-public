const axios = require('axios');

const data = {
  user: "672dcbf7e1a3a24a9c9a1b12",
  title: "Logo Design Service", 
  description: "Professional logo design with unlimited revisions.",
  imageURL: "https://example.com/logo-sample.png",
  keywords: ["design", "logo", "branding"],
  price: 49.99
};

axios.post('http://localhost:5000/api/v1/service/create', data, {
  headers: { 'Content-Type': 'application/json' }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error('Error:', error.response?.data || error.message);
});