/**
 * Nhập mảng
 */
var arrayNumber =[];
var arrayNumberDuong = [];
var arrayNumberAm = [];
document.getElementById("themSo").onclick = function () {
    var number = document.getElementById("number").value * 1;
    arrayNumber.push(number);
    var content = "";
    var j = 0;
    var x = 0;
    for (var i = 0; i < arrayNumber.length; i++) {
        content += arrayNumber[i] + " ";
        //Mảng số dương
        if(arrayNumber[i] > 0){
            arrayNumberDuong[j] = arrayNumber[i];
            j++;
        }else if(arrayNumber[i] < 0){
            arrayNumberAm[x] = arrayNumber[i];
            x++;
        }
    }
    document.getElementById("mang").innerHTML = "Mảng: " + content;
    console.log(arrayNumberDuong);
}

function inMang(){
    var content = "";
    for (var i = 0; i < arrayNumber.length; i++) {
        content += arrayNumber[i] + " ";
    }
    return content;
}

//Tính tổng
document.getElementById("tinhTong").onclick = function () {
    document.getElementById("ketQua").style.display = "block";
    var tong = 0;
    for (var i = 0; i < arrayNumberDuong.length; i++) {
        tong += arrayNumberDuong[i];
    }
    document.getElementById("ketQua").innerHTML = "Tổng là: " + tong;
}

//Đếm số dương
document.getElementById("demSo").onclick = function () {
    document.getElementById("ketQua").style.display = "block";
    var dem = 0;
    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > 0) {
            dem++;
        }
    }
    document.getElementById("ketQua").innerHTML = "Có " + dem + " số dương";
}

//Tìm số nhỏ nhất
document.getElementById("timSonn").onclick = function () {
    document.getElementById("ketQua").style.display = "block";
    var min = arrayNumber[0];
    for (var i = 0; i < arrayNumber.length; i++) {
        if (min > arrayNumber[i]) {
            min = arrayNumber[i];
        }
    }
    document.getElementById("ketQua").innerHTML = "Số nhỏ nhất là: " + min;
}

//Tìm số dương nhỏ nhất trong mảng
document.getElementById("timSoDuongnn").onclick = function () {
    document.getElementById("ketQua").style.display = "block";
    var min = arrayNumberDuong[0];
    for (var i = 0; i < arrayNumberDuong.length; i++) {
        if (min > arrayNumberDuong[i]) {
            min = arrayNumberDuong[i];
        }
    }
    document.getElementById("ketQua").innerHTML = "Số dương nhỏ nhất là: " + min;
}

//Tìm số chẵn cuối cùng
document.getElementById("timSoChancc").onclick = function () {
    document.getElementById("ketQua").style.display = "block";
    var chan = 0;
    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] % 2 == 0) {
            chan = arrayNumber[i];
        }
    }
    document.getElementById("ketQua").innerHTML = "Số chẵn cuối cùng là: " + chan;
}

//Đổi chỗ
document.getElementById("doiCho").onclick = function () {
    document.getElementById("doiChoContent").style.display = "flex";
}

document.getElementById("doiCho_btn").onclick = function () {
    document.getElementById("ketQua").style.display = "block";
    var number1 = document.getElementById("number1").value*1;
    var number2 = document.getElementById("number2").value*1;
    var tam = arrayNumber[number1];
    var content = "";
    arrayNumber[number1] = arrayNumber[number2];
    arrayNumber[number2] = tam;
    document.getElementById("ketQua").innerHTML = "Mảng sau khi đổi: " + inMang();
}

//Sắp xếp tăng dần
document.getElementById("sapXepTangDan").onclick = function () {
    document.getElementById("ketQua").style.display = "block";
    var tam = "";
    for(var i = 0; i < arrayNumber.length; i++){
        for(var j = i; j < arrayNumber.length; j++){
            if(arrayNumber[i] > arrayNumber[j]){
                tam = arrayNumber[j];
                arrayNumber[j] = arrayNumber[i];
                arrayNumber[i] = tam;
            }
        }   
    }
    document.getElementById("ketQua").innerHTML = "Mảng sau khi sắp xếp: " + inMang();
}

//Tìm số nguyên tố đầu tiên
document.getElementById("timSntDauTien").onclick = function () {
    document.getElementById("ketQua").style.display = "block";
    dem = 0;
    var ketQua = -1;
    for(var i = 0; i < arrayNumberDuong.length; i++){
        dem = 0;
        for(var j = 2; j < arrayNumberDuong[i]; j++){
            if(arrayNumberDuong[i] % j == 0){
                dem++;
            }
        }   
        if(arrayNumberDuong[i] > 1 && dem == 0 && Number.isInteger(arrayNumberDuong[i])){
            var ketQua = arrayNumberDuong[i];
            break;
        }
    }
    document.getElementById("ketQua").innerHTML = "Số nguyên tố đầu tiên: " + ketQua;
}

//Đếm số nguyên
document.getElementById("demSoNguyen").onclick = function () {
    document.getElementById("ketQua").style.display = "block";
    dem = 0;
    for(var i = 0; i < arrayNumber.length; i++){
        if(Number.isInteger(arrayNumber[i])){
            dem++;
        }
    }
    document.getElementById("ketQua").innerHTML = "Có " + dem + " số nguyên";
}

//So sánh số lượng âm dương
document.getElementById("soSanhSoLuong").onclick = function () {
    document.getElementById("ketQua").style.display = "block";
    ketQua = "";
    if(arrayNumberAm.length > arrayNumberDuong.length){
        ketQua = ">";
    } else if(arrayNumberAm.length < arrayNumberDuong.length){
        ketQua = "<";
    }else{
        ketQua = "=";
    }
    document.getElementById("ketQua").innerHTML = "Số âm " + ketQua + " số dương";
}