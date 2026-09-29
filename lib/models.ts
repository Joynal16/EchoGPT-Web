export type Model = { id: string; name: string; vendor: string; color: string };
export const MODELS: Model[] = [
  { id: "gpt", name: "ChatGPT", vendor: "OpenAI", color: "#10a37f" },
  { id: "claude", name: "Claude", vendor: "Anthropic", color: "#d97757" },
  { id: "gemini", name: "Gemini", vendor: "Google", color: "#4285f4" },
  { id: "deepseek", name: "DeepSeek", vendor: "DeepSeek", color: "#4d6bfe" },
  { id: "grok", name: "Grok", vendor: "xAI", color: "#8b8b8b" },
  { id: "perplexity", name: "Perplexity", vendor: "Perplexity", color: "#20b8cd" },
];
export const QUICK_ACTIONS = ["Summarize page", "Explain selection", "Rewrite", "Translate", "Compare models"];
