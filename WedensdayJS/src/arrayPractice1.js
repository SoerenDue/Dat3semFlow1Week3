/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// a)
var boys = ["Peter", "Lars", "Ole"];
var girls = ["Janne", "Hanna", "Sanne"];

// b)
var all = boys.concat(girls);
console.log(all);

// c)
console.log(all.join());
console.log(all.join('-'));

// d)
girls.push("Lone", "Gitte");
console.log(girls);

// e)
boys.unshift("Hans","Kurt");
console.log(boys);

// f)
console.log(boys.shift());
console.log(boys);

// g)
console.log(girls.pop());
console.log(girls);

// h)
all.splice(2,2);
console.log(all);

// i)
all.reverse();
console.log(all);

// j)
