import Container from "@/components/containers/container";
import Navbar from "@/components/navigation/navbar";

function CategoryHeadphones() {
	return <main>
    <Container
      parentClassName="bg-[#000]"
      className="flex items-center"
    >
      <Navbar />
      <h1 className="h2 md:h1 text-white my-12 md:my-20">Headphones</h1>
    </Container>
  </main>;
}

export default CategoryHeadphones;
