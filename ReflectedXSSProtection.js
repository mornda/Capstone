const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/search', (req, res) => {
    const query = req.query.q;
    const escapedQuery = escapeHTML(query);
    res.send(`Search results for: ${escapedQuery}`);
});

function escapeHTML(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
