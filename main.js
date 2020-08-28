const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};  

const bearArray = [];

const buttonEvents = () => {
    document.getElementById('addBearBtn').addEventListener('click', buildBearForm);
    document.getElementById('bear-form').addEventListener('click', addTheBear);
    document.getElementById('bear-form').addEventListener('click', buildBearCards);
   
};

const buildBearForm = () => {
    let domString = '';
    domString += `<h2 class="text-center">Enter Bear Sighting</h2>`;
    domString +=  `<form class="form-inline justify-content-center"     id="whole-form">
                    <div class="form-group mb-2">
                   <input type="text" readonly class="form-control-plaintext" id="staticBear">
                    </div>
                   <div class="form-group mx-sm-3 mb-2">
                   <label for="bearsName">Bear Name</label>
                   <input type="text" class="form-control" id="inputBear" placeholder="Yogi Bear">
                    </div>
                   <div class="form-group mb-2">
                   <label for="exampleURL">URL</label>
                   <input type="url" class="form-control" id="inputURL">
                   </div>
                    <button type="submit" class="btn btn-primary mb-2" id="form-btn">Add Bear</button>
                   </form>`;
  
    printToDom("bear-form", domString);
  };
  
  const addTheBear = (e) => {
    const target = e.target.id;
        const newBear = {
      name: document.getElementById("inputBear").value,
      url: document.getElementById("inputURL").value,
    }
  
    if (target === 'form-btn' && newBear.name !== '' && newBear.url !== '') {
    bearArray.push(newBear);
  }};


  const buildBearCards = (e) => {
    const target = e.target.id;
    let domString = "";
    const bearName = document.getElementById('bear-cards').value;
    
    if (target === 'form-btn') {
        if (bearName === '') {
            let domString = '';
            domString += `<h2 class="text-center">Enter Bear Sighting</h2>`;
            domString +=  `<form class="form-inline justify-content-center"     id="whole-form">
                            <div class="form-group mb-2">
                           <input type="text" readonly class="form-control-plaintext" id="staticBear">
                            </div>
                           <div class="form-group mx-sm-3 mb-2">
                           <label for="bearsName">Bear Name</label>
                           <input type="text" class="form-control" id="inputBear" placeholder="Yogi Bear">
                            </div>
                           <div class="form-group mb-2">
                           <label for="exampleURL">URL</label>
                           <input type="url" class="form-control" id="inputURL">
                           </div>
                            <button type="submit" class="btn btn-primary mb-2" id="form-btn">Add Bear</button>
                           </form>`;
          
  
    printToDom("bear-form", domString);
  };

}
else {
    for (let i = 0; i < bearArray.length; i++) {
      domString += `<div class="card" style="width: 18rem;" id="${i}">
                      <div class="card-body"id="${i}">
                        <h5 class="card-title">${bearArray[i].name}</h5>
                        <p class="card-text">${bearArray[i].url}</p>
                        </div>
                    </div>`;
    }
      printToDom("bear-cards", domString);
      document.getElementById('inputBear').value = '';
      document.getElementById('inputURL').value = '';
  }
  };
  buttonEvents();