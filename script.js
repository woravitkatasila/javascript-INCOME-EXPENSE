var  revenueName=[],ExpenditureName=[];
var id= 0 , resultRevenue = 0, resultExpenditure= 0 ,total= 0 ;


(function(){
    let date = new Date ;
    document.querySelector(".result_title1").innerHTML = date.toDateString();

    

    //
})(); 

function addRevenue(){
    let result;
    //
 
    revenueText = document.querySelector('.add_description').value;
    revenueName = document.querySelector('.add_text').value;

    if(revenueText &&revenueName){
        if(revenueText >0){
    result = parseFloat(revenueText);
    resultRevenue +=result;
    resultRevenuetofix = resultRevenue.toFixed(2)
    document.querySelector(".firstTotal").innerHTML = 'ยอดรวมรายรับ '+resultRevenuetofix;
    document.querySelector('.add_description').value = "";
    document.querySelector('.add_text').value = "";
    id ++;
   //replace html text with data 
   let row = document.querySelector(".row1");
   html = '<tr class="row1" id="first-%id%"><td id="firstName-%nameId%">%Name%</td><td id="firstNum-%numId%">%number%</td><td><button class="item_delete--btn" id="%idEdit%" onclick="editRevenue(this.id)">&#8759;</button></td><td><button class="item_delete--btn" id="%idDel%" onclick="delRevenue(this.id)">&times;</button></td></tr>';
   newHtml = html.replace("%id%",id);
   newHtml = newHtml.replace("%idDel%",id);
   newHtml = newHtml.replace("%idEdit%",id);
   newHtml = newHtml.replace("%nameId%",id);
   newHtml = newHtml.replace("%numId%",id);
   newHtml = newHtml.replace("%Name%",revenueName);
   revenueTexttofix = result.toFixed(2)
   newHtml = newHtml.replace("%number%",revenueTexttofix);
   row.insertAdjacentHTML("beforebegin",newHtml );
   //
    total = resultRevenue - resultExpenditure;
    totaltofix = total.toFixed(2);
    document.querySelector(".result_value").innerHTML = totaltofix ;
                }else{
                    alert("โปรดกรอกข้อมูลเป็นค่าที่ไม่ติดลบ")
                    document.querySelector('.add_description').value = "";
                    document.querySelector('.add_text').value = "";
                }
    }else{
        alert("โปรดกรอกข้อมูลให้ครบถ้วน")
        document.querySelector('.add_description').value = "";
    document.querySelector('.add_text').value = "";
    }
}

function addExpenditure(){
    let result;
    //
    ExpenditureText = document.querySelector('.del_description').value;
    ExpenditureName = document.querySelector('.del_text').value;
    if(ExpenditureText && ExpenditureName){
        if(ExpenditureText >0){
    result = parseFloat(ExpenditureText);
    resultExpenditure +=result;
    resultExpendituretofix = resultExpenditure.toFixed(2)
    document.querySelector(".secondTotal").innerHTML = 'ยอดรวมรายจ่าย -'+resultExpendituretofix;
    document.querySelector('.del_description').value = "";
    document.querySelector('.del_text').value = "";
    id ++;

    let row = document.querySelector(".row2");
   //replace html text with data 
   html = '<tr class="row2" id="secound-%id%"><td id="secoundName-%nameId%">%Name%</td><td id="secoundNum-%numId%">%number%</td><td><button class="item_delete--btn" id="%idEdit%" onclick="editExpenditure(this.id)">&#8759;</button></td><td><button class="item_delete--btn" id="%idDel%" onclick="delExpenditure(this.id)">&times;</button></td></tr>';
   newHtml = html.replace("%id%",id);
   newHtml = newHtml.replace("%idDel%",id);
   newHtml = newHtml.replace("%idEdit%",id);
   newHtml = newHtml.replace("%nameId%",id);
   newHtml = newHtml.replace("%numId%",id);
   newHtml = newHtml.replace("%Name%",ExpenditureName);
   revenueTexttofix = result.toFixed(2)
   newHtml = newHtml.replace("%number%",revenueTexttofix);
   row.insertAdjacentHTML("beforebegin",newHtml );
   //
   total = resultRevenue -resultExpenditure;
   totaltofix = total.toFixed(2);
   document.querySelector(".result_value").innerHTML = totaltofix ;
        }else{
            alert("โปรดกรอกข้อมูลเป็นค่าที่ไม่ติดลบ")
          document.querySelector('.del_description').value = "";
    document.querySelector('.del_text').value = "";
        }
    }else{
        alert("โปรดกรอกข้อมูลให้ครบถ้วน")
          document.querySelector('.del_description').value = "";
    document.querySelector('.del_text').value = "";
    }
}
/////////////

