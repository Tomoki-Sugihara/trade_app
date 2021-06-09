const handler = (req, res) => {
  fetch('https://github.com/Tomoki-Sugihara').then(console.log)
  res.status(200).json({ text: 'Hello' })
  res.end()
}

// eslint-disable-next-line import/no-default-export
export default handler
