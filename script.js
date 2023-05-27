const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", moveBoxes);

moveBoxes();

function moveBoxes() {
  const triggerpoint = (window.innerHeight / 5) * 4;
        boxes.forEach(box =>{
            const boxtop = box.getBoundingClientRect().top
                       if(boxtop<triggerpoint){
                box.classList.add('show')
            }else{
                box.classList.remove('show')

            }
        })
}
