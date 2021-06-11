# netlify-cli-dev-bug

Netlify CLI bug report

See comments at the top of [`/netlify/functions/test-canvas.js`](/netlify/functions/test-canvas.js)

---

To replicate the issue:

1. Run locally using `netlify dev`.\
   Then check the output at http://localhost:8888/.netlify/functions/test-canvas
2. Change anything in this file. This triggers a function reload.\
   "◈ .../netlify/functions/test-canvas.js modified, successfully reloaded!"
3. Refresh the test-canvas function, now you get the error:\
   **"Error: Module did not self-register"**
