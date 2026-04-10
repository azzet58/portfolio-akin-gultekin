"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message: string;
} | null;

export async function sendContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const honeypot = formData.get("honeypot") as string;

  if (honeypot) return { success: false, message: "Something went wrong." };

  if (!name || !email || !message) {
    return { success: false, message: "Fill in all required fields." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Akin Gültekin <onboarding@resend.dev>",
      to: "akosgultekin@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return { success: true, message: "Your message is sent!" };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong. Try again.",
    };
  }
}
