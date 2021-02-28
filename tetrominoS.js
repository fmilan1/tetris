class TetrominoS extends Tetromino
{
    constructor ()
    {
        super();
        this.idx = 0;

        this.arr = [
            [
                [EMPTY, EMPTY, EMPTY, EMPTY],
                [EMPTY, BLOCK, BLOCK, EMPTY],
                [BLOCK, BLOCK, EMPTY, EMPTY],
                [EMPTY, EMPTY, EMPTY, EMPTY],
            ]
            ,
            [
                [BLOCK, EMPTY, EMPTY, EMPTY],
                [BLOCK, BLOCK, EMPTY, EMPTY],
                [EMPTY, BLOCK, EMPTY, EMPTY],
                [EMPTY, EMPTY, EMPTY, EMPTY],
            ]
        ];
    }
}