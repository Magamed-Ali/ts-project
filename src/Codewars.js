import React from 'react';

function Codewars(props) {

    /*const value2 = [1, 2, 3, 1, 2, 1, 2, 3, 2];
    const value3 = value2.filter((item, i) => item == 2).length;
    console.log("ddd", value3)*/

    function deleteNth(arr, n) {

        let arr3 = []

        for (let i = 0; i < arr.length; i++) {

            let aa = arr3.filter(item => item == arr[i]).length;

            if (aa < n) {
                arr3.push(arr[i])
            }

        }

        return console.log(arr3)

    }


    deleteNth([4, 1, 2, 3, 1, 2, 1, 2, 3, 2], 2);


    return (


        <div></div>
    );
}

export default Codewars;