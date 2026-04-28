exports.handler = async (event) => {
  console.log(`[LOG] Function triggered: ${event.httpMethod}`);
  
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  try {
    const data = JSON.parse(event.body);
    console.log("[LOG] Received Data:", JSON.stringify(data));

    // Basic Validation
    if (!data.email || !data.name) {
      console.warn("[WARN] Validation failed: Missing required fields");
      return { statusCode: 400, body: JSON.stringify({ error: "Nom et Email sont requis" }) };
    }
    const message = data.message || "Aucun message fourni.";

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      console.error("[ERROR] Missing RESEND_API_KEY");
      return { statusCode: 500, body: JSON.stringify({ error: "Server Configuration Error" }) };
    }

    console.log("[LOG] Sending email via Resend API...");
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "DIGLY <system@digly-solutions.com>",
        to: "dhernandez@digly-solutions.com",
        subject: `🚀 Nouveau Lead : ${data.name}`,
        html: `
          <h3>Nouveau Diagnostic Capturé</h3>
          <p><strong>Nom:</strong> ${data.name} (${data.email})</p>
          <p><strong>Secteur:</strong> ${data.sector || "Non spécifié"}</p>
          <p><strong>Besoin:</strong> ${data.priority_need || "Non spécifié"}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      }),
    });

    if (response.ok) {
      console.log("[LOG] Email sent successfully");
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*" 
        },
        body: JSON.stringify({ success: true, message: "Lead processed" }),
      };
    }
    
    console.error("[ERROR] Resend API Response:", resendResult);
    return {
      statusCode: response.status,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" 
      },
      body: JSON.stringify({ error: resendResult.message || "Failed to send email" }),
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
