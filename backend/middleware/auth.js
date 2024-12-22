import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if the Authorization header exists and starts with 'Bearer'
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            message: "Not authorized. Please login again."
        });
    }

    try {
        // Extract the token after 'Bearer '
        const token = authHeader.split(' ')[1];
        // Verify the token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        // Attach the userId and other user info to req.user for further use
        req.user = { id: decodedToken.id };  // You can attach more fields if needed
        next();
    } catch (error) {
        console.error("Token verification error:", error);
        res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};

export default authUser;
