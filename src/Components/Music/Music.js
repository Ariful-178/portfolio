
import React from 'react';
import song from '../../audio/AK - Our Destination (1) (mp3cut.net).mp3'

const Music = () => {

    

    


    return (
        <div>
             <div>
               

               <video style={{display:"none"}}  controls loop muted={false}   autoPlay >
                 <source src={song}  type="audio/mp3" ></source>
               </video>
           </div>
           
            
        </div>
    );
};

export default Music;