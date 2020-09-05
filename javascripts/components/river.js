let bearArray = [];
 
 const addBearToForm = () => {
  $("#addBearBtn").click(() => {
      let bearProfile = {};
      bearProfile.name = $("#bearName").val();
      bearProfile.image = $("#bearImage").val();
      bearArray.push(bearProfile);
      buildBearCards();
      clearForm();
     
  });
};

const clearForm = () => {
  $('#bearName').val('');
  $('#bearImage').val('');
}

const buildBearCards = () => { 
  $("bear-cards").html("");
   bearArray.forEach((bear) => {
        $("#bear-cards").append(
       `<div class="card" style="width: 18rem;">
          <img class="bear-img-top" id="datBear" src="${bear.image}" alt="Sighted bear"</img>
         <div class="card-body">
          <p class="card-text">${bear.name}</p>
          </div>
         </div>`)
    });
                  
       };
   
export { addBearToForm, buildBearCards }