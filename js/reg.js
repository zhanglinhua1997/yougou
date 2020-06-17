window.onload = function () {
  var regtel = /^1[3|5|6|9]\d{9}$/;
  var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
  var regsuerpwd;
  var tel = document.querySelector("#tel");
  var pwd = this.document.querySelector("#pwd");
  var suerpwd = this.document.querySelector("#suerpwd");
  regexp(tel, regtel);
  regexp(pwd, regpwd);
  function regexp(ele, reg) {
    ele.onblur = function () {
      if (reg.test(this.value)) {
        this.nextElementSibling.className = "success";
        this.nextElementSibling.innerHTML =
          '<i class="success_icon"></i>恭喜您输入正确  ';
      } else {
        this.nextElementSibling.className = "error";
        this.nextElementSibling.innerHTML =
          '	<i class="error_icon"></i> 手机号码格式不正确，请从新输入 ';
      }
    };
  }
  suerpwd.onblur = function () {
    if (this.value == pwd.value) {
      this.nextElementSibling.className = "success";
      this.nextElementSibling.innerHTML =
        '<i class="success_icon"></i>恭喜您输入正确  ';
    } else {
      this.nextElementSibling.className = "error";
      this.nextElementSibling.innerHTML =
        '<i class="success_icon"></i>输入不一致  ';
    }
  };
};
