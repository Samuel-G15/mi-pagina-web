// netlify/functions/send-email.js
// netlify/functions/send-email.js

const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    const { name, email, message } = JSON.parse(event.body);

    // Configura el transporte de Nodemailer
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'tu_correo@gmail.com',  // Reemplaza con tu correo
            pass: 'tu_contraseña'         // Reemplaza con tu contraseña
        }
    });

    // Configura el correo electrónico
    let mailOptions = {
        from: 'tu_correo@gmail.com',     // Reemplaza con tu correo
        to: 'tu_correo@gmail.com',       // Reemplaza con tu correo o destinatario
        subject: 'Nueva Consulta del Formulario',
        text: `Nombre: ${name}\nCorreo Electrónico: ${email}\nMensaje: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Correo enviado correctamente.' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error al enviar el correo.' })
        };
    }
};