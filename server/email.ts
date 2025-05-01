import { Resend } from 'resend';
import { QuoteRequest } from '@shared/schema';

// Initialize Resend with the API key if available
let resend: Resend | null = null;

if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
} else {
  // This warning can be removed if Resend isn't used elsewhere
  // console.warn('RESEND_API_KEY not found, email notifications will not be sent');
}

// These constants might be removable if generateEmailHtml/Text are removed
// export const NOTIFICATIONS_EMAIL = 'info@elitecopilot.sg'; 
// const FROM_EMAIL = 'noreply@elitecopilot.sg'; 

// Removed export async function sendNotificationEmail block
/*
export async function sendNotificationEmail(quoteRequest: QuoteRequest): Promise<boolean> {
  if (!resend) {
    console.warn('Resend service not initialized, notification not sent');
    return false;
  }

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATIONS_EMAIL,
      subject: `New Quote Request from ${quoteRequest.firstName} ${quoteRequest.lastName}`,
      html: generateEmailHtml(quoteRequest),
      text: generateEmailText(quoteRequest),
    });

    if (error) {
      console.error('Resend email error:', error);
      return false;
    }

    console.log(`Email notification sent via Resend for quote request ID: ${quoteRequest.id}, Resend ID: ${data?.id}`);
    return true;
  } catch (error) {
    console.error('Error sending email via Resend:', error);
    return false;
  }
}
*/

// Removed generateEmailHtml and generateEmailText functions as they are likely unused now
/*
function generateEmailHtml(quoteRequest: QuoteRequest): string { ... }
function generateEmailText(quoteRequest: QuoteRequest): string { ... }
*/