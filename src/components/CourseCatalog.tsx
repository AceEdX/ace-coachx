import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Digital Pedagogy Fundamentals",
    description: "Master the art of teaching in the digital age with AI-assisted lesson planning and virtual classroom management.",
    category: "Digital Teaching",
    duration: "8 weeks",
    students: 2453,
    rating: 4.9,
    aiPowered: true,
  },
  {
    title: "Innovative Assessment Strategies",
    description: "Design effective assessments that measure 21st-century skills with AI-powered analytics and feedback systems.",
    category: "Assessment",
    duration: "6 weeks",
    students: 1876,
    rating: 4.8,
    aiPowered: true,
  },
  {
    title: "Classroom Management Excellence",
    description: "Build positive learning environments using evidence-based strategies and behavior management techniques.",
    category: "Management",
    duration: "5 weeks",
    students: 3201,
    rating: 4.7,
    aiPowered: false,
  },
  {
    title: "Project-Based Learning Design",
    description: "Create engaging, real-world projects that develop critical thinking and collaboration skills.",
    category: "Curriculum",
    duration: "7 weeks",
    students: 1654,
    rating: 4.9,
    aiPowered: true,
  },
  {
    title: "Educational Technology Integration",
    description: "Seamlessly integrate EdTech tools to enhance learning outcomes and student engagement.",
    category: "Technology",
    duration: "6 weeks",
    students: 2987,
    rating: 4.8,
    aiPowered: true,
  },
  {
    title: "Social-Emotional Learning",
    description: "Foster emotional intelligence and well-being in your classroom with proven SEL frameworks.",
    category: "Wellbeing",
    duration: "5 weeks",
    students: 2134,
    rating: 4.9,
    aiPowered: false,
  },
];

const categories = [
  "All Courses",
  "Digital Teaching",
  "Assessment",
  "Management",
  "Curriculum",
  "Technology",
  "Wellbeing",
];

const CourseCatalog = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Our Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive training programs designed for modern educators
          </p>
        </div>

        <Tabs defaultValue="All Courses" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 h-auto bg-muted/50 p-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses
                  .filter((course) => category === "All Courses" || course.category === category)
                  .map((course, index) => (
                    <CourseCard key={index} {...course} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CourseCatalog;