// Cloudflare Pages Function: POST /api/portal-signup
// Sends shareholder-access requests to hello@arkadya.tech via the Resend API.
//
// Setup required in the Cloudflare Pages dashboard:
//   Settings -> Environment variables -> add RESEND_API_KEY (as a "secret").
// Also make sure the "from" address's domain below is verified in Resend,
// otherwise Resend will reject the send.

export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Honeypot: if the hidden field was filled, silently pretend success.
  if (body.company_website) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, email, phone, country, language, amount, lang } = body;

  if (!name || !email || !phone || !country || !language || !amount) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!env.RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: 'Email service not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const escapeHtml = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[c]));

  const html = `
    <h2>New Shareholder Access Request — Solar Khanom</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
      <tr><td><strong>Name / Company</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><strong>Telephone</strong></td><td>${escapeHtml(phone)}</td></tr>
      <tr><td><strong>Country</strong></td><td>${escapeHtml(country)}</td></tr>
      <tr><td><strong>Spoken Language</strong></td><td>${escapeHtml(language)}</td></tr>
      <tr><td><strong>Committed Amount (THB)</strong></td><td>${escapeHtml(amount)}</td></tr>
      <tr><td><strong>Page Language</strong></td><td>${escapeHtml(lang || 'en')}</td></tr>
    </table>
  `;

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Solar Khanom <notifications@arkadya.tech>',
        to: ['hello@arkadya.tech'],
        reply_to: email,
        subject: `New Shareholder Access Request — ${name}`,
        html,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      return new Response(JSON.stringify({ error: 'Email send failed', detail: errText }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Unexpected error', detail: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
