function searchItems() {
    const query = document.getElementById('searchInput').value.toLowerCase();

    // Fetch the data from the db.json
    fetch('http://localhost:3000/students')
      .then(response => response.json())
      .then(data => {
        const results = data.filter(students => 
          students.first_name.toLowerCase().includes(query) || 
          students.last_name.toLowerCase().includes(query) || 
          students.degree_program.toLowerCase().includes(query) || 
          students.degree_classification.toLowerCase().includes(query)
        );

        displayResults(results);
      })
      .catch(error => console.error('Error:', error));
  }

  function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length > 0) {
      results.forEach(students => {
        const resultStudents = document.createElement('p');
        resultStudents.textContent = `${students.first_name} ${students.last_name} , ${students.degree_program} (${students.degree_classification})`;
        resultsContainer.appendChild(resultStudents);
      });
    } else {
      resultsContainer.textContent = 'No results found';
    }
  }