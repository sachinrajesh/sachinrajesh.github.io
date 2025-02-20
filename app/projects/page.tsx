import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Car part recognition using computer vision"
          description="Built and presented POC of an application that could recognize parts of the car using a smartphone camera. Developed a workflow and submitted a proposal for training the computer vision models using synthetic data i.e. 3D car models."
        />
        
        <ProjectCard
          title="3D viewer and simulator for building construction models"
          description="Built and integrated a 3D simulator for Building Information Models to a web application. The viewer could load models as large as 1GB within hardware constraints using Web Assembly. The 3D model was used to run simulations to monitor real-time construction. This use case was used to simulate pandemic related to the return of human resources during the COVID-19 period."
        />
      </div>
    </section>
  );
} 