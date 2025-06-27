const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-sky-400 mb-8 text-center">
          About Clin Technologies
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Headquartered in the Midwest, <span className="text-white font-semibold">Clin Technologies</span> is a specialized AI firm that empowers healthcare providers across the Midwest and beyond to conquer their most pressing operational challenges. We deliver this through a powerful and flexible AI platform that powers both a suite of ready-to-deploy solutions for documentation and compliance, and the creation of fully bespoke engines for enterprise-level transformation.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Our expertise lies in applying cutting-edge <span className="text-sky-300 font-medium">Large Language Models (LLMs)</span> and <span className="text-sky-300 font-medium">machine learning (ML)</span> to solve real-world challenges in healthcare documentation. We partner closely with individual practitioners, clinics, and healthcare organizations, leveraging meticulously gathered real-world data from professionals to build the exceptionally robust and uniquely effective datasets that power these advanced systems.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          This same proven AI framework serves as the foundation for our enterprise partnerships. Whether you need an immediate solution from our product suite or a strategic partner to build a custom engine for challenges like <span className="text-white font-semibold">Utilization Management</span>, we provide the right tool for the job. Our mission is to transform your data into a proprietary asset, enabling data-driven decisions that eliminate administrative friction and allow you to focus on what matters most.
        </p>
      </div>
    </div>
  );
};

export default About;
