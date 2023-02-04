export default function animateTitles(){
    window.addEventListener("DOMContentLoaded", setup);

    function setup(){

        window.scrollTo(0,0);

        const options = {
            rootMargin: "0px",
            threshold: [0, 0.25, 0.5, 0.75, 1]
        }

        const observer = new IntersectionObserver((entries,observer)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    if(entry.target.hasAttribute("data-animate")){
                        entry.target.classList.add("align_element");
                        observer.unobserve(entry.target);
                    }else if(entry.target.dataset.skill === "html"){
                        entry.target.classList.add("animate-bar-html");
                        observer.unobserve(entry.target);
                    }else if(entry.target.dataset.skill === "css"){
                        entry.target.classList.add("animate-bar-css");
                        observer.unobserve(entry.target);
                    }else if(entry.target.dataset.skill === "js"){
                        entry.target.classList.add("animate-bar-js");
                        observer.unobserve(entry.target);
                    }else if(entry.target.dataset.skill === "photo"){
                        entry.target.classList.add("animate-bar-photo");
                        observer.unobserve(entry.target);
                    }else if(entry.target.dataset.skill === "illustra"){
                        entry.target.classList.add("animate-bar-illustra");
                        observer.unobserve(entry.target);
                    }else if(entry.target.hasAttribute("data-field-box")){
                        entry.target.classList.add("enlarge_image");
                        observer.unobserve(entry.target);
                    }
                }else{
                    return;
                }
            })
        },options);
        

        let titlesForAnimate = document.querySelectorAll('[data-animate]');
        titlesForAnimate.forEach((title)=>{
            observer.observe(title);
        })


        let dataSkills = document.querySelectorAll("[data-skill]");
        dataSkills.forEach((skill)=>{
            observer.observe(skill);
        })

        let dataFieldBox = document.querySelectorAll("[data-field-box]");
        dataFieldBox.forEach((field)=>{
            observer.observe(field);
        })

    } // end of setup

    } 