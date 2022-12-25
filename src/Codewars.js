import React from 'react';

function Codewars(props) {


    let uniqueInOrder = function (iterable) {

        let newArr;
        if (Array.isArray(iterable)) {
            newArr = iterable
        } else {
            newArr = iterable.split('')
        }


        let arr = [];
        for (let i = 0; i < newArr.length; i++) {
            console.log(i)
            if (newArr[i] != newArr[i + 1]) {
                arr.push(newArr[i])
            }
        }
        return arr
    }

    uniqueInOrder('AAAABBBCCDAABBB')
    uniqueInOrder([1,2,2,3,3])
    return (


        <div></div>
    );
}

export default Codewars;