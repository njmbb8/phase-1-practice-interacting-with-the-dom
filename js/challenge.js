let likes = {}
let running = true;
let comments = [];
function startTimer(){
    const intervalID = window.setInterval(function(){
        document.getElementById('counter').textContent = parseInt(document.getElementById('counter').textContent) + 1;
    }, 1000)

    return intervalID;
}

let intervalID = startTimer();

document.addEventListener('click', function(e){
    if(e.target.id === 'plus'){
        document.getElementById('counter').textContent = parseInt(document.getElementById('counter').textContent) + 1;
    }
    else if(e.target.id === 'minus'){
        document.getElementById('counter').textContent = parseInt(document.getElementById('counter').textContent) - 1;
    }
    else if(e.target.id === 'heart'){
        if(!likes[document.getElementById('counter').textContent]){
            likes[document.getElementById('counter').textContent] = 0;
            const newNode = document.createElement('li');
            newNode.id = `number${document.getElementById('counter').textContent}`;
            document.getElementsByClassName('likes')[0].appendChild(newNode);
        }
        likes[document.getElementById('counter').textContent]++;
        document.getElementById(`number${document.getElementById('counter').textContent}`).textContent = `${document.getElementById('counter').textContent} has ${likes[document.getElementById('counter').textContent]} likes`;
    }
    else if(e.target.id === 'pause'){
        if(e.target.textContent === ' pause '){
            e.target.textContent = ' resume ';
            window.clearInterval(intervalID);
            buttons = document.getElementsByTagName('button')
            for(let i = 0; i < buttons.length; i++){
                if(buttons[i].id !== 'pause' && buttons[i].id !== 'restart'){
                    buttons[i].disabled = true;
                }
            }
        }
        else if(e.target.textContent === ' resume '){
            e.target.textContent = ' pause ';
            intervalID = startTimer();
            document.querySelectorAll('button').disabled = false;
            buttons = document.getElementsByTagName('button')
            for(let i = 0; i < buttons.length; i++){
                buttons[i].disabled = false
            }
        }
    }
    else if(e.target.id === 'restart'){
        buttons = document.getElementsByTagName('button');
        for(let i = 0; i < buttons.length; i++){
            buttons[i].disabled = false;
        }
        if(document.getElementById('pause').textContent === ' resume '){
            document.getElementById('pause').textContent = ' pause ';
            clearInterval(intervalID);
            intervalID = startTimer();
        }
        document.getElementById('counter').textContent = 0;
    }
    else if(e.target.id === 'submit'){
        e.preventDefault();
        commentListItem = document.createElement('p');
        commentListItem.textContent = document.getElementById('comment-input').value;
        document.getElementById('list').appendChild(commentListItem);
        document.getElementById('comment-input').value = '';
    }
})