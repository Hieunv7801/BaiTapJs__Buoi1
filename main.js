/*============Bài 1===============*/
/*
+ Đầu vào:
    - số ngày làm
    - lương 1 ngày = 100000
+ Xử lý
    lương  = số ngày làm * lương 1 ngày
+ Đầu ra
    Số lương có được 
*/
var luongMotNgay = 100000;
var soNgayLam = 25;
var luong = luongMotNgay * soNgayLam;

console.log("Số lương của bạn là: "+luong)

/*============Bài 2===============*/
/*
+ Đầu vào:
    - số thực 1
    - số thực 2
    - số thực 3
    - số thực 4
    - số thực 5
+ Xử lý
    trung bình = (st1 + st2 + st3 + st4 + st5) / 5
+ Đầu ra
    Giá trị trung bình của 5 số
*/
var st1 = 3;
var st2 = 5;
var st3 = 7;
var st4 = 9;
var st5 = 11;

var trungBinh = (st1 + st2 + st3 + st4 + st5)/5;
 
console.log("Giá trị trung bình là: "+trungBinh)

/*============Bài 3===============*/
/*
+ Đầu vào:
   số USD người dùng muốn đổi
   1 USD = 23000 VNĐ
+ Xử lý
    Số tiền tiền quy đổi = 1 USD * Số USD người dùng muốn đổi
+ Đầu ra
    Số tiền quy đổi ra VNĐ
*/

var USD = 23000;
var soUsdQuyDoi = 5;
var VND = USD * soUsdQuyDoi;

console.log("Số tiền quy đổi ra VND là: "+VND)

/*============Bài 4===============*/
/*
+ Đầu vào:
   Chiều dài HCN
   Chiều rộng HCN
+ Xử lý
    Diện tính HCN = chiều dài * chiều rộng
    Chu vi HCN = (chiều dài + chiều rộng) * 2
+ Đầu ra
    Chu vi và diện tích HCN
*/

var chieuDai = 10;
var chieuRong = 7;
var dienTichHCN = chieuDai * chieuRong;
var chuViHCN = (chieuDai + chieuRong) * 2;

console.log("Diện tích hình chữ nhật là: "+dienTichHCN);
console.log("Chu vi hình chữ nhật: "+chuViHCN);

/*============Bài 5===============*/
/*
+ Đầu vào:
   Số có 2 chữ số 
+ Xử lý
    Tổng kí số = số hàng đơn vị + số hàng chục
    số hàng đơn vị = so % 10;
    số hàng chục = so / 10;
+ Đầu ra
    Tổng 2 kí số
*/

var number = 18;

var so_hang_don_vi = number % 10;
var so_hang_chuc = Math.floor(number / 10);

var tongKiSo = so_hang_don_vi + so_hang_chuc;

console.log("Tổng 2 kí số là: "+tongKiSo);

