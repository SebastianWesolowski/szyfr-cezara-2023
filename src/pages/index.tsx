import { Seo } from "@molecules";
import { BasicLayout } from "@organisms";

const Homepage = (): JSX.Element => {
  return (
    <>
      <BasicLayout>
        <Seo />
        <main>
          <h1>Szyfr</h1>
        </main>
      </BasicLayout>
    </>
  );
};

export default Homepage;
