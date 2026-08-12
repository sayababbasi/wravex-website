import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, role, linkedin, message } = data

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px; background-color: #FAFBFC;">
        <h2 style="color: #0F172A; border-bottom: 2px solid #14B8A6; padding-bottom: 10px;">New Job Application - Axiora Careers</h2>
        <p><strong>Applicant Name:</strong> ${name}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Role Applied For:</strong> ${role}</p>
        <p><strong>LinkedIn Profile:</strong> ${linkedin ? `<a href="${linkedin}">${linkedin}</a>` : 'Not provided'}</p>
        <div style="margin-top: 20px; background-color: #ffffff; padding: 15px; border-radius: 5px; border: 1px solid #e2e8f0;">
          <h3 style="color: #0F172A; margin-top: 0;">Cover Letter / Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `

    const result = await resend.emails.send({
      from: 'Axiora HR <onboarding@resend.dev>',
      to: ['hr.axiorasoftware@gmail.com'],
      subject: `New Application for ${role}: ${name}`,
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
