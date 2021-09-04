let details = document.getElementById("details");
let amount = document.getElementById("amount");
let date = document.getElementById("date");

let tinfo = document.getElementById("tData");
let btn = document.getElementById("addExpence");
let clear = document.getElementById("clear");
let exInputs = document.getElementsByTagName("input");

//ADD Validation
validate = () => {
    exInputs.addEventListener("change",function(){
        if(exInputs == ""){
            btn.disabled = true;
            return false;
        }     
        else{
            btn.disabled = false;
            return false;
        }
    });
}

// display Output
display = () => {

    btn.addEventListener("click", function() {
        var detailRow = document.createElement("td");
        var amountRow = document.createElement("td");
        var dateRow = document.createElement("td");
                
        var tableRow = document.createElement("tr");
                         
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
            
        clear.addEventListener("click", function() {
            tinfo.removeChild(tableRow);
         });     
    });
}