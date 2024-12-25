document.getElementById('loadBooks').addEventListener('click', () => loadData('books'));
document.getElementById('loadReaders').addEventListener('click', () => loadData('readers'));
document.getElementById('loadStaff').addEventListener('click', () => loadData('staff'));

async function loadData(endpoint) {
  try {
    const response = await fetch(`http://localhost:3000/${endpoint}`);
    const data = await response.json();

    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<h2>${endpoint.charAt(0).toUpperCase() + endpoint.slice(1)}</h2>`;
    contentDiv.innerHTML += `<ul>${data
      .map((item) => `<li>${JSON.stringify(item)}</li>`)
      .join('')}</ul>`;
  } catch (error) {
    console.error('Error loading data:', error);
    alert('Failed to load data. Please try again.');
  }

  const express = require('express');
  const path = require('path');
  
  const app = express();
  
  const baseURL = window.location.hostname.includes('127.0.0.1') ? 'http://127.0.0.1:3000' : 'http://localhost:3000';

  // Serve static files from the "public" directory
  app.use(express.static(path.join(__dirname, 'public')));
  

  const calculateRoutes = require('./routes/calculate');
app.use('/calculate', calculateRoutes);


document.getElementById('triggerException').addEventListener('click', () => {
    fetch('http://localhost:3000/exception/trigger', {
        method: 'GET',
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.error || 'Unknown error');
                });
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('result').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('result').innerText = `An error occurred: ${error.message}`;
            console.error('Error:', error);
        });
});

// Якщо транслювати сторінку у Live Server --> 
app.use(cors({
    origin: 'http://127.0.0.1:5500', // Дозволяємо доступ із цього домену
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Дозволені HTTP-методи
}));


  // Start server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });


}