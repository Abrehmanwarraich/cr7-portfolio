
import '../App.css'
import React, { useState } from 'react';
import axios from 'axios';



const Admin = () => {

  const [time, settime] = useState('');
  const [news, setnews] = useState('');
  const [teams, setteams] = useState('');
  const [goals, setgoals] = useState('');
  const [win, setwin] = useState('');
  const [crgoals, setcrgoals] = useState('');
  const [date, setdate] = useState('');
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [text, setText] = useState('');


// ----add latestne--------------
  const addItem = () => {
    axios.post('http://localhost:3000/items', { time, news })
      .then(res => {
        console.log(res.data);
        settime('');
        setnews('');

      })
      .catch(err => console.log(err));
  };

  // ------------add stats ----------
  const addItem1 = () => {
    axios.post('http://localhost:3000/stats', { date, teams, goals, win, crgoals })
      .then(res => {
        console.log(res.data);
        setdate('');
        setteams('');
        setgoals('');
        setwin('');
        setcrgoals('');

      })
      .catch(err => console.log(err));
  };

  // ------------ add-schedule==---------


  const handleImage1Change = (e) => {
    setImage1(e.target.files[0]);
  };

  const handleImage2Change = (e) => {
    setImage2(e.target.files[0]);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image1', image1);
    formData.append('image2', image2);
    formData.append('text', text);

    try {
      await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Data uploaded successfully!');
    } catch (error) {
      console.error('Error uploading data:', error);
      alert('Error uploading data. Please try again.');
    }
  };


  return (

    <div>
      {/* --------------latest news--------- */}

      <div className='news'><br /><br />
        <h1>Latest News</h1><br /><hr /><br />
        <table>
          <tr><th className='datenews'>Date</th><th className='teamhnews'>Teams</th></tr>
          <tr><td><input className='time'
            type="date"
            value={time}
            onChange={(e) => settime(e.target.value)}
          /> </td>
            <td className='teamnews'><input type='text' className='teamnewsinput' value={news} onChange={e => setnews(e.target.value)} placeholder="Name" /></td></tr>
        </table>
        <button onClick={addItem}>Upload</button>

      </div>
      {/* ----------------stats----------------- */}

      <div className='stats'><br />
        <h1>Stats</h1><br /><hr /><br />
        <table>
          <tr><th className='date'>Date</th><th className='teamh'>Teams</th><th>Goals</th><th>win/lose</th><th>CR Goals</th> </tr>
          <tr><td ><input className='time'
            type="date"
            value={date}
            onChange={(e) => setdate(e.target.value)}
          /></td>
            <td className='team' style={{ textAlign: 'left' }}><input type='text' value={teams} onChange={e => setteams(e.target.value)} /></td>
            <td className='goals'><input type='text' value={goals} onChange={e => setgoals(e.target.value)} /></td>
            <td className='win'><input type='text' value={win} onChange={e => setwin(e.target.value)} /></td>
            <td className='crgoals'><input type='text' value={crgoals} onChange={e => setcrgoals(e.target.value)} /></td> </tr>
        </table>
        <button onClick={addItem1}> Upload</button>

      </div>


      {/* ------------------schedule------------- */}
      <div className='scheduleh'>
        <h1>Schedule</h1><br /><hr />
        <form onSubmit={handleSubmit}>
        <br />
          <input type="file" onChange={handleImage1Change} className='teamlogo'/><br/><br/><br/>
            <h1 className='teamname'> Teams names </h1>
            <input type='text' onChange={handleTextChange}/><br/><br/>
            <input type="file" onChange={handleImage2Change} className='teamlogo' />
          
          <button type="submit" className='btn'>Upload</button>
      
      </form>
      <br /><br />
    </div>
    </div >
  )
}

export default Admin;










//     useEffect(() => {
//         axios.get('http://localhost:3001/items')
//             .then(res => {
//                 setItems(res.data);
//             })
//             .catch(err => console.log(err));
//     }, []);

//

//     return (
//         <div>
//             <h1>Items</h1>
//             <ul>
//                 {items.map(item => (
//                     <li key={item.id}>{item.name} - {item.description}</li>
//                 ))}
//             </ul>
//             <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
//             <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
//             <button onClick={addItem}>Add Item</button>
//         </div>
//     );
// }

// export default App;