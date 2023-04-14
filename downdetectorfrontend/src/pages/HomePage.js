import './HomePage.css';


import React, { useContext, useState, useEffect } from 'react'







const HomePage = () => {

    const [input, setInput] = useState("")
    const [statuses, setStatuses] = useState("")
    const [gra, setGra] = useState("https://gra.gov.gh/")
    const [mtn, setMtn] = useState("https://www.mtn.com.gh/")
    const [ec, setEc] = useState("https://www.ec.gov.gh/")
    const [statsgh, setStatsgh] = useState("https://statsghana.gov.gh/")
    const [nia, setNia] = useState("https://www.nia.gov.gh/")
    const [nca, setNca] = useState("https://www.nca.org.gh/")
    const [ghs, setGhs] = useState("https://ghs.gov.gh/")
    const [passport, setPassport] = useState("https://passport.mfa.gov.gh/")
    const [voda, setVoda] = useState("https://www.vodafone.com.gh/")
    const [atg, setAtg] = useState("https://www.airteltigo.com.gh/")
    const [ecg, setEcg] = useState("https://www.ecg.com.gh/")
    const [dvla, setDvla] = useState("https://www.dvla.gov.gh/")
    
    

    
    
    const [code, setCode] = useState("")
    const [loaded, setLoaded] = useState(false)
    const [loading, setLoading] = useState(false)


    let uploadLink = async (e)=> {
        e.preventDefault()
        setLoaded(false)
        setLoading(true)
           let response =  await fetch('http://127.0.0.1:8000/check/', {
               method: "POST",
               credentials: "include",
               headers: {
              "Content-Type": "application/json"
         },
                 
               body:JSON.stringify({
                  "url": input,
              })
           })
          
           let data = await response.json()
           setCode(data)
           console.log(data)

           
    
           //setHoverPrice(data)
          
           console.log('response:', response)
           setLoading(false)
           setLoaded(true)
    
       }

       let getStatuses = async ()=> {
    
    
        let response =  await fetch(`http://127.0.0.1:8000/detect/`, {
            method: "GET",
            credentials: "include",
            headers: {
           "Content-Type": "application/json"
      },
              
           
        })
       
        let data = await response.json()
        setStatuses(data[1])
        if (data[1].includes("https://gra.gov.gh/")){
          setGra("https://gra.gov.gh/")
        } else{
          setGra("")
        }

        if (data[1].includes("https://www.ec.gov.gh/")){
          setEc("https://www.ec.gov.gh/")
        } else{
          setEc("")
        }

        if (data[1].includes("https://statsghana.gov.gh/")){
          setStatsgh("https://statsghana.gov.gh/")
        } else{
          setStatsgh("")
        }

        if (data[1].includes("https://www.nia.gov.gh/")){
          setNia("https://www.nia.gov.gh/")
        } else{
          setNia("")
        }

        if (data[1].includes("https://www.nca.org.gh/")){
          setNca("https://www.nca.org.gh/")
        } else{
          setNca("")
        }

        if (data[1].includes("https://ghs.gov.gh/")){
          setGhs("https://ghs.gov.gh/")
        } else{
          setGhs("")
        }

        if (data[1].includes("https://passport.mfa.gov.gh/")){
          setPassport("https://passport.mfa.gov.gh/")
        } else{
          setPassport("")
        }

        if (data[1].includes("https://www.mtn.com.gh/")){
          setMtn("https://www.mtn.com.gh/")
        } else{
          setMtn("")
        }

        if (data[1].includes("https://www.vodafone.com.gh/")){
          setVoda("https://www.vodafone.com.gh/")
        } else{
          setVoda("")
        }

        if (data[1].includes("https://www.airteltigo.com.gh/")){
          setAtg("https://www.airteltigo.com.gh/")
        } else{
          setAtg("")
        }

        if (data[1].includes("https://www.ecg.com.gh/")){
          setEcg("https://www.ecg.com.gh/")
        } else{
          setEcg("")
        }

        if (data[1].includes("https://www.dvla.gov.gh/")){
          setDvla("https://www.dvla.gov.gh/")
        } else{
          setDvla("")
        }


        console.log(data[1])
       
    
    }

  


    useEffect(() => {
      const token = setInterval(getStatuses, 70000) // Every 5 seconds?
      getStatuses(); // Initial request
return () => {
 // Don't forget to cleanup the interval when this effect is cleaned up.
 clearInterval(token)
}
      
      }, [])



    return (
 <div>
    <div class="hero-image">
  <div class="hero-text">
    <h1>Real-time monitoring</h1>
    <h4>We tell you when your favourite services are down</h4>
    <form onSubmit={uploadLink}>
    <div class="bar">
      <input placeholder='example: https://google.com' class="searchbar" type="text" title="Search" value = {input}  onChange={(e) => setInput(e.target.value )}/>

    </div>
        
    </form>
    {loading? <p>loading... this may take some time.</p>:null}
    {loaded ? <h3>{code}</h3> : null}  
  </div>
  
</div>


	

<div class="navigation-wrap bg-light start-header start-style">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="navbar navbar-expand-md navbar-light">
                
                    <a class="navbar-brand" href="/" target="_blank"><img src="https://tinypic.host/images/2023/03/20/m-design-logo-09A5D82F03-seeklogo.com.png" alt=""/></a>	
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto py-4 py-md-0">
                            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
                            </li>
                            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <a class="nav-link" href="#">About</a>
                            </li>
                           
                            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Web Design</a>
                                    <a class="dropdown-item" href="#">Web Development</a>
                                    <a class="dropdown-item" href="#">SEO</a>
                                    <a class="dropdown-item" href="#">AI Development</a>
                                </div>
                            </li>
                            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    
                </nav>		
            </div>
        </div>
    </div>
</div>

<div class="my-5 py-5">
  <h2>Check out some popular Ghanaian sites (status updated every 4 minutes)</h2>
    <div className='flex'>
    
      <div class="card">
  <img width="198px" height="150px" src="https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/273794911_4775701332479564_8295929347347908109_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BiDgw9CPU1oAX8q8gsM&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&oh=00_AfCOL5s-aDNZOhWr1me9FQJ5NH7yaLxauP36U3wv1MbcYA&oe=643A5533" alt="Avatar" />
  <div class="container">
    <h4><b>Status:

      {mtn == "https://www.mtn.com.gh/" ? 
       <span class = "on-color">ON</span>
       :<span class = "on-color">OFF</span>}

       </b></h4>
    
  </div>
</div>




<div class="card">
  <img width="198px" height="150px" src="https://assets.bizclikmedia.net/576/e5aeca18dce9f4d5b206e4cbde747326:82575990dc9778d472631574936c0391/screenshot-20-151.png" alt="Avatar" />
  <div class="container">
    <h4><b>Status: {voda  == "https://www.vodafone.com.gh/"? <span class = "on-color">ON</span>: <span class = "off-color">OFF</span>}</b></h4>
    
  </div>
</div>

<div class="card">
  <img width="198px" height="150px" src="https://webportal.ecggh.com/WEBPORTAL-GHANA/assets/images/logo.jpg" alt="Avatar" />
  <div class="container">
  <h4><b>Status: {ecg  == "https://www.ecg.com.gh/"? <span class = "on-color">ON</span>: <span class = "off-color">OFF</span>}</b></h4>
    
  </div>
</div>
<div class="card">
  <img width="198px" height="150px" src="https://upload.wikimedia.org/wikipedia/commons/2/29/Driver_and_Vehicle_Licensing_Authority_logo.jpg" alt="Avatar" />
  <div class="container">
  <h4><b>Status: {dvla  == "https://www.dvla.gov.gh/"? <span class = "on-color">ON</span>: <span class = "off-color">OFF</span>}</b></h4>
    
  </div>
</div>

<div class="card">
  <img width="198px" height="150px" src="https://passport.mfa.gov.gh/assets/imgs/appjourney/Capture_III.PNG" alt="Avatar" />
  <div class="container">
  <h4><b>Status: {passport  == "https://passport.mfa.gov.gh/"? <span class = "on-color">ON</span>: <span class = "off-color">OFF</span>}</b></h4>
    
  </div>
</div>

<div class="card">
  <img width="198px" height="150px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Ghana_Revenue_Authority_logo_%28new%29.jpg/250px-Ghana_Revenue_Authority_logo_%28new%29.jpg" alt="Avatar" />
  <div class="container">
  <h4><b>Status: {gra  == "https://gra.gov.gh/"? <span class = "on-color">ON</span>: <span class = "off-color">OFF</span>}</b></h4>
    
  </div>
</div>


<div class="card">
  <img width="198px" height="150px" src="https://citinewsroom.com/wp-content/uploads/2019/10/nia-512x375.png" alt="Avatar" />
  <div class="container">
  <h4><b>Status: {nia  == "https://www.nia.gov.gh/"? <span class = "on-color">ON</span>: <span class = "off-color">OFF</span>}</b></h4>
    
  </div>
</div>


<div class="card">
  <img width="198px" height="150px" src="https://pbs.twimg.com/profile_images/1038423854010564608/ZBAcvmOl_400x400.jpg" alt="Avatar" />
  <div class="container">
  <h4><b>Status: {statsgh  == "https://statsghana.gov.gh/"? <span class = "on-color">ON</span>: <span class = "off-color">OFF</span>}</b></h4>
    
  </div>
</div>


<div class="card">
  <img width="198px" height="150px" src="https://pbs.twimg.com/profile_images/995962616685191170/qoxasBMg_400x400.jpg" alt="Avatar" />
  <div class="container">
  <h4><b>Status: {nca  == "https://www.nca.org.gh/"? <span class = "on-color">ON</span>: <span class = "off-color">OFF</span>}</b></h4>
    
  </div>
</div>

<div class="card">
  <img width="198px" height="150px" src="https://pbs.twimg.com/profile_images/1293234629479145472/VPUWSGZD_400x400.jpg" alt="Avatar" />
  <div class="container">
  <h4><b>Status: {ghs  == "https://ghs.gov.gh/"? <span class = "on-color">ON</span>: <span class = "off-color">OFF</span>}</b></h4>
    
  </div>
</div>





<div class="card">
  <img width="198px" height="150px" src="https://play-lh.googleusercontent.com/8EcA8sbSO5c8x9YQ-AYh7CSumXIlc3lPHPL00mQoaoBa6-Y1qrEV8M4b3bU4WCme_Q" alt="Avatar" />
  <div class="container">
  <h4><b>Status: {atg  == "https://www.airteltigo.com.gh/"? <span class = "on-color">ON</span>: <span class = "off-color">OFF</span>}</b></h4>
    
  </div>
</div>


<div class="card">
  <img width="198px" height="150px" src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Ec_of_ghana_new_logo.png" alt="Avatar" />
  <div class="container">
  <h4><b>Status: {ec  == "https://www.ec.gov.gh/"? <span class = "on-color">ON</span>: <span class = "off-color">OFF</span>}</b></h4>
    
  </div>
</div>




</div>
</div>
</div>




  
   
    )
}
export default HomePage