import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const jwtTokens=(user)=>{
    const accessToken=jwt.sign({
        email:user.email,
        password:user.password
    },process.env.ACCESS_TOKEN_SECRET,{expiresIn:'15m'})

    const refreshToken=jwt.sign({
        email:user.email,
        password:user.password
    },process.env.REFRESH_TOKEN_SECRET)

    return {accessToken,refreshToken}
}