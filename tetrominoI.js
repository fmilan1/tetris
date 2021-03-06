﻿class TetrominoI extends Tetromino
{
    constructor ()
    {
        super();
        this.idx = 0;

        this.arr = [
            [
                [EMPTY, EMPTY, EMPTY, EMPTY],
                [EMPTY, EMPTY, EMPTY, EMPTY],
                [BLOCK, BLOCK, BLOCK, BLOCK],
                [EMPTY, EMPTY, EMPTY, EMPTY],
            ]
            ,
            [
                [EMPTY, EMPTY, BLOCK, EMPTY],
                [EMPTY, EMPTY, BLOCK, EMPTY],
                [EMPTY, EMPTY, BLOCK, EMPTY],
                [EMPTY, EMPTY, BLOCK, EMPTY],
            ]
        ];
    }
    fillTetromino()
    {
        fill(72, 219, 251);
    }
    
}