import { Seo } from "@molecules";
import { BasicLayout } from "@organisms";

const Homepage = (): JSX.Element => {
  return (
    <>
      <BasicLayout>
        <Seo />
        <main></main>
      </BasicLayout>
    </>
  );
};

export default Homepage;
