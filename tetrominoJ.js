﻿class TetrominoJ extends Tetromino {
    constructor ()
    {
        super();
        this.idx = 0;

        this.arr = [
        [
            [EMPTY, EMPTY, EMPTY, EMPTY],
            [BLOCK, BLOCK, BLOCK, EMPTY],
            [EMPTY, EMPTY, BLOCK, EMPTY],
            [EMPTY, EMPTY, EMPTY, EMPTY],
        ]
    ,
        [
            [EMPTY, BLOCK, BLOCK, EMPTY],
            [EMPTY, BLOCK, EMPTY, EMPTY],
            [EMPTY, BLOCK, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY, EMPTY],
        ]
    ,
        [
            [BLOCK, EMPTY, EMPTY, EMPTY],
            [BLOCK, BLOCK, BLOCK, EMPTY],
            [EMPTY, EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY, EMPTY],
        ]
    ,
        [
            [EMPTY, BLOCK, EMPTY, EMPTY],
            [EMPTY, BLOCK, EMPTY, EMPTY],
            [BLOCK, BLOCK, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY, EMPTY],
        ]
        ];
    }
    fillTetromino()
    {
        fill(6, 82, 221);
    }
}