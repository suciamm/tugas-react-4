//import React from "react";
import './Sing.css'
import { useState } from 'react';


const Sing = (custom) =>{
    // const {id,nama,gambar,musik,asal} = props;
    const [like,disk] = useState(true);
    const [desk, sett]= useState(false);

    // const changeBackground = () => {
    //     setBackground(!background);
    //   };
    const changeReact = () =>{
        disk(!like);
    }
    const changeDesk = () =>{
        sett(!desk);
    }


    return(
    
        <div className='box1'>
            <div className='box'>
                <img src={custom.gambarr }className="gbr"></img>
                <h2>{custom.namaa}</h2>

                {desk && <p>{custom.musikk} dari {custom.asall}</p>}
                <button style={{background : like? 'blue' : 'grey'}} onClick={changeReact}>{like ? "Suka" : "Batal Suka"}</button>
                <button onClick={changeDesk}>{desk? "sembunyikan": "selengkapnya"}</button>
            </div>
        </div>
    )
}

export default Sing
