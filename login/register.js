var form = document.getElementById('form');
var hoten = document.getElementById('hoten');
var email = document.getElementById('email');
var sdt = document.getElementById('sdt');
var password = document.getElementById('password');
var cpassword = document.getElementById('cpassword');
var check_hoten = /^[\w]/;
var check_email = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
var check_sdt = /^[\d][\d]{9,10}/;
form.addEventListener('submit', (e) => {
	e.preventDefault();

	if(checkInputs()==true) {
		alert("Đăng kí thành công");
		location.assign("../index.html");
	} 
}); 

function checkInputs() {
	var hotenValue = hoten.value.trim();
	var emailValue = email.value.trim();
	var sdtValue = sdt.value.trim();
	var passwordValue = password.value.trim();
	var cpasswordValue = cpassword.value.trim();
	
	if(hotenValue === "") {
		setErrorFor(hoten, 'Họ và tên không được để trống!');
		return false;
	} else if(StringMatch(hotenValue, check_hoten) == false) {
		setErrorFor(hoten, 'Họ và tên không hợp lệ!');
		return false;
	}
	else {
		setSuccessFor(hoten);
	}

	if(emailValue === "") {
		setErrorFor(email, 'Email không được để trống');
		return false;
	} else if(StringMatch(email, check_email) == false){
		setErrorFor(email, 'Email không không hợp lệ');
		return false;
	} else {
		setSuccessFor(email);
	}

	if(sdtValue === "") {
		setErrorFor(sdt, 'Số điện thoại không được để trống');
		return false;
	} else if(StringMatch(sdt, check_sdt) == false){
		setErrorFor(sdt, 'Số điện thoại không hợp lệ');
		return false;
	} else {
		setSuccessFor(sdt);
	}

	if(passwordValue === "") {
		setErrorFor(password, 'Mật khẩu không được để trống');
		return false;
	} else if(passwordValue.length < 6) {
		setErrorFor(password, 'Mật khẩu quá ngắn < 6');
		return false;
	} else {
		setSuccessFor(password);
	}

	if(cpasswordValue === "") {
		setErrorFor(cpassword, 'Xác nhận mật khẩu không được để trống');
		return false;
	} else if (cpasswordValue !== passwordValue){
		setErrorFor(cpassword, 'Mật khẩu không trùng khớp');
		return false;
	} else  {
		setSuccessFor(cpassword);
	}
	return true;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');

	small.innerText = message;

	formControl.className = 'form-control error';
}

function setSuccessFor(input) {
	const formControl = input.parentElement;	
	formControl.className = 'form-control success'
}

function StringMatch(txt, reg)
{
	return reg.test(txt.value);
}