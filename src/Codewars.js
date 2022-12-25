import React from 'react';

function Codewars(props) {

    /*const value2 = [1, 2, 3, 1, 2, 1, 2, 3, 2];
    const value3 = value2.filter((item, i) => item == 2).length;
    console.log("ddd", value3)*/

    function deleteNth(arr, n) {

        const array = [];
        for (let i = 0; i < arr.length; i++) {

             let value = arr.filter(item => item ==  array[i]).length;

            console.log("sss", value);

            if (value < n) {
                array.push(arr[i]);

            }

        }
        console.log(array)

        }


    deleteNth([4, 1, 2, 3, 1, 2, 1, 2, 3, 2], 2);


    return (


        <div></div>
    );
}

export default Codewars;