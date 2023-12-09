

var converBtn = document.getElementById('convertBtn');
var input = document.getElementById('inputBox')




if(converBtn){

    converBtn.addEventListener('click', () =>{

        sendURL(input.value)

        
    })
}

function sendURL(URL, format){
    window.location.href = `http://localhost:3000/download?URL=${URL}?format=${format}`
}
