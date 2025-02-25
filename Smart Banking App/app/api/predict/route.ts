import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: "OpenAI API key not configured" }, { status: 500 })
  }

  try {
    const body = await req.json()
    const { symbol, type, price, change } = body

    const prompt = `You are an AI financial advisor. Given the following information about a ${type}:

Symbol: ${symbol}
Current Price: $${price}
24h Change: ${change}%

Provide a brief analysis and recommendation (Buy, Hold, or Sell) based on this information. Include a confidence level (0-100%) and potential return over the next month. Format your response exactly as follows:

Analysis: [Your analysis here]
Recommendation: [Buy/Hold/Sell]
Confidence: [0-100]%
Potential Return: [percentage]%`

    // Add timeout to prevent hanging requests
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Request timed out")), 10000)
    })

    const responsePromise = generateText({
      model: openai("gpt-3.5-turbo"),
      prompt,
      temperature: 0.7,
      maxTokens: 200,
    })

    const { text } = (await Promise.race([responsePromise, timeoutPromise])) as { text: string }
    return NextResponse.json({ result: text })
  } catch (error: any) {
    console.error("API Error:", error)

    // Handle rate limit errors specifically
    if (error.message?.includes("quota") || error.message?.includes("rate limit")) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded. Please try again in a few moments.",
          details: error.message,
        },
        { status: 429 },
      )
    }

    return NextResponse.json(
      {
        error: error.message || "An error occurred during the prediction request.",
        details: error.message,
      },
      { status: error.status || 500 },
    )
  }
}

