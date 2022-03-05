var stompClient=null;
$(document).ready((e)=>{
    $('#login').click(()=>{
        let name=$('#name-value').val();
        localStorage.setItem("name",name);
    $('#name-title').html(`Welcome ,<b> ${name} &#128512 <b>`);
        connect();
    })
    $('#Send-btn').click(()=>
        {
            sendFunction()
        }
    )
    $('#logout').click(()=>{
        localStorage.removeItem('name');
        if (stompClient !== null) {
            stompClient.disconnect();
            $('#name-from').removeClass('d-none');
            $('#chat-room').addClass('d-none');
        }

    })
});



function sendFunction() {

    let jsonob={
        name:localStorage.getItem('name'),
        content:$('#message-value').val()
    }
    stompClient.send('/app/message',{},JSON.stringify(jsonob));

}




function connect()
{
let socket=new SockJS("/server1");
stompClient=Stomp.over(socket);
stompClient.connect({},function (frame)
{
    $('#name-from').addClass('d-none')
    $('#chat-room').removeClass('d-none')

    //subscribe url

    stompClient.subscribe("/topic/return-to",function(response){
console.log(response.body);
        showMessage(JSON.parse(response.body));
    })


})
}

function showMessage(message) {
console.log(JSON.stringify(message))
    $('#message-container-table').prepend(`<tr><td><b>${message.name} : </b>${message.content}</td></tr>`)

}



