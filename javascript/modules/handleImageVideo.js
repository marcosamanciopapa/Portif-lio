export default function imageVideo(){
    // variables
    const photo = document.querySelector("[data-photo]");
    const video =  document.querySelector("[data-video]");
    const text1 = document.querySelector("[data-text1]");
    const text2 = document.querySelector("[data-text2");
    const text3 = document.querySelector("[data-text3]");
    const body = document.querySelector("body");

    setInterval(()=>{
        photo.classList.remove("is-hidden");
        video.classList.add("is-hidden");
        text1.classList.add("down_text1");
        text2.classList.add("down_text2");
        text3.classList.add("down_text3");
        setInterval(()=>{
            body.style.overflow = 'visible';
        },2000);
    },3000);
    
}