import { useRouteData, RouteDataFunc } from "solid-app-router";
import { Component, createResource } from "solid-js";
import fetchAPI from "~/lib/api";

export const routeData: RouteDataFunc = ({ location, params }) => {
  const page = () => +location.query.page || 1;
  const type = () => params.stories || "top";

  const [stories] = createResource(
    () => '',
    fetchAPI
  );

  return { type, stories, page };
};

const Items: Component = () => {
  const { } = useRouteData();
  return <div />;
};

export default Items;
