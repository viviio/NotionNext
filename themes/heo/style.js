/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */


const Style = () => {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Red+Rose:wght@500&display=swap');
      
      //渐变标题

      :root {
        --bg: #18171d;
        --clr-1: #31dade;
        --clr-2: #4169e1;
        --clr-3: #6faefe;
        --clr-4: #f3b6fc;
      
        --blur: 1rem;
        --fs: clamp(3rem, 8vw, 7rem);
        --ls: clamp(-1.75px, -0.25vw, -3.5px);
      }

      .content {
        text-align: center;
        background-color:var(--bg);
        color:#fff;
      }
      
      .title {
        font-size: var(--fs);
        line-height:1.25;
        
        font-family:"Red Rose";
        letter-spacing: var(--ls);
        position: relative;
        overflow: hidden;
        background: var(--bg);
        margin: 0;
      }
      
      
      .aurora {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        mix-blend-mode: darken;
        pointer-events: none;
        
      }
      
      .aurora__item {
        overflow: hidden;
        position: absolute;
        width: 60vw;
        height: 60vw;
        background-color: var(--clr-1);
        border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
        filter: blur(var(--blur));
        mix-blend-mode: overlay;
      }
      
      .aurora__item:nth-of-type(1) {
        top: -50%;
        animation: aurora-border 6s ease-in-out infinite,
          aurora-1 12s ease-in-out infinite alternate;
      }
      
      .aurora__item:nth-of-type(2) {
        background-color: var(--clr-3);
        right: 0;
        top: 0;
        animation: aurora-border 6s ease-in-out infinite,
          aurora-2 12s ease-in-out infinite alternate;
      }
      
      .aurora__item:nth-of-type(3) {
        background-color: var(--clr-2);
        left: 0;
        bottom: 0;
        animation: aurora-border 6s ease-in-out infinite,
          aurora-3 8s ease-in-out infinite alternate;
      }
      
      .aurora__item:nth-of-type(4) {
        background-color: var(--clr-4);
        right: 0;
        bottom: -50%;
        animation: aurora-border 6s ease-in-out infinite,
          aurora-4 24s ease-in-out infinite alternate;
      }
      
      @keyframes aurora-1 {
        0% {
          top: 0;
          right: 0;
        }
      
        50% {
          top: 100%;
          right: 75%;
        }
      
        75% {
          top: 100%;
          right: 25%;
        }
      
        100% {
          top: 0;
          right: 0;
        }
      }
      
      @keyframes aurora-2 {
        0% {
          top: -50%;
          left: 0%;
        }
      
        60% {
          top: 100%;
          left: 75%;
        }
      
        85% {
          top: 100%;
          left: 25%;
        }
      
        100% {
          top: -50%;
          left: 0%;
        }
      }
      
      @keyframes aurora-3 {
        0% {
          bottom: 0;
          left: 0;
        }
      
        40% {
          bottom: 100%;
          left: 75%;
        }
      
        65% {
          bottom: 40%;
          left: 50%;
        }
      
        100% {
          bottom: 0;
          left: 0;
        }
      }
      
      @keyframes aurora-4 {
        0% {
          bottom: -50%;
          right: 0;
        }
      
        50% {
          bottom: 0%;
          right: 40%;
        }
      
        90% {
          bottom: 50%;
          right: 25%;
        }
      
        100% {
          bottom: -50%;
          right: 0;
        }
      }
      
      @keyframes aurora-border {
        0% {
          border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
        }
      
        25% {
          border-radius: 47% 29% 39% 49% / 61% 19% 66% 26%;
        }
      
        50% {
          border-radius: 57% 23% 47% 72% / 63% 17% 66% 33%;
        }
      
        75% {
          border-radius: 28% 49% 29% 100% / 93% 20% 64% 25%;
        }
      
        100% {
          border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
        }
      }

      body {
        background-color: #f7f9fe;
        overflow-x: hidden;
      }

      // 公告栏中的字体固定白色
      #theme-heo #announcement-content .notion {
        color: white;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(60, 60, 67, 0.4);
        border-radius: 8px;
        cursor: pointer;
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      #more {
        white-space: nowrap;
      }

      //网站封面设计
      .stack {
        display: grid;
        grid-template-columns: 1fr;
      }
      
      .stack span {
        font-weight: bold;
        background: #000;
        grid-row-start: 1;
        grid-column-start: 1;
        font-size: 4rem;

        clip-path: inset(((100% / 3 - 1px)* var(--index)) 0 ((100% / 3 - 1px) * (2 - var(--index)) 0);
        animation: glitch 2s ease infinite 2s alternate-reverse;
        
      }
      
      .stack span:nth-child(odd) { --glitch-translate: 8px; }
      .stack span:nth-child(even) { --glitch-translate: -8px; }
      
      @keyframes stack {
        0% {
          opacity: 0;
          transform: translateX(-50%);
          text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
        };
        60% {
          opacity: 0.5;
          transform: translateX(50%);
        }
        80% {
          transform: none;
          opacity: 1;
          text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
        }
        100% {
          text-shadow: none;
        }
      }
      
      @keyframes glitch {
        0% {
          text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
          transform: translate(var(--glitch-translate));
        }
        2% {
          text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
        }
        4%, 100% {  text-shadow: none; transform: none; }
      }

      .webTitle{
        font-family: 'Red Rose', cursive;
        font-size: clamp(3rem, 10vw , 8rem);

      }

      //卡片hover光晕
      // #cards {
      //   display: flex;
      //   flex-wrap: wrap;
      //   gap: 8px;  
      //   max-width: 916px;
      //   width: calc(100% - 20px);
      // }
      
      #cards:hover > .card::after {
        opacity: 1;
      }
      
      .card {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        cursor: pointer;
        display: flex;
        height: 260px;
        flex-direction: column;
        position: relative;
        width: 300px;  
      }
      
      .card:hover::before {
        opacity: 1;
      }
      
      .card::before,
      .card::after {
        border-radius: inherit;
        content: "";
        height: 100%;
        left: 0px;
        opacity: 0;
        position: absolute;
        top: 0px;
        transition: opacity 500ms;
        width: 100%;
      }
      
      .card::before {
        background: radial-gradient(
          800px circle at var(--mouse-x) var(--mouse-y), 
          rgba(255, 255, 255, 0.06),
          transparent 40%
        );
        z-index: 3;
      }
      
      .card::after {  
        background: radial-gradient(
          600px circle at 300px 200px, 
          rgba(255, 255, 255, 0.4),
          transparent 40%
        );
        z-index: 100;
      }
      
      .card > .card-content {
        background-color: var(--card-color);
        border-radius: inherit;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        inset: 1px;
        padding: 10px;
        position: absolute;
        z-index: 2;
      }




      // 鼠标跟随动效11111

      .tabButton {
        border: none;
        min-width: 50px;
        min-height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        background: rgba(255, 255, 255, 0.08);
        color: #fff;
        transition: background 200ms ease, color 200ms ease;
        cursor: none;
      }
      
        &:hover {
          button {
            background: rgba(255, 255, 255, 0.04);
            color: rgba(255, 255, 255, 0.04);
            &:hover {
              color: #fff;
            }
          }
        }



      .text
      {
        position: absolute;
        font-size: 0.6em;
        font-family:"Times New Roman";
        color: #6990ea;
        text-align: center;
        pointer-events: none;
        z-index: 100;
        opacity: 0;
        scale:0;
        transition:opacity 0.25s;
        transition:scale 0.7s;
        animation: animateRing 6s linear infinite;
      }

      .text::before
      {
        content:'';
        position:absolute;
        transform:translate(-50%,-50%);
        width:16px;
        height:16px;
        background:#6990ea;
        border-radius:50%;
      }

      body:hover .text{
        opacity:1;
        scale:1;
      }


      .text span
      {
        position: absolute;
        top: -60px;
        text-transform:uppercase;
        font-weight:400;
        transform-origin: 0 60px;
      }

      @keyframes animateColor
      {
        0%
        {
          filter: drop-shadow(0 0 5px #0f0) drop-shadow(0 0 15px #0f0) hue-rotate(0deg);
        }
        100%
        {
          filter: drop-shadow(0 0 5px #0f0) drop-shadow(0 0 15px #0f0) hue-rotate(360deg);
        }
      }

      @keyframes animateRing
      {
        0%
        {
          transform:rotate(0deg);
        }
        100%
        {
          transform:rotate(359deg);
        }
      }

      .today-card-cover {
        -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
        mask-image: linear-gradient(to top, transparent 5%, black 70%);
      }

      .recent-top-post-group::-webkit-scrollbar {
        display: none;
      }

      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }

      * {
        box-sizing: border-box;
      }

      // 标签滚动动画
      .tags-group-wrapper {
        animation: rowup 60s linear infinite;
      }

      @keyframes rowup {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}</style>
  )
}

export { Style }
