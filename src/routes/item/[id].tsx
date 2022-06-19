import { useRouteData, RouteDataFunc } from "solid-app-router";
import { Component, Show, createResource } from "solid-js";
import fetchAPI from "~/lib/api";

export const routeData: RouteDataFunc = (props) => {
  const [story] = createResource(() => `${props.params.id}`, fetchAPI);
  return story;
};

const Item: Component = () => {
  const story = useRouteData<() => any>();
  return (
    <Show when={story()}>
    </Show>
  );
};

export default Item;
