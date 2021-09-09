let details = document.getElementById("details");
let amount = document.getElementById("amount");
let date = document.getElementById("date");

let tinfo = document.getElementById("tData");
let tableRow = document.getElementById("tRow");

var exInputs = document.getElementsByTagName("input")[0];
var exInputs = document.getElementsByTagName("input")[1];
var exInputs = document.getElementsByTagName("input")[2];

//ADD Validation
validate = () => {
    exInputs.addEventListener("keypress",function(){
        if(exInputs === ""){
            tableRow.style.display = "none";
        }
        else{
            return false;
        }     
    });
}

// display Output

    exInputs.addEventListener("keypress", function() {
        var detailRow = document.createElement("td");
        var amountRow = document.createElement("td");
        var dateRow = document.createElement("td");
                
        tableRow = document.createElement("tr");
                         
        tableRow.appendChild(detailRow);
        tableRow.appendChild(amountRow);
        tableRow.appendChild(dateRow);
                
        tinfo.appendChild(tableRow);
                
        detailRow.innerText = details.value;
        amountRow.innerText = amount.value;
        dateRow.innerText = date.value;
                
        details.value = "";
        amount.value = "";
        date.value = "";

        let erase = document.createElement("button");
        erase.addEventListener("click",function() {
            tinfo.removeChild(tableRow);
        })
        tableRow.appendChild(erase);
        erase.innerText = "X"
        erase.style.background = "red"
        erase.style.color = "white"
        erase.style.borderRadius = "20px"
        erase.style.marginTop = "10px"
        erase.style.border = "1px solid transparent"
    });