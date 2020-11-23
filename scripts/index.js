const db = firebase.firestore();
const taskContainer = document.getElementById("tasks-container");
const btntodo = document.getElementById("todo");
const btn3d = document.getElementById("3d");
const btnilus = document.getElementById("ilus");
const btndigital = document.getElementById("digital");
const onGetTasks = (callback) =>
  db.collection("proyectos").onSnapshot(callback);

window.addEventListener("DOMContentLoaded", async (e) => {
  onGetTasks((querySnapshot) => {
    taskContainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      task.id = doc.id;
      if (!task.fileurl) {
        task.fileurl =
          "https://firebasestorage.googleapis.com/v0/b/segundoparcial-d0b28.appspot.com/o/hotelshrimp.png?alt=media&token=210a79ec-853f-4c99-b014-09ea4d642d07";
      }
      taskContainer.innerHTML += `
      
            <div class="flip-card">
              <div class="flip-card-inner">
              <div class="flip-card-front">
              <img
                            src="../img/card.png"
                            alt="Avatar"
                            style="width: 359px; height: 500px;"
                          />
              </div>
              <div class="flip-card-back">
                <div> <p class="text-center mr-5 pt-3 pr-4">${task.title}</p></div> 
                <div class="container mb-2">
                  <img id="img-card" class="img-thumbnail ml-3"src="${task.fileurl}"/> 
                  <div class="text-justify">
                    <p class="par-desc">${task.desc}</p>
                  </div>
                  <div class="par-edit1">
                    <p class="badge badge-pill badge-secondary ml-5">${task.cat}</p>
                  </div>
                  <div class="par-edit">
                    <button class="btn btn-pers btn-delete ml-5" data-id="${task.id}" >Ver más</button>
                  </div>
               </div>
              </div>
              </div>
            </div>`;
      /* <div class="text-center"><h5 id="tituloproyecto">${task.title}</h5></div> 
                    <div class="container mb-2" align="center">
                    <div class="img-wrapp">
                    <img class="img-fluid m-2" src="${task.fileurl}"/> 
                    </div>                    
                    </div>
                    <div class="container mt-2">
                    <p class="text-justify m-2">${task.desc}</p>
                    </div>
                   
                    <div class="mt-2">
                    <p class="badge badge-pill badge-secondary m-2">${task.cat}</p>
                    </div>
                    <div class="container" >
                        <div class="row">
                        <div class="col-6 mt-3">
                        <button class="btn btn-pers btn-delete " data-id="${task.id}">Ver más</button>
                        </div>
                    </div>
                    </div>
            </div>
      </div>` */
    });
  });
});

btntodo.addEventListener("click", async (e) => {
  onGetTasks((querySnapshot) => {
    taskContainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      task.id = doc.id;
      if (!task.fileurl) {
        task.fileurl =
          "https://firebasestorage.googleapis.com/v0/b/segundoparcial-d0b28.appspot.com/o/hotelshrimp.png?alt=media&token=210a79ec-853f-4c99-b014-09ea4d642d07";
      }
      taskContainer.innerHTML += `
     
      <div class="flip-card m-5">
      <div class="flip-card-inner">
      <div class="flip-card-front">
      <img
                    src="../img/card.png"
                    alt="Avatar"
                    style="width: 359px; height: 500px;"
                  />
      </div>
      <div class="flip-card-back">
        <div> <p class="text-center mr-5 pt-3 pr-4">${task.title}</p></div> 
        <div class="container mb-2">
          <img id="img-card" class="img-thumbnail ml-3"src="${task.fileurl}"/> 
          <div class="text-justify">
            <p class="par-desc">${task.desc}</p>
          </div>
          <div class="par-edit1">
            <p class="badge badge-pill badge-secondary ml-5">${task.cat}</p>
          </div>
          <div class="par-edit">
            <button class="btn btn-pers btn-delete ml-5" data-id="${task.id}" >Ver más</button>
          </div>
       </div>
      </div>
      </div>
    </div>`;
    });
  });
});

