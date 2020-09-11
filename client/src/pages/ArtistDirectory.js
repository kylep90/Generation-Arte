import React,{useState} from 'react'
import ArtistCard from "../components/ArtistCard"
import ArtistSearch from '../components/ArtistSearch'


function ArtistDirectory(props){

    const [searchValue, setSearchValue] = useState("")
    // const [filterValue, setFilterValue] = useState("")

    // const handleChange = (e) =>{
    //     setFilterValue(e.target.value)
    // }


    const users = props.users;  
    const artworks = props.artworks;
    // const searchTerm = ".toLowerCase().includes(searchValue)"

    console.log(searchValue)


    return (
<>
        <ArtistSearch setSearchValue={setSearchValue}/>    
        
        {(searchValue ? users.filter((user)=>user.firstName.toLowerCase().includes(searchValue)||user.lastName.toLowerCase().includes(searchValue)||user.alias.toLowerCase().includes(searchValue)||user.industry.toLowerCase().includes(searchValue)||user.specific.toLowerCase().includes(searchValue)||user.bio.toLowerCase().includes(searchValue)) : users).map(user => (
        
        // const userCard = users.map((user) =>  
    <ArtistCard name={user.firstName} 
                last={user.lastName}
                alias={user.alias}
                industry={user.industry}
                specific={user.specific}
                pic={user.picture}
                bio={user.bio}
                facebook={user.facebookUrl} 
                twitter={user.twitterUrl}
                instagram={user.instagramUrl}
                youtube={user.youtubeUrl}
                id={user._id}
                >
                
                </ArtistCard> ))}
        
{/* {(filterValue ? users.filter((user)=>user.industry.toLowerCase().includes(filterValue)) : users).map(user => (
        
    <ArtistCard name={user.firstName} 
                last={user.lastName}
                alias={user.alias}
                industry={user.industry}
                specific={user.specific}
                pic={user.picture}
                bio={user.bio}
                facebook={user.facebookUrl} 
                twitter={user.twitterUrl}
                instagram={user.instagramUrl}
                youtube={user.youtubeUrl}
                id={user._id}
                // artwork={artworks[1].video}
                >
                
                </ArtistCard> ))} */}
         
        </>



       )
}

export default ArtistDirectory

/* <div>{userCard}</div> */
        
        /* <ArtistCard name="Stevie Wonder" 
                    type="singer"
                    pic="https://los40es00.epimg.net/los40/imagenes/2020/05/13/los40classic/1589357730_131396_1589362585_rrss_normal.jpg" 
                    bio="I am American singer, songwriter, musician and record producer. I play a diverse set of instruments like the drums, congas and the keyboard."
                    // artwork={artworks[1].video}
                    iframe="https://www.youtube.com/embed/E9Cl4xuFCJg"
                    title="With the Welsh Dragon"
                    description="Taking back to the Summer of 69"
                    facebook="https://www.facebook.com/StevieWonder"
                    twitter="https://twitter.com/steviewonder?lang=en"
                    instagram=""/>
                    
        <ArtistCard name="Saasil Sounds" 
                    type="singer"
                    pic="https://xsradio.mx/wp-content/uploads/2020/04/Logo-Saasil-Sounds-1-scaled.jpg" 
                    bio="International roots/reggae collection with live performances around CDMX."
                    iframe="https://www.youtube.com/embed/OkLv8H0dd5Y"
                    title="Saasil Sounds - Your Sunshine (Live)"
                    description="Live on Ellie's roof"
                    facebook="https://www.facebook.com/sassil.sounds/"
                    twitter=""
                    instagram="https://www.instagram.com/saasil.sounds/"/>*/