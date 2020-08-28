const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};  

const bearArray = [];

const buttonEvents = () => {
    document.getElementById('addBearBtn').addEventListener('click', buildForm);
    document.getElementById('bear-form').addEventListener('click', addTheBear);
    document.getElementById('bear-form').addEventListener('click', buildBearCards);
   
};

const buildForm = () => {
    let domString = '';
    domString += `<h2 class="text-center">Enter Bear Sighting</h2>`;
    domString +=  `<form class="form-inline justify-content-center"     id="whole-form">
                    <div class="form-group mb-2">
                   <input type="text" readonly class="form-control-plaintext" id="staticBear">
                    </div>
                   <div class="form-group mx-sm-3 mb-2">
                   <label for="bearsName">Bear Name</label>
                   <input type="text" class="form-control" placeholder="Yogi Bear">
                    </div>
                   <div class="form-group mb-2">
                   <label for="exampleURL">URL</label>
                   <input type="url" class="form-control" placeholder="www.bear.com">
                   </div>
                    <button type="submit" class="btn btn-primary mb-2" id="form-btn">Add Bear</button>
                   </form>`;
  
    printToDom("bear-form", domString);
  };
  
  const addTheBear = (e) => {
    const target = e.target.id;
        const newBear = {
      name: document.getElementById("bear-form").value,
      
    }
  
    if (target === 'addBearBtn' && newBear.name !== '') {
    bear-cards.push(newBear);
  }};


  const buildBearCards = (e) => {
    const target = e.target.id;
    let domString = "";
    const bearName = document.getElementById('Bear').value;
    
    if (target === 'addBearBtn') {
        if (bearName === '') {
    domString += `<h2 class="text-center">Add A Bear</h2>`;
    domString +=  `<form class="form-inline justify-content-center"     id="whole-form">
                    <div class="form-group mb-2">
                      <label for="bearName" class="bears">Bear Name</label>
                      <input type="text" readonly class="form-control-plaintext" id="staticBear" value="Bear Name:">
                    </div>
                   <div class="form-group mx-sm-3 mb-2">
                     <label for="addURL" class="url">Bear</label>
                     <input type="text" class="form-control" id="Bear" placeholder="Yogi Bear">
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
      document.getElementById('Bear').value = '';
  }
  };
  buttonEvents();