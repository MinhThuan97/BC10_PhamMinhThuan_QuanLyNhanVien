var dsnv = new DanhSachSinhVien();
var validation = new Validation();

function getEle(id) {
    return document.getElementById(id);
}

//Lấy dữ liệu đầu vào
function layDuLieu(isAdd) {
    var _tkNV = getEle("tknv").value;
    var _tenNV = getEle("name").value;
    var _emailNV = getEle("email").value;
    var _passNV = getEle("password").value;
    var _date = getEle("datepicker").value;
    var _luongCoBan = getEle("luongCB").value;
    var _chucVu = getEle("chucvu").value;
    var _gioLam = getEle("gioLam").value;
    var _sep = getEle("sep").value;
    var _truongPhong = getEle("truongPhong").value;
    var _chucVuNhanVien = getEle("chucVuNhanVien").value;

    var isValid = true;
    //Validation
    //Validation tài khoản nhân viên
    if (isAdd) {
        isValid &=
            validation.checkErr(
                _tkNV,
                "divTkNVErr",
                "(*) Tài khoản nhân viên không được để trống"
            ) &&
            validation.checkDoDaiKyTu(
                _tkNV,
                "divTkNVErr",
                "(*) Tài khoản tối đa 4 - 6 ký số",
                4,
                6
            ) &&
            validation.checkTrungKyTu(
                _tkNV,
                "divTkNVErr",
                "(*) Tài khoản nhân viên bị trùng",
                dsnv.listNhanVien
            );
    }



    // Validation tên nhân viên
    isValid &=
        validation.checkErr(
            _tenNV,
            "divTenNVErr",
            "(*) Tên nhân viên không được để trống"
        ) &&
        validation.checkTenHopLe(
            _tenNV,
            "divTenNVErr",
            "(*) Tên nhân viên phải là chữ"
        );

    //Validation Email
    isValid &=
        validation.checkErr(
            _emailNV,
            "divEmailNVErr",
            "(*) Email nhân viên không được để trống"
        ) &&
        validation.checkEmai(
            _emailNV,
            "divEmailNVErr",
            "(*) Email phải đúng định dạng"
        );

    //Validation Password
    isValid &=
        validation.checkErr(
            _passNV,
            "divPassNVErr",
            "(*) Mật khẩu không được để trống"
        ) &&
        validation.checkPassWord(
            _passNV,
            "divPassNVErr",
            "(*) Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)"
        );

    // Validation Date
    isValid &=
        validation.checkErr(
            _date,
            "divDateErr",
            "(*) Ngày làm không được để trống"
        ) && validation.checkDate(_date, "divDateErr", "(*) định dạng mm/dd/yyyy");

    // Validation Luong co ban
    isValid &=
        validation.checkErr(
            _luongCoBan,
            "divLuongCBErr",
            "(*) Lương cơ bản nhân viên không được để trống"
        ) &&
        validation.checkNumber(
            _luongCoBan,
            "divLuongCBErr",
            "(*)  Lương cơ bản 1 000 000 - 20 000 000",
            1000000,
            20000000
        );

    //Validation Chuc vu
    isValid &=
        validation.checkErr(
            _chucVu,
            "divChucVuErr",
            "(*) Chức vụ không được để trống"
        ) &&
        validation.checkChucVu(
            "chucvu",
            "divChucVuErr",
            "(*) Chức vụ phải chọn chức vụ hợp lệ"
        );

    // Validation Gio lam
    isValid &=
        validation.checkErr(
            _gioLam,
            "divGioLamErr",
            "(*) Giờ làm không được để trống"
        ) &&
        validation.checkNumber(
            _gioLam,
            "divGioLamErr",
            "(*)  Số giờ làm trong tháng 80 - 200 giờ ",
            80,
            200
        );

    //Khai báo Nhân Viên

    if (isValid) {
        var nhanVien = new NhanVien(
            _tkNV,
            _tenNV,
            _emailNV,
            _passNV,
            _date,
            _luongCoBan,
            _chucVu,
            _gioLam,
            _sep,
            _truongPhong,
            _chucVuNhanVien
        );
        return nhanVien;
    }
    return null;

}


//Lấy dữ liệu từ localStorage ra table
getLocalStorage();

