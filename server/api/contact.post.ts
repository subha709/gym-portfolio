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
            pass: 'kvfj wxux puqg cbjs'
        }
    })

    const mailOptions = {
        from: 'subhadeeppatra709@gmail.com', // Authenticated user
        to: 'subhadeeppatra709@gmail.com',   // Receive it yourself
        replyTo: email,                      // When you click 'reply', it targets the sender
        subject: `New Training Request from ${name}`,
        text: `You have received a new consultation request from your portfolio.\n\nDetails:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nGood luck!`,
        html: `
            <div style="font-family: Arial, sans-serif; background: #0d1117; color: #f3f4f6; padding: 32px;">
                <div style="max-width: 620px; margin: 0 auto; background: #111827; border: 1px solid #ff4d4d; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.25);">
                    <div style="background: linear-gradient(135deg, #ff4d4d 0%, #a10f0f 100%); padding: 28px 30px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                        <h2 style="margin: 0; color: #ffffff; font-size: 30px; letter-spacing: 0.5px;">New Training Inquiry</h2>
                        <p style="margin: 8px 0 0; color: #fef2f2; font-size: 14px;">A new consultation request has come in from your portfolio website.</p>
                    </div>

                    <div style="padding: 28px 30px;">
                        <div style="display: grid; gap: 14px;">
                            <div style="padding: 12px 14px; border-radius: 10px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
                                <span style="display: inline-block; width: 95px; color: #ff9c9c; font-weight: 700;">Name:</span>
                                <span style="color: #ffffff; font-weight: 600;">${name}</span>
                            </div>

                            <div style="padding: 12px 14px; border-radius: 10px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
                                <span style="display: inline-block; width: 95px; color: #ff9c9c; font-weight: 700;">Email:</span>
                                <span style="color: #ffffff; font-weight: 600;">${email}</span>
                            </div>

                            <div style="padding: 12px 14px; border-radius: 10px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
                                <span style="display: inline-block; width: 95px; color: #ff9c9c; font-weight: 700;">Phone:</span>
                                <span style="color: #ffffff; font-weight: 600;">${phone}</span>
                            </div>
                        </div>

                        <div style="margin-top: 26px; padding: 18px; border-radius: 12px; background: linear-gradient(180deg, rgba(255,77,77,0.08), rgba(255,255,255,0.02)); border: 1px solid rgba(255,77,77,0.25);">
                            <p style="margin: 0; color: #e5e7eb; font-size: 14px; line-height: 1.6;">
                                Please reply to this client and continue the conversation. This is a new opportunity to take the next step in their fitness journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `
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
