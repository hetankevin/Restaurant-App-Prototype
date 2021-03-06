const socket = io();
let userid = localStorage.getItem("userid");
if (userid == null) {
    window.location.href = "/";
}
$('form').submit(() => {
    let message = $('#m').val();
    socket.emit('message', {id: userid, message, username, room: roomID});
    $('#m').val('');
    return false;
});

let messageUL = $('#messages');
let usersUL = $('#users');

function settingsmodal() {
    $('#settingsmodal').modal();
}

function leave() {
    socket.emit('bye', {id: userid, room: roomID, username: username});
    document.location.href = "/";
}

function closeroom() {
    console.log("closing");
    document.querySelector('#closeroombtn').style.display = "none";
    socket.emit('roomclosed', {id: userid, room: roomID, username: username});
}

function leavemodal() {
    $('#leavecheck').modal();
}

socket.on('connect', () => {
    socket.emit('join', {id: userid, room: roomID, username: username});
});

socket.on('disconnecting', () => {
    socket.emit('bye', {id: userid, room: roomID, username: username});
});

socket.on('user joined', (data) => {
    console.log("user joined");
    $('#count').text(data.people.length === 1 ? "1 person" : `${data.people.length} people`);
    messageUL.append(`<li class="alert alert-success">${data.username} <span class="badge badge-secondary">@${data.id}</span> has entered the chat.</li>`);
    usersUL.text("");
    for (let x of data.people) {
        usersUL.append(`<li class="list-group-item">${x.username} ${data.id === userid ? "&lt;me&gt;" : ""} <span class="badge badge-secondary">@${x.id}</span></li>`);
    }
    $('#messages').animate({scrollTop: $('#messages').prop("scrollHeight")}, 250);
});

socket.on('user left', (data) => {
    $('#count').text(data.people.length === 1 ? "1 person" : `${data.people.length} people`);
    messageUL.append(`<li class="alert alert-danger">${data.username} <span class="badge badge-secondary">@${data.id}</span> has left the chat.</li>`);
    usersUL.text("");
    for (let x of data.people) {
        usersUL.append(`<li class="list-group-item">${x.username} ${data.id === userid ? "&lt;me&gt;" : ""} <span class="badge badge-secondary">@${x.id}</span></li>`);
    }
    $('#messages').animate({scrollTop: $('#messages').prop("scrollHeight")}, 250);
});

socket.on('message', (data) => {
    let re = new RegExp(`@${userid}`);
    if (re.test(data.message)) {
        if (localStorage.getItem("notifyonmention") === "yes") {
            var notification = new Notification(`Message from ${data.username} (@${data.id})`, { body: data.message });
            document.addEventListener('visibilitychange', function() {
                if (document.visibilityState === 'visible') {
                    notification.close();
                }
            });
        }
    }
    data.message = data.message.replace(/@[0-9a-f]+/, `<span class="badge badge-secondary">$&</span>`);
    messageUL.append(`<li><b>${data.username} ${data.id === userid ? "&lt;me&gt;" : ""}</b> <span class="badge badge-secondary">@${data.id}</span>: ${data.message}</li>`);
    $('#messages').animate({scrollTop: $('#messages').prop("scrollHeight")}, 250);
});

socket.on('room closed', (data) => {
   messageUL.append(`<li class="alert alert-warning"><b>${data.username} ${data.id === userid ? "&lt;me&gt;" : ""}</b> <span class="badge badge-secondary">@${data.id}</span> closed the room</li>`);
});

socket.on('roombudget', (budget) => {
    let bud = "";
    console.log(`Budget: ${budget}`);
    for (let i = 0; i < budget; ++i) {
        bud = bud + "$";
    }
    messageUL.append(`<li class="alert alert-success">The room budget is <span>${bud}</span></li>`);
});

let uno = () => {socket.emit('budget', "$"); $('#budget').remove();};
let dos = () => {socket.emit('budget', "$$"); $('#budget').remove();};
let tres = () => {socket.emit('budget', "$$$"); $('#budget').remove();};
let richrichrich = () => {socket.emit('budget', "$$$$"); $('#budget').remove();};

socket.on('budget', (data) => {
    messageUL.append(`<li id="budget">
    <div class="card" width="18rem">
        <div class="card-body">
            <h5 class="card-title">Budget Limit</h5>
            <p>...</p>
            <div class="row w-100">
               <button type="button" onclick="uno()" class="btn btn-outline-primary">$</button>
               <button type="button" onclick="dos()" class="btn btn-outline-primary">$$</button>
               <button type="button" onclick="tres()" class="btn btn-outline-primary">$$$</button>
               <button type="button" onclick="richrichrich()" class="btn btn-outline-primary">$$$$</button>
            </div>
        </div>
    </div>
    </li>`);
});

let nay = () => {
    socket.emit('responding', 'nay');
    document.querySelector('.replace').innerHTML = 'You said no';
    document.querySelector('.replace').classList.add('alert', 'alert-danger');
    document.querySelector('.replace').classList.remove('replace');
};
let may = () => {
    socket.emit('responding', 'may');
    document.querySelector('.replace').innerHTML = 'You said maybe';
    document.querySelector('.replace').classList.add('alert', 'alert-warning');
    document.querySelector('.replace').classList.remove('replace');
};
let aye = () => {
    socket.emit('responding', 'aye');
    document.querySelector('.replace').innerHTML = 'You said yes';
    document.querySelector('.replace').classList.add('alert', 'alert-success');
    document.querySelector('.replace').classList.remove('replace');
};

socket.on('restaurant', (data) => {
    messageUL.append(`<li class="alert alert-secondary"><b>Server</b> suggested ${data.name}. Would you like to go?</li>`);
    messageUL.append(`<li class="replace">
    <div class="card" width="18rem">
        <img class="card-img-top" src="${data.imgsrc}" alt="FOOOOOODDDDDDDD">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p>Description: yummy food</p>
            <div class="row w-100">
                <button type="button" onclick="nay()" class="btn btn-outline-danger">No</button>
               <button type="button" onclick="may()" class="btn btn-outline-warning">Maybe</button>
               <button type="button" onclick="aye()" class="btn btn-outline-success">Yea</button>
            </div>
        </div>
    </div>
    </li>`);
});

socket.on('endGame', (place) => {
    messageUL.append(`<li class="alert alert-success">Congratulations! You're going to <span>${place.name}</span></li>`);
});
