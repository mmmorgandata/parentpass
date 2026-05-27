// Vercel Serverless Function — proxies image to Claude API
// The API key stays server-side, never exposed to the client
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { base64, mediaType } = req.body
  if (!base64 || !mediaType) {
    return res.status(400).json({ error: 'Missing base64 or mediaType' })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' })
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: { type: 'base64', media_type: mediaType, data: base64 },
            },
            {
              type: 'text',
              text: '请将图片中所有文字翻译成中文，保持原有格式和分段。如果有菜名，请在括号内标注主要食材或口味特点。如果有过敏原（花生、贝类、乳制品等），请用【⚠️ 注意】特别标出。只输出翻译结果，不需要额外说明。',
            },
          ],
        },
      ],
    }),
  })

  if (!response.ok) {
    const err = await response.text()
    return res.status(502).json({ error: '翻译服务暂时不可用', detail: err })
  }

  const data = await response.json()
  const translation = data.content?.[0]?.text ?? ''
  return res.status(200).json({ translation })
}
