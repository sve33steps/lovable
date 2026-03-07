import TextPage from '../layouts/TextPage'

/**
 * Privacy Policy page — fill in the content below.
 * Use <h2> for sections, <p> for paragraphs, <ul>/<ol> for lists.
 * All content is automatically constrained to 75 characters per line for legibility.
 */
export default function PrivacyPolicy() {
  return (
    <TextPage>
      <div className="prose">
        <h1>Privacy Policy</h1>
        <span className="text-meta">Last updated: March 2026</span>

        <p>
          [Replace this paragraph with your introduction. Explain who you are,
          what data you collect, and the purpose of this policy.]
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          [Describe the types of personal information you collect — e.g. name,
          email address, payment information, usage data.]
        </p>
        <ul>
          <li>[Data type 1]</li>
          <li>[Data type 2]</li>
          <li>[Data type 3]</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>
          [Explain how you use the collected data — e.g. to deliver the course,
          send newsletters, process payments.]
        </p>

        <h2>3. Data Storage and Security</h2>
        <p>
          [Describe where data is stored, for how long, and what security
          measures are in place.]
        </p>

        <h2>4. Third-Party Services</h2>
        <p>
          [List any third-party services that receive user data — e.g. Stripe
          for payments, Kit for email, Google Analytics.]
        </p>

        <h2>5. Your Rights</h2>
        <p>
          [Describe the rights users have — e.g. to access, correct, or delete
          their data, and how to exercise those rights.]
        </p>

        <h2>6. Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, you can reach us
          at <a href="mailto:sve@33steps.com">sve@33steps.com</a>.
        </p>
      </div>
    </TextPage>
  )
}
