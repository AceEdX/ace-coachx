import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCard from "./CourseCard";
import { coursesData } from "@/data/courseData";

const categories = [
  "All Courses",
  "AI & Technology",
  "Pedagogy",
  "Wellbeing",
  "Digital Teaching",
];

const CourseCatalog = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Ace Coach X Curriculum
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Micro-learning modules designed for zero dropouts — 5-10 minute lessons with practical classroom applications
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coursesData
                  .filter((course) => category === "All Courses" || course.category === category)
                  .map((course) => (
                    <CourseCard 
                      key={course.id} 
                      id={course.id}
                      title={course.title}
                      description={course.description}
                      category={course.category}
                      duration={course.duration}
                      students={course.students}
                      rating={course.rating}
                      aiPowered={course.aiPowered}
                    />
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
