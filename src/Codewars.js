import React from 'react';

function Codewars(props) {

    function solution(string) {
        const array = string.split('');
        let newarr = '';

          array.map(item => {
            if(item.toUpperCase() == item){
               return  newarr =  newarr + " " + item
            }else {
                return newarr = newarr + item

            }
        })

    }

    solution('stЕing')

    return (



        <div></div>
    );
}

export default Codewars;