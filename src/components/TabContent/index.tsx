import React from "react";
import { TabContent as TabContentWrapper, TabPane, Table } from "reactstrap";
import sentenceCase from "sentence-case";

import Loading from "../Loading";
import TabRow from "../TabRow";

import "./Style.scss";

type Props = {
  keys: Array<string>;
  tab: string;
  isLoading: boolean;
  error: any;
  rows: any;
  titles: any;
};

const TabContent = ({ keys, tab, rows, titles, isLoading, error }: Props) => {
  if (isLoading) return <Loading />;
  if (error) return <div>An error occured while getting resources.</div>;
  if (rows.length === 0)
    return <div className="nothing-found">Nothing found</div>;
  return (
    <TabContentWrapper activeTab={tab}>
      {keys.map((k) => (
        <TabPane key={k} tabId={k}>
          <Table bordered responsive striped className="basic-table">
            {titles && (
              <thead>
                <tr>
                  {titles.map((title: string, index: number) => (
                    <th key={index}>{sentenceCase(title)}</th>
                  ))}
                </tr>
              </thead>
            )}
            {rows.length > 0 && (
              <tbody>
                {rows.map((row: any, index: number) => (
                  <TabRow titles={titles} row={row} key={index} />
                ))}
              </tbody>
            )}
          </Table>
        </TabPane>
      ))}
    </TabContentWrapper>
  );
};

export default TabContent;
