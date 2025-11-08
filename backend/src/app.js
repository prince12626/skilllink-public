const express = require('express');
const app = express();
const cors = require('cors')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/db')();

const authRoutes = require('./routes/auth.routes')
const serviceRouter = require('./routes/services.route')
app.use(authRoutes);
app.use("/api/v1/service", serviceRouter);

app.get('/api/health', (req, res) => {
            try {
                        res.status(201).json({ message: 'API working fine.' });
            }
            catch (err) {
                        res.status(500).json({ message: 'Internal Server Error!', err });
            }
})



module.exports = app;