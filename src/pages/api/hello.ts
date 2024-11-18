import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    res.status(200).json({ response: "Hello Awais this is an API endpoint" });
}