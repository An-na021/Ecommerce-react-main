const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

// Verifica a conexão SMTP ao carregar o módulo — útil para depuração local.
transporter.verify()
    .then(() => console.log('SMTP transporter pronto para enviar e-mails'))
    .catch(err => console.error('Falha ao verificar transporter SMTP:', err));

/**
 * @param {object} orderData - Dados do pedido.
 * @returns {string} - Corpo do e-mail em HTML.
 */
const generateEmailContent = (orderData = {}) => {
    const { customerInfo = {}, orderItems = [], totalAmount = 0, totalQuantity } = orderData;

    const itemsHtml = (orderItems || []).map(item => `
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">${item.title || item.productName || 'Produto'}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${item.quantity || item.qty || 1}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">R$ ${((item.price || 0)).toFixed(2).replace('.', ',')}</td>
        </tr>
    `).join('');

    return `
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Novo Pedido Recebido</h2>
            <p>Pedido enviado a partir do Checkout do site.</p>
            
            <h3>Informações do Solicitante</h3>
            <ul>
                <li><strong>Usuário de rede:</strong> ${customerInfo.usuario || '-'}</li>
                <li><strong>Nome:</strong> ${customerInfo.nome || '-'}</li>
                <li><strong>Email:</strong> ${customerInfo.email || '-'}</li>
                <li><strong>Centro de Custo:</strong> ${customerInfo.centroDeCusto || '-'}</li>
            </ul>

            <h3>Detalhes do Pedido</h3>
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Produto</th>
                        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Quantidade</th>
                        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Preço Unitário</th>
                    </tr>
                </thead>
                <tbody>
                    ${itemsHtml}
                </tbody>
            </table>

            <h3 style="margin-top: 20px;">Quantidade Total: ${totalQuantity || '-'}</h3>
            <h3>Total do Pedido: R$ ${((totalAmount || 0)).toFixed(2).replace('.', ',')}</h3>
            
            <p>Por favor, processe este pedido.</p>
        </body>
        </html>
    `;
};

/**
 * @param {object} orderData
 * @param {string} recipientEmail
 */
const processOrderAndSendEmail = async (orderData, recipientEmail = process.env.RECIPIENT_EMAIL || 'annamalschitzky@gmail.com') => {
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: recipientEmail,
        subject: `Novo Pedido Recebido - ${orderData.customerInfo?.nome || orderData.customerInfo?.usuario || 'Solicitante'}`,
        html: generateEmailContent(orderData)
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('E-mail enviado: %s', info.messageId);
        return { success: true, message: 'Pedido processado e e-mail enviado.' };
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        return { success: false, message: 'Erro ao enviar e-mail.', error: error.message };
    }
};

module.exports = { processOrderAndSendEmail };
