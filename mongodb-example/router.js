module.exports = (app, Board) => {
    app.post('/board', (req, res) => {
        const board = new Board();
        board.title = req.body.title;
        board.body = req.body.body;

        //mongodb method
        board.save((err) => {
            if(err) return res.json({success: false, err})
            return res.status(200).json({
                success: true,
            })
        });
    });
}
