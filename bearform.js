let bearArray = [];

const addBearForm = () => { $("#bear-form").html( `
     <form>
      <div class="form-group">
      <label for="bear name">Bear Name</label>
      <input type="text" class="form-control" id="bearName" placeholder="Yogi Bear">
      </div>
      <div class="form-group">
      <label for="bear url">URL</label>
      <input type="text" class="form-control" id="bearImage" placeholder="URL">
      </div>
      <button type="button" class="btn btn-primary" id="addBearBtn">Add A Bear</button>
    </form>`
);
};
   addBearForm();

  
const addBearToForm = () => {
    $("#addBearBtn").on('click'(() => {
        let bearProfile = ('');
        bearProfile.name = $("#bearName").val();
        bearProfile.image = $("#bearImage").val();
        bearArray.push(bearProfile);
        buildBearCards(bearArray);
        clearForm();

    }))
};

const clearForm = () => {
    $('#bearName').val('');
    $('#bearImage').val('');
}


const buildBearCards = (bearArray) => {
$("bear-cards").html("");
 bearArray.forEach((bear) => {
      $("#bear-cards").append(`<div class="card" style="width: 18rem;">
        <img class="bear-img-top" src="${bear.url}" alt="Image of bear sighted"</img>
       <div class="card-body">
        <p class="card-text">${bear.name}</p>
        </div>
       </div>`);
  })
                
     };