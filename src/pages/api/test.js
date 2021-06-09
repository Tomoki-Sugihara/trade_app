const handler = (req, res) => {
  res.status(200).json({ text: 'Hello' })
  res.end()
}

// eslint-disable-next-line import/no-default-export
export default handler
