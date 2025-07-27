import { NextResponse } from 'next/server';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Initialize MailerSend with your API key
    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY || '',
    });

    // Set up sender and recipient
    const sentFrom = new Sender("noreply@akash-more.me", `Portfolio Contact Form`);
    const recipients = [
      new Recipient("akashmore83386@gmail.com", "Akash More")
    ];

    // Create email parameters
    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo({
        email: email,
        name: name
      })
      .setSubject(`New message from ${name} via Portfolio Contact Form`)
      .setHtml(`
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">New Message from Portfolio Contact Form</h2>
          <div style="background-color: #f9fafb; padding: 1.5rem; border-radius: 0.5rem; margin: 1rem 0;">
            <p><strong style="color: #4f46e5;">Name:</strong> ${name}</p>
            <p><strong style="color: #4f46e5;">Email:</strong> <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></p>
            <p><strong style="color: #4f46e5;">Message:</strong></p>
            <div style="background-color: white; padding: 1rem; border-radius: 0.25rem; margin-top: 0.5rem; border: 1px solid #e5e7eb;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="font-size: 0.875rem; color: #6b7280; margin-top: 1.5rem;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `)
      .setText(message);

    // Send the email
    await mailerSend.email.send(emailParams);

    return NextResponse.json({ 
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
