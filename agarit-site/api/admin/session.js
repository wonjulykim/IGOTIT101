import { isAdminAuthed } from '../_auth.js'

export default async function handler(req, res) {
  res.status(200).json({ loggedIn: isAdminAuthed(req) })
}
