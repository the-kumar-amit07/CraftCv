const AsyncHandler = (requestHandler) => {
    return (req, res, nxt) => {
        Promise.resolve(requestHandler(req, res, nxt))
            .catch((error) => nxt(error))
    }
}
export {AsyncHandler}