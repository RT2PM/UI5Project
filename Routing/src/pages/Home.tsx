import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view.js";
import listIcon from "@ui5/webcomponents-icons/dist/list.js";
import lineChartIcon from "@ui5/webcomponents-icons/dist/line-chart.js";
import barChartIcon from "@ui5/webcomponents-icons/dist/horizontal-bar-chart.js";
import { useState } from "react";
import {
    Card,
    CardHeader,
    Text,
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
import ValueState from "@ui5/webcomponents-base/dist/types/ValueState.js";
import { useNavigate } from "react-router-dom";
import { MyCustomElement } from "../MyCustomElement";
import '@sap-ui/common-css/dist/sap-content-paddings.css';
import '@sap-ui/common-css/dist/sap-container-type.css';

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
        accessor: "name",
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

export function Home() {
    const navigate = useNavigate();
    const [toggleCharts, setToggleCharts] = useState("lineChart");
    const [loading, setLoading] = useState(false);

    const handleProgressHeaderClick = () => {
        navigate("/detail");
    };

    const contentTitle = toggleCharts === "lineChart" ? "Line Chart" : "Bar Chart";
    const switchToChart = toggleCharts === "lineChart" ? "Bar Chart" : "Line Chart";

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
        <div className="sap-container-type-inline-size">
            <FlexBox
                justifyContent={FlexBoxJustifyContent.Center}
                wrap={FlexBoxWrap.Wrap}
                className="sap-content-paddings-container"
                style={{ paddingTop: "70px" }}
            >
                <MyCustomElement />

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
                            interactive
                            onClick={handleProgressHeaderClick}
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