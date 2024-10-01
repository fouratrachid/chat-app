export default function errorHandler(err, req, res, next) {
    console.error(err.stack);

    if (err.code === '23505') {
        return res.status(409).json({
            message: 'A resource with that data already exists.'
        });
    }

    res.status(500).json({
        message: 'Something went wrong!'
    });
}