"use client";

const ProjectsSection = () => {
  const projectsData = [
    {
      imageUrl: "/images/project4.jpg", // Replace with your image URLs
      projectName: "Furniture sets",
    },
    {
      imageUrl: "/images/project3.jpg",
      projectName: "Mandir",
    },
    {
      imageUrl: "/images/project2.jpg",
      projectName: "Furnished Living Rooms",
    },
    {
      imageUrl: "/images/project1.jpg",
      projectName: "Kitchens",
    },
  ];
  return (
    <section
      id="projects"
      className="bg-white px-6 py-12 sm:px-8 md:px-12 lg:px-20"
    >
      <div className="container mx-auto">
        {/* Left-align the heading */}
        <h2 className="mb-8 text-2xl text-black sm:text-left sm:text-3xl md:text-center md:text-4xl">
          Our Projects
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg bg-gray-200 shadow-lg"
            >
              <img
                src={project.imageUrl}
                alt={project.projectName}
                className="size-full object-cover"
                style={{ height: "250px" }}
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2 text-center text-sm text-white">
                {project.projectName}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-8 flex justify-center">
          <button className="rounded-lg bg-[#758F78] px-6 py-3 text-white transition-all duration-300 hover:bg-[#5d7360]">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
