const createStatementData = (invoice, plays) => {
    const playFor = aPerformance => plays[aPerformance.playID]
    const enrichPerformance = aPerformance => {
        const result = {...aPerformance}
        result.play = playFor(result)
        result.amount = amountFor(result)
        result.volumeCredits = volumeCreditsFor(result)
        return result
    };
    const amountFor = (aPerformance) => {
        let result = 0
        switch (aPerformance.play.type) {
            case 'tragedy': { //비극
                result = 40000
                if (aPerformance.audience > 30) result += 1000 * (aPerformance.audience - 30)
                break
            }
            case 'comedy': { //희극
                result = 30000
                if (aPerformance.audience > 20) result += 10000 + 500 * (aPerformance.audience - 20)
                result += 300 * aPerformance.audience
                break
            }
            default:
                throw new Error(`알 수 없는 장르: ${aPerformance.play.type}`)
        }
        return result;
    }
    const volumeCreditsFor = aPerformance => {
        let result = 0 //적립포인트
        //포인트를 적립한다.
        result += Math.max(aPerformance.audience - 30, 0)
        //희극 관객 5명마다 추가 포인트를 제공한다.
        if (aPerformance.play.type === 'comedy') result += Math.floor(aPerformance.audience / 5)
        return result
    }

    const totalAmount = performances => performances.reduce((total, p) => total + p.amount, 0)
    const totalVolumeCredits = performances => performances.reduce((total, p) => total + p.volumeCredits, 0)
    const enrichedPerformances = invoice.performances.map(enrichPerformance)
    const statementData = {
        customer: invoice.customer,
        performances: enrichedPerformances,
        totalAmount: totalAmount(enrichedPerformances),
        totalVolumeCredits: totalVolumeCredits(enrichedPerformances),
    }
    return statementData;
};

export default createStatementData