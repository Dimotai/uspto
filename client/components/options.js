export const defaultModel = "anthropic.claude-3-haiku-20240307-v1:0";

export const models = [
  {
    group: "AI21 Labs",
    options: [
      {
        label: "Jamba 1.5 Large",
        value: "ai21.jamba-1-5-large-v1:0",
        inputCost1kTokens: 0.002,
        outputCost1kTokens: 0.008,
      },
      {
        label: "Jamba 1.5 Mini",
        value: "ai21.jamba-1-5-mini-v1:0",
        inputCost1kTokens: 0.0002,
        outputCost1kTokens: 0.0004,
      },
    ],
  },
  {
    group: "Amazon",
    options: [
      {
        label: "Titan Text Premier",
        value: "amazon.titan-text-premier-v1:0",
        inputCost1kTokens: 0.0005,
        outputCost1kTokens: 0.0015,
      },
      {
        label: "Titan Text G1 - Express",
        value: "amazon.titan-text-express-v1",
        inputCost1kTokens: 0.0002,
        outputCost1kTokens: 0.0006,
      },
      {
        label: "Titan Text G1 - Lite",
        value: "amazon.titan-text-lite-v1",
        inputCost1kTokens: 0.00015,
        outputCost1kTokens: 0.0002,
      },
    ],
  },
  {
    group: "Anthropic",
    options: [
      {
        label: "Claude 3.5 Sonnet",
        value: "anthropic.claude-3-5-sonnet-20240620-v1:0",
        inputCost1kTokens: 0.003,
        outputCost1kTokens: 0.015,
      },
      {
        label: "Claude 3 Opus",
        value: "anthropic.claude-3-opus-20240229-v1:0",
        inputCost1kTokens: 0.015,
        outputCost1kTokens: 0.075,
      },
      {
        label: "Claude 3 Sonnet",
        value: "anthropic.claude-3-sonnet-20240229-v1:0",
        inputCost1kTokens: 0.003,
        outputCost1kTokens: 0.015,
      },
      {
        label: "Claude 3 Haiku",
        value: "anthropic.claude-3-haiku-20240307-v1:0",
        inputCost1kTokens: 0.00025,
        outputCost1kTokens: 0.00125,
      },
    ],
  },
  {
    group: "Cohere",
    options: [
      { label: "Command R+", value: "cohere.command-r-plus-v1:0", inputCost1kTokens: 0.003, outputCost1kTokens: 0.015 },
      { label: "Command R", value: "cohere.command-r-v1:0", inputCost1kTokens: 0.0005, outputCost1kTokens: 0.0015 },
    ],
  },
  {
    group: "Meta",
    options: [
      // { label: "Llama 3.2 90B Instruct", value: "meta.llama3-2-90b-instruct-v1:0" },
      // { label: "Llama 3.2 11B Instruct", value: "meta.llama3-2-11b-instruct-v1:0" },
      // { label: "Llama 3.2 3B Instruct", value: "meta.llama3-2-3b-instruct-v1:0" },
      // { label: "Llama 3.2 1B Instruct", value: "meta.llama3-2-1b-instruct-v1:0" },
      {
        label: "Llama 3 70B Instruct",
        value: "meta.llama3-70b-instruct-v1:0",
        inputCost1kTokens: 0.00265,
        outputCost1kTokens: 0.0035,
      },
      {
        label: "Llama 3 8B Instruct",
        value: "meta.llama3-8b-instruct-v1:0",
        inputCost1kTokens: 0.0003,
        outputCost1kTokens: 0.0006,
      },
    ],
  },
  {
    group: "Mistral AI",
    options: [
      {
        label: "Mistral Large 2 (24.02)",
        value: "mistral.mistral-large-2402-v1:0",
        inputCost1kTokens: 0.004,
        outputCost1kTokens: 0.012,
      },
      {
        label: "Mistral Small",
        value: "mistral.mistral-small-2402-v1:0",
        inputCost1kTokens: 0.001,
        outputCost1kTokens: 0.003,
      },
      {
        label: "Mixtral 8X7B Instruct",
        value: "mistral.mixtral-8x7b-instruct-v0:1",
        inputCost1kTokens: 0.00045,
        outputCost1kTokens: 0.0007,
      },
    ],
  },
];

export function getModelLabel(value) {
  return models
    .map((o) => o.options)
    .flat()
    .find((o) => o.value === value)?.label;
}

export function getInferenceCost(model, inputTokens, outputTokens) {
  const { inputCost1kTokens, outputCost1kTokens } = models
    .map((o) => o.options)
    .flat()
    .find((o) => o.value === model);
  return inputTokens * inputCost1kTokens + outputTokens * outputCost1kTokens;
}

export const defaultWorkspaces = [
  {
    id: 0,
    model: defaultModel,
    title: "Summarize",
    prompt: `You are tasked with summarizing a document. Your goal is to create a concise and informative summary that captures the main points and key ideas of the original text. Here's how to approach this task:

1. Identify the main topic or central idea of the document.
2. Determine the key points that support or elaborate on the main topic.
3. Look for any important details, examples, or evidence that are crucial to understanding the document's content.
4. Identify any conclusions or final thoughts presented in the document.

When writing your summary:
- Aim for a length of about 10-20% of the original document, unless otherwise specified.
- Use your own words to paraphrase the main ideas and key points.
- Maintain a neutral tone and avoid including your own opinions or interpretations.
- Present the information in a logical order, which may not necessarily be the same as the original document.
- Do not include minor details, examples, or tangential information that isn't crucial to the main ideas.
- Ensure that your summary can stand alone and be understood without reference to the original document.

Before writing your summary, you may use <scratchpad> tags to organize your thoughts and outline the main points you plan to include. Please provide your summary within <summary> tags, after the <scratchpad>. 

The document to be summarized is provided below:`,
    results: [],
  }
];

export const newWorkspace = {
  model: defaultModel,
  title: "New Workspace",
  prompt: "",
  results: [],
};
