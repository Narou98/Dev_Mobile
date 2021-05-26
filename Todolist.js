/document.addEventListener('deviceready', init, false);

//window.onload()

function addElement(){

    let task = document.getElementById('task');
    if (task.value !=''){
    //  let item = '<li>'+ task.value + '</li>';
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(task.value));
        $(item).on('swiperight', function(){
            $(this).toggleClass('done');
            this.remove();
        })

        $(item).on('swipeleft', function(){
        // item.parentNode.removeChild(item);
            item.remove();
        })


        let taskList = document.getElementById('taskList');
        taskList.appendChild(item);
        task.value ='';
        $(taskList).listview('refresh');
    }
}
