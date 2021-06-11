// This is a very simple canvas example to demonstrate the bug.
// What it does is create a new canvas, then write test text and return the SVG
//
// To replicate the issue:
// 1/ Run locally using `netlify dev`.
//    Then check the output at http://localhost:8888/.netlify/functions/test-canvas
// 2/ Change anything in this file. This triggers a function reload
//    "◈ .../netlify/functions/test-canvas.js modified, successfully reloaded!"
// 3/ Refresh the test-canvas function, now you get the error:
//    "Error: Module did not self-register"

// import node-canvas
const { createCanvas } = require("canvas");

exports.handler = async function (event, context, callback) {
  try {
    var canvas = createCanvas(500, 500, "svg");
    const ctx = canvas.getContext("2d");

    ctx.font = '60px "sans"';
    ctx.fillText("Test text 1", 10, 100);

    callback(null, {
      statusCode: 200,
      headers: {
        "Content-Type": "image/svg+xml",
      },
      body: canvas.toBuffer().toString(),
    });
  } catch (e) {
    console.error("Error", e);

    callback(null, {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: e }),
    });
  }
};
