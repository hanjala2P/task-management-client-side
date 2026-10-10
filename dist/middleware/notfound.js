const notFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: "API Not Found!",
        error: {
            path: req.originalUrl,
            message: "The requested route does not exist.",
        },
    });
};
export default notFound;
