export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Full Screen Funky Header */}
      <div className="h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            WTF @RE YOU DO!NG HERE?
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-600 font-medium mb-4">
            Reading terms and conditions? <br /> You&apos;re either really bored or
            really responsible.
            <br />
          </p>
          <div className="mt-8">
            <p className="text-lg text-gray-400 dark:text-gray-500 animate-bounce">
              ↓ Scroll down to read the actual terms ↓
            </p>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="container mx-auto px-4 py-8 max-w-full text-gray-800 dark:text-gray-400">
        <div className="p-8 mb-8">
          <h2 className="text-4xl font-bold  mb-6">
            Terms of Service & Conditions
          </h2>

          <div className="space-y-6 ">
            <section>
              <h3 className="text-xl lg:text-2xl font-semibold  mb-3">
                1. What We Do (The Cool Stuff)
              </h3>
              <p className="leading-relaxed">
                Welcome to our exam preparation platform! We use machine
                learning to help students predict which questions might appear
                on their exams. Think of us as your AI-powered study buddy who&apos;s
                really good at guessing what teachers might ask.
              </p>
            </section>

            <section>
              <h3 className="text-xl lg:text-2xlfont-semibold  mb-3">
                2. The AI Magic (Machine Learning)
              </h3>
              <p className="leading-relaxed">
                Our platform uses artificial intelligence and machine learning
                algorithms to analyze patterns in exam questions, past papers,
                and educational content. While we&apos;re pretty smart, we&apos;re not
                psychic - our predictions are educated guesses based on data
                analysis, not crystal ball readings.
              </p>
            </section>

            <section>
              <h3 className="text-xl lg:text-2xl font-semibold  mb-3">
                3. What You Promise (The Serious Part)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  You&apos;ll use our platform for legitimate study purposes only
                </li>
                <li>You won&apos;t try to hack, cheat, or break our systems</li>
                <li>
                  You&apos;ll provide accurate information when using our services
                </li>
                <li>You won&apos;t share your account with others</li>
                <li>You understand that our predictions are not guaranteed</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl lg:text-2xl font-semibold  mb-3">
                4. What We Promise (Our Commitments)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We&apos;ll do our best to provide accurate predictions</li>
                <li>We&apos;ll protect your personal information</li>
                <li>We&apos;ll keep improving our AI algorithms</li>
                <li>We&apos;ll be transparent about how our system works</li>
                <li>We&apos;ll provide reliable and secure service</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl lg:text-2xl font-semibold  mb-3">
                5. The Fine Print (Legal Stuff)
              </h3>
              <p className="leading-relaxed">
                By using our platform, you agree to these terms. We reserve the
                right to modify these terms at any time. Our predictions are
                provided &quot;as is&quot; without any warranties. We&apos;re not responsible
                for your exam results - that&apos;s on you and your studying!
              </p>
            </section>

            <section>
              <h3 className="text-xl lg:text-2xl font-semibold  mb-3">
                6. Privacy & Data
              </h3>
              <p className="leading-relaxed">
                We collect and process data to improve our predictions and
                provide better service. Your study data helps train our AI
                models. We&apos;ll never sell your personal information to third
                parties. Check our Privacy Policy for the full details.
              </p>
            </section>

            <section>
              <h3 className="text-xl lg:text-2xl font-semibold  mb-3">
                7. Contact Us
              </h3>
              <p className="leading-relaxed">
                Questions about these terms? Found a bug in our predictions?
                Want to tell us how awesome we are? Reach out to us - we&apos;d love
                to hear from you!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
