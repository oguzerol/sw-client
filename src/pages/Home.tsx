import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "reactstrap";

import { RootState } from "../core/redux/reducers";
import { fetchResources } from "../core/redux/actions/resources";
import useLocalStorage from "../core/hooks/useLocalStorage";
import { fetchRoots } from "../core/redux/actions/roots";

import TabHeader from "../components/TabHeader";
import TabContent from "../components/TabContent";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>("");
  const [tab, setTab] = useLocalStorage<string>("tab", "");
  const roots = useSelector((state: RootState) => state.roots);
  const resources = useSelector((state: RootState) => state.resources);

  const {
    data: rootsData,
    isLoading: isRootsLoading,
    error: rootsError,
  } = roots;

  const {
    data: resourcesData,
    isLoading: isResourcesLoading,
    error: resourcesError,
  } = resources;

  useEffect(() => {
    dispatch(fetchRoots());
  }, [dispatch]);

  const handleTabChange = (tabName: string) => {
    setTab(tabName);
    dispatch(fetchResources(rootsData[tabName]));
  };

  const handlePageChange = (url: string) => {
    dispatch(fetchResources(url));
  };

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const titles =
    resourcesData &&
    resourcesData.results &&
    resourcesData.results.length > 0 &&
    Object.keys(resourcesData.results[0]);

  const rows =
    resourcesData &&
    resourcesData.results &&
    resourcesData.results.length > 0 &&
    resourcesData.results;

  const prevPageLink = resourcesData && resourcesData.previous;
  const nextPageLink = resourcesData && resourcesData.next;

  // does not support arrays
  const filteredRows = !searchValue
    ? rows
    : rows.filter(
        (row: any) =>
          Object.values(row).filter((item: any) => {
            if (typeof item !== "string") return false;
            return item
              .trim()
              .toLowerCase()
              .includes(searchValue.toLowerCase().trim());
          }).length
      );

  const keys = Object.keys(rootsData || {});

  if (isRootsLoading) return <Loading />;
  if (rootsError) return <div>Something went wrong.</div>;

  return (
    <>
      <h1>{"My little Star Wars app 👾"}</h1>
      <div className="mt-3">
        <Input
          type="text"
          value={searchValue}
          placeholder="Search"
          onChange={(e) => handleSearchValueChange(e)}
        />
        <TabHeader keys={keys} setTab={handleTabChange} tab={tab} />
        <TabContent
          titles={titles}
          rows={filteredRows}
          keys={keys}
          tab={tab}
          isLoading={isResourcesLoading}
          error={resourcesError}
        />
        <Pagination
          prev={prevPageLink}
          next={nextPageLink}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Home;
