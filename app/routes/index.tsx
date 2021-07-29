import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useRouteData } from "remix";

import stylesUrl from "../styles/index.css";

export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let loader: LoaderFunction = async () => {
  return { message: "Azure Static Web Apps + Remix = Awesome 😎" };
};

export default function Index() {
  let data = useRouteData();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Welcome to Remix on Azure Static Web Apps!</h2>
      <section
        style={{
          display: "flex",
          textAlign: "center",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="/remix.png" style={{ height: 120 }} />
        <img src="/fist-bump.png" style={{ height: 100, margin: "1rem" }} />
        <img src="/azure.svg" style={{ height: 120 }} />
      </section>
      <p>
        <a href="https://docs.remix.run">Check out the Remix docs</a> to get
        started.
      </p>
      <p>
        If you want to deploy your Remix site on Azure Static Web Apps{" "}
        <a href="https://github.com/danielgary/remix-azure-template">
          check out this repo
        </a>
        .
      </p>

      <p>Message from the loader: {data.message}</p>
    </div>
  );
}
