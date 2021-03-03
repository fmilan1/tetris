class TetrominoO extends Tetromino
{
    constructor ()
    {
        super();
        this.idx = 0;

        this.arr = [
            [
                [EMPTY, EMPTY, EMPTY, EMPTY],
                [BLOCK, BLOCK, EMPTY, EMPTY],
                [BLOCK, BLOCK, EMPTY, EMPTY],
                [EMPTY, EMPTY, EMPTY, EMPTY],
            ]
        ];
    }
    fillTetromino()
    {
        fill(255, 242, 0);
    }
}