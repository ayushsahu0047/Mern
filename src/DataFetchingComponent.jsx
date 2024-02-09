
import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const jsonData = await response.json();

      
        setData(jsonData.slice(0, 10)); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    
    fetchData();
  }, []); 

  return (
    <div>
      <h2>Data Fetching Component</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetchingComponent;
