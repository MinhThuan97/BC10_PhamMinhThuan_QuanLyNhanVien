function Validation() {
    this.checkErr = function (input, divID, mess) {
        if (input.trim() === "") {
            getEle(divID).innerHTML = mess;
            getEle(divID).className = "alert alert-danger";
            return false;
        } else {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }
    };

    this.checkDoDaiKyTu = function (input, divID, mess, min, max) {
        if (input.length >= min && input.length <= max) {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.checkTenHopLe = function (input, divID, mess) {
        var letter =
            "^[a-zA-Z_Ă€ĂĂ‚ĂƒĂˆĂ‰Ăáº¾ĂŒĂĂ’Ă“Ă”Ă•Ă™ĂÄ‚ÄÄ¨Å¨Æ Ă Ă¡Ă¢Ă£Ă¨Ă©ĂªĂ¬Ă­Ă²Ă³Ă´ĂµĂ¹ĂºÄƒÄ‘Ä©Å©Æ¡Æ¯Ä‚áº áº¢áº¤áº¦áº¨áºªáº¬áº®áº°áº²áº´áº¶" +
            "áº¸áººáº¼á»€á»€á»‚Æ°Äƒáº¡áº£áº¥áº§áº©áº«áº­áº¯áº±áº³áºµáº·áº¹áº»áº½á»á»á»ƒáº¿á»„á»†á»ˆá»á»Œá»á»á»’á»”á»–á»˜á»á»œá»á» á»¢á»¤á»¦á»¨á»ªá»…á»‡á»‰á»‹á»á»á»‘á»“á»•á»—á»™á»›á»á»Ÿá»¡á»£" +
            "á»¥á»§á»©á»«á»¬á»®á»°á»²á»´Ăá»¶á»¸á»­á»¯á»±á»³á»µá»·á»¹\\s]+$";
        if (input.match(letter)) {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.checkEmai = function (input, divID, mess) {
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (input.match(letter)) {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.checkPassWord = function (input, divID, mess) {
        var letter =
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if (input.match(letter)) {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.checkDate = function (input, divID, mess) {
        var letter = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        if (input.match(letter)) {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.checkChucVu = function (idSelect, divID, mess) {
        if (getEle(idSelect).selectedIndex != 0) {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.checkNumber = function (input, divID, mess, min, max) {
        var letter = /^[0-9]+$/;
        if (input.match(letter) && input >= min && input <= max) {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.checkTrungKyTu = function (input, divID, mess, arr) {
        var status = true;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].tkNV === input) {
                status = false;
                break;
            }

        }
        if (status) {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };

    this.checkTrungEmail = function (input, divID, mess, arr) {
        var status = true;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].emailNV === input) {
                status = false;
                break;
            }

        }
        if (status) {
            getEle(divID).innerHTML = "";
            getEle(divID).className = "";
            return true;
        }
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
    };
}
