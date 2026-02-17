export class Financing{
    constructor(
        public id: number,
        public dealID: number,
        public downPayment: number,
        public interestRate: number,
        public totalValue: number,
        public totalMonth: 12 | 24 | 36 | 48 | 60,
        public typeOfFinancingTable: "PRICE" | "SAC"
    ){

    }




public calculateInstallmentByPriceTable(): number{
   const financingValue = this.totalValue - this.downPayment
    const i = this.interestRate
    const n = this.totalMonth
   const numerator = financingValue * 1 * (1 + i) ** n
   const denominator = (1+ i) ** n - 1
    return numerator / denominator
}

public calculateInstallmentBySacTable(): number[]{
    const PV = this.totalValue - this.downPayment
    const i = this.interestRate
    const n = this.totalMonth
    
    const amortization = PV / n
    const installments: number[] = []

    for(let k = 1; k <= n ; k++){
        const interest = (PV - (k-1) * amortization) * i
        const installment = amortization + interest
        installments.push(installment)
    }
    return installments
}






}