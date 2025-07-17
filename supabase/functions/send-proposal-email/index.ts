import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ProposalEmailRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: ProposalEmailRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "JalSeva <onboarding@resend.dev>",
      to: [email],
      subject: "JalSeva Social Responsibility Proposal",
      html: `
        <h1>Thank you for your interest in JalSeva!</h1>
        <p>We're excited to share our social responsibility proposal with you.</p>
        <p>JalSeva provides clean, free water to people in need while offering brands a unique opportunity to fulfill their social responsibility goals through smart advertising.</p>
        <p>Please find our detailed proposal attached to this email.</p>
        <p>If you have any questions or would like to discuss a partnership, please don't hesitate to reach out to us at connect.team.jalseva@gmail.com or call us at +91 9284155938.</p>
        <p>Best regards,<br>The JalSeva Team</p>
      `,
      attachments: [
        {
          filename: "Jalseva_Proposal.pdf",
          path: "https://viblobbjoqxmucpfvxln.supabase.co/storage/v1/object/sign/pdf/Jalseva%20Proposal.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iY2Q0ZmQ4OC03ODkyLTQ3MjYtYjkxZS01NDc4YmMzZDAxNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGYvSmFsc2V2YSBQcm9wb3NhbC5wZGYiLCJpYXQiOjE3NTE5Nzk1MjUsImV4cCI6MTc4MzUxNTUyNX0.YiZSqxgpHgloTz7-Yu7WPrsNOyaTxHFlBmidghfLw9c"
        }
      ]
    });

    console.log("Proposal email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending proposal email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);