// Thêm nhân viên
getEle("btnThemNV").addEventListener("click", function (even) {

    even.preventDefault();
    var nhanVien = layDuLieu(true);

    if (nhanVien) {
        nhanVien.tinhTongLuong();
        nhanVien.xepLoaiNhanVien();
        dsnv.themNhanVien(nhanVien);
        taoBang(dsnv.listNhanVien);
        setLocalStorage();
    }
});

//Cập nhật nhân viên
getEle("btnCapNhat").addEventListener("click", function () {

    var nhanVien = layDuLieu(false);

    nhanVien.tinhTongLuong();
    nhanVien.xepLoaiNhanVien();
    dsnv.capNhatNhanVien(nhanVien);
    taoBang(dsnv.listNhanVien);
    setLocalStorage();
});

//Tạo table
function taoBang(arr) {
    getEle("tableDanhSach").innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        var tagTR = document.createElement("tr");

        var tagTD_tkNV = document.createElement("td");
        var tagTD_tenNV = document.createElement("td");
        var tagTD_emailNV = document.createElement("td");
        var tagTD_date = document.createElement("td");
        var tagTD_chucVu = document.createElement("td");
        var tagTD_tongLuong = document.createElement("td");
        var tagTD_xepLoai = document.createElement("td");
        var tagTD_btnEdit = document.createElement("td");
        var tagTD_btnDelete = document.createElement("td");

        tagTD_tkNV.innerHTML = arr[i].tkNV;
        tagTD_tenNV.innerHTML = arr[i].tenNV;
        tagTD_emailNV.innerHTML = arr[i].emailNV;
        tagTD_date.innerHTML = arr[i].date;
        tagTD_chucVu.innerHTML = arr[i].chucVu;
        tagTD_tongLuong.innerHTML = arr[i].tongLuong;
        tagTD_xepLoai.innerHTML = arr[i].xepLoai;
        tagTD_btnEdit.innerHTML =
            '<button class = "btn btn-info" onclick = "suaNhanVien(\'' + arr[i].tkNV + '\')" data-toggle="modal" data-target="#myModal">Sửa</button>';
        tagTD_btnDelete.innerHTML =
            '<button class = "btn btn-danger" onclick = "xoaNhanVien(\'' + arr[i].tkNV + '\')">Xóa</button>';


        tagTR.appendChild(tagTD_tkNV);
        tagTR.appendChild(tagTD_tenNV);
        tagTR.appendChild(tagTD_emailNV);
        tagTR.appendChild(tagTD_date);
        tagTR.appendChild(tagTD_chucVu);
        tagTR.appendChild(tagTD_tongLuong);
        tagTR.appendChild(tagTD_xepLoai);
        tagTR.appendChild(tagTD_btnEdit);
        tagTR.appendChild(tagTD_btnDelete);

        getEle("tableDanhSach").appendChild(tagTR);
    }
}

//Sửa sinh viên
function suaNhanVien(tkNV) {
    var nhanVien = dsnv._layThongTinNhanVien(tkNV);

    getEle("tknv").value = nhanVien.tkNV;
    getEle("tknv").disabled = true;
    getEle("name").value = nhanVien.tenNV;
    getEle("email").value = nhanVien.emailNV;
    getEle("password").value = nhanVien.passNV;
    getEle("datepicker").value = nhanVien.date;
    getEle("luongCB").value = nhanVien.luongCoBan;
    getEle("chucvu").value = nhanVien.chucVu;
    getEle("gioLam").value = nhanVien.gioLam;
}


//Xóa Sinh Viên
function xoaNhanVien(tkNV) {
    dsnv._xoaNhanVien(tkNV);
    taoBang(dsnv.listNhanVien);
    setLocalStorage();
}

//Tìm kiếm 
getEle("searchName").addEventListener("keyup", function () {

    var keyWord = getEle("searchName").value;
    var listSearch = dsnv.timKiemNhanVien(keyWord);
    taoBang(listSearch);

});

//Lưu dữ liệu xuống localStorage
function setLocalStorage() {
    var arrString = JSON.stringify(dsnv.listNhanVien);
    localStorage.setItem("DSNV", arrString);
}

//Lấy dữ liệu từ localStorage
function getLocalStorage() {
    if (localStorage.getItem("DSNV")) {
        var data = localStorage.getItem("DSNV");
        dsnv.listNhanVien = JSON.parse(data);
        taoBang(dsnv.listNhanVien);
    }
}
