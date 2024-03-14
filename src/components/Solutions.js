import React from "react";

/*
const SolutionCard = ({ title, description }) => (
  <div className="solution-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);
*/

const SolutionCard = ({ title, description }) => (
  <div className="solution-card">
    <div className="card-content">
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const Solutions = () => {
  const solutions = [
    {
      id: "automated-procurement",
      title: "Automated Procurement Processes",
      description:
        "Streamline your purchasing tasks with our advanced automation tools.",
    },
    // Add more solution objects as needed
    {
      id: "scalability",
      title: "Scalability",
      description: "Grow your business confidently with our scalable platform.",
    },
  ];

  return (
    <div className="solution-app">
      <header>
        <h1>Debuy</h1>
        <p>Transforming Procurement with Autonomous Solutions</p>
      </header>

      <section className="solution">
        <h2>Solutions We Offer</h2>
        {solutions.map((solution) => (
          <SolutionCard
            key={solution.id}
            title={solution.title}
            description={solution.description}
          />
        ))}
      </section>
    </div>
  );
};

export default Solutions;
