require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection & Fallback
let isMongoConnected = false;
let localMessages = [
    { _id: '1', name: 'Demo User', email: 'demo@example.com', message: 'This is a placeholder message (In-Memory)', date: new Date() }
];

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('MongoDB Connected');
        isMongoConnected = true;
    })
    .catch(err => {
        console.log('MongoDB Connection Error: ' + err.message);
        console.log('⚠️ Running in local fallback mode (In-Memory Storage). Messages will not persist after restart.');
    });

// Schema & Model
const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Routes

// GET /api/messages (Admin)
app.get('/api/messages', async (req, res) => {
    try {
        if (isMongoConnected) {
            const messages = await Message.find().sort({ date: -1 });
            res.json(messages);
        } else {
            res.json(localMessages);
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});

// POST /api/contact
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        if (isMongoConnected) {
            const newMessage = new Message({ name, email, message });
            await newMessage.save();
        } else {
            const newMessage = {
                _id: Date.now().toString(),
                name,
                email,
                message,
                date: new Date()
            };
            localMessages.unshift(newMessage);
        }

        console.log(`New Message from ${name} (${email}): ${message}`);
        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to send message' });
    }
});

// DELETE /api/messages/:id
app.delete('/api/messages/:id', async (req, res) => {
    try {
        if (isMongoConnected) {
            await Message.findByIdAndDelete(req.params.id);
        } else {
            localMessages = localMessages.filter(msg => msg._id !== req.params.id);
        }
        res.json({ message: 'Message deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete message' });
    }
});

app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

// GET /api/messages/export (Download CSV)
app.get('/api/messages/export', async (req, res) => {
    try {
        let messages = [];
        if (isMongoConnected) {
            messages = await Message.find().sort({ date: -1 });
        } else {
            messages = localMessages;
        }

        // Convert to CSV
        const csvHeaders = 'Name,Email,Message,Date\n';
        const csvRows = messages.map(msg => {
            // Escape quotes and commas to prevent CSV breakage
            const name = `"${msg.name.replace(/"/g, '""')}"`;
            const email = `"${msg.email.replace(/"/g, '""')}"`;
            const message = `"${msg.message.replace(/"/g, '""').replace(/\n/g, ' ')}"`;
            const date = `"${new Date(msg.date).toLocaleString()}"`;
            return `${name},${email},${message},${date}`;
        }).join('\n');

        const csvContent = csvHeaders + csvRows;

        res.header('Content-Type', 'text/csv');
        res.header('Content-Disposition', 'attachment; filename="portfolio_messages.csv"');
        res.send(csvContent);

    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to export messages');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
