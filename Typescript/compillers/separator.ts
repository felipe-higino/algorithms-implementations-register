const textToSplit =
    `int x= 3;
    x++; x+3;
    print(x);
    int foo(char data){
        print(data);
        return 7;
    }`

const regxStr =
    " "
    + "|" + ";"
    + "|" + "\\n"
    + "|" + "\\("
    + "|" + "\\)"
    + "|" + "\["
    + "|" + "\]"
    + "|" + "\{"
    + "|" + "\}"
    + "|" + "\\+"
    + "|" + "\\-"
    + "|" + "\\/"
    + "|" + "\\*"
    + "|" + "\\%"
    + "|" + "\\="
const regex = new RegExp(`(${regxStr})`)

function getToken(text: string)
{
    const result =
        text
            .split(regex)
            .filter(x =>
            {
                const ignore = x == '' || x == ' ' || x == '\n'
                return !ignore
            })

    return result
}

console.log(getToken(textToSplit))