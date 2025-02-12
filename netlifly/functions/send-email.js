const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    try {
        const data = JSON.parse(event.body);

        // Configura el transportador de nodemailer
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'samuelgatica92@gmail.com', // Reemplaza con tu correo de Gmail
                pass: 'jewsdwcdrgpsxyoe'        // Reemplaza con tu contraseña de Gmail
            }
        });

        // Opciones del correo
        const mailOptions = {
            from: 'samuelgatica92@gmail.com',
            to: 'samuelgatica92@gmail.com', // Reemplaza con tu correo personal
            subject: 'Nuevo mensaje del formulario de contacto',
            text: `
                Nombre: ${data.name}
                Correo Electrónico: ${data.email}
                Mensaje: ${data.message}
            `
        };

        // Envía el correo
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Correo enviado con éxito' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al enviar el correo', error: error.message })
        };
    }
};
