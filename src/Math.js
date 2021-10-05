// ES6 module
class Math {

    add(a, b) {
        var c = a + b;
        console.log(c);
        return c;
    }
}

export const PI = 3.14;

// only one export default
export default Math;
