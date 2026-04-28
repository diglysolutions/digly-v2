exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return { statusCode: 500, body: "Configuration Error" };
    }

    const emailPayload = {
      from: "DIGLY System <system@digly-solutions.com>",
      to: ["dhernandez@digly-solutions.com"],
      subject: `🚀 Nouveau Lead : ${data.name} - ${data.company}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #111;">
          <h2>Nouveau Diagnostic Capturé</h2>
          <p><strong>Nom:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Organisation:</strong> ${data.company || "Non spécifiée"}</p>
          <hr />
          <p><strong>Secteur:</strong> ${data.sector}</p>
          <p><strong>Besoin Prioritaire:</strong> ${data.priority_need}</p>
          <p><strong>Priorité:</strong> ${data.priority}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${data.message || "Aucun message."}</p>
          <p style="font-size: 12px; color: #666;">Envoyé le : ${data.timestamp}</p>
        </div>
      `,
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    });

    if (response.ok) {
      return {
        statusCode: 200,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*" 
        },
        body: JSON.stringify({ message: "Lead processed successfully" }),
      };
    }

    const errorData = await response.json();
    console.error("Resend API Error:", errorData);
    return {
      statusCode: response.status,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" 
      },
      body: JSON.stringify({ error: errorData.message || "Failed to send email" }),
    };
  } catch (error) {
    console.error("Function Error:", error);
    return {
      statusCode: 500,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" 
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
