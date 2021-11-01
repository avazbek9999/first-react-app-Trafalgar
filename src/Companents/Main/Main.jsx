import Healthcare from "../Healthcare/Healthcare"
import Services from "../Services/Services";
import Providers from "../HealthcareProviders/HealthcareProviders";
import Download from "../Download/Download";
import Coctumers from "../Coctumers/Coctumers";
import Article from "../LatesArticle/LatesArticle";

function Main() {
  return (
    <>
      <Healthcare />
      <Services />
      <Providers />
      <Download />
      <Coctumers />
      <Article/>
      
    </>
  )
}

export default Main;