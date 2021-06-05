function NhanVien(
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
) {
    this.tkNV = _tkNV;
    this.tenNV = _tenNV;
    this.emailNV = _emailNV;
    this.passNV = _passNV;
    this.date = _date;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = 0
    this.xepLoai = 0;

    //Tính tổng lương
    this.tinhTongLuong = function () {
        switch (this.chucVu) {
            case _sep:
                return this.tongLuong = parseFloat(this.luongCoBan * 3);
                break;
            case _truongPhong:
                return this.tongLuong = parseFloat(this.luongCoBan * 2);
                break;
            case _chucVuNhanVien:
                return this.tongLuong = parseFloat(this.luongCoBan);
                break;
            default:
                return alert("nhap chuc vu");

        }

    }

    //Xếp loại nhân viên
    this.xepLoaiNhanVien = function () {

        if (this.gioLam < 160) {
            return this.xepLoai = "Trung bình";

        }
        else if (this.gioLam < 176) {
            return this.xepLoai = "Khá";

        }
        else if (this.gioLam < 192) {
            return this.xepLoai = "Giỏi";

        }
        else {
            return this.xepLoai = "Xuất sắc";
        }

    }


}
