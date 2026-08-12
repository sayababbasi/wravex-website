import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, company, phone, service, budget, message } = data

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
        <h2 style="color: #0F172A; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">New Contact Inquiry - Axiora Software</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Service of Interest:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
        <div style="margin-top: 20px; background-color: #F8FAFC; padding: 15px; border-radius: 5px;">
          <h3 style="color: #0F172A; margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `

    const result = await resend.emails.send({
      from: 'Axiora Notifications <onboarding@resend.dev>',
      to: ['hr.axiorasoftware@gmail.com'],
      subject: `New Inquiry from ${name} - Axiora Software`,
      html: emailHtml,
    })

    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data: result.data })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
