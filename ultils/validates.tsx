export const validateName = (name: string) => {
  if (name.length <= 20) {
    alert("Tên phải lớn hơn 20");
    return false;
  }
  return true;
};
export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email)) {
    return true;
  } else {
    alert("Email không đúng cú pháp");
    return false;
  }
};

export const validatePassWord = (password: string) => {
  if (password.length < 8) {
    alert("Mật khẩu phải lớn hơn hoặc bằng 8");
    return false;
  }
  return true;
};

export const validateCheckBoxRules = (isChecked: boolean) => {
  if (isChecked === false) {
    alert("Bạn chưa đồng ý với điều khoản của chúng tôi!");
    return false;
  } else if (isChecked === true) {
    return true;
  } else {
    return false;
  }
};

// cách 2
// export const validateCheckBoxRules = (isChecked : boolean) => {
//   if(!isChecked) {
//     alert("Bạn chưa đồng ý với điều khoản của chúng tôi!")
//     return false;
//   }
//   return true;
// }
