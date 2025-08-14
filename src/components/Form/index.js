import "@patternfly/react-core/dist/styles/base.css";
import { useState } from "react";
import { FormSelect, FormSelectOption, Button } from "@patternfly/react-core";
import Welcome from "@site/src/components/Welcome";
import Welcome2 from "@site/src/components/Welcome2";
import Welcome3 from "@site/src/components/Welcome3";
import About from "@site/src/components/About";
import About2 from "@site/src/components/About2";
import About3 from "@site/src/components/About3";
import Demo from "@site/src/components/Demo";
import Install from "@site/src/components/Install";

export default function Form({ onComponentSelect }) {
  // Separate state for each component type
  const [welcomeSelection, setWelcomeSelection] = useState("none");
  const [aboutSelection, setAboutSelection] = useState("none");
  const [demoSelection, setDemoSelection] = useState("none");
  const [installSelection, setInstallSelection] = useState("none");
  const [showForm, setShowForm] = useState(true);

  const handleWelcomeChange = (_event, value) => {
    setWelcomeSelection(value);
  };

  const handleAboutChange = (_event, value) => {
    setAboutSelection(value);
  };

  const handleDemoChange = (_event, value) => {
    setDemoSelection(value);
  };

  const handleInstallChange = (_event, value) => {
    setInstallSelection(value);
  };

  const handleButtonClick = () => {
    // Check if at least one component is selected
    if (
      welcomeSelection !== "none" ||
      aboutSelection !== "none" ||
      demoSelection !== "none" ||
      installSelection !== "none"
    ) {
      setShowForm(false);
    }
  };

  const handleBackToForm = () => {
    setShowForm(true);
  };

  // Options for each dropdown
  const welcomeOptions = [
    { value: "none", label: "None", disabled: false },
    { value: "welcome1", label: "Welcome 1", disabled: false },
    { value: "welcome2", label: "Welcome 2", disabled: false },
    { value: "welcome3", label: "Welcome 3", disabled: false },
  ];

  const aboutOptions = [
    { value: "none", label: "None", disabled: false },
    { value: "about1", label: "About 1", disabled: false },
    { value: "about2", label: "About 2", disabled: false },
    { value: "about3", label: "About 3", disabled: false },
  ];

  const demoOptions = [
    { value: "none", label: "None", disabled: false },
    { value: "demo", label: "Demo", disabled: false },
  ];

  const installOptions = [
    { value: "none", label: "None", disabled: false },
    { value: "install", label: "Install", disabled: false },
  ];

  // Function to get component by selection value
  const getComponent = (selection) => {
    switch (selection) {
      case "welcome1":
        return Welcome;
      case "welcome2":
        return Welcome2;
      case "welcome3":
        return Welcome3;
      case "about1":
        return About;
      case "about2":
        return About2;
      case "about3":
        return About3;
      case "demo":
        return Demo;
      case "install":
        return Install;
      default:
        return null;
    }
  };

  // Get all selected components
  const selectedComponents = [];
  if (welcomeSelection !== "none")
    selectedComponents.push({
      component: getComponent(welcomeSelection),
      name: welcomeOptions.find((opt) => opt.value === welcomeSelection)?.label,
    });
  if (aboutSelection !== "none")
    selectedComponents.push({
      component: getComponent(aboutSelection),
      name: aboutOptions.find((opt) => opt.value === aboutSelection)?.label,
    });
  if (demoSelection !== "none")
    selectedComponents.push({
      component: getComponent(demoSelection),
      name: demoOptions.find((opt) => opt.value === demoSelection)?.label,
    });
  if (installSelection !== "none")
    selectedComponents.push({
      component: getComponent(installSelection),
      name: installOptions.find((opt) => opt.value === installSelection)?.label,
    });

  // Check if any components are selected
  const hasSelections = selectedComponents.length > 0;

  // If form is hidden, render all selected components at original size
  if (!showForm) {
    return (
      <div>
        <div
          style={{
            padding: "20px",
            textAlign: "center",
          }}
        >
          <Button variant="secondary" onClick={handleBackToForm}>
            ← Back to Component Selection
          </Button>
          <h2 style={{ margin: "10px 0", color: "#333" }}>
            Selected Components ({selectedComponents.length})
          </h2>
        </div>
        {selectedComponents.map((item, index) => {
          const ComponentToRender = item.component;
          console.log(selectedComponents)
          return ComponentToRender ? <ComponentToRender key={index} /> : null;
        })}
      </div>
    );
  }

  // Render the form with separate dropdowns
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2>Component Builder</h2>
        <p>Select components to build your page layout:</p>

        {/* Separate dropdowns in a grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            maxWidth: "800px",
            margin: "20px auto",
          }}
        >
          {/* Welcome Section */}
          <div>
            <h4 style={{ marginBottom: "10px", color: "#666" }}>
              Welcome Section
            </h4>
            <FormSelect
              value={welcomeSelection}
              onChange={handleWelcomeChange}
              aria-label="Welcome Section Select"
            >
              {welcomeOptions.map((option, index) => (
                <FormSelectOption
                  isDisabled={option.disabled}
                  key={index}
                  value={option.value}
                  label={option.label}
                />
              ))}
            </FormSelect>
          </div>

          {/* About Section */}
          <div>
            <h4 style={{ marginBottom: "10px", color: "#666" }}>
              About Section
            </h4>
            <FormSelect
              value={aboutSelection}
              onChange={handleAboutChange}
              aria-label="About Section Select"
            >
              {aboutOptions.map((option, index) => (
                <FormSelectOption
                  isDisabled={option.disabled}
                  key={index}
                  value={option.value}
                  label={option.label}
                />
              ))}
            </FormSelect>
          </div>

          {/* Demo Section */}
          <div>
            <h4 style={{ marginBottom: "10px", color: "#666" }}>
              Demo Section
            </h4>
            <FormSelect
              value={demoSelection}
              onChange={handleDemoChange}
              aria-label="Demo Section Select"
            >
              {demoOptions.map((option, index) => (
                <FormSelectOption
                  isDisabled={option.disabled}
                  key={index}
                  value={option.value}
                  label={option.label}
                />
              ))}
            </FormSelect>
          </div>

          {/* Install Section */}
          <div>
            <h4 style={{ marginBottom: "10px", color: "#666" }}>
              Install Section
            </h4>
            <FormSelect
              value={installSelection}
              onChange={handleInstallChange}
              aria-label="Install Section Select"
            >
              {installOptions.map((option, index) => (
                <FormSelectOption
                  isDisabled={option.disabled}
                  key={index}
                  value={option.value}
                  label={option.label}
                />
              ))}
            </FormSelect>
          </div>
        </div>

        <Button
          variant="primary"
          onClick={handleButtonClick}
          isDisabled={!hasSelections}
          style={{ marginTop: "20px" }}
        >
          Show Selected Components ({selectedComponents.length})
        </Button>
      </div>

      {/* Preview Section - Original size components */}
      {hasSelections && (
        <div
          style={{
            marginTop: "30px",
            border: "2px dashed #ccc",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#666",
              fontSize: "18px",
            }}
          >
            Preview: {selectedComponents.map((item) => item.name).join(" + ")}
          </h3>
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            {selectedComponents.map((item, index) => {
              const ComponentToRender = item.component;
              return ComponentToRender ? (
                <ComponentToRender key={index} />
              ) : null;
            })}
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "10px",
              fontSize: "14px",
              color: "#888",
              fontStyle: "italic",
            }}
          >
            This is a live preview. Click "Show Selected Components" above for
            full page view.
          </div>
        </div>
      )}
    </div>
  );
}
