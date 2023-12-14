

var converBtn = document.getElementById('convertBtn');
var input = document.getElementById('inputBox')

var alert = document.getElementById('alert');



if (converBtn) {

    converBtn.addEventListener('click', () => {



        var formatOptions = document.getElementById("format");

        var FORMAT = formatOptions.options[formatOptions.selectedIndex].text;
        
        
        

        if (FORMAT == "Format") {
            alert.classList.toggle('active')


        }else if(FORMAT == "mp3") {
            sendURL(input.value, FORMAT)

        }else{
            mp3URL(input.value, FORMAT);
        }


    })
}


function mp3URL(URL, FORMAT) {
    window.location.href = `http://localhost:3000/mp3?URL=${URL}&FORMAT=${FORMAT}`

}
function sendURL(URL, FORMAT) {
    window.location.href = `http://localhost:3000/download?URL=${URL}&FORMAT=${FORMAT}`

    

}
