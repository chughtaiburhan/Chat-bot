import { GoogleGenerativeAI } from "@google/generative-ai";

// Replace this with your actual API key
const apiKey = "AIzaSyCy3zLZ-_gUHnaA_jdC4rxyLb2mHRnyTRY";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    const responseText = await result.response.text(); // Correctly extract the text

    console.log("Response from API:", responseText);

    return responseText; // Return the extracted text

  } catch (error) {
    console.error("Error generating response:", error);
    return "An error occurred while fetching the response."; // Return error message
  }
}

export default run;
