// Dimensions of cells, path and grid
const cellw = 130; // width/height of each cell
const gapw = 20;   // width/height between cells
const gridn = 4;   // no. of cells in x direction
const gridm = 3;   // no. of cells in y direction

// plots
const plotnm = [ [4,1], [2,2], [2,2] ];
let plotval = [ 0, 0, 0 ];

const draww = cellw*gridn + gapw*(gridn+1);
const drawh = cellw*gridm + gapw*(gridm+1);

const draw = SVG().addTo('body').size(draww, drawh);
const group = draw.group();

let cells = [];
let texts = [];
let cursorxy = [gapw,gapw];
for (let k=0; k<plotnm.length; k++) {
    const n = plotnm[k][0];
    const m = plotnm[k][1];
    const rectw = n*cellw + (n-1)*gapw;
    const recth = m*cellw + (m-1)*gapw;

    cells[k] = draw.rect(rectw,recth).
        x(cursorxy[0]).y(cursorxy[1]).
        fill('#ffffff').stroke('#000000');
    group.add(cells[k]);
    texts[k] = draw.plain(plotval[k]).
        font({anchor: 'middle', size: 30, family: 'Helvetica'}).
        move(cursorxy[0]+gapw, cursorxy[1]+gapw);
    group.add(texts[k]);
    cells[k].click(() => {
        plotval[k]++;
        texts[k].clear().plain(plotval[k]);
    });

    cursorxy[0] += (rectw + gapw);
    if (cursorxy[0] >= draww) {
        cursorxy[0] = gapw;
        cursorxy[1] += (recth + gapw);
    }
    if (cursorxy[1] >= drawh) {
        break;
    }
}
