const prog = [
    {
        language: "JavaScript",
        lanFileName : "js"
    },
    {
        language: "C++",
        lanFileName : "cpp"
    },
    {
        language: "Python",
        lanFileName : "py"
    },
    {
        language: "Java",
        lanFileName : "java"
    }
]
prog.forEach(item => {
    console.log(`Language name = ${item.language} and file name is ${item.lanFileName}`)
});