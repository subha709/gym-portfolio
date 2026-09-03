import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { name, email, phone } = body

    if (!name || !email || !phone) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Missing required fields'
        })
    }

    // Create a nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'subhadeeppatra709@gmail.com', // Your target/sending email
            // VERY IMPORTANT: Do NOT use your regular Gmail password here.
            // You must generate a 16-character "App Password" from your Google Account settings 
            // (Security > 2-Step Verification > App passwords) and paste it here.
            pass: 'eten uqsj vgkt eskb'
        }
    })

    const mailOptions = {
        from: 'subhadeeppatra709@gmail.com', // Authenticated user
        to: 'subhadeeppatra709@gmail.com',   // Receive it yourself
        replyTo: email,                      // When you click 'reply', it targets the sender
        subject: `New Training Request from ${name}`,
        text: `You have received a new consultation request from your portfolio.\n\nDetails:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nGood luck!`
    }

    try {
        await transporter.sendMail(mailOptions)
        return { success: true, message: 'Email sent successfully!' }
    } catch (error) {
        console.error('Error sending email:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to send email.'
        })
    }
})
