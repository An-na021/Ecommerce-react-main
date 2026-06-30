const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { processOrderAndSendEmail } = require('./orderProcessor');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/send-order-email', async (req, res) => {
  const orderData = req.body.orderData;
  const recipient = req.body.recipientEmail || process.env.RECIPIENT_EMAIL || 'annamalschitzky@gmail.com';

  if (!orderData) {
    return res.status(400).json({ success: false, message: 'orderData obrigatório.' });
  }

  try {
    const result = await processOrderAndSendEmail(orderData, recipient);
    if (result.success) return res.json({ success: true, message: 'E-mail enviado.' });
    return res.status(500).json({ success: false, message: result.message, error: result.error });
  } catch (err) {
    console.error('Erro interno ao processar pedido:', err);
    return res.status(500).json({ success: false, message: 'Erro interno.' });
  }
});

app.get('/', (req, res) => res.send('Backend de envio de pedidos funcionando'));

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
