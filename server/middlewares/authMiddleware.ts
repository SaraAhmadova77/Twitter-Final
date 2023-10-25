import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
    const userToken = req.headers.authorization?.split(' ')[1]
    if (!userToken) return res.status(400).json({ err: 'Token is missing!' })
    jwt.verify(userToken, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ err: 'Token is wrong!' })
        } else {
            req.userId = user.id
            next()
        }
    })
}