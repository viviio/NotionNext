import BLOG from '@/blog.config'
import { Home } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import Link from 'next/link'
import React from 'react'
import {gsap} from 'gsap'
import single from '../Single'
import { MenuListTop } from './MenuListTop'
import { useGlobal } from '@/lib/global'

import { useCallback, useEffect, useRef, useState } from 'react'
import CategoryGroup from './CategoryGroup'
import Logo from './Logo'
import SearchDrawer from './SearchDrawer'
import TagGroups from './TagGroups'

import { useRouter } from 'next/router'
import throttle from 'lodash.throttle'
import SideBar from './SideBar'
import SideBarDrawer from './SideBarDrawer'
import Single from '../Single'



const Mouse = props => {
    const { siteInfo } = props


    // useEffect(()=>{       
    //     const mm =document.querySelector('.mm')
    //     let deg=0,ex=0,ey=0,vx=0,vy=0,count=0
    //     window.addEventListener("mousemove",function(e){
    //         ex = e.x - mm.offsetLeft - mm.clientWidth/2;
    //         ey = e.y - mm.offsetTop - mm.clientHeight/2;
    //         count = 0;
  
    //         //mm.style.transform = `rotate(${e.pageX/2}deg) rotate(${e.pageY/-2}deg)`;
    //     });
    //     setInterval(()=>{
    //         mm.style.transform = 'rotate('+deg+'deg)';
    //         count++;
    //         if(count<50){
    //             vx+=ex/50;
    //             vy+=ey/50;
    //         }
    //         mm.style.left = vx+'px';
    //         mm.style.top = vy+'px';
    //     },10);
    // },[]);

    //鼠标滚动特效
    // useEffect(() => {
    
    //     let text = document.querySelector('.text');

    //     text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");
    //     let element = document.querySelectorAll('span');
    //     for(let i=0; i<element.length;i++){
    //     element[i].style.transform = "rotate("+i*16+"deg)";
    //     }

    //     document.addEventListener("mousemove",function(e){
    //     text.style.left = e.pageX + 'px';
    //     text.style.top = e.pageY + 'px';
    //     text.style.transform = `rotate(${e.pageX/2}deg) rotate(${e.pageY/-2}deg)`;
    //     });
    // }, [])

    //圆点圆环效果
    useEffect(()=>{

        const cursorOuter = document.querySelector(".cursor2");
        const cursorInner = document.querySelector(".cursor1");
        let isStuck = false;
        let mouse = {
        	x: -100,
        	y: -100,
        };

        // Just in case you need to scroll
        let scrollHeight = 0;
        window.addEventListener('scroll', function(e) {
        	scrollHeight = window.scrollY
        })

        let cursorOuterOriginalState = {
        	width: cursorOuter.getBoundingClientRect().width,
        	height: cursorOuter.getBoundingClientRect().height,
        };
        const buttons = document.querySelectorAll('tabButton');

        buttons.forEach((button) => {
        	button.addEventListener("pointerenter", handleMouseEnter);
        	button.addEventListener("pointerleave", handleMouseLeave);
        });

        document.body.addEventListener("pointermove", updateCursorPosition);
        document.body.addEventListener("pointerdown", () => {
        	gsap.to(cursorInner, 0.15, {
        		scale: 2,
        	});
            
        });
        document.body.addEventListener("pointerup", () => {
        	gsap.to(cursorInner, 0.15, {
        		scale: 1,
        	});
        });

        function updateCursorPosition(e) {
        	mouse.x = e.pageX;
        	mouse.y = e.pageY;
        }

        function updateCursor() {
        	gsap.set(cursorInner, {
        		x: mouse.x,
        		y: mouse.y,
        	});
        
        	if (!isStuck) {
        		gsap.to(cursorOuter, {
        			duration: 0.15,
        			x: mouse.x - cursorOuterOriginalState.width/2,
        			y: mouse.y - cursorOuterOriginalState.height/2,
        		});
        	}
        
        	requestAnimationFrame(updateCursor);
        }

        updateCursor();

        function handleMouseEnter(e) {
        	isStuck = true;
        	const targetBox = e.currentTarget.getBoundingClientRect();
        	gsap.to(cursorOuter, 0.2, {
        		x: targetBox.left, 
        		y: targetBox.top + scrollHeight,
        		width: targetBox.width,
        		height: targetBox.width,
        		borderRadius: 0,
        		backgroundColor: "rgba(255, 255, 255, 0.1)",
        	});
        }

        function handleMouseLeave(e) {
        	isStuck = false;
        	gsap.to(cursorOuter, 0.2, {
        		width: cursorOuterOriginalState.width,
        		height: cursorOuterOriginalState.width,
        		borderRadius: "50%",
        		backgroundColor: "transparent",
        	});
        }



    },[])

  return (
    <div>
        {/* <h2 class="text">Inspiration - Revolution</h2> */}
        <div class="cursor2 w-10 h-10 rounded-full absolute left-0 top-0 pointer-events-none z-50 border-[1px] border-solid border-[#3d84f6]"></div>
        <div class="cursor1 w-2 h-2 rounded-full absolute left-0 top-0 pointer-events-none z-50 bg-[#3d84f6] -translate-x-1/2 -translate-y-1/2"></div>
    </div>

  )
}





// text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");
// let element = document.querySelectorAll('span');


// useEffect(() => {
//     let prevScrollY = 0
//     let ticking = false

//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           const currentScrollY = window.scrollY

//           if (currentScrollY > prevScrollY) {
//             setActiveIndex(1) // 向下滚动时设置activeIndex为1
//           } else {
//             setActiveIndex(0) // 向上滚动时设置activeIndex为0
//           }

//           prevScrollY = currentScrollY
//           ticking = false
//         })

//         ticking = true
//       }
//     }

//     if (isBrowser) {
//       window.addEventListener('scroll', handleScroll)
//     }

//     return () => {
//       if (isBrowser) {
//         window.removeEventListener('scroll', handleScroll)
//       }
//     }
//   }, [])

export default Mouse
