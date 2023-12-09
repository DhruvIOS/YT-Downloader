

var converBtn = document.getElementById('convertBtn');
var input = document.getElementById('inputBox')

var alert = document.getElementById('alert');



if (converBtn) {

    converBtn.addEventListener('click', () => {



        var formatOptions = document.getElementById("format");

        var FORMAT = formatOptions.options[formatOptions.selectedIndex].text;
        
        
        

        if (format == "Format") {
            alert.classList.toggle('active')


        } else {
            sendURL(input.value, FORMAT)



        }


    })
}

``;

function sendURL(URL, FORMAT) {
    window.location.href = `http://localhost:3000/download?URL=${encodeURIComponent(URL)}&FORMAT=${encodeURIComponent(FORMAT)}`

    

}
