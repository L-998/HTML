//alert("您的个人隐私不会有任何的泄露！");
let obj = {
    name:"刘宇航",
    age:55,
    fun:function () {
        alert("姓名：" +this.name+",年龄:" + this.age);
    }
};
//alert(obj.name);
function onloadFun() {
    alert("欢迎来到荷塘月色");
    //obj.fun();
}
window.onload = function () {
    alert("动态注册的onload事件");
}
function onclickFun() {
    alert("注册成功");
}

