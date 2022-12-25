import React from 'react';

function Codewars(props) {


    let uniqueInOrder = function (iterable) {

        let newArr;
        if (Array.isArray(iterable)) {
            newArr = iterable
        } else {
            newArr = iterable.split('')
        }

        console.log("ddd", newArr);

    }

    uniqueInOrder('AAAABBBCCDAABBB')
    return (


        <div></div>
    );
}

export default Codewars;