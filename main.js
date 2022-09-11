window.onload = function() {
    var userName = localStorage.getItem("userName");
    document.getElementById("name").innerText = userName
    localStorage.clear();

    // Time
    function nowTime() {
        var day = new Date();
        var today = document.getElementById('today');
        today.innerText = day;
    }
    setInterval(nowTime, 1000);

    // Random Img
    var cnt = 0 ;
        function gif() {
            var a = ['1.png', '2.png', '3.png', '4.png', '5.png', '5.png']
            document.getElementById('pepe').setAttribute("src","./img/"+a[cnt])
            cnt ++;
            if(cnt == 6){
                cnt = 0 ;
            }
        }
    setInterval(gif, 1000);

    // TodoList
    let inputBox = document.getElementById('inputField');
    let addToDo = document.getElementById('addToDo');  
    let toDoList = document.getElementById('toDoList'); 
    
    addToDo.addEventListener('click', function(){
        var list = document.createElement('li');
        if (!inputBox.value)
            alert('Please write your todo!');
        else
        {
            list.innerText = inputBox.value;  
            toDoList.appendChild(list);       
            inputBox.value= "";               
        }
    
        list.addEventListener('click', function(){      
            list.style.textDecoration = "line-through";
        })
        list.addEventListener('dblclick', function(){   
            toDoList.removeChild(list);
        })
    })
}