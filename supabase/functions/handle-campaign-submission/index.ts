
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface CampaignSubmission {
  name: string;
  email: string;
  company: string;
  phone?: string;
  region: string;
  quantity: number;
  audience: string;
  startDate?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const submission: CampaignSubmission = await req.json();

    // Format the email content
    const emailHtml = `
      <h1>New Campaign Submission</h1>
      <h2>Contact Details:</h2>
      <p><strong>Name:</strong> ${submission.name}</p>
      <p><strong>Email:</strong> ${submission.email}</p>
      <p><strong>Company:</strong> ${submission.company}</p>
      <p><strong>Phone:</strong> ${submission.phone || 'Not provided'}</p>
      
      <h2>Campaign Details:</h2>
      <p><strong>Region:</strong> ${submission.region}</p>
      <p><strong>Quantity:</strong> ${submission.quantity}</p>
      <p><strong>Target Audience:</strong> ${submission.audience}</p>
      <p><strong>Start Date:</strong> ${submission.startDate || 'Not specified'}</p>
      <p><strong>Additional Message:</strong> ${submission.message || 'None'}</p>
    `;

    const emailResponse = await resend.emails.send({
      from: "JalSeva Campaigns <campaigns@resend.dev>",
      to: ["connect.team.jalseva@gmail.com"],
      subject: `New Campaign Request from ${submission.company}`,
      html: emailHtml,
      reply_to: submission.email
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in campaign submission handler:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
