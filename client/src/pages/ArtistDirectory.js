import React from 'react'
import ArtistCard from "../components/ArtistCard"

const artistData = [
    {
        name: "Stevie Wonder",
        bio: "",
        iframe: "",
        title:"",
        description:""
    }
]
function ArtistDirectory(artistData){
    return (
<>
        <ArtistCard name="Stevie Wonder" 
                    pic="https://los40es00.epimg.net/los40/imagenes/2020/05/13/los40classic/1589357730_131396_1589362585_rrss_normal.jpg" 
                    bio="I am American singer, songwriter, musician and record producer. I play a diverse set of instruments like the drums, congas and the keyboard."
                    iframe="https://www.youtube.com/embed/E9Cl4xuFCJg"
                    title="With the Welsh Dragon"
                    description="Taking back to the Summer of 69"
                    facebook="https://www.facebook.com/StevieWonder"
                    twitter="https://twitter.com/steviewonder?lang=en"
                    instagram=""/>
        <ArtistCard name="Saasil Sounds" 
                    pic="https://xsradio.mx/wp-content/uploads/2020/04/Logo-Saasil-Sounds-1-scaled.jpg" 
                    bio="International roots/reggae collection with live performances around CDMX."
                    iframe="https://www.youtube.com/embed/OkLv8H0dd5Y"
                    title="Saasil Sounds - Your Sunshine (Live)"
                    description="Live on Ellie's roof"
                    facebook="https://www.facebook.com/sassil.sounds/"
                    twitter=""
                    instagram="https://www.instagram.com/saasil.sounds/"/>
        
        </>



       )
}

export default ArtistDirectory