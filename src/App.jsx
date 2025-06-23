import React, { useEffect } from 'react';
import WebFont from 'webfontloader';

function App() {
  
  
  useEffect(() => {
      WebFont.load({
        google: {
          families: ['Clutch'] // Or the specific font name
        }
      });
    }, []);

  return (
    <div className="heading">
      <h4 style={{
        wordSpacing:"10px",
        letterSpacing:"5px",
        marginLeft:"60px"
      }}>Paul Elisha</h4>
      <p style={{
      
        marginTop: '20px',
        wordSpacing:"10px",
        letterSpacing:"5px",
        marginLeft:"60px"

      }}>Product,Engineer,Thinker.</p>
      <div style={{
        marginTop:"40px",
         letterSpacing:"5px",
        marginLeft:"60px"
      }}>
      <p>Stints:</p>
      <ul style={{
        padding:"20px"
      }}>
        <li>ml & product <a href=''>

           @linkedin
          </a>
           ; flagship, building ml models to understand human potential & match that at scale.</li>
        <li>core ml
          <a href=''>
          @apple; 

            </a> 
          wireless technologies, model pruning/quantization, inference apis + data pipeline (apple home ecosystem)</li>
         <li>
          research @nasa: payload rocket RF communications + telecommand control signals transmission (eyes in the cloud, usli)
         </li>
         <li>
          data-center scale ml compute infra @usc/isi
         </li>
         <li>
          oil & gas energy data layer @geospectra engineering
         </li>
         <li>
          Selected Research
         </li>
         <ul>
          <li>Multidimensional lattice for Post-Quantum Cryptographic Key Generation with Dr. Paul Wang</li>
          <li> temporospatial ground plane morphology analysis + semantic segmentation & trajectory mapping, faculty - Dr. Kofi Nyarko
          </li>
          <li>disease modeling, stochastic processes, and differential equations research - scook@tarleton.edu</li>
         </ul>
      </ul>
      <p>building products, designing, scaling and tennis.</p>


      </div>
      <p style={{
        marginTop: '20px',
        wordSpacing:"10px",
        letterSpacing:"5px",
        marginLeft:"60px"
      }}><a href=''>@github</a> <a href=''>@linkedin</a> <a href=''>Twitter</a></p>
        <p
        style={{
        marginTop: '20px',
        wordSpacing:"10px",
        letterSpacing:"5px",
        marginLeft:"60px"
      }}
        ><a href=''>PaulElisha@gmail.com</a></p>

    </div>
  )
}

export default App
