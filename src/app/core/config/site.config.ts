/**
 * Runtime configuration the user is expected to edit.
 *
 * CONTACT_ENDPOINT — where the contact form POSTs. Plug in your own API,
 * a serverless function, or a hosted form service (Formspree, Getform,
 * Web3Forms, Basin, etc.). The form sends a JSON body:
 *   { name, email, phone, company, service, budget, message }
 *
 * Leave it as '' (empty) to keep the original frontend-only behaviour:
 * the form validates and shows a success message without any network call.
 */
export const CONTACT_ENDPOINT = '';

/** Optional extra headers sent with the contact POST (e.g. an API key). */
export const CONTACT_HEADERS: Record<string, string> = {
  'Content-Type': 'application/json',
};
