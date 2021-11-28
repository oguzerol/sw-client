import React from "react";
import { List, ListInlineItem } from "reactstrap";

type Props = {
  titles: Array<string>;
  row: any;
};
const TabRow = ({ titles, row }: Props) => {
  if (!titles || !row) return null;
  return (
    <tr>
      {titles.map((title: string, index: number) => (
        <th key={index} scope="row" data-testid="table-row">
          {Array.isArray(row[title]) ? (
            <List className="pl-0">
              {row[title].map((item: string, index: number) => (
                <ListInlineItem key={index}>{item}</ListInlineItem>
              ))}
            </List>
          ) : (
            row[title]
          )}
        </th>
      ))}
    </tr>
  );
};

export default TabRow;
