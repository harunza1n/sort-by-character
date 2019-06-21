function sortByCharacter (text) 
{
//   var arr = text.split('')
//   var temp
//   for ( var i = 0; i < arr.length; i++)
//   {
//     for (var j = i + 1; j < arr.length; j++)
//     {
//       if(arr[i] > arr[j])
//       {
//         temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//       }
//     }
//   } return arr.join('')
// }

    var arr = text.split('')
    var sorting = arr.sort()
    return sorting.join('')
}

// TEST CASES
console.log(sortByCharacter('hello')); // 'ehllo'
console.log(sortByCharacter('truncate')); // 'acenrttu'
console.log(sortByCharacter('developer')); // 'deeeloprv'
console.log(sortByCharacter('software')); // 'aeforstw'
console.log(sortByCharacter('aegis')); // 'aegis'