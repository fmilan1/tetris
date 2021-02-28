let size = 20;
let canWidth = size * 14;
let canHeight = size * 30;
let coordinates = [];
let x;
let y;
let currentBlock = "";
let blocks = ["L", "J", "I", "O", "S", "T", "Z"];
let row = 28;
let col = 12;
const EMPTY = 0;
const BLOCK = 1;
let tetromino;
let msSpeed = 500;


function setup()
{
    createCanvas(canWidth, canHeight);
    for (let i = 0; i < row * col; i++)
    {
            coordinates[i] = " ";
    }
    for (let i = 0; i < col; i++)
    {
        coordinates[i] = "X";
    }
    for (let i = 0; i < col; i++)
    {
        coordinates[i + row * col - col] = "X";
    }

    for (let i = 0; i < row; i++)
    {
        coordinates[i * col] = "X";
    }
    for (let i = 0; i < row; i++)
    {
        coordinates[i * col + (col - 1)] = "X";
    }

    if (currentBlock == "I")
    {
        x -= size;
    }
    d = millis();
    newBlock();
}

function draw()
{
    background(220);
    let newNeeded = false;
    update();
    for (let i = 0; i < 4; i++)
    {
        for (let j = 0; j < 4; j++)
        {
            if (tetromino.arr[tetromino.idx][i][j] == BLOCK)
            {
                rect(x + j * size, y + i * size, size, size);
                let idx = (y + i * size - size) / size * col + (x + j * size - size) / size;
                if (coordinates[idx + col] != " ")
                {
                    newNeeded = true;
                    for (let k = 0; k < 4; k++)
                    {
                        for (let l = 0; l < 4; l++)
                        {
                            if (tetromino.arr[tetromino.idx][k][l] == BLOCK) 
                            {
                                idx = (y + k * size - size) / size * col + (x + l * size - size) / size;
                                coordinates[idx] = currentBlock;
                                
                            }
                            
                        }
                    }
                }
            }
        }
    }
    if (newNeeded)
    {
        newBlock();
    }
    table();
}

function keyPressed()
{
    if (keyCode === LEFT_ARROW)
    {
        let canMoveLeft = true;
        for (let i = 0; i < 4; i++)
        {
            for (let j = 0; j < 4; j++)
            {
                if (tetromino.arr[tetromino.idx][i][j] == BLOCK)
                {
                    let idx = (y + i * size - size) / size * col + (x + j * size - size) / size;
                    if (coordinates[idx - 1] != " ")
                    {
                        canMoveLeft = false;
                    }
                }
            }
        }
        if (canMoveLeft) { x -= size; }
    }
    else if (keyCode === RIGHT_ARROW)
    {
        let canMoveRight = true;
        for (let i = 0; i < 4; i++)
        {
            for (let j = 0; j < 4; j++)
            {
                if (tetromino.arr[tetromino.idx][i][j] == BLOCK)
                {
                    let idx = (y + i * size - size) / size * col + (x + j * size - size) / size;
                    if (coordinates[idx + 1] != " ")
                    {
                        canMoveRight = false;
                    }
                }
            }
        }
        if (canMoveRight) { x += size; }
    }
    else if (keyCode === UP_ARROW)
    {
        tetromino.idx++;
        if (tetromino.idx >= tetromino.arr.length)
        {
            tetromino.idx = 0;
        }
    }
    else if (keyCode === DOWN_ARROW)
    {
        y+=size;
    }
}

function update()
{
    if (currentBlock == "I") { fill(72, 219, 251); }
    else if (currentBlock == "J") { fill(6, 82, 221); }
    else if (currentBlock == "L") { fill(238, 90, 36); }
    else if (currentBlock == "O") { fill(255, 242, 0); }
    else if (currentBlock == "T") { fill(142, 68, 173); }
    else if (currentBlock == "S") { fill(46, 213, 115); }
    else if (currentBlock == "Z") { fill(255, 71, 87); }
    if (Math.abs(millis() - d) >= msSpeed)
    {
        y += size;
        d = millis();
        deleteLine();
    }
}

function newBlock()
{
    x = size * 6;
    y = 2 * size;
    currentBlock = random(blocks);
    if (currentBlock == "I")
    {
        tetromino = new TetrominoI();
        x -= size;
        y -= size;
    }
    else if (currentBlock == "J") { tetromino = new TetrominoJ(); }
    else if (currentBlock == "L") { tetromino = new TetrominoL(); }
    else if (currentBlock == "O") { tetromino = new TetrominoO(); }
    else if (currentBlock == "T")
    { 
        y += size;
        tetromino = new TetrominoT(); 
    }
    else if (currentBlock == "S") { tetromino = new TetrominoS(); }
    else if (currentBlock == "Z") { tetromino = new TetrominoZ(); }
}

function table()
{
    fill(255);
    for (let i = 0; i < coordinates.length; i++)
    {
        let y2 = Math.floor(i / col);
        let x2 = (i - col * y2) * size + size;
        y2 = y2 * size + size;
        if (coordinates[i] == "X") 
        {
            fill(255);
            rect(x2, y2, size, size);
        }
        else if (coordinates[i] == "Z")
        {
            fill(255, 71, 87);
            rect(x2, y2, size, size);
        }
        else if (coordinates[i] == "S")
        {
            fill(46, 213, 115);
            rect(x2, y2, size, size);
        }
        else if (coordinates[i] == "O")
        {
            fill(255, 242, 0);
            rect(x2, y2, size, size);
        }
        else if (coordinates[i] == "T")
        {
            fill(142, 68, 173);
            rect(x2, y2, size, size);
        }
        else if (coordinates[i] == "L")
        {
            fill(238, 90, 36);
            rect(x2, y2, size, size);
        }
        else if (coordinates[i] == "J")
        {
            fill(6, 82, 221);
            rect(x2, y2, size, size);
        }
        else if (coordinates[i] == "I")
        {
            fill(72, 219, 251);
            rect(x2, y2, size, size);
        }
    }
    
    
}

function deleteLine()
{
    for (let i = row - 1; i >= 1; i--)
    {
        let c = 0;
        for (let j = 1; j <= col - 2; j++)
        {
            text()
            if (coordinates[i * col + j] != " " && coordinates[i * col + j] != "X")
            {
                c++;
            }
        }
        if (c == col - 2)
        {
            for (let k = i - 1; k >= 1; k--)
            {
                for (let l = 1; l <= col - 2; l++)
                {
                    textSize(24);
                    fill(220)
                    rect(0, 0, 100, 15);
                    fill(0);
                    text(k + " " + c, 10, 15);
                    if (coordinates[(k + 1) * col + l] != "X")
                    {
                        coordinates[(k + 1) * col + l] = coordinates[k * col + l];

                    }
                }
            }
        }
    }
}