const db = firebase.firestore();
const taskForm = document.getElementById("task-form");
const taskContainer = document.getElementById("tasks-container");
const saveTask = (title, desc, cat, fileurl) =>
  db.collection("proyectos").doc().set({
    title,
    desc,
    cat,
    fileurl
  });

let estatus = false;
let id = "";

async function uploadImage(file) {
  const ref = firebase.storage().ref();
  const name = new Date() + "-" + file.name;
  const metadata = { contentType: file.type };
  const snapshot = await ref.child(name).put(file, metadata);
  const url = await snapshot.ref.getDownloadURL();
  return url;
}

const getTasks = () => db.collection("proyectos").get();
const onGetTasks = (callback) =>
  db.collection("proyectos").onSnapshot(callback);
const getTask = (id) => db.collection("proyectos").doc(id).get();
const deleteTasks = (id) => db.collection("proyectos").doc(id).delete();
const updateTask = (id, updatedT) =>
  db.collection("proyectos").doc(id).update(updatedT);

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
      <div class="container-fluid">
            <div class="card card-body bg-pers mt-lg-1 mt-sm-2">
            
                    <div><h5 id="tituloproyecto" class= "text-center">${task.title}</h5></div> 
                    <div class="container mb-2" align="center">
                    <div class="img-wrapp">
                    <img class="img-fluid" src="${task.fileurl}"/> 
                    <span class="delete-img" @click="deleteImGE(IMAGE,INDEX)>
                    </div>                    
                    </div>
                    <div class="container mt-2">
                    <p class="text-justify">${task.desc}</p>
                    </div>
                   
                    <div class="mt-2">
                    <p class="badge badge-pill badge-secondary float-right p-2">${task.cat}</p>
                    </div>
                    <div class="container" align="center">
                        <div class="row">
                        <div class="col-lg-4 col-xs-2 mb-xs-2">
                        <button class="btn btn-pers btn-delete " data-id="${task.id}">Eliminar</button>
                        </div>
                        <div class="col-lg-4 col-xs-2">
                        <button class="btn btn-secondary btn-edit d-sm-inline" data-id="${task.id}">Editar</button>
                        </div>
                    </div>
                    </div>
            </div>
      </div>`;
      const btnsDelete = document.querySelectorAll(".btn-delete");

      btnsDelete.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          await deleteTasks(e.target.dataset.id);
        });
      });

      const btnsEdit = document.querySelectorAll(".btn-edit");
      btnsEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          const doc = await getTask(e.target.dataset.id);
          const task = doc.data();
          estatus = true;
          id = doc.id;
          taskForm["task-title"].value = task.title;
          taskForm["task-description"].value = task.desc;
          taskForm["task-category"].value = task.cat;
          taskForm["btn-task-form"].innerText = "Actualizar";
        });
      });
    });
  });
});
taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = taskForm["task-title"];
  const desc = taskForm["task-description"];
  const cat = taskForm["task-category"];
  const file = taskForm["task-image"].files[0];
  let fileurl = null;
  if (file) {
    fileurl = await uploadImage(file);
  }
  if (!estatus) {
    await saveTask(title.value, desc.value, cat.value, fileurl);

    alert("Se ha salvado con éxito");
  } else {
    if (file) {
      await updateTask(id, {
        title: title.value,
        desc: desc.value,
        cat: cat.value,
        fileurl
      });
    } else {
      await updateTask(id, {
        title: title.value,
        desc: desc.value,
        cat: cat.value
      });
    }
    estatus = false;
    taskForm["btn-task-form"].innerText = "Guardar";

    alert("Se ha actualizado con éxito");
  }
  await getTasks();
  taskForm.reset();
  title.focus();
});
