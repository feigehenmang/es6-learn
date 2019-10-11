module.exports = function () {
    return {
        visitor: {
            Identifier(path) {
                console.log(path.node.name);
                const name = path.node.name;
                // reverse the name: JavaScript -> tpircSavaJ
                path.node.name = name
                    .split("")
                    .reverse()
                    .join("");
            },
        },
    };
}