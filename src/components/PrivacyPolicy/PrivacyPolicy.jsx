import React from "react";
import { NavBar } from "../MainPage/NavBar";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-28 text-gray-800">
       <NavBar />
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: 22 December 2025</p>

      <div className="space-y-8 text-base leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Who we are</h2>
          <p>
            This website is operated by <strong>AltEnergy Life</strong>. If you
            have any questions about this Privacy Policy, you can contact us at
            <a href="mailto:info@altenergylife.co.uk" className="text-green-700 font-medium"> info@altenergylife.co.uk</a>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. What data we collect</h2>
          <p>When you submit our contact form, we collect:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your phone number (optional)</li>
            <li>Your message</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. How we use your data</h2>
          <p>
            We use your personal data solely to respond to your enquiry and
            communicate with you regarding our services. We do not use your data
            for marketing purposes without your explicit consent.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. How your data is processed</h2>
          <p>
            Form submissions are sent securely using <strong>EmailJS</strong>, a
            third-party email service provider. Your data is transmitted securely
            and is not stored on our website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Data sharing</h2>
          <p>
            We do not sell or share your personal data with third parties, except
            where necessary to process your enquiry (EmailJS).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Data retention</h2>
          <p>
            We retain your personal data only for as long as necessary to respond
            to your enquiry and for reasonable follow-up, after which it is
            securely deleted.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Your rights</h2>
          <p>Under UK data protection laws, you have the right to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Request access to your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle
            your personal data, please contact us at
            <a href="mailto:info@altenergylife.co.uk" className="text-green-700 font-medium"> info@altenergylife.co.uk</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;