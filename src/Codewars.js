import React from 'react';

function Codewars(props) {


    function scramble(str1, str2) {

        const arr1 = str1.split('');
        const arr2 = str2.split('');

        const newArr = [];

        for(let i = 0; i < arr2.length; i ++){
            if(arr2[i] == arr1.filter(item => item)){
                newArr.push(arr2[i]);
                console.log([3,4,5,3].splice(1))
            }

        }

        console.log(arr1);
        console.log(arr2);
        console.log("sdaf", newArr)
    }

    scramble('katas', 'steak')

    return (


        <div></div>
    );
}

export default Codewars;