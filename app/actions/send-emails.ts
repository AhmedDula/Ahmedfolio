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
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>New message from your portfolio</h2>

      <p>
        <strong>Name:</strong> ${name}
      </p>

      <p>
        <strong>Job Title:</strong> ${title}
      </p>

      <p>
        <strong>Email:</strong> ${email}
      </p>

      <hr />

      <p>
        <strong>Message:</strong>
      </p>

      <p>
        ${message}
      </p>
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