import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'rogers.kerluke@ethereal.email',
        pass: 'UudKsdRbgJcKBSjMyh'
    }
});

export const sendEmail = async ({ from, to, subject, text, html }) => {
    try {
        let info = await transporter.sendMail({
            from,
            to,
            subject,
            text,
            html,
        });

        console.log('Message sent: %s', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Failed to send email. ', error);
        return { success: false, error };
    }
};