//Assignment 1
function getSolutions(a, b, c) {
    let roots = [];
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        return {D: D, roots: roots};
    } else if (D == 0) {
        let x1 = -b / (2 * a);
        let roots = [x1];
        return {D: D, roots: roots}
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        let roots = [x1, x2];
        return {D: D, roots: roots}
    }
}

function showSolutionsMessage (a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни вадратного уравнения ${a}² + ${b}x + ${c}`);
    console.log(`Значение дискременанта ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней.`);
    }
    else if (result.D == 0) {
        console.log(`Уравнение имеет один корень: X₁ = ${result.roots}`);
    }
    else {
        console.log(`Уравнение имеет два корня: X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage(4, 20, -3)


//Assignmen 2
function getAverageScore(data) {
    let value = new Object();
    for (let prop in data) {
        value[prop] = getAverageMark(data[prop]);
    }
    let averageSum = 0;
    let propSum = 0;
    for (let prop in value) {
        averageSum += value[prop];
        propSum++;
    }
    let averageScore = averageSum / propSum;
    let averageProp;
    value[averageProp] = averageScore;
    return value;
}

function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let result = sum / marks.length;
    return result;
}

console.log(
    getAverageScore({
        algebra: [ 5, 5, 4, 3, 2],
        geometry: [ 2, 3, 5, 4, 5, 3, 4],
        russian: [ 5, 5, 5, 5 ],
        physics: [ 5, 4, 3, 5, 4, 3],
        music: [ 5, 5, 5],
        english: [ 5, 5],
        poetry: [ 4, 4, 5, 5],
        chemistry: [5, 4, 2, 5, 5, 3, 4, 4],
        french: [ 3, 5]
    })
);
