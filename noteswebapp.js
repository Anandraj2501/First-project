const element = document.getElementById("pop_bgg");
const textarea_value=document.getElementById("text_area");
const descarea_value=document.getElementById("desc_area");
const add_box = document.getElementById("add_box");
let isupdate = false, updateid;

const notes = JSON.parse(localStorage.getItem("notes") || "[]");
function popup_box(){
    textarea_value.value="";
    descarea_value.value="";
    document.getElementById("pop_title").innerText="Add your note...";
    document.getElementById("add_btn").innerText="Add Note";
    console.log("hii");
    element.style.display="block";
}

function shownotes(){
    document.querySelectorAll(".note").forEach((note) => note.remove());
    notes.forEach((note,index) => {
        let boxes = `<div class="rounded-md border border-white w-44 h-44 relative left-10 top-10 bg-white note overflow-hidden break-words" onclick="updatenote(${index},'${note.title}','${note.description}')">
                        <div class="my_title p-2 font-medium text-lg ">${note.title}</div>
                        <div class="my_descrp p-2 font-normal text-base  ">${note.description}</div>
                    </div>`
        add_box.insertAdjacentHTML("afterend",boxes);
        console.log("helpppp");
    });
}

function hide_popup(){
    element.style.display="none";
    let text_val = textarea_value.value;
    let descrp_val = descarea_value.value;
    if(!text_val || !descrp_val){
        alert("please enter title and description....");
        return;
    }
    let noteinfo = {
        title: text_val,
        description:descrp_val
    }
    if(!isupdate){
        notes.push(noteinfo);
    }
    else{
        notes[updateid] = noteinfo;
        isupdate = false;
    }
    localStorage.setItem("notes",JSON.stringify(notes));
    shownotes();
} 

function updatenote(noteid,notetitle,notedesc){
    isupdate = true;
    updateid = noteid;
    element.style.display="block";
    document.getElementById("pop_title").innerText="Update your note...";
    document.getElementById("add_btn").innerText="Update Note";
    textarea_value.value=notetitle;
    descarea_value.value=notedesc;
    
    
}

function close_popup(){
    element.style.display="none";
}

