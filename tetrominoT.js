﻿class TetrominoT extends Tetromino
{
    constructor ()
    {
        super();
        this.idx = 0;

        this.arr = [
            [
                [EMPTY, BLOCK, EMPTY, EMPTY],
                [BLOCK, BLOCK, BLOCK, EMPTY],
                [EMPTY, EMPTY, EMPTY, EMPTY],
                [EMPTY, EMPTY, EMPTY, EMPTY],
            ]
            ,
            [
                [EMPTY, BLOCK, EMPTY, EMPTY],
                [EMPTY, BLOCK, BLOCK, EMPTY],
                [EMPTY, BLOCK, EMPTY, EMPTY],
                [EMPTY, EMPTY, EMPTY, EMPTY],
            ]
            ,
            [
                [EMPTY, EMPTY, EMPTY, EMPTY],
                [BLOCK, BLOCK, BLOCK, EMPTY],
                [EMPTY, BLOCK, EMPTY, EMPTY],
                [EMPTY, EMPTY, EMPTY, EMPTY],
            ]
            ,
            [
                [EMPTY, BLOCK, EMPTY, EMPTY],
                [BLOCK, BLOCK, EMPTY, EMPTY],
                [EMPTY, BLOCK, EMPTY, EMPTY],
                [EMPTY, EMPTY, EMPTY, EMPTY],
            ]
        ];
    }
    fillTetromino()
    {
        fill(142, 68, 173);
    }
}