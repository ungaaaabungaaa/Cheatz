export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Full Screen Funky Header */}
      <div className="h-screen flex items-center justify-center text-center px-4 text-gray-600 dark:text-gray-300">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl text-black dark:text-white font-black mb-6">
            We Don&apos;t Spill the <br /> Chai
          </h1>
          <p className="text-xl md:text-2xl  font-medium mb-4">
            Don&apos;t worry, we&apos;re not creepy stalkers! <br />
            We just want to make your study life better.
            <br />
          </p>
          <div className="mt-8">
            <p className="text-lg  animate-bounce">
              ↓ Scroll down to see what we actually do with your data ↓
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Content */}
      <div className="container mx-auto px-4 py-8 max-w-full ">
        <div className="p-8 mb-8">
          <h2 className="text-4xl font-bold  mb-6">
            Privacy Policy (The Not-Boring Version)
          </h2>

          <div className="space-y-6">
            <section>
              <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                1. What We Collect (The Data Haul)
              </h3>
              <p className="leading-relaxed">
                We collect the stuff you&apos;d expect: your email, study
                preferences, exam subjects, and how you interact with our
                predictions. Think of it as your digital study diary that helps
                our AI get smarter. We also use cookies (the digital kind, not
                the tasty ones).
              </p>
            </section>

            <section>
              <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                2. How We Use Your Data (The Good Stuff)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To make our AI predictions more accurate for you</li>
                <li>To personalize your study experience</li>
                <li>To improve our platform and add cool new features</li>
                <li>To send you helpful study reminders (if you want them)</li>
                <li>To make sure our service works smoothly</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                3. What We DON&apos;T Do (The Anti-Creepy List)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  We don&apos;t sell your personal info to sketchy third parties
                </li>
                <li>
                  We don&apos;t stalk your social media (we have better things
                  to do)
                </li>
                <li>
                  We don&apos;t share your study data with your teachers (unless
                  you want us to)
                </li>
                <li>
                  We don&apos;t use your data for anything unrelated to
                  education
                </li>
                <li>
                  We don&apos;t keep your data forever (we&apos;re not digital
                  hoarders)
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                4. AI & Machine Learning (The Smart Stuff)
              </h3>
              <p className="leading-relaxed">
                Our AI learns from your study patterns to make better
                predictions. It&apos;s like having a study buddy who remembers
                everything you&apos;ve ever studied. The more you use our
                platform, the smarter it gets - and the better it helps you and
                other students.
              </p>
            </section>

            <section>
              <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                5. Data Security (The Fortress)
              </h3>
              <p className="leading-relaxed">
                We take security seriously. Your data is encrypted, stored
                securely, and protected like it&apos;s the crown jewels. We use
                industry-standard security measures because your privacy is not
                a joke to us (even though we like to joke about other things).
              </p>
            </section>

            <section>
              <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                6. Your Rights (The Power Moves)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You can see what data we have about you</li>
                <li>
                  You can ask us to delete your data (we&apos;ll miss you
                  though)
                </li>
                <li>You can update your information anytime</li>
                <li>You can opt out of emails and notifications</li>
                <li>
                  You can export your data if you want to take it elsewhere
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                7. Third-Party Services (The Outsiders)
              </h3>
              <p className="leading-relaxed">
                We use some third-party services (like analytics and email
                providers) to make our platform work better. These services have
                their own privacy policies, but we only work with companies we
                trust. We&apos;re picky about our friends.
              </p>
            </section>

            <section>
              <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                8. Changes to This Policy (The Updates)
              </h3>
              <p className="leading-relaxed">
                We might update this privacy policy from time to time. When we
                do, we&apos;ll let you know. We won&apos;t sneak changes in like
                a ninja - we&apos;re more like a friendly neighbor who knocks on
                your door to say hi.
              </p>
            </section>

            <section>
              <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                9. Contact Us (The Human Touch)
              </h3>
              <p className="leading-relaxed">
                Questions about your privacy? Want to exercise your data rights?
                Just want to chat? Reach out to us! We&apos;re real humans who
                care about your privacy and are happy to help.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
