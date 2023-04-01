import { type GetServerSideProps, type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import { NavBar } from "~/components/NavBar";
import { getServerAuthSession } from "~/server/auth";
import { LoggedUser } from "~/components/LoggedUser";

const Home: NextPage = () => {
  const categories = api.category.getAll.useQuery();
  const { data: sessionData } = useSession();
  if (!sessionData) return null;
  const user = sessionData.user;

  return (
    <>
      <Head>
        <title>Budget</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-screen flex-col items-center justify-center bg-bg">
        <NavBar />
        <LoggedUser user={user} />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerAuthSession(context);
  if (!session) {
    console.log("Ej");
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};

export default Home;
