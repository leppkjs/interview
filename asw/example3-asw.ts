export enum Type {
    DINNER,
    BREAKFAST,
    CAR_RENTAL
};

interface Expense {
    type: Type;
    amount: number;
};

export interface ReportPrinter {
    print(text: string): void;
};

export class ExpenseReporter {
    private readonly expenseReport: ExpenseReport = new ExpenseReport();
    private printer: ReportPrinter;

    constructor() {
        this.expenseReport.total = 0;
        this.expenseReport.mealExpenses = 0;
    }

    public printReport(printer: ReportPrinter): void {
        this.printer = printer;
        this.expenseReport.totalUpExpenses();
        this.printExpensesAndTotals();
    }

    private printExpensesAndTotals(): void {
        this.printExpenses();
        this.printTotals();
    }

    private printExpenses(): void {
        for (const expense of this.expenseReport.expenses)
            this.printExpense(expense);
    }

    private printExpense(expense: Expense): void {
        console.log(`비용 : ${expense.getName(expense)}, 금액: ${this.penniesToCutting(expense.amount)}, 비고: ${expense.isOverage() ? '비용초과' : ''}`);
    }

    private printTotals(): void {
        this.printer.print(`\nMeal expenses ${this.penniesToCutting(this.expenseReport.mealExpenses)}`);
        this.printer.print(`\nTotal ${this.penniesToCutting(this.expenseReport.total)}`);
    }

    private penniesToCutting(amount: number): number {
        return amount / 1000.0;
    }

    public addExpense(expense: Expense): void {
        this.expenseReport.addExpense(expense);
    }
};

export class ExpenseReport {
    expenses: Array<Expense> = [];
    total: number;
    mealExpenses: number;

    constructor() {
    }

    totalUpExpenses(): void {
        for (const expense of this.expenses)
            this.addTotals(expense);
    }

    addTotals(expense: Expense): void {
        if (expense.isMeal())
            this.mealExpenses += expense.amount;
        this.total += expense.amount;
    }

    public addExpense(expense: Expense): void {
        this.expenses.push(expense);
    }
};

export abstract class Expense {
    public type: Type;
    public amount: number;

    constructor(type: Type, amount: number) {
        this.type = type;
        this.amount = amount;
    }

    abstract getName();

    abstract isOverage(): boolean;

    abstract isMeal(): boolean;
};

export class DinnerExpense extends Expense {
    public amount: number;

    constructor(amount: number) {
        super(Type.DINNER, amount);
        this.amount = amount;
    }

    public getName(): string {
        return 'Dinner';
    }

    public isOverage(): boolean {
        return this.amount > 20000;
    }

    public isMeal(): boolean {
        return true;
    }
};

export class BreakfastExpense extends Expense {
    public amount: number;

    constructor(amount: number) {
        super(Type.BREAKFAST, amount);
        this.amount = amount;
    }

    public getName(): string {
        return 'Breakfast';
    }

    public isOverage(): boolean {
        return this.amount > 10000;
    }

    public isMeal(): boolean {
        return true;
    }
};

export class CarRentalExpense extends Expense {
    public amount: number;

    constructor(amount: number) {
        super(Type.CAR_RENTAL, amount);
        this.amount = amount;
    }

    public getName(): string {
        return 'Car Rental';
    }

    public isOverage(): boolean {
        return false;
    }

    public isMeal(): boolean {
        return false;
    }
};
