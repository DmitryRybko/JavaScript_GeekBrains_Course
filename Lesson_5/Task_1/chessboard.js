function chessBoard(size) {
    let html = `<div class="chessboard">`;
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    for (let row = 0; row < size; row++) {
        html += `  <div>\n`;
        let color = (row % 2 == 0) ? "white" : "black";
        for (let col = 0; col < size; col++) {
            cellText = `${letters[col]}${row + 1}`
            html += `    <span class="${color}">${cellText}</span>`;
            color = (color == "black") ? "white" : "black";
        }

        html += `</div>`;
    }
    return html + `</div>`;
}