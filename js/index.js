let coments = [];

document.getElementById('comment-add').onclick = function()
{
    event.preventDefault();
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');

    let comment=
    {
        name : commentName.value,
        body : commentBody.value,
        time : Math.floor(Date.now()/1000)
    }

    commentName.value = '';
    commentBody.value = '';
    coments.push(comment);
    saveComments();
    showComments();
}
    function saveComments()
    {
        localStorage.setItem('comments', JSON.stringify(coments));
    }
    function showComments()
    {
        let commentField = document.getElementById('comment-field');
        let out = '';
        coments.forEach(function(item)
        {
            out += `<p class="text-right small"><em>${timeConverter(item.time)}</em></p>`;
            out += `<p class="alert alert-primary" role="alert">${item.name}</p>`;
            out += `<p class="alert alert-success" role="alert">${item.body}</p>`;
        });
        commentField.innerHTML = out;
    }
function timeConverter(UNIX_timestamp)
{
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Січня','Лютого','Березеня','Квітня','Травня','Червня','Липня','Серпня','Вересня','Жовтня','Листопада','Грудня'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}