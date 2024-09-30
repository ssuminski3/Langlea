import { model } from "../firebase.config"

var chat
var l = ""
//Start dialog
export async function startChat(lang, sub) {
  l = lang
  try {
    chat = model.startChat()
    const result = await chat.sendMessage("Hey, can you have a conversation with me in " + lang + " about " + sub + "? You will start the conversation.")
    console.log("RE: ", result)

    return result.response.text()

  } catch (error) {
    console.error("Error occurred while starting chat:", error);
    return error
  }
}
//Continue dialog get: tip or error for your answer and next message
function removeOutsideBraces(s) {
  /**
   * Remove anything from a string that isn't between curly braces {}
   * 
   * @param {string} s The input string
   * @returns {string} The modified string with only the text between curly braces
   */
  let result = "";
  let inBraces = false;
  for (let char of s) {
    if (char === "{") {
      inBraces = true;
    } else if (char === "}") {
      inBraces = false;
    } else if (inBraces) {
      result += char;
    }
  }
  return result;
}
export async function continueChat(msg) {
  try {
    const result = await chat.sendMessage("Here is my response. '"+msg + "' Return each response in JSON format {text-(in "+l+"), error-(in polish)}. Text is what you would answer me. Error is information about correctness of my response, there always should be something in polish.")
    console.log("RE: ", result)
    var text = result.response.text()
    console.log('{'+removeOutsideBraces(text)+'}')
    return '{'+removeOutsideBraces(text)+'}'

  } catch (error) {
    console.error("Error occurred while starting chat:", error);
    return error
  }
}
function removeControlCharacters(inputString) {
  return inputString.replace(/[\u0000-\u001F]/g, '');
}
//Write a story and questions
export async function writeStory(lang, sub) {
  try {
    chat = model.startChat()
    const result = await chat.sendMessage("Hey, write a story in " + lang + " about " + sub + ". Return story in JSON format {story, questions}. Story is this story you wrote and questions is array of question about story you wrote. Question are in polish")
    console.log("RE: ", result)
    const text = removeOutsideBraces(result.response.text())
    console.log('{'+text+'}')
    return removeControlCharacters('{'+text+'}')

  } catch (error) {
    console.error("Error occurred while starting chat:", error);
    return error
  }
}
//Check answer for question get correct answer
export async function checkAnswer(que, ans) {
  try {
    const result = await chat.sendMessage("Here is my answer for question: "+que+".'"+ans + "'. Tell me if it's correct if not tell me why. Answer in polish and short.")
    console.log("RE: ", result)
    var text = result.response.text()
    console.log(text)
    return text

  } catch (error) {
    console.error("Error occurred while starting chat:", error);
    return error
  }
}

export async function translate(word) {
  try {
    // Provide a prompt that contains text
    const prompt = "Translate this word '"+word+"' to polish. In response give me only word"
    console.log(prompt)
    // To stream generated text output, call generateContentStream with the text input
    const result = await model.generateContent(prompt);

    return result.response.text();
  } catch (error) {
    console.error('Error translating word:', error);
    // You can also return an error message or throw an error if needed
    // return { error: 'Failed to translate word' };
    // throw new Error('Failed to translate word');
  }
}