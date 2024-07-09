import React from 'react'
//[Vrikshana, Utkatasana, Bhujangasana, Virbhadrasana, Urdhva_Mukha_Shvanasana, Salamba_Sarvangasana, Trikonasana]

import { poseImages } from '../../utils/pose_images'

import './DropDown.css'
export default function DropDown({ poseList, currentPose, setCurrentPose }) {
    const poseNames = {Tree: 'Vrikshana (Tree)', 
    Chair: 'Utkatasana (Chair)', 
    Cobra: 'Bhujangasana (Cobra)', 
    Warrior: 'Virbhadrasana (Warrior)', 
    Dog: 'Adho_Mukha_Shvanasana (Dog)', 
    Shoulderstand: 'Salamba_Sarvangasana (Shoulderstand)', 
    Traingle: 'Trikonasana (Triangle)'
}
console.log(poseNames.Chair)
return (
        <div
        className='dropdown dropdown-container'
         
      >
        <button 
            className="btn dropdown-toggle"
            type='button'

            data-bs-toggle="dropdown"

            id="pose-dropdown-btn"
            aria-expanded="false"
        >{poseNames[currentPose]}
        </button>
        <ul class="dropdown-menu dropdown-custom-menu" aria-labelledby="dropdownMenuButton1">
            {poseList.map((pose) => (
                <li onClick={() => setCurrentPose(pose)}>
                    <div class="dropdown-item-container">
                        {console.log(pose)}
                        <p className="dropdown-item-1">{poseNames[pose]}</p>
                        <img 
                            src={poseImages[pose]}
                            className="dropdown-img"
                        />
                        
                    </div>
                </li>
            ))}
            
        </ul>
              
          
      </div>
    )
}
 