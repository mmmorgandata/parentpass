// Vercel Serverless Function — translates a short text string via Claude API
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { text, context } = req.body
  if (!text?.trim()) return res.status(400).json({ error: 'Missing text' })

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return res.status(500).json({ error: 'API key not configured' })

  const prompts = {
    title:   `Translate this Chinese travel event title to concise English (5 words max). Return only the translation, no quotes or explanation: ${text}`,
    details: `Translate this Chinese travel detail/description to English. Return only the translation, no quotes: ${text}`,
    address: `Translate this Chinese place name or address to an English address string suitable for Google Maps search. Return only the English address string, no explanation: ${text}`,
  }

  const prompt = prompts[context] ?? `Translate to English. Return only the translation, no quotes: ${text}`

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 80,
      messages: [{ role: 'user', content: prompt }],
    }),
  })

  if (!response.ok) return res.status(502).json({ error: 'Translation service unavailable' })

  const data = await response.json()
  return res.status(200).json({ translation: data.content?.[0]?.text?.trim() ?? '' })
}
