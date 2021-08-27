function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function generatenutri(){
    //  var doc = new jsPDF()
    let ime=document.getElementById("ime")
    let preziime=document.getElementById("prezime")
    let mail=document.getElementById("mail")
    let tel=document.getElementById("tel")
    let datum=document.getElementById("datum")
    let opis=document.getElementById("opis")
    let i1="Ime: "+ime.value
    let i2="Prezime: "+preziime.value
    let i3="e-mail: "+mail.value
    let i4="Telefon: "+tel.value
    let i5="Datum: "+datum.value
    let i6="Opis: "+opis.value
    var doc = new jsPDF();
    doc.text(20,20,i1+"\n"+i2+"\n"+i3+"\n"+i4+"\n"+i5+"\n"+i6)
    doc.save("nutricionista.pdf");
     alert("Uspesno ste poslali zahtev za zakazivanje termina trudicemo se da sto pre potvrdimo vas termin")
    }
function generatemasage(){
    let ime=document.getElementById("ime")
    let preziime=document.getElementById("prezime")
    let mail=document.getElementById("mail")
    let tel=document.getElementById("tel")
    let datum=document.getElementById("datum")
    let opis=document.getElementById("opis")
    let i1="Ime: "+ime.value
    let i2="Prezime: "+preziime.value
    let i3="e-mail: "+mail.value
    let i4="Telefon: "+tel.value
    let i5="Datum: "+datum.value
    let i6="Opis: "+opis.value
    var doc = new jsPDF();
    doc.text(20,20,i1+"\n"+i2+"\n"+i3+"\n"+i4+"\n"+i5+"\n"+i6)
    doc.save("masaza.pdf");
     alert("Uspesno ste poslali zahtev za zakazivanje termina trudicemo se da sto pre potvrdimo vas termin") 
}
    function hideul(){
        filterSelection("all")
        document.getElementById("myUL").style.visibility = "hidden"
        document.getElementById("f16").style.visibility = "hidden"
        restorestorage() 
    }
    function myFunction2() {
      document.getElementById("myUL").style.visibility = "visible" 
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById('myInput');
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName('li');
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
      if(input.value=="")
        hideul();
    }
  var count;
function result(){
  let rate=parseFloat(document.getElementById("rate").innerHTML)
  let cnt=parseFloat(count)
  let avg=(rate+cnt)/2
  document.getElementById("rate").innerHTML=avg
}
function starmark(item,param){
  if(param%2!=0){
    alert("Niste bili na treningu ne mozete da komentariste")
    return;
0  }
  count=item.id[0];
  sessionStorage.starRating = count;
  var subid= item.id.substring(1);
  for(var i=0;i<5;i++){
    if(i<count)
      document.getElementById((i+1)+subid).style.color="orange";
    else
      document.getElementById((i+1)+subid).style.color="black";  
    }
}
function comment(param){
  if(param%2!=0){
      alert("Niste bili na treningu ne mozete da komentariste")
      return;
  }
  let ime=document.getElementById("ime")
  let preziime=document.getElementById("prezime")
  let mail=document.getElementById("mail")
  let opis=document.getElementById("opis")
  let s="<h3>"+ime.value+" "+preziime.value+"</h3>"+"<p>"+opis.value+"</p>"+"<hr>"
  document.getElementById("comm").innerHTML=s+document.getElementById("comm").innerHTML
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btns");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("actives");
    current[0].className = current[0].className.replace(" actives", "");
    this.className += " active2";
  });
}
function booking(not){
  localStorage.setItem("trening",not)
  window.open("booking.html","_self")
}
function rename(){
  document.getElementById("Naziv").innerHTML=localStorage.getItem("trening")
}
function reserve(parameter){
  let s=localStorage.getItem("trening")
  let r=s+" "+parameter
  sessionStorage.setItem(s,r);
  alert("Uspesno zakazivanje/Success booking")
  window.open("nalog.html","_self") 
}
function restorestorage(){
  for(let i=0; i<sessionStorage.length; i++) {
    let key = sessionStorage.key(i);
    document.getElementById("training").innerHTML+=sessionStorage.getItem(key)
    document.getElementById("training").innerHTML+="<br>"
  }
}