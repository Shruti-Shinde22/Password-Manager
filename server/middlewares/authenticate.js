// const jwt = require('jsonwebtoken');
// const User = require("../models/schema");
// const { decrypt } = require("../models/EncDecManager");

// const authenticate = async (req, res, next) =>
// {
//     try
//     {
//         const token = req.cookies.jwtoken;
//         const verify = jwt.verify(token, process.env.SECRET_KEY);

//         var rootUser = await User.findOne({ _id: verify._id, "tokens.token": token });

//         if (!rootUser)
//         {
//             throw new Error("User now found");
//         }

//         req.token = token;
//         req.rootUser = rootUser;
//         req.userId = rootUser._id;

//         next();
//     }
//     catch (error)
//     {
//         res.status(400).json({error: "Unauthorised user."})
//         console.log(">>>>>>>>>>>>>>>>>>>",error);
//     }
    
// };


// module.exports = authenticate;


const jwt = require('jsonwebtoken');
const User = require("../models/schema");
const { decrypt } = require("../models/EncDecManager");

const authenticate = async (req, res, next) =>
{
    try
    {
        const token = req.cookies.jwtoken;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized: Missing token" });
        }

        const verify = jwt.verify(token, process.env.SECRET_KEY);

        var rootUser = await User.findOne({ _id: verify._id, "tokens.token": token });

        if (!rootUser)
        {
            return res.status(401).json({ error: "Unauthorized: User not found" });
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;

        next();
    }
    catch (error)
    {
        console.error("Authentication error:", error);
        res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
};

module.exports = authenticate;
