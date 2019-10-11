const f = () => {
    console.log("惰性求值开始");
    return {
        a: 1
    }
};

const [x = f()] = [];
console.log("a");
console.log(x);