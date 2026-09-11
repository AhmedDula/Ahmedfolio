"use server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const title = formData.get("title") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !title || !email || !message) {
        return { success: false, message: "Please fill in all fields." };
    }

    try {
        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: ["ahmedhacker301@gmail.com"],
            replyTo: email,
            subject: `Portfolio Contact — ${title}`,
           html: `
    <div style="background-color: #0d0d0d; padding: 40px 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #f4f4f4;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #141414; border: 1px solid #2a2a2a; border-radius: 4px; padding: 48px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        
        <div style="text-align: center; margin-bottom: 40px;">
          <span style="font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: #c5a059;">Portfolio Inquiry</span>
          <h1 style="font-size: 24px; font-weight: 300; letter-spacing: 1px; color: #ffffff; margin-top: 12px; margin-bottom: 0;">New Client Inquiry</h1>
        </div>

        <div style="border-top: 1px solid #2a2a2a; border-bottom: 1px solid #2a2a2a; padding: 24px 0; margin-bottom: 32px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #888888; text-transform: uppercase; letter-spacing: 1.5px; font-size: 11px; width: 30%;">Name</td>
              <td style="padding: 8px 0; color: #ffffff; font-weight: 400;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888888; text-transform: uppercase; letter-spacing: 1.5px; font-size: 11px;">Jop</td>
              <td style="padding: 8px 0; color: #e0e0e0; font-weight: 300;">${title}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888888; text-transform: uppercase; letter-spacing: 1.5px; font-size: 11px;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #c5a059; text-decoration: none;">${email}</a></td>
            </tr>
          </table>
        </div>

        <div>
          <span style="font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #888888; display: block; margin-bottom: 16px;">Message</span>
          <div style="font-size: 15px; line-height: 1.8; color: #d1d1d1; font-weight: 300; white-space: pre-line;">
            ${message}
          </div>
        </div>

      </div>
    </div>
  `,
        });

        return {
            success: true,
            message: "Message sent successfully.",
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: "Something went wrong. Please try again.",
        };
    }
}