btn3d.addEventListener("click", async (e) => {
  onGetTasks((querySnapshot) => {
    taskContainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      task.id = doc.id;
      if (task.cat === "Arte 3D") {
        if (!task.fileurl) {
          task.fileurl =
            "https://firebasestorage.googleapis.com/v0/b/segundoparcial-d0b28.appspot.com/o/hotelshrimp.png?alt=media&token=210a79ec-853f-4c99-b014-09ea4d642d07";
        }
        taskContainer.innerHTML += `
     
        <div class="flip-card m-5">
        <div class="flip-card-inner">
        <div class="flip-card-front">
        <img
                      src="../img/card.png"
                      alt="Avatar"
                      style="width: 359px; height: 500px;"
                    />
        </div>
        <div class="flip-card-back">
          <div> <p class="text-center mr-5 pt-3 pr-4">${task.title}</p></div> 
          <div class="container mb-2">
            <img id="img-card" class="img-thumbnail ml-3"src="${task.fileurl}"/> 
            <div class="text-justify">
              <p class="par-desc">${task.desc}</p>
            </div>
            <div class="par-edit1">
              <p class="badge badge-pill badge-secondary ml-5">${task.cat}</p>
            </div>
            <div class="par-edit">
              <button class="btn btn-pers btn-delete ml-5" data-id="${task.id}" >Ver más</button>
            </div>
         </div>
        </div>
        </div>
      </div>`;
      }
    });
  });
});

btnilus.addEventListener("click", async (e) => {
  onGetTasks((querySnapshot) => {
    taskContainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      task.id = doc.id;
      if (task.cat === "Ilustración") {
        if (!task.fileurl) {
          task.fileurl =
            "https://firebasestorage.googleapis.com/v0/b/segundoparcial-d0b28.appspot.com/o/hotelshrimp.png?alt=media&token=210a79ec-853f-4c99-b014-09ea4d642d07";
        }
        taskContainer.innerHTML += `
      
        <div class="flip-card m-5">
        <div class="flip-card-inner">
        <div class="flip-card-front">
        <img
                      src="../img/card.png"
                      alt="Avatar"
                      style="width: 359px; height: 500px;"
                    />
        </div>
        <div class="flip-card-back">
          <div> <p class="text-center mr-5 pt-3 pr-4">${task.title}</p></div> 
          <div class="container mb-2">
            <img id="img-card" class="img-thumbnail ml-3"src="${task.fileurl}"/> 
            <div class="text-justify">
              <p class="par-desc">${task.desc}</p>
            </div>
            <div class="par-edit1">
              <p class="badge badge-pill badge-secondary ml-5">${task.cat}</p>
            </div>
            <div class="par-edit">
              <button class="btn btn-pers btn-delete ml-5" data-id="${task.id}" >Ver más</button>
            </div>
         </div>
        </div>
        </div>
      </div>`;
      }
    });
  });
});

btndigital.addEventListener("click", async (e) => {
  onGetTasks((querySnapshot) => {
    taskContainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      task.id = doc.id;
      if (task.cat === "Digital Paint") {
        if (!task.fileurl) {
          task.fileurl =
            "https://firebasestorage.googleapis.com/v0/b/segundoparcial-d0b28.appspot.com/o/hotelshrimp.png?alt=media&token=210a79ec-853f-4c99-b014-09ea4d642d07";
        }
        taskContainer.innerHTML += `
      
        <div class="flip-card m-5">
        <div class="flip-card-inner">
        <div class="flip-card-front">
        <img
                      src="../img/card.png"
                      alt="Avatar"
                      style="width: 359px; height: 500px;"
                    />
        </div>
        <div class="flip-card-back">
          <div> <p class="text-center mr-5 pt-3 pr-4">${task.title}</p></div> 
          <div class="container mb-2">
            <img id="img-card" class="img-thumbnail ml-3"src="${task.fileurl}"/> 
            <div class="text-justify">
              <p class="par-desc">${task.desc}</p>
            </div>
            <div class="par-edit1">
              <p class="badge badge-pill badge-secondary ml-5">${task.cat}</p>
            </div>
            <div class="par-edit">
              <button class="btn btn-pers btn-delete ml-5" data-id="${task.id}" >Ver más</button>
            </div>
         </div>
        </div>
        </div>
      </div>`;
      }
    });
  });
});
