/// <reference path="modules/calculator.ts"/>

class App {
    start(message: string, element: HTMLElement) {
        element.innerText = message;
    }

    compute() {
        var calculator = new Calculator();
        return calculator.add(15, 20).toString();
    }
}

function start() {
    var app = new App();
    app.start(app.compute(), document.getElementById('message'));
}
