import 'dotenv/config';
import app from './app';
import { startConnection } from './database';

startConnection();
app.listen(process.env.PORT, () => console.log('Server is running on port 3000'))

