import { useState } from "react";
import { fakeAPIs } from "./utils";  // APIs with categories
import Icon from "../public/icons/icon32.png";
import "./index.css";

const Popup = () => {
  const [api, setApi] = useState(""); // API URL
  const [isFetched, setIsFetched] = useState(false); // Track if API is fetched
  const [copied, setCopied] = useState(false); // Track if copied
  const [category, setCategory] = useState(""); // Selected category

  // Function to fetch a new API based on the selected category
  const handleApiFetch = () => {
    if (category === "") return; // Don't do anything if no category is selected

    const filteredAPIs = fakeAPIs.filter(
      (apiObj) => apiObj.category === category
    );

    if (filteredAPIs.length > 0) {
      // Force fetch a new API every time "Refresh" is clicked
      const randomApi =
        filteredAPIs[Math.floor(Math.random() * filteredAPIs.length)];

      // Set a new API URL for the selected category
      setApi(randomApi.url);
      setIsFetched(true);      // Mark as fetched
      setCopied(false);        // Reset copied status
    } else {
      setApi("No APIs available for the selected category.");
    }
  };

  // Function to copy API to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(api).then(() => {
      setCopied(true); // Update copied status
    });
  };

  return (
    <div className="Api_outer">
      <img src={Icon} alt="Extension Icon" className="Extension_icon" />

      {/* Dropdown for selecting a category */}
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setApi(""); // Clear previous API when category changes
          setIsFetched(false); // Reset fetched status
          setCopied(false);    // Reset copied status
        }}
        className="Category_dropdown"
      >
        <option value="">Select a Category</option>
        {[...new Set(fakeAPIs.map((apiObj) => apiObj.category))].map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Show API and buttons only after a category is selected */}
      {category && (
        <>
          <p className="Api_link">{api || "Click Get to fetch an API."}</p>
          <div>
            {/* Button label toggles between "Get" and "Refresh" */}
            <button
              onClick={handleApiFetch}
              style={{ marginRight: "5px" }}
            >
              {isFetched ? "Refresh" : "Get"}
            </button>

            {/* Copy button shows "Copied" when API is copied */}
            <button onClick={copyToClipboard} disabled={!api}>
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Popup;
