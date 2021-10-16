
var quanly=[];
function quanly(){
    var tenxe = document.forms['thongtin']['tenxe'].value;
    var hinhanh = document.forms['thongtin']['hinhanh'].value;
    var hangxe = document.forms['thongtin']['hangxe'].value;
    var giatien = document.forms['thongtin']['giatien'].value;
    var nguoilienhe = document.forms['thongtin']['nguoilienhe'].value;
    var sodienthoai = document.forms['thongtin']['sodienthoai'].value;
    var email = document.forms['thongtin']['email'].value;
    
    var xeco = {
        tenxe: tenxe,
        hinhanh: hinhanh,
        hangxe: hangxe,
        giatien: giatien,
        nguoilienhe: nguoilienhe,
        sodienthoai: sodienthoai,
        email: email,
    }
    quanly[quanly.length] = xeco
    document.getElementById("danhsach").innerHTML =  showkq;
}
function showkq(){
    var kq ="";
    quanly.forEach(element => {
    kq +="";
    });
    return ;
}

