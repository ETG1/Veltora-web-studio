import { redirect } from 'next/navigation'

/**
 * /contact — redirects to the Project Transmission form on the homepage.
 * When a dedicated contact page is built, replace this redirect with the page content.
 */
export default function ContactPage() {
  redirect('/#contact')
}
