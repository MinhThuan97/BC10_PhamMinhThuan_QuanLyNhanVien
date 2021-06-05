function DanhSachSinhVien() {
    this.listNhanVien = [];

    this.themNhanVien = function (nv) {
        this.listNhanVien.push(nv);
    }

    this._timViTri = function (tkNV) {
        var index = -1;
        for (var i = 0; i < this.listNhanVien.length; i++) {
            if (this.listNhanVien[i].tkNV == tkNV) {
                index = i;
                break;
            }
        }
        return index;
    };

    this._xoaNhanVien = function (tkNV) {
        var index = this._timViTri(tkNV);
        if (index != -1) {
            this.listNhanVien.splice(index, 1);
        }
    };

    this._layThongTinNhanVien = function (tkNV) {
        var index = this._timViTri(tkNV);
        if (index != -1) {
            return this.listNhanVien[index];
        }
    };

    this.capNhatNhanVien = function (nhanVien) {
        var index = this._timViTri(nhanVien.tkNV);

        if (index != -1) {
            this.listNhanVien[index] = nhanVien;
        }
    };

    this.timKiemNhanVien = function (keyWord) {
        var listSearch = [];

        for (var i = 0; i < this.listNhanVien.length; i++) {
            if (this.listNhanVien[i].xepLoai.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1) {
                listSearch.push(this.listNhanVien[i]);
            }
        }
        return listSearch;
    };
}