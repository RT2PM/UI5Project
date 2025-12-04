import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view.js";
import listIcon from "@ui5/webcomponents-icons/dist/list.js";
import activateIcon from "@ui5/webcomponents-icons/dist/activate.js";
import lineChartIcon from "@ui5/webcomponents-icons/dist/line-chart.js";
import barChartIcon from "@ui5/webcomponents-icons/dist/horizontal-bar-chart.js";
import { useState } from "react";
import {
  Avatar,
  Card,
  CardHeader,
  Text,
  ShellBar,
  ShellBarItem,
  List,
  StandardListItem,
  CustomListItem,
  ProgressIndicator,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  FlexBoxDirection,
  AnalyticalTable,
  Icon,
} from "@ui5/webcomponents-react";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import reactLogo from "./assets/reactLogo.svg";
import profilePictureExample from "./assets/profilePicture.svg";
import ValueState from "@ui5/webcomponents-base/dist/types/ValueState.js";

const tableData = new Array(500).fill(null).map((_, index) => {
  return {
    name: `name${index}`,
    age: Math.floor(Math.random() * 100),
    friend: {
      name: `friend.Name${index}`,
      age: Math.floor(Math.random() * 100),
    },
  };
});

const tableColumns = [
  {
    Header: "Name",
    accessor: "name", // String-based value accessors!
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Friend Name",
    accessor: "friend.name",
  },
  {
    Header: "Friend Age",
    accessor: "friend.age",
  },
];

const dataset = [
  {
    month: "January",
    data: 65,
  },
  {
    month: "February",
    data: 59,
  },
  {
    month: "March",
    data: 80,
  },
  {
    month: "April",
    data: 81,
  },
  {
    month: "May",
    data: 56,
  },
  {
    month: "June",
    data: 55,
  },
  {
    month: "July",
    data: 40,
  },
];

export function MyApp() {
  const [toggleCharts, setToggleCharts] = useState("lineChart");
  const [loading, setLoading] = useState(false);

  const contentTitle =
    toggleCharts === "lineChart" ? "Line Chart" : "Bar Chart";
  const switchToChart =
    toggleCharts === "lineChart" ? "Bar Chart" : "Line Chart";

  const handleHeaderClick = () => {
    if (toggleCharts === "lineChart") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("barChart");
      }, 2000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("lineChart");
      }, 2000);
    }
  };

  return (
    <div>
      <ShellBar
        logo={<img src={reactLogo} alt="Company Logo" />}
        profile={
          <Avatar>
            <img src={profilePictureExample} alt="User Avatar" />
          </Avatar>
        }
        primaryTitle="My App"
      >
        <ShellBarItem icon={activateIcon} text="Activate" />
      </ShellBar>
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        wrap={FlexBoxWrap.Wrap}
        style={{ padding: "var(--sapContent_Space_M)" }}
      >
        <Card
          header={
            <CardHeader
              titleText="Prices"
              subtitleText={`Click here to switch to ${switchToChart}`}
              interactive
              avatar={
                <Icon
                  name={
                    toggleCharts === "lineChart" ? lineChartIcon : barChartIcon
                  }
                  accessibleName={contentTitle}
                />
              }
              onClick={handleHeaderClick}
            />
          }
          style={{ width: "300px", margin: "var(--sapContent_Margin_Small)" }}
        >
          <Text style={{ padding: "var(--sapContent_Space_S)" }}>
            {contentTitle}
          </Text>
          {toggleCharts === "lineChart" ? (
            <LineChart
              dimensions={[{ accessor: "month" }]}
              measures={[{ accessor: "data", label: "Price" }]}
              dataset={dataset}
              loading={loading}
            />
          ) : (
            <BarChart
              dimensions={[{ accessor: "month" }]}
              measures={[{ accessor: "data", label: "Price" }]}
              dataset={dataset}
              loading={loading}
            />
          )}
        </Card>
        <Card
          header={
            <CardHeader
              titleText="Progress"
              subtitleText="List"
              avatar={<Icon name={listIcon} />}
            />
          }
          style={{ width: "300px", margin: "var(--sapContent_Margin_Small)" }}
        >
          <List>
            <StandardListItem
              additionalText="finished"
              additionalTextState={ValueState.Success}
            >
              Activity 1
            </StandardListItem>
            <StandardListItem
              additionalText="failed"
              additionalTextState={ValueState.Error}
            >
              Activity 2
            </StandardListItem>
            <CustomListItem>
              <FlexBox
                direction={FlexBoxDirection.Column}
                fitContainer
                style={{ paddingBlock: "var(--sapContent_Space_S)" }}
              >
                <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                  <Text style={{ fontSize: "var(--sapFontLargeSize)" }}>
                    Activity 3
                  </Text>
                  <Text style={{ color: "var(--sapCriticalTextColor)" }}>
                    in progress
                  </Text>
                </FlexBox>
                <ProgressIndicator
                  value={89}
                  valueState={ValueState.Success}
                  style={{ marginBlockStart: "0.5rem" }}
                />
              </FlexBox>
            </CustomListItem>
            <CustomListItem>
              <FlexBox
                direction={FlexBoxDirection.Column}
                fitContainer
                style={{ paddingBlock: "var(--sapContent_Space_S)" }}
              >
                <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                  <Text style={{ fontSize: "var(--sapFontLargeSize)" }}>
                    Activity 3
                  </Text>
                  <Text style={{ color: "var(--sapCriticalTextColor)" }}>
                    in progress
                  </Text>
                </FlexBox>
                <ProgressIndicator
                  value={5}
                  valueState={ValueState.Error}
                  style={{ marginBlockStart: "0.5rem" }}
                />
              </FlexBox>
            </CustomListItem>
          </List>
        </Card>
        <Card
          header={
            <CardHeader
              titleText="AnalyticalTable"
              avatar={<Icon name={tableViewIcon} />}
            />
          }
          style={{
            maxWidth: "900px",
            margin: "var(--sapContent_Margin_Small)",
          }}
        >
          <AnalyticalTable
            data={tableData}
            columns={tableColumns}
            visibleRows={5}
          />
        </Card>
      </FlexBox>
    </div>
  );
}