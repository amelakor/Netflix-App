import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  //Series and Flms
  const { series } = useContent("series");
  const { films } = useContent("films");
  //Slides
  const slides = selectionFilter({ series, films });
  // pass it ot the browse container
  return <BrowseContainer slides={slides} />;
}
