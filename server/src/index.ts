import express, { Express, Request, Response } from 'express';
import * as mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import {
    Profile,
    Strategy as GoogleStrategy,
    VerifyCallback,
} from 'passport-google-oauth20';


dotenv.config();

const app: Express               = express();
const mongodbConnectData: string = `${ process.env.MONGODB_START }${ process.env.MONGODB_USERNAME }:${ process.env.MONGODB_PASSWORD }${ process.env.MONGODB_END }`;

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(cookieParser());
app.use(
    session({
        secret           : 'secret',
        resave           : true,
        saveUninitialized: true,
    }),
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb) => {
    return cb(null, user);
});

passport.deserializeUser((user, cb) => {
    return cb(null, user);
});

passport.use(
    new GoogleStrategy({
        clientID    : process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL : 'http://localhost:3000/auth/google/callback',
    }, (accessToken: string, refreshToken: string, profile: Profile, cb: VerifyCallback) => {
        console.log(profile);
        cb(null, profile);
    }),
);

mongoose.connect(mongodbConnectData)
    .then(() => console.log('[MongoDB] Connected'))
    .catch((e) => console.log('[MongoDB] Connection error', e));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world');
});

app.get('/auth/google', passport.authenticate('google', { scope: [ 'profile' ] }));
app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req: Request, res: Response) => {
        res.redirect('http://localhost:5173');
    },
);

app.listen(3000, () => console.log('[Server] Started'));