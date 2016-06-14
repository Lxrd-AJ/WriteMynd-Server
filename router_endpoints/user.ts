import * as Ex from 'express';

import {BlockedUser,IBlockedUser} from './../models/blocked_user';

export module UserHandler {
    export function blockUser(req: Ex.Request, res: Ex.Response) {
        const id = req.body.userID;
        BlockedUser.update({ userID: id }, { $set: { userID: id } }, { upsert: true }).exec().then((result) => {
            res.status(200).send("Ok");
        })
    }

    export function isUserBlocked(req: Ex.Request, res: Ex.Response) {
        const id = req.query.userID
        console.log("UserID " + id);
        BlockedUser.findOne({ userID: id }).exec().then((result) => {
            if (result) { res.status(200).json({ "result": true }) }
            else{ res.status(200).json({ "result":false }) }
        })
    }
}