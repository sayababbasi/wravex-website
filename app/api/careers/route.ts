import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, role, linkedin, message } = data

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Job Application</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 40px 0;">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                  <tr>
                    <td style="background-color: #0A1629; padding: 30px 40px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 1px;">AXIORA CAREERS</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 40px;">
                      <h2 style="color: #0F172A; margin-top: 0; margin-bottom: 24px; font-size: 20px;">New Job Application</h2>
                      
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom: 24px;">
                        <tr><td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;"><strong style="color: #64748b; font-size: 13px; text-transform: uppercase;">Applicant Name</strong><br><span style="color: #0f172a; font-size: 16px;">${name}</span></td></tr>
                        <tr><td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;"><strong style="color: #64748b; font-size: 13px; text-transform: uppercase;">Email Address</strong><br><a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-size: 16px;">${email}</a></td></tr>
                        <tr><td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;"><strong style="color: #64748b; font-size: 13px; text-transform: uppercase;">Role Applied For</strong><br><span style="color: #0f172a; font-size: 16px; font-weight: 600;">${role}</span></td></tr>
                        <tr><td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;"><strong style="color: #64748b; font-size: 13px; text-transform: uppercase;">LinkedIn Profile</strong><br>${linkedin ? `<a href="${linkedin}" style="color: #2563eb; text-decoration: none; font-size: 16px;">${linkedin}</a>` : '<span style="color: #94a3b8;">Not provided</span>'}</td></tr>
                      </table>

                      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px;">
                        <strong style="color: #64748b; font-size: 13px; text-transform: uppercase; display: block; margin-bottom: 12px;">Cover Letter / Message</strong>
                        <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                      </div>
                      
                      <div style="margin-top: 30px; text-align: center;">
                        <a href="mailto:${email}" style="background-color: #2563eb; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 15px; display: inline-block;">Reply to Applicant</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                      <p style="color: #94a3b8; font-size: 13px; margin: 0;">This email was sent from the Axiora Careers application form.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `

    const emailText = `
New Job Application - Axiora Careers
------------------------------------
Applicant: ${name}
Email: ${email}
Role: ${role}
LinkedIn: ${linkedin || 'Not provided'}

Cover Letter / Message:
${message}

------------------------------------
Reply to: ${email}
    `

    const result = await resend.emails.send({
      from: 'Axiora HR <onboarding@resend.dev>',
      to: ['hr.axiorasoftware@gmail.com'],
      subject: `New Application for ${role}: ${name}`,
      html: emailHtml,
      text: emailText,
    })

    if (result.error) {
      console.error("Resend API Error:", result.error)
      return NextResponse.json({ error: result.error.message }, { status: 400 })
    }

    console.log("Email sent successfully:", result.data)
    return NextResponse.json({ success: true, data: result.data })
  } catch (error) {
    console.error("Internal Server Error:", error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
