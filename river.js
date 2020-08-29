
const bearCard = () => {
    $("#addBearBtn").click(() ={
      bearArray.push((name: bearName.value,  image: bear.value));
      $("#bear-cards").empty();
     buildBearCards();  
    })
}

*const buildBearCards = () => {
 bearArray.forEach((bear) => {
      $("#bear-cards").append(`<div class="card" style="width: 18rem;">
       <img class="bear-img-top" src="${bear.url}" alt="Image of bear sighted"</img>
       <div class="card-body">
       <p class="card-text">${bear.name}</p>
       </div>
      </div>`);
  })
                
    };