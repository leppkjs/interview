/**
 * Example Case 4
 *
 * 아래 코드는 과일이 빨간색인지 확인하고 정해진 수량 이상인지 판단하여 출력해 주는 코드이다.
 * - 과일은 앞으로 계속 추가될 예정이다.
 *
 * CheckPoint
 * - 클린코드 관점에서 컨벤션 준수
 * - 더 나은 조건문 처리 (적은 중첩 및 조기반환)
 * - ES6 문법을 적극 활용
 */

const TargetQuantity = 100;

// if quantity not provided, default to one
function checkRedFruitAndTargetQuantity(fruit: string = 'unknown', quantity: number = 1) {
    // extract conditions to array
    const redFruits: Array<string> = ['apple', 'strawberry', 'cherry', 'cranberries'];

    // condition 1: throw error early
    if (fruit === 'unknown')
        throw new Error('No fruit!');

    // condition 2: stop when fruit is not red
    if (!redFruits.includes(fruit)) {
        console.log('untreated fruit');
        return;
    }

    console.log('red');

    // condition 3: must be big quantity
    if (quantity > TargetQuantity) {
        console.log('big quantity');
    }

}

// test results
checkRedFruitAndTargetQuantity(null); // error: No fruits
checkRedFruitAndTargetQuantity('banana'); // print: untreated fruit
checkRedFruitAndTargetQuantity('apple'); // print: red
checkRedFruitAndTargetQuantity('apple', 200); // print: red, big quantity