import WorkItem from "./components/WorkItem";

export default function Works() { 
  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Work Experience</h1>
      <div className="space-y-8">
        <WorkItem 
          company="Mercedes Benz Research & Development, Bengaluru"
          role="Full Stack Developer"
          period="AUG 2022 - Present"
          description="Developed internal applications for teams including the Digital Twin team and compliance team. Currently working as SpringBoot developer and security champion for the Mercedes Store team's application system (NGOS)."
        />
        
        <WorkItem 
          company="Bentley Systems, Chennai"
          role="Full Stack Developer"
          period="MAY 2021 - AUG 2022"
          description="Joined as part of the acquisition of the previous company (Nadhi). My main responsibility was to upgrade 3D viewer to the iTwin™ Cloud and continue technical support for clients using the application."
        />
        
        <WorkItem 
          company="Nadhi Information Technologies, Chennai"
          role="Associate Software Developer"
          period="JUN 2019 - APR 2021"
          description="Built and integrated a 3D viewer into an existing legacy construction management web tool from scratch. The project was started while interning with the company while pursuing my M.Tech degree. Deployed the application successfully for multiple large-scale construction projects for clients like L&T Constructions and Delhi Metro Rail Corporation."
        />
      </div>
    </section>
  );
} 