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


function test(fruit: string, quantity: number) {
    var q = quantity || 1;

    // condition 1: fruit must has value
    if (fruit) {
        // condition 2: must be red
        if (fruit == 'apple' || fruit == 'strawberry' || fruit == 'cherry' || fruit == 'cranberries') {
            console.log('red');

            // condition 3: must be big quantity
            if (q > 100) {
                console.log('big quantity');
            }

        } else {
            console.log('untreated fruit');
        }

    } else {
        throw new Error('No fruit!');
    }
}

// test results
test(null); // error: No fruits
test('banana'); // print: untreated fruit
test('apple'); // print: red
test('apple', 20); // print: red, big quantity