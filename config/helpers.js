const safeDetection = async (imageUrl) => {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    // Performs label detection on the image file
    // const [result] = await client.labelDetection('./images/person.png');
    const [result] = await client.safeSearchDetection(imageUrl);

    return result.safeSearchAnnotation;
}


module.exports = {
    safeDetection
};