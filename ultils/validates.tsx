export const validateName = (name : string ) => {
    if (name.length <= 20){
        alert("Tên phải lớn hơn 20")
        return false;
    }
    return true;
};
export const validateEmail = (valueToValidate: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(valueToValidate)) {
      return true;
    } else {
      alert("Email không đúng cú pháp");
      return false;
    }
};
  
export const validatePassWord = (passWord: string) => {
    if (passWord.length < 8) {
      alert("Mật khẩu phải lớn hơn hoặc bằng 8");
      return false;
    }
    return true;
};