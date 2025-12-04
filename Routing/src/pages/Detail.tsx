import {
    Title,
    Text,
    Card,
    CardHeader,
    FlexBox,
    FlexBoxDirection,
    FlexBoxJustifyContent,
    Button
} from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";

export function Detail() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // Вернуться на предыдущую страницу
    };

    return (
        <div style={{
            paddingTop: "70px",
            padding: "20px",
            minHeight: "100vh"
        }}>
            <FlexBox
                direction={FlexBoxDirection.Column}
                justifyContent={FlexBoxJustifyContent.Center}
                style={{ maxWidth: "800px", margin: "0 auto" }}
            >
                {/* Кнопка "Назад" */}
                <Button
                    onClick={handleBackClick}
                    style={{ marginBottom: "20px", alignSelf: "flex-start" }}
                    icon="nav-back"
                    design="Transparent"
                >
                    Back to Home
                </Button>

                <Title level="H1">Detail Page</Title>
                <Text style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
                    This is a separate page accessible via routing.
                </Text>

                <Card
                    header={<CardHeader titleText="Page Information" />}
                    style={{ marginTop: "20px" }}
                >
                    <div style={{ padding: "20px" }}>
                        <Text style={{ lineHeight: "1.6" }}>
                            This page demonstrates React Router integration with UI5 Web Components.
                            <br /><br />
                            You navigated here from the main dashboard using client-side routing.
                            <br /><br />
                            Click on the "Progress" card in the Home page to navigate here.
                            <br /><br />
                            URL: /detail
                        </Text>
                    </div>
                </Card>
            </FlexBox>
        </div>
    );
}