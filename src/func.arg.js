/* function func(arg){
    let arg = arg || {}; //  Identifier 'arg' has already been declared (2:8)
    console.log(arg);
} */
function func(arg) {
    {
        let arg = arg || {}; // 这儿已经读取不到父级同名变量了
        console.log(arg);
    }
};
