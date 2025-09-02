import sgMail from '@sendgrid/mail'
import type { BookingFormData } from '@/types'

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'noreply@nazarebigwave.com'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@nazarebigwave.com'

export async function sendBookingConfirmation(bookingData: BookingFormData) {
  const { name, email, date, people, message } = bookingData

  const customerEmail = {
    to: email,
    from: FROM_EMAIL,
    subject: 'Booking Confirmation - Nazaré Big Wave Experience',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Booking Confirmation</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .detail-row { display: flex; justify-content: space-between; margin: 10px 0; padding: 5px 0; border-bottom: 1px solid #e5e7eb; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
            .button { display: inline-block; background: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌊 Nazaré Big Wave Experience</h1>
              <p>Your booking has been confirmed!</p>
            </div>
            <div class="content">
              <h2>Hello ${name},</h2>
              <p>Thank you for booking your Big Wave Experience with us! We're excited to share the incredible power of Nazaré's legendary waves with you.</p>
              
              <div class="booking-details">
                <h3>Booking Details</h3>
                <div class="detail-row">
                  <strong>Name:</strong>
                  <span>${name}</span>
                </div>
                <div class="detail-row">
                  <strong>Date:</strong>
                  <span>${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div class="detail-row">
                  <strong>Number of People:</strong>
                  <span>${people}</span>
                </div>
                ${message ? `
                <div class="detail-row">
                  <strong>Special Requests:</strong>
                  <span>${message}</span>
                </div>
                ` : ''}
              </div>
              
              <h3>What to Expect</h3>
              <ul>
                <li>Expert guidance from our local wave specialists</li>
                <li>Safety briefing and equipment provided</li>
                <li>Best viewing spots for the giant waves</li>
                <li>Educational insights into wave science</li>
                <li>Photography opportunities</li>
              </ul>
              
              <h3>Important Information</h3>
              <ul>
                <li><strong>Meeting Point:</strong> Nazaré Lighthouse (Farol da Nazaré)</li>
                <li><strong>Time:</strong> We'll contact you 24 hours before to confirm timing based on wave conditions</li>
                <li><strong>What to Bring:</strong> Warm clothing, comfortable shoes, camera</li>
                <li><strong>Weather Policy:</strong> Tours may be rescheduled for safety reasons</li>
              </ul>
              
              <p>Our team will contact you within 24 hours to confirm final details and timing based on the latest wave forecasts.</p>
              
              <p>If you have any questions, please don't hesitate to contact us.</p>
              
              <div class="footer">
                <p><strong>Nazaré Big Wave Experience</strong><br>
                Email: info@nazarebigwave.com<br>
                Phone: +351 XXX XXX XXX<br>
                Nazaré, Portugal</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
  }

  const adminEmail = {
    to: ADMIN_EMAIL,
    from: FROM_EMAIL,
    subject: `New Booking - ${name} for ${date}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Booking Received</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #0ea5e9;">🌊 New Booking Received</h2>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
              <h3>Booking Details</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${bookingData.phone ? `<p><strong>Phone:</strong> ${bookingData.phone}</p>` : ''}
              <p><strong>Date:</strong> ${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p><strong>Number of People:</strong> ${people}</p>
              ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <p style="margin-top: 20px;">Please follow up with the customer within 24 hours to confirm details and timing.</p>
          </div>
        </body>
      </html>
    `,
  }

  try {
    await Promise.all([
      sgMail.send(customerEmail),
      sgMail.send(adminEmail)
    ])
    
    return { success: true, message: 'Booking confirmation emails sent successfully' }
  } catch (error) {
    console.error('Error sending booking confirmation emails:', error)
    throw new Error('Failed to send booking confirmation emails')
  }
}

export async function sendContactEmail(formData: {
  name: string
  email: string
  subject: string
  message: string
}) {
  const { name, email, subject, message } = formData

  const contactEmail = {
    to: ADMIN_EMAIL,
    from: FROM_EMAIL,
    subject: `Contact Form: ${subject}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #0ea5e9;">📧 New Contact Form Submission</h2>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <div style="background: white; padding: 15px; border-left: 4px solid #0ea5e9; margin: 10px 0;">
                ${message.replace(/\n/g, '<br>')}
              </div>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `,
  }

  try {
    await sgMail.send(contactEmail)
    return { success: true, message: 'Contact form submitted successfully' }
  } catch (error) {
    console.error('Error sending contact form email:', error)
    throw new Error('Failed to send contact form email')
  }
}
