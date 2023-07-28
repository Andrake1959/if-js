let user = 'John Doe';

console.log(user);

let student = 'Andrey';

console.log(student);

user = student;

console.log(user);

console.log('-----------');

let test = 1;

test++;

test += '1';

console.log(test);

test -= 1;

console.log(test);

console.log(!!test);

console.log('-----------');

let array1 = [2, 3, 5, 8];

let result = 1;

for (let i = 0; i < array1.length; i++){
    result *= array1[i];
}

console.log(result);

console.log('-----------');

let array2 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < array2.length; i++) {
    if (array2[i] > 5 && array2[i] < 10) {
        console.log(array2[i]);
    };
};

console.log('-----------');

let array3 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < array3.length; i++) {
    if (array3[i]%2 === 0 && array3[i] !== 0){
        console.log(array3[i]);
    }
}