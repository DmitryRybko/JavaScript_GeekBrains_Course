function chessBoard(size) {
    let html = `<div class="chessboard">`;
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    for (let row = 0; row < size; row++) {
        html += `  <div>\n`;
        let color = (row % 2 == 0) ? "white" : "black";
        for (let col = 0; col < size; col++) {
            cellText = `${letters[col]}${row + 1}`
            html += `    <span id="${row + 1}${col + 1}" class="${color}">${cellText}</span>`;
            color = (color == "black") ? "white" : "black";
        }

        html += `</div>`;
    }
    return html + `</div>`;
}


function placePieces() {
    let piecesSet = {
        "БП": [71, 72, 73, 74, 75, 76, 77, 78],
        "БЛ": [81, 88],
        "БК": [82, 87],
        "БС": [83, 86],
        "БФ": [84],
        "БКОР": [85],
        "ЧП": [21, 22, 23, 24, 25, 26, 27, 28],
        "ЧЛ": [11, 18],
        "ЧК": [12, 17],
        "ЧС": [13, 16],
        "ЧФ": [14],
        "ЧКОР": [15]
    }

    for (let fig in piecesSet) {
        console.log(fig);
        console.log(piecesSet[fig]);

        for (let position in piecesSet[fig]) {
            console.log(piecesSet[fig][position]);
            let figure = document.getElementById(piecesSet[fig][position])
            figure.innerHTML += ` ${fig}`
        }
    }
}
