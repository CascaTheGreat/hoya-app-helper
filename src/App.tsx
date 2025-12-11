function App() {
  const handleRedirect = () => {
    // check if the user agent is an ios device
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      // Redirect to the iOS App Store
      window.location.href =
        "https://apps.apple.com/us/app/the-hoya/id6755940250";
    } else {
      // Redirect to the Hoya website
      window.location.href = "https://thehoya.com/";
    }
  };

  handleRedirect();

  return (
    <>
      <p> Please enable JavaScript.</p>
    </>
  );
}

export default App;
