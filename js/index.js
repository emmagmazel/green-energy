let resource = {
    c1: {
        heading: "Energy Efficient",
        bodyText: "Since we are a renewable energy company we strive to keep our technology energy efficient and sustaianble. As a community we are all faced with climate change and energy efficient technology is becoming more prominent everyday. Not only does this technology keep your hydro bills down it will also keep your home clean and greenhouse gase use lower. ",
        imgUrl: "./img/leaf-in-lightbulb.jpg",
        alt: "Leaf in lightbulb to showcase energy efficiency"
    },
    c2: {
        heading:"ECO Friendly",
        bodyText:"As a renewable energy company we strive to keep all of our technology and products ECO Friendly. We take pride in using the most highqulaity eco friendly products that will sustain any weather condition. Our tehcnology ensures it will work in every climate and will continue to satisfy our customers. To ensure we keep our clients happy and technology ECO friendly we are always doing research to ensure that we stay up to update with all things environmentally friendly.",
        imgUrl:"./img/windmill.jpg",
        alt: "image of windmill to showcase eco friendly"
    },
    c3: {
        heading:"Cost Efficient",
        bodyText:"In our efforts to keep our technology energy efficient and eco friendly we also ensure we keep it cost efficient. Our solar panels are made to be affordable for everyone to have on their homes. Our purpose is to spread clean energy and that can only happen at a large rate if our customers can afford to live and green energy lifestyle. As we continue to research our technology to keep it ECO friendly, we also ensure we keep it cost effective. ",
        imgUrl:"./img/windmills.jpg",
        alt: "Image 3"
    }
};

let $btns = document.querySelectorAll('button');
let $content = document.querySelector(".dynamic-content");

/*Page Load*/
function pageLoad() {
    $content.innerHTML = `<h3>${resource.c1.heading}</h3>
                        <img src="${resource.c1.imgUrl}" alt="placeholder">
                          <p>${resource.c1.bodyText}</p>`;
}
window.addEventListener("load", pageLoad);


let Container = document.getElementById("contents");
let batns = Container.getElementsByClassName("btn");

for (let i = 0; i < batns.length; i++) {
    batns[i].addEventListener("click", function() {
        let act = document.getElementsByClassName("active");
        act[0].className = act[0].className.removeAttribute(" active", "");
        this.className += " active";
    });
}

/*Event Handler*/
function handleSelection(ev) {
    let clickedBtn = ev.target;
    let btnText = clickedBtn.innerText;
    if (btnText === "content1") {
        $content.innerHTML = `<h3>${resource.c1.heading}</h3>
                              <img src="${resource.c1.imgUrl}" alt="placeholder">
                              <p>${resource.c1.bodyText}</p>`;
    } else if (btnText === "content2") {
        $content.innerHTML = `<h3>${resource.c2.heading}</h3>
                              <img src="${resource.c2.imgUrl}" alt="placeholder">
                              <p>${resource.c2.bodyText}</p>`;
    } else {
        $content.innerHTML = `<h3>${resource.c3.heading}</h3>
                              <img src="${resource.c3.imgUrl}" alt="placeholder">
                              <p>${resource.c3.bodyText}</p>`;
    }
}

for (let i = 0; i < $btns.length; i++) {
    $btns[i].addEventListener("click", handleSelection);
}



/*let resource = {
    c1: {
        heading:'Energy Efficient',
        bodyText:' Since we are a renewable energy company we strive to keep our technology energy efficient and sustaianble. As a community we are all faced with climate change and energy efficient technology is becoming more prominent everyday. Not only does this technology keep your hydro bills down it will also keep your home clean and greenhouse gase use lower. ',
        imageURL:'./img/leaf-in-lightbulb.jpg',
        imageAlt: 'Leaf in lightbulb to showcase energy efficiency'
    },
    c2: {
        heading:'ECO Friendly',
        bodyText:'As a renewable energy company we strive to keep all of our technology and products ECO Friendly. We take pride in using the most highqulaity eco friendly products that will sustain any weather condition. Our tehcnology ensures it will work in every climate and will continue to satisfy our customers. To ensure we keep our clients happy and technology ECO friendly we are always doing research to ensure that we stay up to update with all things environmentally friendly.',
        imageURL:'./img/windmill.jpg',
        imageAlt: 'image of windmill to showcase eco friendly'
    },
    c3: {
        heading:'Cost Efficient',
        bodyText:'In our efforts to keep our technology energy efficient and eco friendly we also ensure we keep it cost efficient. Our solar panels are made to be affordable for everyone to have on their homes. Our purpose is to spread clean energy and that can only happen at a large rate if our customers can afford to live and green energy lifestyle. As we continue to research our technology to keep it ECO friendly, we also ensure we keep it cost effective. ',
        imageURL:'./img/windmills.jpg',
        imageAlt: ''
    },
  };
  let $btns = document.querySelectorAll('button');
  let $content = document.querySelector(".dynamic-content");

  function pageLoad() {
      $content.innerHTML = `<h2>${resource[c1].heading}</h2>
      <figure>
      <img src="${resource[c1].imageURL}" alt="${resource[c1].imageAlt}"/>
      </figure>
      <p>${resource[c1].bodyText}</p>`;
  }
window.addEventListener("load", pageLoad);

let Container = document.getElementById("contents");
let batns = Container.getElementsByClassName("btn");

for (let i = 0; i < batns.length; i++) { 
    batns[i].addEventListener("click", function() {
        let act = document.getElementsByClassName("btn-active");
        act[0].className = act[0].className.removeAttribute(" active" , " ");
        this.className += "active";
    });
}

function handleSelection(e) {
    let clickedBtn = e.target;
    let btnText = clickedBtn.innerText;
    if (btnText === "content1"){
        $content.innerHTML = `<h2>${resource.c1.heading}</h2>
                            <img src="${resource.c1.imageURL}" alt ="image 1">
                            <p>${resource.c1.bodyText}</p>`;
    } else if (btnText === "content2"){
        $content.innerHTML = `<h2>${resource.c2.heading}</h2>
                             <img src="${resource.c2.imageURL}" alt ="image 2">
                             <p>${resource.c2.bodyText}</p>`;
    } else {
        $content.innerHTML = `<h2>${resource.c3.heading}</h2>
                             <img src="${resource.c3.imageURL}" alt ="image 3">
                             <p>${resource.c3.bodyText}</p>`;
    }
    for (let i = 0; i < $btns.length; i++) {
        $btns[i].addEventListener("click", handleSelection);
    }
}*/

  
