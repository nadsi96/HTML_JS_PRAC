let g_elem_dir_info;
let g_elem_dragger;
let g_elem_content;

function onLoad(){
    console.log('hello');

    g_elem_dir_info = document.getElementById('dir_info');
    g_elem_dragger = document.getElementById('dragger');
    g_elem_content = document.getElementById('content');
    dragAnimationSetter.setEvent(g_elem_dragger, "left");
}

let dir_info = {
    left: {
        text: "right to left",
        contentAlign: "right",
    },
    right: {
        text: "left to right",
        contentAlign: "left",
    },
    top: {
        text: "bottom to top",
        contentAlign: "center",
    },
    bottom: {
        text: "top to bottom",
        contentAlign: "center",
    },
};
function changeDragDir(dir){
    if(dir){
        dragAnimationSetter.clearEvent(g_elem_dragger);
        g_elem_dragger = document.getElementById('dragger');
        dragAnimationSetter.setEvent(g_elem_dragger, dir);
        g_elem_dir_info.innerHTML = dir_info[dir].text;
        g_elem_content.style.textAlign = dir_info[dir].contentAlign;
    }
}