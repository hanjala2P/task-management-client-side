const globalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = err.message || "Something went wrong!";
    let error = err;
    res.status(statusCode).json({
        success: false,
        message,
        error,
    });
};
export default globalErrorHandler;
