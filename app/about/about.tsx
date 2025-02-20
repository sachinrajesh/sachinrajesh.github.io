'use client';

export default function About() {
  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="space-y-6">
        <p className="text-gray-700 dark:text-gray-300">
          A creative-minded coding enthusiast, intrigued by the efficiency brought into our 
          lives through programs. I build new, take initiative and apply it to the 
          day-to-day problems that came across me. Always keen to learn new things, 
          currently researching advancements in quantum computing and artificial 
          intelligence.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Java, SpringBoot</li>
              <li>JS, React, Angular</li>
              <li>Python, Django, Flutter</li>
              <li>Docker, Kubernetes</li>
              <li>Kafka, Redis</li>
              <li>Black Duck</li>
              <li>AWS, Azure</li>
              <li>Git, Azure DevOps, Jira</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">M.Tech in Building Technology and Construction Management</h3>
                <p className="text-gray-600 dark:text-gray-400">Indian Institute of Technology Madras [CGPA: 9.14]</p>
                <p className="text-sm text-gray-500">JUL 2017 - MAY 2019</p>
              </div>
              <div>
                <h3 className="font-medium">Bachelor of Architecture</h3>
                <p className="text-gray-600 dark:text-gray-400">National Institute of Technology Calicut [CGPA: 7.03 | GATE: AIR 10]</p>
                <p className="text-sm text-gray-500">JUL 2012 - MAY 2017</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}    