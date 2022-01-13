import React, {useState, useEffect} from 'react';
import * as Components from '../../components'
import axios from 'axios'


const Home =()=>{
    const [userName, setUsername] = useState("")
    const [repos, setRepos] = useState([{name:"",description:"",url:"",forks:"",description:"",stargazers:"",fullname:""}])
   

    const handleSubmit= (async (e) => {
        // Update the document title using the browser API
            e.preventDefault();
            const add = "https://api.github.com/users/"+userName+"/repos"
            const res = await axios(add);

            console.log(res.data);
            setRepos(res.data);
            document.getElementsByTagName("p").style.color = "black";
            
  
    }
    )

    const handleChange = (e) => {
        const target = e.target.value
        setUsername(target)
    }




return(

 <div>
     <h1> GitHub V2 </h1>
    <form onSubmit={handleSubmit} className='user-form' href={"/"+{userName}}>
            <input label='GitHub Username' onChange={handleChange} value={userName} className='input'/>
            <button  className="btn btn-primary btn-lg" type='submit' variant='outlined' color='primary'>
                Submit
            </button>
        </form>

    <Components.Repo user={userName} anArray={repos} />
</div>
    );

}






export default Home;