import generatePassword from "./functions/passwordGenerator.mjs";

export const handler = async (event) => {

    const generatedPassword = generatePassword(JSON.parse(event.body));
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify(generatedPassword),
    };
    return response;
  };
  