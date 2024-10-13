const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/auth');
const subjectRoutes = require('./routes/subjects');


app.use(express.json());
app.use(cors());


app.use('/api/auth', authRoutes);
app.use('/api', subjectRoutes);



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});