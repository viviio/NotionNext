import React from 'react'
import BLOG from '@/blog.config'
import { useEffect } from 'react'



const HackedText = props => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let interval = null;

    useEffect(()=>{ 
        document.querySelector('.hacked').onmouseover = event =>{
            let iteration = 0;
            clearInterval(interval);
            interval = setInterval(()=>{
                event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    if(index < iteration) {
                      return event.target.dataset.value[index];
                    }
                  
                    return letters[Math.floor(Math.random() * 26)]
                  })
                  .join("");
                
                if(iteration >= event.target.dataset.value.length){ 
                  clearInterval(interval);
                }
                
                iteration += 1 / 3;
              }, 30);
            }


    },[]);
    

    
    return (
        <div className=''>
            <div class='hacked' data-value="Portfolio">Portfolio</div>
            {/* <div class='hacked' data-value="Inspiration">Inspiration</div> */}
        </div>


    )
  }


export default HackedText