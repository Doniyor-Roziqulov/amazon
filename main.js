{
    // 1-misol

    function onlyNumbeers(array) {
        return array.filter((i) => parseInt(i) > 0);
    }
    // console.log(onlyNumbeers([-5, 6, 3, -3, false]));
    // console.log(onlyNumbeers([12, -4, 5, -6, 33, true]));
}

{
    // 2-misol
    function tenth(a) {
        return ((a % 100) - (a % 10)) / 10;
    }
    // console.log(tenth(123));
    // console.log(tenth(4568));
}

{
    // 3-misol
    function binary(a) {
        if (a === 1) {
            return true;
        } else if (a === 0) {
            return false;
        } else {
            return null;
        }
    }
    // console.log(binary(1));
    // console.log(binary(0));
    // console.log(binary(7));
}

{
    // 4-misol
    function card(str, b) {
        if (b === true) {
            return str;
        } else {
            return str.slice(0, 4) + " **** **** **" + str.slice(14, 16);
        }
    }
    // console.log(card("8600394949393989", true));
    // console.log(card("8600394949393989", false));
}

{
    // 5-misol
    function checkPassword(password) {
        if (
            password.length >= 8 &&
            password.match(/[0-9]/g) &&
            password.match(/[a-z]/g)
        ) {
            return true;
        } else {
            return false;
        }
    }
    // console.log(checkPassword("12345678"));
    // console.log(checkPassword("12345hello"));
}

{
    // 6-misol

    function camelCase(str) {
        return str
            .split("-")
            .map((word, i) => {
                if (i === 0) {
                    return word;
                } else {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                }
            })
            .join("");
    }
    // console.log(camelCase("kabab-case"));
    // console.log(camelCase("lorem-ipsum-dolor"));
}

{
    // 7-misol
    function bigAndSmall(str) {
        let array = str.split(" ").map(Number);
        return `${Math.max(...array)} ${Math.min(...array)}`;
    }
    // console.log(bigAndSmall("1 2 3 4 5"));
    // console.log(bigAndSmall("5 25 33 44"));
}
