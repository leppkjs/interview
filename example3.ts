/**
 * Example Case 3
 *
 * 비용를 출력하는 코드이다.
 * 식사타입 비용코드는 비용한도가 정해져 있고(저녁 2만원, 아침 1만원) 전체 비용에서 식사비용만 별도로 출력한다.
 *
 * CheckPoint
 * - 클린코드 관점에서 컨벤션 준수 (함수 크기, 중복 등)
 * - switch(if else)문을 제거, 새로운 case, if 문이 추가 되었을때?
 * - 새로운 비지니스 규칙이 추가 되었을때 (확장 관점에서)
 * - 비지니스 로직(비용 계산 로직) 과 메시지 출력 로직이 섰여 있다.
 */

export enum Type {
    DINNER,
    BREAKFAST,
    CAR_RENTAL
}

interface Expense {
    type: Type;
    amount: number;
}

export class ExpenseReporter {
    private expenses: Array<Expense> = [];

    public printReport() {
        let total: number = 0;
        let mealExpenses = 0;

        for (const expense of this.expenses) {
            if (expense.type === Type.BREAKFAST || expense.type === Type.DINNER) {
                mealExpenses += expense.amount;
            }

            let name: string = 'TILT';
            switch (expense.type) {
                case Type.DINNER:
                    name = "Dinner";
                    break;
                case Type.BREAKFAST:
                    name = "Breakfast";
                    break;
                case Type.CAR_RENTAL:
                    name = "Car Rental";
                    break;
            }

            console.log(`비용 : ${name}, 금액: ${expense.amount / 1000.0}, 비고: ${(expense.type === Type.DINNER && expense.amount > 20000) || (expense.type === Type.BREAKFAST && expense.amount > 10000) ? '비용초과' : ''}`);
            total += expense.amount;
        }

        console.log(`Meal expenses ${mealExpenses / 1000.0}`);
        console.log(`Total ${total / 1000.0}`);
    }
}