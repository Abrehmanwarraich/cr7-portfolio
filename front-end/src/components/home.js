import { useEffect,useState } from 'react';
import React from 'react'
import '../App.css';
import axios from 'axios';


const Home = () => {

  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const [uploadedData, setUploadedData] = useState([]);

  // =----------------------fetch latesnews --------------
  useEffect(() => {
    axios.get('http://localhost:3000/items')
      .then(res => {
        setItems(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  // =----------------------fetch stats --------------
  useEffect(() => {
    axios.get('http://localhost:3000/stats')
      .then(res => {
        setItems2(res.data);
      })
      .catch(err => console.log(err));
  }, []);
    
// =----------------------fetch image --------------
const fetchUploadedData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/upload');
    setUploadedData(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

useEffect(() => {
  fetchUploadedData();
}, []);



  return (
    <div >
    <div><img src='../../images/main.png' alt='main pic' className='mainpic'/></div>
    <div className='pi'>
      <h1>Personal Information</h1><br/>
      <hr/>
  <table>
      <tr><td>First name</td><td>Cristiano Ronaldo</td> </tr>
      <tr><td>Last name</td><td>dos Santos Aveiro</td> </tr>
      <tr><td>Father name</td><td>José Dinis Aveiro</td> </tr>
      <tr><td>Mother name</td><td>Maria Dolores dos Santos</td> </tr>
      <tr><td>Sibiling</td><td>3</td> </tr>
      <tr><td>Country of birth</td><td>Portugal</td> </tr>
      <tr><td>Date of birth</td><td>5 February 1985</td> </tr>
      <tr><td>Nationality</td><td>Portugal</td> </tr>
      <tr><td>Age</td><td>39</td> </tr>
      <tr><td>Religion</td><td>Roman Catholic</td> </tr>
      <tr><td>Place of birth</td><td>Funchal</td> </tr>
      <tr><td>Height</td><td>187 cm</td> </tr>
      <tr><td>Weight</td><td>83 kg</td> </tr>
      <tr><td>Foot</td><td>Right</td> </tr>
      <tr><td>Position</td><td>Attacker</td> </tr>
      <tr><td>Shoes number</td><td>9 UK size</td> </tr>
      <tr><td>Languages</td><td>Portuguese,English,Spanish,Italian</td> </tr>
      <tr><td>Favorite food</td><td>ABacalhau à Brás</td> </tr>
      <tr><td>Total Goals</td><td>879 (22-3-2024)
      </td> </tr>
  </table><br/><br/>
    </div>
    <div className='scheduleh'>
      <h1>Schedule</h1><br/><hr/>
      <table><br/>
      <tbody>
      {uploadedData.map((data,index) => (

      <tr key={index}><td><img src={`http://localhost:3000/${data.image1}`} alt='team logo' className='teamlogo'/>
       <h1>{data.teams}</h1>
      <img src={`http://localhost:3000/${data.image2}`} alt='team logo opposite' className='teamlogo'/></td></tr>
      
      ))}
      </tbody>
  </table>
  <br/><br/>
    </div>
    <div className='stats'><br/>
      <h1>Stats</h1><br/><hr/><br/>
      <table>
      <thead>
      <tr><th className='date'>Date</th><th className='teamh'>Teams</th><th>Goals</th><th>win/lose</th><th>CR Goals</th> </tr>
      </thead>
      <tbody> 
        {items2.map(item2 => (
      <tr><td className='date'>{item2.date.split('T')[0]}</td>
      <td className='team' style={{textAlign:'left'}}>{item2.teams}</td>
      <td  className='goals'>{item2.goals}</td>
      <td  className='win'>{item2.win}</td>
      <td  className='crgoals'>{item2.crgoals}</td> </tr>
      ))}
      </tbody>
  </table>
    </div>
    <div className='news'><br/><br/>
    <h1>Latest News</h1><br/><hr/><br/>
    <table>
<thead><tr><th className='datenews'>Date</th><th className='teamhnews'>Teams</th></tr></thead>
<tbody>
    {items.map(item => (                  
<tr><td className='datenews'>{item.Date.split('T')[0]}</td><td className='teamnews'>{item.latestnew}</td></tr>
    ))}
</tbody>

</table>

    </div>
    </div>
  )
}

export default Home;





