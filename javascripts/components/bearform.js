const addBearForm = () => { 
    $('#bear-form').html( `
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
   }
  
  export { addBearForm }
  