import { NextApiRequest, NextApiResponse } from 'next'
// import {  } from '@/fakeData/problem'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    // const lab = fakeLabs.find(({ labId }) => labId === id)
    res.status(200).json('Not finished')
}