function delRevenue(id){
    let bltRevenueId = document.getElementById(id);
    let RevenueNumber = bltRevenueId.parentNode.previousSibling.textContent;
    resultRevenue = resultRevenue - parseFloat(RevenueNumber);
    total = resultRevenue - resultExpenditure;
    //
    totaltofix = total.toFixed(2);
    document.querySelector(".result_value").innerHTML = totaltofix ;
    resultRevenuetofix = resultRevenue.toFixed(2);
    document.querySelector(".firstTotal").innerHTML = 'ยอดรวมรายรับ '+resultRevenuetofix;
    //
    let deleteRevenue =  document.getElementById(bltRevenueId.parentNode.parentNode.id);
    deleteRevenue.remove();
}
function editRevenue(id){
        let edittext ,editnumber;
        let editRevenueId = document.getElementById(id);
        edittext =prompt("แก้ไขชื่อ");
        editnumber =  prompt("แก้ไขตัวเลข");
        //
        let oldRevenueNumber = editRevenueId.parentNode.previousSibling.textContent;
        resultRevenue = resultRevenue - parseFloat(oldRevenueNumber);

        //
        let RevenueNumber = editRevenueId.parentNode.previousSibling.id;
        resultRevenue = resultRevenue + parseFloat(editnumber);
        total = resultRevenue - resultExpenditure;
        editnumbertofix = parseFloat(editnumber).toFixed(2)
        document.getElementById(RevenueNumber).textContent = editnumbertofix;
        console.log(RevenueNumber)

        //
        let RevenueText = editRevenueId.parentNode.previousSibling.previousSibling.id;
        document.getElementById(RevenueText).textContent = edittext;
        console.log(RevenueText)
        //
        totaltofix = total.toFixed(2);
        document.querySelector(".result_value").innerHTML = totaltofix ;
        resultRevenuetofix = resultRevenue.toFixed(2);
        document.querySelector(".firstTotal").innerHTML = 'ยอดรวมรายรับ '+resultRevenuetofix;
}

//////////////
function delExpenditure(id){
    let bltExpenditureId = document.getElementById(id);
    let RevenueNumber = bltExpenditureId.parentNode.previousSibling.textContent;
    console.log(parseFloat(RevenueNumber))
    resultExpenditure = resultExpenditure - parseFloat(RevenueNumber);
    total = resultRevenue - resultExpenditure;
    console.log(total)
    //
    totaltofix = total.toFixed(2);
    document.querySelector(".result_value").innerHTML = totaltofix ;
    resultExpendituretofix = resultExpenditure.toFixed(2);
    document.querySelector(".secondTotal").innerHTML = 'ยอดรวมรายจ่าย -'+resultExpendituretofix;
    //
    let deleteExpenditure =  document.getElementById(bltExpenditureId.parentNode.parentNode.id);
    deleteExpenditure.remove();
}
function editExpenditure(id){
        let edittext ,editnumber;
        let editExpenditureId = document.getElementById(id);
        edittext =prompt("แก้ไขชื่อ");
        editnumber =  prompt("แก้ไขตัวเลข");
        //
        let oldExpenditureNumber = editExpenditureId.parentNode.previousSibling.textContent;
        resultExpenditure = resultExpenditure - parseFloat(oldExpenditureNumber);

        //
        let ExpenditureNumber = editExpenditureId.parentNode.previousSibling.id;
        resultExpenditure = resultExpenditure + parseFloat(editnumber);
        total = resultRevenue - resultExpenditure;
        editnumbertofix = parseFloat(editnumber).toFixed(2)
        document.getElementById(ExpenditureNumber).textContent = editnumbertofix;
        console.log(ExpenditureNumber)

        //
        let ExpenditureText = editExpenditureId.parentNode.previousSibling.previousSibling.id;
        document.getElementById(ExpenditureText).textContent = edittext;
        console.log(ExpenditureText)
        //
        totaltofix = total.toFixed(2);
        document.querySelector(".result_value").innerHTML = totaltofix ;
        resultExpendituretofix = resultExpenditure.toFixed(2);
        document.querySelector(".secondTotal").innerHTML = 'ยอดรวมรายจ่าย -'+resultExpendituretofix;
}



